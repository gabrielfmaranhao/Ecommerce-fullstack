

export interface IUsersRequest {
    name: string
    email: string
    password: string
    isAdm?: boolean
    image_url?: string
}

export interface IUsersResponse extends IUsersRequest {
    id: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}

export interface IUserUpdateRequest {
    name?: string
    email?: string
    password?: string
    isAdm?: boolean
    image_url?: string
}