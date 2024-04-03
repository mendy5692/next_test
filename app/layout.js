import { Assistant } from "next/font/google";
import "./globals.css";
import Navbar from "@/utils/navbar/navbar";
import "../utils/heroSection/heroSection.css";

const assistant = Assistant({ subsets: ["hebrew", "latin"] });

export const metadata = {
  title: "Mendy's App",
  description: "My Amazing App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={assistant.className}>
        <Navbar />
        <div className="heroImg"></div>
        {children}
      </body>
    </html>
  );
}
