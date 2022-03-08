export interface Inventory {
  id: number
  name: string
  quantity: number
  maxQuantity: number
  unit: string
  status: InventoryStatus
}

export enum InventoryStatus {
  OUT_OF_STOCK = 'OUT_OF_STOCK',
  IN_STOCK = 'IN_STOCK',
}
