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
      {/* <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
          integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head> */}
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
