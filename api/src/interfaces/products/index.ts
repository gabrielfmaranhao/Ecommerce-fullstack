export interface IProductsRequest {
    name: string
    model: string
    bar_code: string
    description?: string
    price: number
    isPromotion?: boolean
    image_url?: string
    iventory: number
    categorie_name: string
}

export interface IProductsUpdate {
    name?: string
    model?: string
    bar_code?: string
    description?: string
    price?: number
    isPromotion?: boolean
    image_url?: string
    categorie_name?: string
    isActive?: boolean
}

export interface IProductsResponse extends IProductsRequest {
    createdAt: Date
    updatedAt: Date
    id: string
    isActive: boolean
}