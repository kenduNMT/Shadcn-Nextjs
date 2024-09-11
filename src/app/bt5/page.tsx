"use client"
import React, { useState } from "react";
import OtpInput from "@/components/ui/input-otp";

export default function Home() {
    const [otp6, setOtp6] = useState("");
    const [otp8, setOtp8] = useState("");

    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-8">
            <div>
                <h2 className="text-lg font-semibold mb-4">Mã xác nhận</h2>
                <OtpInput length={8} onChangeOtp={setOtp8} />
                <p className="mt-2">Mã xác nhận với 8 số</p>
            </div>

            <div>
                <h2 className="text-lg font-semibold mb-4">Mã xác nhận</h2>
                <OtpInput length={6} onChangeOtp={setOtp6} />
                <p className="mt-2">Mã xác nhận với 6 số</p>
            </div>
        </div>
    );
}
