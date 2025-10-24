import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Sinau - Student & Teacher Login",
    description: "Login portal for students and teachers",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className="antialiased">
        {children}
        </body>
        </html>
    );
}