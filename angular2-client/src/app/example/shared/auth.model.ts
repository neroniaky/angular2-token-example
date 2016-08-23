export interface AuthData {
    email: string;
    password: string;
    passwordConfirmation?: string;
    currentPassword?: string;
}

export interface AuthResponse {
    status: string;
    data: any;
    errors?: string[];
}