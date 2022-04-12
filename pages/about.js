import Layout from "../components/Layout"

export const About = () => {
    return (
        <Layout title="About BMS">
            <div className="container mt-12 text-white">
                <div className="ml-4 mr-4 md:ml-28 md:mr-28 px-2 py-1 text-xl bg-indigo-500 border-2 border-indigo-500">
                    <div className="justify-between flex">
                        <p>
                            野球の成績入力を分担しよう！
                        </p>
                    </div>
                </div>
                <div
                    className="ml-4 mr-4 md:ml-28 md:mr-28 bg-white pt-2 pb-2 text-black border-4 border-b-8 border-indigo-500">
                    <div className="ml-4 mr-4">
                        野球の成績管理ができるサイトはいくつかありますが、チームの代表/マネージャー/担当の方などが成績の入力をする形だと思います。
                        <hr/>
                        このサイトでは、チームの所属選手一人ひとりがアカウントを持つことが可能となっていて、
                        自分の成績を自分で入力することが出来ます。
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About
