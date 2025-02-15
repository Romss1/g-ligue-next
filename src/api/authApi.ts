import axios from "axios";
import { LoginRequest, RegisterRequest } from "../interfaces/auth.interface";
import { authService } from "@/store/auth/tokenService";
import apiClient from "./apiClient";

const prefixAuthUrl: string = '/auth'

export const authApi = {
    async registerUser(data: RegisterRequest) {
        return apiClient.post(`${prefixAuthUrl}/register`, data).then(res => res.data);
    },

    async loginUser(data: LoginRequest) {
        const response =  await apiClient.post(`${prefixAuthUrl}/login`, data);
        const token = response.data.token;

        authService.setToken(token);

        return response.data;
    },

    logout() {
        authService.removeToken();
    }
}