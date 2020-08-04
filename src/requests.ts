/**
 * @internal
 */
export interface LoginRequestBody {
    Login: string;
    Password: string;
    TokenExpirationInMinutes?: number;
}