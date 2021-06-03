export interface Electricity {
  id: number
  invoiceNumber: string
  meterNumber: number
  electricUse: number
  electricPrice: number
  ftRate: number
  electricFtPrice: number
  discount: number
  serviceCharge: number
  vat: number
  total: number
  issueDate: Date
  dueDate: Date
  status: ElectricityStatus
}

export enum ElectricityStatus {
  NotPaid = 0,
  Paid,
}
