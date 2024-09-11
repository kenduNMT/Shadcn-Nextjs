"use client"
import React from 'react'
import "./bt4.css";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"

export default function Home() {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-60">
                <Select onValueChange={(value) => console.log(value)}>
                    <SelectTrigger className="bg-white">Môn học</SelectTrigger>
                    <SelectContent className="SelectContent">
                        <SelectItem value="html">HTML</SelectItem>
                        <SelectItem value="css">CSS</SelectItem>
                        <SelectItem value="javascript">JavaScript</SelectItem>
                        <SelectItem value="reactjs">ReactJS</SelectItem>
                        <SelectItem value="nextjs">Next.js</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}

