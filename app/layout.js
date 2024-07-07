import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie lounge",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full p-10 bg-slate-300`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
