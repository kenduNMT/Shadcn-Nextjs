import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function CreateAccountForm() {
    return (
        <div className="max-w-md mx-auto p-6 border rounded-md shadow">
            <h2 className="text-2xl font-semibold mb-4">Create an account</h2>
            <p className="text-sm text-gray-600 mb-6">
                Enter your email below to create your account
            </p>

            {/* Social Login Buttons */}
            <div className="flex justify-between space-x-4 mb-6">
                <Button variant="outline" className="w-full">
                    <svg
                        className="mr-2"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 .5a11.5 11.5 0 00-3.633 22.43c.576.107.791-.25.791-.556v-2.187c-3.173.691-3.84-1.529-3.84-1.529-.525-1.336-1.282-1.692-1.282-1.692-1.048-.717.079-.702.079-.702 1.157.082 1.765 1.187 1.765 1.187 1.03 1.764 2.705 1.254 3.364.959.103-.747.402-1.253.731-1.54-2.533-.287-5.2-1.267-5.2-5.641 0-1.247.437-2.27 1.155-3.067-.115-.287-.5-1.444.11-3.008 0 0 .951-.305 3.12 1.17A10.84 10.84 0 0112 6.844c.962.004 1.933.13 2.84.383 2.165-1.478 3.115-1.172 3.115-1.172.61 1.564.226 2.722.112 3.01.722.798 1.153 1.821 1.153 3.068 0 4.386-2.674 5.349-5.219 5.628.41.351.774 1.048.774 2.112v3.13c0 .31.211.667.797.556A11.5 11.5 0 0012 .5z"
                        ></path>
                    </svg>
                    Github
                </Button>
                <Button variant="outline" className="w-full">
                    <svg
                        className="mr-2"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            d="M23.5 12.3c0-.8-.1-1.4-.2-2H12v4.2h6.5c-.3 1.2-.9 2.3-1.9 3.1v2.6h3.1c1.8-1.7 2.8-4.1 2.8-7z"
                            fill="#4285F4"
                        />
                        <path
                            d="M12 24c2.4 0 4.5-.8 6-2.2l-3-2.6c-.8.5-1.9.8-3 .8-2.3 0-4.3-1.5-5-3.6H4.8v2.7C6.3 21.8 8.9 24 12 24z"
                            fill="#34A853"
                        />
                        <path
                            d="M7 14.4c-.2-.7-.4-1.4-.4-2.4s.2-1.6.4-2.4V6.9H4.8A11.9 11.9 0 003 12c0 1.9.4 3.4 1.8 5l2.3-2.6z"
                            fill="#FBBC05"
                        />
                        <path
                            d="M12 4.7c1.2 0 2.2.4 3.1 1.1l2.3-2.2C16.5 2.2 14.4 1 12 1 8.9 1 6.3 3.2 4.8 5.9l2.3 2.6c.7-2.1 2.7-3.8 4.9-3.8z"
                            fill="#EA4335"
                        />
                    </svg>
                    Google
                </Button>
            </div>

            {/* Form input cho email và password */}
            <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                </label>
                <Input
                    id="email"
                    placeholder="m@example.com"
                    className="w-full"
                />
            </div>

            <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                    Password
                </label>
                <Input
                    id="password"
                    type="password"
                    placeholder="Your password"
                    className="w-full"
                />
            </div>

            {/* Nút tạo tài khoản */}
            <Button className="w-full">Create account</Button>
        </div>
    );
}
