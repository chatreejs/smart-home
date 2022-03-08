import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { NzMessageService } from 'ng-zorro-antd/message'
import { shortMonthNames } from 'src/app/core/constant/month-names-th'
import { Electricity, ElectricityStatus } from 'src/app/core/model/electricity'

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

  public listOfElectricityData: Electricity[] = []
  private listOfCurrentPageData: ReadonlyArray<Electricity> = []
  public setOfCheckedId: Set<number> = new Set<number>()

  public get electricityStatus(): typeof ElectricityStatus {
    return ElectricityStatus
  }

  public constructor(private nzMessageService: NzMessageService) {
    this.checked = false
    this.indeterminate = false
    this.overdue = 0
    this.difference = 0
  }

  public ngOnInit(): void {
    this.listOfElectricityData = [
      {
        id: 1,
        invoiceNumber: '00567672078',
        meterNumber: 319,
        electricUse: 88,
        electricPrice: 32.48,
        ftRate: -0.1532,
        electricFtPrice: -1.53,
        discount: 0,
        serviceCharge: 38.22,
        vat: 4.84,
        total: 335.06,
        issueDate: new Date('2020-12-19'),
        dueDate: new Date('2020-12-30'),
        status: 1,
      },
      {
        id: 2,
        invoiceNumber: '00567672078',
        meterNumber: 319,
        electricUse: 159,
        electricPrice: 32.48,
        ftRate: -0.1532,
        electricFtPrice: -1.53,
        discount: 0,
        serviceCharge: 38.22,
        vat: 4.84,
        total: 576.86,
        issueDate: new Date('2021-01-19'),
        dueDate: new Date('2021-01-30'),
        status: 1,
      },
      {
        id: 3,
        invoiceNumber: '00567672078',
        meterNumber: 319,
        electricUse: 211,
        electricPrice: 32.48,
        ftRate: -0.1532,
        electricFtPrice: -1.53,
        discount: 0,
        serviceCharge: 38.22,
        vat: 4.84,
        total: 332.34,
        issueDate: new Date('2021-02-19'),
        dueDate: new Date('2021-02-30'),
        status: 1,
      },
      {
        id: 4,
        invoiceNumber: '00567672078',
        meterNumber: 319,
        electricUse: 43,
        electricPrice: 32.48,
        ftRate: -0.1532,
        electricFtPrice: -1.53,
        discount: 0,
        serviceCharge: 38.22,
        vat: 4.84,
        total: 183.3,
        issueDate: new Date('2021-03-19'),
        dueDate: new Date('2021-03-30'),
        status: 1,
      },
      {
        id: 5,
        invoiceNumber: '00567672078',
        meterNumber: 319,
        electricUse: 10,
        electricPrice: 32.48,
        ftRate: -0.1532,
        electricFtPrice: -1.53,
        discount: 0,
        serviceCharge: 38.22,
        vat: 4.84,
        total: 74.01,
        issueDate: new Date('2021-04-19'),
        dueDate: new Date('2021-04-30'),
        status: 1,
      },
      {
        id: 6,
        invoiceNumber: '00567672078',
        meterNumber: 319,
        electricUse: 25,
        electricPrice: 32.48,
        ftRate: -0.1532,
        electricFtPrice: -1.53,
        discount: 0,
        serviceCharge: 38.22,
        vat: 4.84,
        total: 74.01,
        issueDate: new Date('2021-05-19'),
        dueDate: new Date('2021-05-30'),
        status: 0,
      },
    ]

    this.overdue = this.listOfElectricityData
      .map((data) => (data.status === ElectricityStatus.NotPaid ? data.total : 0))
      .reduce((prev, cur) => prev + cur)

    if (this.listOfElectricityData.length > 1) {
      this.difference =
        this.listOfElectricityData[this.listOfElectricityData.length - 1].total -
        this.listOfElectricityData[this.listOfElectricityData.length - 2].total
    } else {
      this.difference = 0
    }

    // Chart
    this.typeChart = 'line'
    this.dataChart = {
      labels: this.listOfElectricityData.slice(0, 6).map((data) => shortMonthNames[data.issueDate.getMonth()]),
      datasets: [
        {
          label: 'ค่าไฟฟ้า (บาท)',
          data: this.listOfElectricityData.slice(0, 6).map((data) => data.total),
          fill: true,
          borderColor: '#fe8019',
          backgroundColor: 'rgba(254, 128, 25, 0.1)',
          // backgroundColor: gradient,
          tension: 0.5,
          pointRadius: 5,
          pointBorderWidth: 2,
        },
      ],
    }
    this.optionsChart = {
      title: {
        display: true,
        text: 'ประวัติการใช้ไฟฟ้าย้อนหลัง 6 เดือน',
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

  public onCurrentPageDataChange($event: ReadonlyArray<Electricity>): void {
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
