// SplashScreen1.js
import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen2 = () => {
  const navigation = useNavigation();
  const [alignSecond, setAlignSecond] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAlignSecond(true);
      setTimeout(() => {
        navigation.navigate('LoginScreen');
      }, 1000);
    }, 0); // Adjust the delay as needed
  });

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/background.png')}
        style={{
          width: '100%',
          height: '100%',
          overflow: 'visible',
          position: 'absolute',
        }}
      />
      {!alignSecond ? null : (
        <View>
          <Image
            source={require('../assets/images/logo.png')}
            style={{
              width: 300,
              height: 111,
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SplashScreen2;
