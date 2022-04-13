import fetch from "node-fetch";

const apiUrl = "https://my-json-server.typicode.com/yuokada/bms-json-server/teams";

export async function getAllTeamsData() {
    const res = await fetch(new URL(apiUrl));
    const teams = await res.json();

    return teams;
}

export async function getAllTeamIds() {
    const res = await fetch(new URL(apiUrl));
    const teams = await res.json();

    return teams.map((team) => {
        return {
            params: {
                id: String(team.id),
            },
        };
    });
}

export async function getTeamData(id) {
    const res = await fetch(new URL(`${apiUrl}/${id}`));
    const team = await res.json();

    return team;
}