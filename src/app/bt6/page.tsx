"use client"
import { Slider } from "@/components/ui/slider"; // Đường dẫn có thể khác tùy vào cấu trúc dự án của bạn
import React, { useState } from "react";

export default function Home() {
    const [value, setValue] = useState(50); // Giá trị mặc định là 50

    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-8">
            <div className="w-64">
                <h2 className="text-lg font-semibold mb-4">Slider Value: {value}</h2>
                <Slider
                    defaultValue={[value]}
                    max={100}
                    step={1}
                    onValueChange={(val) => setValue(val[0])}
                />
            </div>
        </div>
    );
}
