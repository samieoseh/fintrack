import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import NavigationWrapper from "@/components/navigation-wrapper";

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Fintrack - Your financial tracker",
  description: "Your financial tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${publicSans.variable} antialiased bg-[#FCFDFD]`}>
        <div className="flex flex-col min-h-screen w-[98%] mx-auto py-4">
          <NavigationWrapper>{children}</NavigationWrapper>
        </div>
      </body>
    </html>
  );
}
