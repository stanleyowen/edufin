import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../utils/components/navbar";

export default function SignIn() {
    const { logOut } = useAuth();

    useEffect(() => {
        try {
            logOut();
            window.location.href = "/login";
        } catch (e) {
            console.log(e);
        }
    });

    return (
        <>
            <Navbar />
            <div className="dark:bg-slate-800 dark:text-slate-400">
                Logging out
            </div>
        </>
    );
}
