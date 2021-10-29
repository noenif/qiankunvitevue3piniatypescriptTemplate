interface UserListItem {
  name: string
  age: number
  email: string
  sex?: number
}

export type UserListResultModel = UserListItem[]
