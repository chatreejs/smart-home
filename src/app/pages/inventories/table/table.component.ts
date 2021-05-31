import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Inventory, InventoryStatus } from 'src/app/core/model/inventory'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  public checked: boolean
  public indeterminate: boolean

  public listOfInventoryData: Inventory[] = []
  private listOfCurrentPageData: ReadonlyArray<Inventory> = []
  public setOfCheckedId: Set<number> = new Set<number>()

  public get inventoryStatus(): typeof InventoryStatus {
    return InventoryStatus
  }

  public constructor(private nzMessageService: NzMessageService) {
    this.checked = false
    this.indeterminate = false
  }

  public ngOnInit(): void {
    this.listOfInventoryData = [
      {
        id: 1,
        name: 'น้ำยาซักผ้า',
        quantity: 1,
        maxQuantity: 2,
        unit: 'ถุง',
        status: 0,
      },
      {
        id: 2,
        name: 'ยาสีฟัน',
        quantity: 1,
        maxQuantity: 2,
        unit: 'หลอด',
        status: 0,
      },
      {
        id: 3,
        name: 'น้ำยาล้างจาน',
        quantity: 0,
        maxQuantity: 2,
        unit: 'หลอด',
        status: 1,
      },
    ]
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

  public onCurrentPageDataChange($event: ReadonlyArray<Inventory>): void {
    this.listOfCurrentPageData = $event
    this.refreshCheckedStatus()
  }

  public refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) => this.setOfCheckedId.has(item.id))
    this.indeterminate = this.listOfCurrentPageData.some((item) => this.setOfCheckedId.has(item.id)) && !this.checked
  }

  public onConfirmDelete(): void {
    this.nzMessageService.success('ลบรายการของใช้ในบ้านเรียบร้อยแล้ว')
  }
}
