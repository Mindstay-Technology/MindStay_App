import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const TopHeader = () => {
  const Navigation = useNavigation();

  const handleNotification = () => {
    Navigation.navigate('NotificationScreen');
  };

  return (
    <View>
      <View style={styles.mainHeaderView}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logoImage}
        />
        <TouchableOpacity onPress={() => handleNotification()}>
          <Image
            source={require('../assets/icons/bell.png')}
            style={styles.bellImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '2%',
    paddingBottom: '1%',
    borderBottomWidth: 0.3,
    borderColor: '#888888',
    marginBottom: '3%',
  },
  logoImage: {
    width: 140,
    height: 50,
    resizeMode: 'contain',
    marginLeft: '3%',
  },
  bellImage: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: '7%',
  },
});

export default TopHeader;
