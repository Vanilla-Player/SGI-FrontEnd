"use client";
import React from "react";
import { Inter } from "next/font/google";
import "@fontsource/poppins";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import { useLayoutStore } from "@/lib/store";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { show, openSideBar } = useLayoutStore();

  const renderChildren = () => {
    return React.Children.map(children, (child) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        openSideBar,
      });
    });
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          className={`admin-analytics min-h-[100vh] w-full bg-[#F9F9F9] font-poppins sm:overflow-auto ${
            show ? "h-screen overflow-hidden" : "overflow-auto"
          }`}
        >
          <div className="flex w-full ">
            <Sidebar />
            <div className="flex w-full flex-col">
              <Navbar />
              {/* Main content */}
              {renderChildren()}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
