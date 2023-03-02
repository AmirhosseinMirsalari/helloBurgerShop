const { createContext } = require("react");

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const login = async () => {
        console.log('Login AuthContext');
    }

    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;