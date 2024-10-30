
import localFont from "next/font/local";
import "./globals.css";

export const metadata = {
  title:' 🪨 RockVibes',
  description: "Find where to climb",
};

export default function RootLayout({ children }) {

  

  return (
    <html lang="en">
      <body
        className={`bg-white text-0-textMainText font-soleilBook
          
          `}
      >
       
        {children}
       
      </body>
    </html>
  );
}
