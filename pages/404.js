import Head from 'next/head'

import Layout from '../components/Layout'

export default function Custom404() {
    return (
        <Layout title={"404 not found"}>
            <Head>
                <title>404</title>
                <meta httpEquiv="Refresh" content="5;URL=/"/>
            </Head>
            <h1 className={"font-bold text-xl"}>404 Page not found - 5 秒後にホームに遷移します。</h1>
        </Layout>
    )
}