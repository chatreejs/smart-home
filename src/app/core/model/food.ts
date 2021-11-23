export interface Food {
  id?: number
  name: string
  quantity: number
  unit: string
  buyDate: Date
  expireDate: Date
  status?: FoodStatus
}

export enum FoodStatus {
  ACTIVE = 'ACTIVE',
  SOON = 'SOON',
  EXPIRED = 'EXPIRED',
}
