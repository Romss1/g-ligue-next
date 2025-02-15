import Cookies from "js-cookie";

const TOKEN_KEY = "auth_token";

export const authService = {
    setToken(token: string): void {
        Cookies.set(TOKEN_KEY, token, {expires: 7, secure: true});
    },

    getToken(): string | undefined {
        return Cookies.get(TOKEN_KEY);
    },

    removeToken(): void {
        Cookies.remove(TOKEN_KEY);
    },

    isAuthenticated(): boolean {
        return !!this.getToken();
    }
};