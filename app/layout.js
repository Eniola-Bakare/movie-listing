import { Inter } from "next/font/google";
import "./_styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie lounge",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`layout ${inter.className} bg-slate-300`}>
        {children}
      </body>
    </html>
  );
}
