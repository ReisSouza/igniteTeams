import { TabNavigation } from "@modules/index";
import React, { useState } from "react";

import * as S from "./styles";


type TabsPlayersProps = {
  tabActive?: number;
  amountPlayersForTeam: number
  onChange:(teamName:'Time A' | 'Time B')=>void
};

const TabsPlayers: React.FC<TabsPlayersProps> = ({
 tabActive,amountPlayersForTeam,onChange
}: TabsPlayersProps) => {



  return (
    <S.Container>
      <TabNavigation defaultActive={tabActive} tabs={['Time A', 'Time B'].map((team)=>  team)} onChange={(teamName)=> onChange(teamName)}  />
      <S.NumberOfPlayers>{amountPlayersForTeam}</S.NumberOfPlayers>
    </S.Container>
  );
};
export default TabsPlayers;
