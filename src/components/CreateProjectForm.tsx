import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";

export default function CreateProjectForm() {
    return (
        <div className="max-w-md mx-auto p-4 border rounded-md shadow">
            <h2 className="text-xl font-semibold mb-4">Tạo dự án</h2>

            {/* Form input cho tên dự án */}
            <div className="mb-4">
                <label htmlFor="projectName" className="block text-sm font-medium mb-1">
                    Tên
                </label>
                <Input
                    id="projectName"
                    placeholder="Name of your project"
                    className="w-full"
                />
            </div>

            {/* Form select cho công nghệ */}
            <div className="mb-4">
                <label htmlFor="technology" className="block text-sm font-medium mb-1">
                    Công nghệ
                </label>
                <Select>
                    <SelectTrigger className="w-full">Next.js</SelectTrigger>
                    <SelectContent>
                        <SelectItem value="nextjs">Next.js</SelectItem>
                        <SelectItem value="reactjs">React.js</SelectItem>
                        <SelectItem value="vuejs">Vue.js</SelectItem>
                        <SelectItem value="angular">Angular</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {/* Nút Tạo và Đóng */}
            <div className="flex justify-between">
                <Button variant="outline">Đóng</Button>
                <Button variant="default">Tạo</Button>
            </div>
        </div>
    );
}
