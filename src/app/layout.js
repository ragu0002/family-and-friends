import { Montserrat, Manrope } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata = {
  title: "Family and Friends",
  description: "animals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`grid-rows(--my-grid-rows) grid min-h-screen grid-cols-(--my-grid-cols) px-1.5 ${manrope.className}`}
      >
        {children}
      </body>
    </html>
  );
}
