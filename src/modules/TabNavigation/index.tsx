import React, { useState } from "react";

import * as S from "./styles";
import { ItemTab } from "@components/index";

type TabNavigationProps = {
  defaultActive?: number | null;
  tabs: string[];
  horizontal?: boolean;
  onChange?: (teamName: 'Time A' | 'Time B') => void;
};

const TabNavigation: React.FC<TabNavigationProps> = ({
  defaultActive,
  tabs,
  horizontal = true,
  onChange,
}: TabNavigationProps) => {
  const [idTabActive, setIdTabActive] = useState<number | undefined>(
    defaultActive || 0
  );
  return (
    <S.Container
      horizontal={horizontal}
      data={tabs}
      renderItem={({ item, index }) => (
        <ItemTab
          onPress={() => {
            setIdTabActive(index);
            if(onChange){
              onChange(item as 'Time A' | 'Time B');
            }
          }}
          isActive={idTabActive === index}
          title={item as string}
        />
      )}
    />
  );
};
export default TabNavigation;
