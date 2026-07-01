import type { Metadata } from "next";
import Image from "next/image";
import "./globals.css";

export const metadata: Metadata = {
  title: "Staffing Solutions | Your Trusted Hiring Partner",
  description:
    "Reliable staffing and recruitment solutions connecting businesses with the right talent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <header className="w-full flex items-center px-6 py-3 shadow-sm">
          <Image
            src="/header.png"
            alt="Staffing Solutions Logo"
            width={160}
            height={50}
            priority
          />
        </header>
        {children}
      </body>
    </html>
  );
}