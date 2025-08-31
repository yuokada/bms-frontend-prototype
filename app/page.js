import Team from "../components/Team";
import { getAllTeamsData } from "../lib/teams";

export default async function HomePage() {
  const teams = await getAllTeamsData();
  return (
    <div>
      <div className="text-xl">Welcome to BMS!</div>
      <div>Select your team!</div>
      <ul className="m-18 list-none hover:list-disc">
        {teams && teams.map((team) => <li key={team.id}><Team team={team} /></li>)}
      </ul>
    </div>
  );
}

