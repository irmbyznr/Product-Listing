import Header from "@/components/common/header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Product Listing",
  description: "This product listing is generated by a web application created using create next app. It presents a list of products along with their details on this page.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
