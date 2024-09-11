"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const DarkModeToggle = () => {
    const [theme, setTheme] = useState("system");

    useEffect(() => {
        // Lấy theme từ LocalStorage hoặc mặc định là "system"
        const savedTheme = localStorage.getItem("theme") || "system";
        setTheme(savedTheme);
        applyTheme(savedTheme);
    }, []);

    const applyTheme = (theme: string) => {
        const root = window.document.documentElement;
        if (theme === "light") {
            root.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else if (theme === "dark") {
            root.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
            if (systemPrefersDark) {
                root.classList.add("dark");
            } else {
                root.classList.remove("dark");
            }
            localStorage.setItem("theme", "system");
        }
    };

    const handleThemeChange = (newTheme: string) => {
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="p-2 bg-gray-200 rounded-full dark:bg-gray-800">
                <SunIcon className="w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                <DropdownMenuItem onClick={() => handleThemeChange("light")}>
                    <SunIcon className="mr-2 w-4 h-4" />
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange("dark")}>
                    <MoonIcon className="mr-2 w-4 h-4" />
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default DarkModeToggle;
