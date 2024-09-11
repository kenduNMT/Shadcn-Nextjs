'use client'
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

export default function HomePage() {
    const [textValue, setTextValue] = useState('');
    const [numberValue, setNumberValue] = useState('');
    const [fileValue, setFileValue] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFileValue(e.target.files[0]);
        }
    };

    return (
        <div className="space-y-4">
            {/* Input text */}
            <div>
                <label className="block text-sm font-medium">Text Input</label>
                <Input
                    type="text"
                    placeholder="Enter text"
                    value={textValue}
                    onChange={(e) => setTextValue(e.target.value)}
                />
            </div>

            {/* Input number */}
            <div>
                <label className="block text-sm font-medium">Number Input</label>
                <Input
                    type="number"
                    placeholder="Enter number"
                    value={numberValue}
                    onChange={(e) => setNumberValue(e.target.value)}
                />
            </div>

            {/* Input file */}
            <div>
                <label className="block text-sm font-medium">File Input</label>
                <Input type="file" onChange={handleFileChange} />
                {fileValue && <p>File selected: {fileValue.name}</p>}
            </div>
        </div>
    );
}
