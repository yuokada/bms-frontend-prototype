import "../styles/globals.css";
import "../styles/bms.css";
import Link from "next/link";

export const metadata = {
  title: "BMS - Baseball Management System",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header>
          <nav className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-indigo-100 shadow-sm sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0">
              <div className="flex space-x-4">
                <span className="text-indigo-500 font-extrabold px-3 py-2 rounded-sm">BMS</span>
                <Link href="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-sm">
                  Home
                </Link>
                <span className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-sm">Team (Now working)</span>
                <Link href="/about" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-sm">
                  About
                </Link>
              </div>
            </div>
            <div>
              <Link href="/login" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded-sm">
                Log in | Register
              </Link>
            </div>
          </nav>
        </header>
        <main className="flex flex-1 justify-center items-center w-screen flex-col pt-6">{children}</main>
        <footer id="footer" className="w-full h-12 flex justify-center items-center border-t">
          <span className="text-indigo-700 hover:text-indigo-700 px-5 py-2 rounded-sm">&copy; {new Date().getFullYear()} BMS - Baseball Management System</span>
          <Link href="mailto:bms-dev@googlegroups.com" className="text-indigo-300 hover:text-indigo-700 px-5 py-2 rounded-sm">
            お問い合わせ
          </Link>
        </footer>
      </body>
    </html>
  );
}

