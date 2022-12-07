import playersGetByGroup from "./playersGetByGroup";

const playersGetByGroupAndTeam = async (groupName: string, team: string) => {
  try {
    const storage = await playersGetByGroup(groupName);

    const players = storage.filter((player) => player.team === team);
    return players;
  } catch (err) {}
};

export default playersGetByGroupAndTeam;
