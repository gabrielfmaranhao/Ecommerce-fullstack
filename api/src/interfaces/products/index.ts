export interface IProductsRequest {
    name: string
    model: string
    bar_code: string
    description?: string
    price: number
    isPromotion?: boolean
    image_url?: string
}

export interface IProductsResponse extends IProductsRequest {
    createdAt: Date
    updatedAt: Date
    id: string
    isActive: boolean
}