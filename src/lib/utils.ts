import { twMerge } from "tailwind-merge";
import clsx, { ClassValue } from "clsx";

// This is a helper function to merge Tailwind classes with other classes
export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}