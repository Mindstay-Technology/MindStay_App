import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles/MyProgramStyles';
import TopHeader from '../../Components/TopHeader';

const MyProgram = () => {
  const Navigation = useNavigation();

  return (
    <View style={styles.proScreenContainer}>
      <TopHeader/>

      <ScrollView></ScrollView>
    </View>
  );
};

export default MyProgram;
