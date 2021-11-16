import { Component, OnDestroy, OnInit } from '@angular/core'
import { FormBuilder, FormGroup } from '@angular/forms'
import { ActivatedRoute } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Food } from 'src/app/core/model/food'
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

  public editMode!: boolean

  constructor(
    private fb: FormBuilder,
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
  }

  private setEditModeAndLoadFoodData(): void {
    this.foodId = +this.route.snapshot.paramMap.get('foodId')!
    this.foodService.getFood(this.foodId).subscribe((res: Food) => {
      this.food = res
      this.initializeForm(this.food)
    })
  }

  private initializeForm(food: Food): void {
    // TODO: patch form value using food$ from service
    // - https://angular.io/api/forms/FormGroup#patchValue
  }

  public submitForm(): void {
    // TODO: submit form to server
    // if editmode, update data on server
    // if not editmode, create data on server
  }

  public resetForm(): void {
    // TODO: reset form to initial state
    // - https://angular.io/api/forms/FormGroup#reset
    // if editmode, load data from server
  }

  public ngOnDestroy(): void {
    this.resetForm()
  }
}
