import { createContext } from "react";

interface AuthContextI {
    isAuthorized: boolean,
    isUserAuthorizes: (e: React.ChangeEvent<HTMLInputElement>) => void
    validUserData: (e: React.FormEvent<HTMLFormElement>) => void
    userData: {
        email: string
        password: string | number
    }
    userLogOut: () => void
}

export const AuthContext = createContext<AuthContextI | null>(null)