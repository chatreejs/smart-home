export interface Pagination<T> {
  items: T[]
  meta: {
    totalItems: number
    itemCount: number
    itemPerPage: number
    totalPages: number
    currentPage: number
  }
}
