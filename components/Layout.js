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
                    className="font-sans flex flex-col text-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
                    {/*<div className="flex items-center pl-8 h-14">*/}
                    <div className={"mb-2 sm:mb-0"}>
                        <div className="flex space-x-4">
                            <span className="text-indigo-500 font-extrabold px-3 py-2 rounded">BMS</span>
                            <Link href="/">
                                <a className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded">Home</a>
                            </Link>
                            {/* TODO: Now working */}
                            <span
                                className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded">Team (Now working)</span>
                            <Link href="/about">
                                <a className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded">About</a>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Link href={"/login"}>
                            {/* NOTE: It may be better to split into 2 buttons. */}
                            <a className="text-gray-500 hover:text-gray-700 px-3 py-2 rounded">Log in | Register</a>
                        </Link>
                    </div>
                </nav>
            </header>

            {children}

            <footer id="footer" className={"w-full h-12 flex justify-center items-center border-t"}>
                <span className={"text-indigo-700 hover:text-indigo-700 px-5 py-2 rounded"}>
                    &copy; 2022 BMS - Baseball Management System
                </span>
                <Link href="/">
                    <a
                        className={"text-indigo-300 hover:text-indigo-700 px-5 py-2 rounded"}
                        href="mailto:bms-dev@googlegroups.com"
                    >
                        お問い合わせ
                    </a>
                </Link>
                <Link href="/">
                    <a
                        className={"text-indigo-300 hover:text-indigo-700 px-5 py-2 rounded"}
                        href="https://twitter.com/BmsStatus"
                    >
                        Twitter
                    </a>
                </Link>
            </footer>
        </div>
    )
}
