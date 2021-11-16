export interface Food {
  id: number
  name: string
  quantity: number
  unit: string
  buyDate: Date
  expireDate: Date
  status: FoodStatus
}

export enum FoodStatus {
  Active = 'active',
  Soon = 'soon',
  Expired = 'expired',
}
