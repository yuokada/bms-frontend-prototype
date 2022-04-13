import Link from "next/link";

const Team = ({team}) => {
    return (
        <div>
            <Link href={`/teams/${team.url_path}`}>
                <a className={"cursor-pointer text-blue-500 m-1 border-b border-blue-500 hover:bg-gray-200"}>
                    {team.name}
                </a>
            </Link>
        </div>
    )
}

export default Team;