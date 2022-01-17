export interface AuthResponse {
    user: {
        email: string,
        access_token: string,
        expires_in: number
    }
}
