export interface ICategoriesRequest {
    name: string
}

export interface ICategoriesResponse {
    id: string
    name: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}