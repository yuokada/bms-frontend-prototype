import Team from "../components/Team";
import { getAllTeamsData } from "../lib/teams";

export default async function HomePage() {
  const teams = await getAllTeamsData();
  return (
    <div>
      <div className="text-xl">Welcome to BMS!</div>
      <div>Select your team!</div>
      <ui className="m-18 list-none hover:list-disc">
        {teams && teams.map((team) => <Team key={team.id} team={team} />)}
      </ui>
    </div>
  );
}

