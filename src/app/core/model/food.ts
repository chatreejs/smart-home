export interface Food {
  id: number
  name: string
  quantity: number
  buyDate: Date
  expireDate: Date
  status: FoodStatus
}

export enum FoodStatus {
  Active = 'active',
  Expired = 'expired',
}
