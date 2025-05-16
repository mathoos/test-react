import { useState } from "react";
import { AuthContext } from "../context/AuthContext"; // on importe le contexte

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (username) => {
        setUser({ name: username });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}