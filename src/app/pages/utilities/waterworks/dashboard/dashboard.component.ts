import { Component, OnInit } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message'
import { Waterworks, WaterworksStatus } from 'src/app/core/model/waterworks'
import { shortMonthNames } from '../../../../core/constant/month-names-th'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public checked: boolean
  public indeterminate: boolean
  public overdue: number
  public difference: number
  public typeChart: any
  public dataChart: any
  public optionsChart: any

  public listOfWaterworksData: Waterworks[] = []
  private listOfCurrentPageData: ReadonlyArray<Waterworks> = []
  public setOfCheckedId: Set<number> = new Set<number>()

  public get waterworksStatus(): typeof WaterworksStatus {
    return WaterworksStatus
  }

  public constructor(private nzMessageService: NzMessageService) {
    this.checked = false
    this.indeterminate = false
    this.overdue = 0
    this.difference = 0
  }

  public ngOnInit(): void {
    this.listOfWaterworksData = [
      {
        id: 1,
        invoiceNumber: '1115620026688',
        meterNumber: 319,
        waterUse: 13000,
        waterPrice: 150,
        discount: 0,
        serviceCharge: 30,
        vat: 12.6,
        total: 192.6,
        issueDate: new Date('2020-11-10'),
        dueDate: new Date('2020-11-20'),
        status: 1,
      },
      {
        id: 2,
        invoiceNumber: '1115620026688',
        meterNumber: 319,
        waterUse: 6500,
        waterPrice: 81.22,
        discount: 0,
        serviceCharge: 25,
        vat: 5.69,
        total: 172,
        issueDate: new Date('2020-12-10'),
        dueDate: new Date('2020-12-20'),
        status: 1,
      },
      {
        id: 3,
        invoiceNumber: '1115620026688',
        meterNumber: 319,
        waterUse: 6500,
        waterPrice: 81.22,
        discount: 0,
        serviceCharge: 25,
        vat: 5.69,
        total: 250,
        issueDate: new Date('2021-01-10'),
        dueDate: new Date('2021-01-20'),
        status: 1,
      },
      {
        id: 4,
        invoiceNumber: '1115620026688',
        meterNumber: 319,
        waterUse: 6500,
        waterPrice: 81.22,
        discount: 0,
        serviceCharge: 25,
        vat: 5.69,
        total: 217,
        issueDate: new Date('2021-02-10'),
        dueDate: new Date('2021-02-20'),
        status: 1,
      },
      {
        id: 5,
        invoiceNumber: '1115620026688',
        meterNumber: 319,
        waterUse: 6500,
        waterPrice: 81.22,
        discount: 0,
        serviceCharge: 25,
        vat: 5.69,
        total: 217,
        issueDate: new Date('2021-03-10'),
        dueDate: new Date('2021-03-20'),
        status: 1,
      },
      {
        id: 6,
        invoiceNumber: '1115620026688',
        meterNumber: 319,
        waterUse: 6500,
        waterPrice: 81.22,
        discount: 0,
        serviceCharge: 25,
        vat: 5.69,
        total: 188,
        issueDate: new Date('2021-04-10'),
        dueDate: new Date('2021-04-20'),
        status: 1,
      },
      {
        id: 7,
        invoiceNumber: '1115620026688',
        meterNumber: 319,
        waterUse: 6500,
        waterPrice: 81.22,
        discount: 0,
        serviceCharge: 25,
        vat: 5.69,
        total: 276,
        issueDate: new Date('2021-05-10'),
        dueDate: new Date('2021-05-20'),
        status: 0,
      },
    ]

    this.overdue = this.listOfWaterworksData
      .map((data) => (data.status === WaterworksStatus.NotPaid ? data.total : 0))
      .reduce((prev, cur) => prev + cur)
    this.difference =
      this.listOfWaterworksData[this.listOfWaterworksData.length - 1].total -
      this.listOfWaterworksData[this.listOfWaterworksData.length - 2].total

    // Chart
    this.typeChart = 'line'
    this.dataChart = {
      labels: this.listOfWaterworksData.slice(0, 6).map((data) => shortMonthNames[data.issueDate.getMonth()]),
      datasets: [
        {
          label: 'ค่าน้ำ (บาท)',
          data: this.listOfWaterworksData.slice(0, 6).map((data) => data.total),
          fill: true,
          borderColor: '#3a95cb',
          backgroundColor: 'rgba(58, 149, 203, 0.1)',
          tension: 0.5,
          pointRadius: 5,
          pointBorderWidth: 2,
        },
      ],
    }
    this.optionsChart = {
      title: {
        display: true,
        text: 'ประวัติการใช้น้ำย้อนหลัง 6 เดือน',
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: 'rgba(0, 0, 0, 0)',
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: false,
            },
          },
        ],
      },
      responsive: true,
      maintainAspectRatio: false,
    }
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

  public onCurrentPageDataChange($event: ReadonlyArray<Waterworks>): void {
    this.listOfCurrentPageData = $event
    this.refreshCheckedStatus()
  }

  public refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every((item) => this.setOfCheckedId.has(item.id))
    this.indeterminate = this.listOfCurrentPageData.some((item) => this.setOfCheckedId.has(item.id)) && !this.checked
  }

  public onConfirmDelete(): void {
    this.nzMessageService.success('ลบรายการน้ำประปาเรียบร้อยแล้ว')
  }
}
