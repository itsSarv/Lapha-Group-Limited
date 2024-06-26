import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReduxProvider from "../redux/reduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lapha Group",
  description: "This is a E-Commerce Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
      <Providers>
        <ToastContainer
        position="bottom-right"
        theme="dark"
        autoClose = {2000}
        />
        {children}
        </Providers>
        </ReduxProvider>
      </body>
    </html>
  );
}
