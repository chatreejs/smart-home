import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Observable } from 'rxjs'
import { Food, FoodStatus } from 'src/app/core/model/food'
import { Pagination } from 'src/app/core/model/pagination'
import { FoodsService } from '../foods.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public today: Date
  public checked: boolean
  public indeterminate: boolean
  public foods: Food[] = []

  public pageIndex: number = 1
  public pageSize: number = 10
  public total: number = 0

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

  public ngOnInit(): void {
    this.loadFoodData()
  }

  private loadFoodData(): void {
    this.foodService.getFoods(this.pageIndex, this.pageSize).subscribe((res) => {
      this.foods = res.items
      this.total = res.meta.totalItems
    })
  }

  public onPageIndexChange(pageIndex: number): void {
    this.pageIndex = pageIndex
    this.loadFoodData()
  }

  public onPageSizeChange(pageSize: number): void {
    this.pageSize = pageSize
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
}
