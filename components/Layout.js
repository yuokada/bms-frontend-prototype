import Head from "next/head"
import Link from "next/link"

export default function Layout({children, title = "baseball management system"}) {
    return (
        <div className={""}>
            <Head>
                <title>{title}</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
            </Head>

            <header>
                {/* see: https://tailwindcomponents.com/component/simple-navbar */}
                <nav
                    className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-indigo-100 shadow sm:items-baseline w-full">
                    {/*<div className="flex items-center pl-8 h-14">*/}
                    <div className={"mb-2 sm:mb-0"}>
                        <div className="flex space-x-4">
                            <span className="text-indigo-500 font-extrabold px-3 py-2 rounded">BMS</span>
                            <Link href="/" className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded">
                                Home
                            </Link>
                            {/* TODO: Now working */}
                            <span
                                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded">Team (Now working)</span>
                            <Link
                                href="/about"
                                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded">
                                About
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Link
                            href={"/login"}
                            className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded">
                            {/* NOTE: It may be better to split into 2 buttons. */}
                            Log in | Register
                        </Link>
                    </div>
                </nav>
            </header>
            <main className="flex flex-1 justify-center items-center w-screen flex-col pt-6">
                {children}
            </main>
            <footer id="footer" className={"w-full h-12 flex justify-center items-center border-t"}>
                <span className={"text-indigo-700 hover:text-indigo-700 px-5 py-2 rounded"}>
                    &copy; 2022 BMS - Baseball Management System
                </span>
                <Link
                    href="mailto:bms-dev@googlegroups.com"
                    className={"text-indigo-300 hover:text-indigo-700 px-5 py-2 rounded"}>
                    お問い合わせ
                </Link>
                {/*
                <Link href="https://twitter.com/BmsStatus">
                    <a className={"text-indigo-300 hover:text-indigo-700 px-5 py-2 rounded"}>Twitter</a>
                </Link>
                */}
            </footer>
        </div>
    );
}
