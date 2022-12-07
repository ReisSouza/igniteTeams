import main from '@theme/main';
import React from 'react';
import { TextInputProps, TextInput as Input } from 'react-native';
import { useTheme } from 'styled-components';
       
import * as S from './styles';
        
     type InputProps =  TextInputProps & {
      ref?:React.RefObject<Input>
     }
const TextInput: React.FC<InputProps> = ({ref,...rest}:InputProps) => {
   const {COLORS} = useTheme()     
  return (
     <S.Container {...rest} placeholderTextColor={COLORS.GRAY_300} ref={ref}/>
  );
};
export default TextInput;