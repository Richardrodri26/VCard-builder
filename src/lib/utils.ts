import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getImageUrlFromFile(file: File): string {
  const blob = new Blob([file], { type: file.type });
  const url = URL.createObjectURL(blob);

  return url
}