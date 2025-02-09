import axios from "axios";
import { RegisterDto } from "../interfaces/authDto";

const prefixAuthUrl: string = `${process.env.NEXT_PUBLIC_REACT_APP_API_URL}/auth`

export const authService = {
    async registerUser(data: RegisterDto) {
        console.log(prefixAuthUrl)
        try {
            const response = await axios.post(`${prefixAuthUrl}/register`, data);
            return response.data;
        } catch (error) {
            throw error;
        }
    }
};