import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const openSans = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  icon: "./favicon.ico",
  title: "ZDViewer-3D Design tool in the browser with real-time collaboration",
  description:
    "ZDViewer is a free 3D design software with real-time collaboration to create web interactive experiences in the browser. Easy 3d modeling, animation, textures, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
