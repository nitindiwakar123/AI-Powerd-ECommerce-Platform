export interface ApiResponse<T extends object> {
    success: boolean,
    data?: T,
    error?: string 
}