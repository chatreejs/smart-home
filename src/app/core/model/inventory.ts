export interface Inventory {
  id: number
  name: string
  quantity: number
  maxQuantity: number
  unit: string
  status: InventoryStatus
}

export enum InventoryStatus {
  Active = 0,
  OutOfStock,
}
