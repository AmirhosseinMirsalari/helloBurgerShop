import { toast } from "react-toastify";
import { handleError } from "lib/helper";
import { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)

    const login = async (cellphone) => {
        try {
            setLoading(true)

            const res = await axios.post(`${process.env.NEXT_PUBLIC_APP_API_URL}/auth/login`, {
                cellphone
            })

            toast.success(res.data.message);

        } catch (err) {
            toast.error(handleError(err))
        } finally {
            setLoading(false)
        }
    }

    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;