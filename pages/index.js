import Layout from "../components/Layout"
import {getAllTeamsData} from "../lib/teams";
import Team from "../components/Team";

export default function Home({teams}) {
    return (
        <Layout title={"BMS - Baseball Management System"}>
            <div className={""}>Welcome to BMS!</div>
            <ui className="m-10">
                {teams && teams.map((team) => <Team key={team.id} team={team}/>)
                }
            </ui>
        </Layout>
    )
}


export async function getStaticProps() {
    // NOTE: この関数はビルド時に実行される.
    const teams = await getAllTeamsData();
    return {
        props: {
            teams
        }
    }
}