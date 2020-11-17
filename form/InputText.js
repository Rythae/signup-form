/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

const Input = ({label, value, onChangeText, placeholder, secureTextEntry}) => {
  return (
    <InputContainer>
      <TextFooter>{label}</TextFooter>
      <InputText
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        autoCapitalize="none"
        value={value}
        onChangeText={onChangeText}
      />
    </InputContainer>
  );
};

export default Input;

const InputContainer = styled.View`
  flex-direction: column;
  margin-top: 10px;
  padding-bottom: 5px;
  width: 100%;
`;

const TextFooter = styled.Text`
  color: #000000;
  font-size: 20px;
  margin-bottom: 15px;
  padding-left: 5px;
`;

const InputText = styled.TextInput`
  margin-top: -12px;
  padding-left: 45px;
  color: #85375a;
  background-color: #fdfbfb;
  border-radius: 5px;
  font-size: 18px;
`;
