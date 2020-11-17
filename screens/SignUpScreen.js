/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ScrollView, Linking} from 'react-native';
import styled from 'styled-components';
import Input from '../form/InputText';

const SignUp = () => {
  return (
    <Container>
      <Header>
        <TextHeader>Enter your details</TextHeader>
        <InnerTextHeader>
          This info will be displayed to drivers offering the ride
        </InnerTextHeader>
      </Header>
      <Footer>
        <ScrollView>
          <Action>
            <Input placeholder="Enter your first name" label="First name" />
          </Action>
          <Action>
            <Input placeholder="Enter your last name" label="Last name" />
          </Action>
          <Action>
            <Input
              placeholder="Enter your email address"
              label="Email address"
            />
          </Action>
          <Action>
            <Input placeholder="Mobile phone number" label="Phone" />
          </Action>
          <Action>
            <Input placeholder="Which city do you reside" label="City" />
          </Action>
          <ButtonContainer>
            <Signup>
              <TextSignup>Submit</TextSignup>
            </Signup>
          </ButtonContainer>
          <TextLogin>
            <SignupText>
              Already signed up ?
              <LoginLink oPress={() => Linking.openURL('http://google.com')}>
                Login
              </LoginLink>
            </SignupText>
          </TextLogin>
        </ScrollView>
      </Footer>
    </Container>
  );
};

export default SignUp;

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  height: 100px;
  padding: 20px;
`;

const Header = styled.View`
  flex: 1;
  justify-content: flex-end;
  margin-top: -60px;
`;
const Footer = styled.View`
  flex: 3;
  background-color: #fff;
`;
const TextHeader = styled.Text`
  color: #000;
  font-weight: bold;
  font-size: 25px;
  padding-left: 5px;
`;
const InnerTextHeader = styled.Text`
  color: grey;
  font-size: 14px;
  padding-top: 5px;
  padding-left: 5px;
  width: 87%;
`;

const Action = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding-bottom: 5px;
`;

const ButtonContainer = styled.View`
  align-items: center;
  margin-top: 50px;
`;
const Signup = styled.View`
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #1f75fe;
`;
const TextSignup = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;
const TextLogin = styled.View`
  align-items: center;
`;
const SignupText = styled.Text`
  color: grey;
`;
const LoginLink = styled.Text`
  color: #1f75fe;
`;
