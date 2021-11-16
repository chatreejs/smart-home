import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message'
import { NzTableQueryParams } from 'ng-zorro-antd/table'
import { Food, FoodStatus } from 'src/app/core/model/food'
import { Pagination } from 'src/app/core/model/pagination'
import { FoodsService } from '../foods.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  public today: Date
  public checked: boolean
  public indeterminate: boolean
  public foods: Food[] = []
  public loading: boolean = false

  public pageIndex: number = 1
  public pageSize: number = 10
  public total: number = 1

  private listOfCurrentPageData: ReadonlyArray<Food> = []
  public setOfCheckedId: Set<number> = new Set<number>()

  public get foodStatus(): typeof FoodStatus {
    return FoodStatus
  }

  public constructor(private foodService: FoodsService, private nzMessageService: NzMessageService) {
    this.today = new Date()
    this.today.setHours(23, 59, 59, 999)
    this.checked = false
    this.indeterminate = false
  }

  public ngOnInit(): void {}

  private loadFoodData(): void {
    this.loading = true
    this.foodService.getFoods(this.pageIndex, this.pageSize).subscribe(
      (res: Pagination<Food>) => {
        this.loading = false
        this.foods = res.items
        this.total = res.meta.totalItems
      },
      (err: HttpErrorResponse) => {
        this.loading = false
        this.foods = []
        this.nzMessageService.error(`เกิดข้อผิดพลาดที่เซิร์ฟเวอร์ (Code: ${err.status})`)
      }
    )
  }

  public onQueryParamsChange(params: NzTableQueryParams): void {
    this.pageIndex = params.pageIndex
    this.pageSize = params.pageSize
    this.loadFoodData()
  }

  public updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id)
    } else {
      this.setOfCheckedId.delete(id)
    }
  }

  public onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked)
    this.refreshCheckedStatus()
  }

  public onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach((item) => this.updateCheckedSet(item.id, value))
    this.refreshCheckedStatus()
  }

  public onCurrentPageDataChange($event: ReadonlyArray<Food>): void {
    this.listOfCurrentPageData = $event
    this.refreshCheckedStatus()
  }

  public refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) => this.setOfCheckedId.has(item.id))
    this.indeterminate = this.listOfCurrentPageData.some((item) => this.setOfCheckedId.has(item.id)) && !this.checked
  }

  public onConfirmDelete(): void {
    this.nzMessageService.success('ลบรายการอาหารเรียบร้อยแล้ว')
  }

  public ngOnDestroy(): void {
    this.foods = []
    this.listOfCurrentPageData = []
  }
}
