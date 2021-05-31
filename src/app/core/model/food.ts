export interface Food {
  id: number
  name: string
  quantity: number
  buyDate: Date
  expireDate: Date
  status: FoodStatus
}

export enum FoodStatus {
  Active = 0,
  Expired,
}
