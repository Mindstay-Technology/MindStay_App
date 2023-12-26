
import { View, Text, TouchableOpacity, Image} from 'react-native'
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from '../style/styles'

const NotificationScreen = () => {


  const Navigation = useNavigation();

  const gotoEmployeeScreen = useCallback(() => {
    Navigation.navigate('MyTabs');
  });

  return (
    <View style={styles.notifyContainer}>
 <View style={styles.notifyHeader}>
        <TouchableOpacity onPress={() => gotoEmployeeScreen()}>
          <Image
            source={require('../assets/icons/backArrow.png')}
            style={styles.notifyBackArrow}
          />
        </TouchableOpacity>
        <Text style={styles.notifyHeaderText}>Notifications</Text>
      </View>
    </View>
  )
}

export default NotificationScreen