import React from "react";

import * as S from "./styles";
import { ButtonIcon, Input } from "@components/index";
import { TextInput, TextInputProps } from "react-native";

type TextFieldProps = TextInputProps & {
onPressIcon?:()=> void
ref:React.RefObject<TextInput>
};

const TextField: React.FC<TextFieldProps> = ({onPressIcon,ref, ...rest}: TextFieldProps) => {
  return (
    <S.Container>
      <Input autoCorrect={false} {...rest} ref={ref}   />
      <ButtonIcon icon="add" onPress={onPressIcon ? ()=> onPressIcon() : ()=> {}} />
    </S.Container>
  );
};
export default TextField;
