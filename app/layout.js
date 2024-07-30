import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar/Sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "Note Taking",
  description: "This is note taking app where you can add and update",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} flex flex-col gap-[3rem] min-h-screen`}
      >
        <main className="p-10 flex gap-10 min-h-screen">
          <Sidebar />
          {children}
        </main>
      </body>
    </html>
  );
}
