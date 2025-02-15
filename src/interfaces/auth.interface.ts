export interface RegisterRequest {
    lastName: string;
    firstName: string;
    email: string;
    password: string;
};

export interface LoginRequest {
    email: string;
    password: string;
};