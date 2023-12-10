import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "../context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

//META INFORMATION FOR SERVER SIDE RENDERING
export const metadata = {
  title: "Moon Agency - Transforming Ideas into Solutions",
  description: "Unlock the potential of your digital presence with Moon Agency. We are a dynamic digital agency dedicated to solving real-life problems through innovative solutions and creative excellence.",
};

//INFO: whatever you write here, renders in every page,
//great for navbar & footer etc.
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <ThemeProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
