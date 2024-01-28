"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import "@fontsource/poppins";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [show, setShow] = useState(false);
  const [openSideBar, setSideBar] = useState(false);
  const expandSidebar = () => {
    setSideBar(!openSideBar);
  };
  const toggleSideBar = () => {
    setShow(!show);
  };

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
            <Sidebar
              show={show}
              openSideBar={openSideBar}
              toggleSideBar={toggleSideBar}
              expandSidebar={expandSidebar}
            />

            <div className="flex w-full flex-col">
              <Navbar toggleSideBar={toggleSideBar} />
              {/* Main content */}
              {renderChildren()}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
