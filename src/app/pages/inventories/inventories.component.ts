import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Inventory } from '../../core/model/inventory'

@Component({
  selector: 'app-inventories',
  templateUrl: './inventories.component.html',
  styleUrls: ['./inventories.component.scss'],
})
export class InventoriesComponent implements OnInit {
  deleteConfirmTitle: string
  checked: boolean
  indeterminate: boolean

  listOfInventoryData: Inventory[] = []
  listOfCurrentPageData: ReadonlyArray<Inventory> = []
  setOfCheckedId: Set<number> = new Set<number>()

  public constructor(private nzMessageService: NzMessageService) {
    this.deleteConfirmTitle = ''
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
      },
      {
        id: 2,
        name: 'ยาสีฟัน',
        quantity: 1,
        maxQuantity: 2,
        unit: 'หลอด',
      },
      {
        id: 2,
        name: 'น้ำยาล้างจาน',
        quantity: 0,
        maxQuantity: 2,
        unit: 'หลอด',
      },
    ]
  }

  public updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id)
    } else {
      this.setOfCheckedId.delete(id)
    }
    this.deleteConfirmTitle = `คุณต้องการลบรายการของใช้ในบ้านจำนวน ${this.setOfCheckedId.size} รายการใช่ไหม?`
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
