import Link from "next/link";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import Navbar from "../utils/components/navbar";
import { Alert, LoadingAnimate } from "./api/icons";

export default function SignIn() {
    const { user, resetPassword } = useAuth();
    const [isLoading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState<string>("");

    const SignIn = async () => {
        setLoading(true);
        try {
            await resetPassword(email);
            window.location.href = "/";
        } catch (e: any) {
            if (
                e.code === "auth/user-not-found" ||
                e.code === "auth/wrong-password"
            )
                setError("Invalid credentials. Please try again.");
            else if (e.code === "user-token-expired")
                setError("Your session has expired. Please sign in again.");
            else setError(e.message);
        }
        setLoading(false);
    };

    return (
        <>
            <Navbar />
            <div className="dark:bg-slate-900 dark:text-slate-400">
                <div className="mx-auto container flex items-center" id="nav">
                    <div className="w-full pt-2 p-4">
                        <div className="flex flex-col justify-center items-center px-6 pt-8 mx-auto md:h-screen pt:mt-0">
                            <div className="justify-center items-center w-full bg-white rounded-lg shadow lg:flex md:mt-0 lg:max-w-screen-sm xl:p-0 dark:bg-gray-800">
                                <div className="p-6 w-full sm:p-8 lg:p-10">
                                    <h1 className="mb-3 text-2xl font-bold text-gray-900 lg:text-3xl dark:text-white">
                                        Woops!
                                    </h1>
                                    <p className="mb-3 text-gray-500 dark:text-gray-400">
                                        Financial Class is an undergoing
                                        experimnetal feature and is currently
                                        unavailable right now. This feature is
                                        being tested and will be rolled out as
                                        soon as possible.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
