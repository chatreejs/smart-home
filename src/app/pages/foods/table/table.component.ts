import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Food } from 'src/app/core/model/food'
import { FoodsService } from 'src/app/core/services/foods.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public today: Date
  public deleteConfirmTitle: string
  public checked: boolean
  public indeterminate: boolean

  public listOfFoodData: Food[] = []
  private listOfCurrentPageData: ReadonlyArray<Food> = []
  public setOfCheckedId: Set<number> = new Set<number>()

  public constructor(private foodService: FoodsService, private nzMessageService: NzMessageService) {
    this.today = new Date()
    this.today.setHours(23, 59, 59, 999)
    this.checked = false
    this.indeterminate = false
    this.deleteConfirmTitle = ''
  }

  public ngOnInit(): void {
    // this.foodService.getFoods().subscribe((response) => {
    //   console.log(response)
    // })

    this.listOfFoodData = [
      {
        id: 1,
        name: 'ปลากระป๋อง ปลากระป๋อง โรซ่า',
        quantity: 2,
        buyDate: new Date('2021-04-01'),
        expireDate: new Date('2021-05-27'),
      },
      {
        id: 2,
        name: 'ปาท่องโก๋',
        quantity: 2,
        buyDate: new Date('2021-04-01'),
        expireDate: new Date('2021-05-28'),
      },
      {
        id: 3,
        name: 'ปาปีก้า',
        quantity: 2,
        buyDate: new Date('2021-04-01'),
        expireDate: new Date('2021-07-29'),
      },
    ]
  }

  public updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id)
    } else {
      this.setOfCheckedId.delete(id)
    }
    this.deleteConfirmTitle = `คุณต้องการลบรายการอาหารจำนวน ${this.setOfCheckedId.size} รายการใช่ไหม?`
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
