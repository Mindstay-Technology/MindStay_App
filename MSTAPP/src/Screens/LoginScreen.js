import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState, useRef, useEffect, useCallback} from 'react';
import styles from '../style/styles';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import Axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {Login, setEmpID, setPassword} from '../redux/actions/authAction';

const LoginScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const empID = useSelector(state => state.auth.empID);
  const password = useSelector(state => state.auth.password);

  //  const [empID, setEmpID] = useState('');
  // const [password, setPassword] =useState('');
  const [empIDError, setEmpIDError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [customStyle, setCustomStyle] = useState({
    fontSize: 14,
    fontWeight: '400',
  });

  useFocusEffect(
    useCallback(() => {
      setEmpID('');
      setPassword('');
      setCustomStyle({fontSize: 14, fontWeight: '400'});
    }, []),
  );

  const handleLogin = () => {
    const empIDValue = empID.trim();
    const passwordValue = password.trim();

    if (!empIDValue) {
      setEmpIDError('Please enter Employee ID .');
      return;
    } else if (!passwordValue) {
      setPasswordError('Please enter the password');
      return;
    }
    dispatch(setEmpID(empIDValue));
    dispatch(setPassword(passwordValue));
    // dispatch(SignIn(empIDValue, passwordValue));

    setEmpIDError('');
    setPasswordError('');

    navigation.navigate('MyTabs');
  };

  return (
    <View style={styles.loginContainer}>
      <ScrollView>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.imageLogoStyle}
        />
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.MindStayText}>MindStay Technology!</Text>

        <KeyboardAvoidingView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                height: '200%',
                width: '400%',
                borderRadius: 600,
                backgroundColor: '#2676C2',
                right: '50%',
                borderWidth: 10,
                borderColor: '#A9CCE3',
                bottom:'5%'
              }}>
              <View style={{marginLeft: '13%', marginTop: '1%'}}>
                <Text style={styles.empIDText}>Employee ID</Text>
                <TextInput
                  style={[
                    styles.empInput,
                    {
                      fontSize: customStyle.fontSize,
                      fontWeight: customStyle.fontWeight,
                    },
                  ]}
                  placeholder="Enter Employee ID"
                  //   value={empID}
                  // onChangeText={text => {
                  //   setEmpID(text);
                  //   setEmpIDError('');
                  //   setCustomStyle({
                  //     fontSize: text.length <= 0 ? 14 : 20,
                  //     fontWeight: text.length <= 0 ? '400' : 'bold',
                  //   });
                  //   //  setCustomStyle({})
                  // }}
                  onChangeText={text => {
                    dispatch(setEmpID(text));
                    setCustomStyle({
                      fontSize: text.length <= 0 ? 14 : 20,
                      fontWeight: text.length <= 0 ? '400' : 'bold',
                    });
                    setEmpIDError('');
                  }}
                  placeholderTextColor={'#E9E9E9'}
                />
                {empIDError !== '' && (
                  <Text style={styles.empIDErrorStyle}>{empIDError}</Text>
                )}

                <Text style={styles.passwordText}>Password</Text>
                <TextInput
                  style={[
                    styles.passwordInput,
                    {
                      fontSize: customStyle.fontSize,
                      fontWeight: customStyle.fontWeight,
                    },
                  ]}
                  placeholder="Enter Password"
                  //  value={password}
                  // onChangeText={text => {
                  //   setPassword(text);
                  // setPasswordError('');
                  //   setCustomStyle({
                  //     fontSize: text.length <= 0 ? 14 : 20,
                  //     fontWeight: text.length <= 0 ? '400' : 'bold',
                  //   });
                  //   //  setCustomStyle({})
                  // }}
                  onChangeText={text => {
                    dispatch(setPassword(text));
                    setCustomStyle({
                      fontSize: text.length <= 0 ? 14 : 20,
                      fontWeight: text.length <= 0 ? '400' : 'bold',
                    });
                    setPassword('');
                  }}
                  placeholderTextColor={'#E9E9E9'}
                />
                {passwordError !== '' && (
                  <Text style={styles.passwordErrorStyle}>{passwordError}</Text>
                )}

                <TouchableOpacity
                  style={styles.getOTPButton}
                  onPress={() => handleLogin()}>
                  <Text style={styles.getOTPButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </ScrollView>
    </View>
  );
};

export default LoginScreen;