/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Enter your details</Text>
        <Text style={styles.mini_text_header}>
          This info will be displayed to drivers offering the ride
        </Text>
      </View>
      <View style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>First name</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter your first name"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>Last name</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter your last name"
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>Email</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Enter your email address"
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>Phone</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Mobile phone number"
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <Text style={[styles.text_footer, {marginTop: 35}]}>City</Text>
          <View style={styles.action}>
            <TextInput
              placeholder="Which city do you reside"
              secureTextEntry={true}
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.button}>
            <LinearGradient
              colors={['#007FFF', '#1F75FE']}
              style={styles.signUp}>
              <Text style={[styles.textSignup, {color: '#fff'}]}>Sign In</Text>
            </LinearGradient>
          </View>
          <View style={styles.textLogin}>
            <Text style={styles.signupText}>
              Already signed up ?
              <Text
                style={styles.loginLink}
                oPress={() => Linking.openURL('http://google.com')}>
                Login
              </Text>
            </Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: 100,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
    marginTop: -60,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 20,
  },
  mini_text_header: {
    color: 'grey',
    fontSize: 14,
    paddingTop: 5,
    width: '82%',
  },
  text_footer: {
    color: '#000000',
    fontSize: 18,
    marginBottom: 5,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: -12,
    paddingLeft: 16,
    color: '#85375a',
    backgroundColor: '#fdfbfb',
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signUp: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSignup: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textLogin: {
    alignItems: 'center',
  },
  signupText: {
    color: 'grey',
  },
  loginLink: {
    color: '#1F75FE',
  },
});
