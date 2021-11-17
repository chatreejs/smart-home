import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Food, FoodStatus } from 'src/app/core/model/food'
import { DateOverlap } from 'src/app/core/validators/date-overlap-validator'
import { FoodsService } from '../foods.service'

@Component({
  selector: 'app-foods-detail',
  templateUrl: './foods-detail.component.html',
  styleUrls: ['./foods-detail.component.scss'],
})
export class FoodsDetailComponent implements OnInit, OnDestroy {
  public foodForm!: FormGroup
  public foodId?: number
  public food?: Food

  public editMode: boolean = false

  public get foodStatus(): typeof FoodStatus {
    return FoodStatus
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private foodService: FoodsService,
    private message: NzMessageService
  ) {}

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('foodId')) {
      this.editMode = true
      this.setEditModeAndLoadFoodData()
    } else {
      this.editMode = false
    }
    this.foodForm = this.fb.group(
      {
        name: ['', Validators.required],
        quantity: [0, Validators.compose([Validators.required, Validators.min(0)])],
        unit: ['', Validators.required],
        buyDate: [new Date(), Validators.required],
        expireDate: [null, Validators.required],
      },
      {
        validators: DateOverlap('buyDate', 'expireDate'),
      }
    )
  }

  private setEditModeAndLoadFoodData(): void {
    this.foodId = +this.route.snapshot.paramMap.get('foodId')!
    this.foodService.getFood(this.foodId).subscribe((res: Food) => {
      this.food = res
      this.initializeForm(this.food)
    })
  }

  private initializeForm(food: Food): void {
    this.foodForm.patchValue({
      name: food.name,
      quantity: food.quantity,
      unit: food.unit,
      buyDate: food.buyDate,
      expireDate: food.expireDate,
    })
  }

  public submitForm(): void {
    for (const i in this.foodForm.controls) {
      this.foodForm.controls[i].markAsDirty()
      this.foodForm.controls[i].updateValueAndValidity()
    }
    if (!this.foodForm.valid) {
      this.message.error('กรุณากรอกข้อมูลให้ครบถ้วน')
    } else {
      if (this.editMode) {
        this.foodService.updateFood(this.foodId!, this.foodForm.value).subscribe(
          () => {
            this.message.success('แก้ไขข้อมูลอาหารเรียบร้อย')
            setTimeout(() => {
              this.router.navigate(['/foods'])
            }, 1000)
          },
          (err: HttpErrorResponse) => {
            this.message.error(`ไม่สามารถบันทึกได้ (Code: ${err.status})`, { nzDuration: 5000 })
          }
        )
      } else {
        this.foodService.createFood(this.foodForm.value).subscribe(
          () => {
            this.message.success('สร้างรายการอาหารใหม่เรียบร้อยแล้ว')
            setTimeout(() => {
              this.router.navigate(['/foods'])
            }, 1000)
          },
          (err: HttpErrorResponse) => {
            this.message.error(`ไม่สามารถบันทึกได้ (Code: ${err.status})`, { nzDuration: 5000 })
          }
        )
      }
    }
  }

  public resetForm(): void {
    this.foodForm.patchValue({
      name: '',
      quantity: 0,
      unit: '',
      buyDate: new Date(),
      expireDate: null,
    })
    for (const i in this.foodForm.controls) {
      this.foodForm.controls[i].markAsPristine()
      this.foodForm.controls[i].updateValueAndValidity()
    }
    if (this.editMode) {
      this.setEditModeAndLoadFoodData()
    }
  }

  public getExpirationStatus(): FoodStatus {
    if (this.foodForm.value.expireDate) {
      const now = new Date()
      const expireDate = new Date(this.foodForm.value.expireDate)
      const dateDiff = expireDate.getTime() - now.getTime()
      if (dateDiff < 0) {
        return FoodStatus.Expired
      } else if (dateDiff < 1000 * 60 * 60 * 24 * 3) {
        return FoodStatus.Soon
      }
    }
    return FoodStatus.Active
  }

  public ngOnDestroy(): void {
    this.resetForm()
    this.food = undefined
  }
}
