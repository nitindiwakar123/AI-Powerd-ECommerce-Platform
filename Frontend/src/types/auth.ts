import type { ApiResponse } from "./api"

export type AuthResponse = ApiResponse<{
    message: string
}>

export type AuthResponseUser = ApiResponse<{
    user: {
        _id: string,
        name: string,
        email: string,
    }
}>

