export interface Waterworks {
  id: number
  invoiceNumber: string
  meterNumber: number
  waterUse: number
  waterPrice: number
  discount: number
  serviceCharge: number
  vat: number
  total: number
  issueDate: Date
  dueDate: Date
  status: WaterworksStatus
}

export enum WaterworksStatus {
  NotPaid = 0,
  Paid,
}
