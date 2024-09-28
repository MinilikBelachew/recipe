import localFont from "next/font/local";
import "./globals.css";
import { Suspense } from "react";
import Loading from "./loading";
import SideBar from "@/components/sidebar/page";
import Navbar from "@/components/navbar/page";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <div className="flex flex-1">
          <SideBar />
          <main className="flex-1 ml-64 mt-16 p-6 overflow-y-auto bg-gray-100 h-screen">
            <Suspense fallback={<Loading />}> {children}</Suspense>
          </main>
        </div>
      </body>
    </html>
  );
}
