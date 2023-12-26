import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles/EmpStyles';

const EmployeeProfile = ({route}) => {
  const Navigation = useNavigation();
  const {Items} = route.params;

  const gotoEmployeeScreen = useCallback(() => {
    Navigation.navigate('EmployeeList');
  }, [Navigation]);
  
  return (
    <View style={styles.empProfileContainer}>
      <View style={styles.empProfileHeader}>
        <TouchableOpacity onPress={() => gotoEmployeeScreen()}>
          <Image
            source={require('../../assets/icons/backArrow.png')}
            style={styles.profileBackArrow}
          />
        </TouchableOpacity>
        <Text style={styles.profileHeaderText}>Employee Details</Text>
      </View>

      <View style={styles.profileDetailsView}>
        <Image source={Items.image} style={styles.profileDetailImage} />

        <View style={styles.profileDetailsView1}>
          <View style={{flexDirection:'column', justifyContent:'space-around'}}>
            <Text style={styles.profileDetailText}>Name</Text>
            <Text style={styles.profileDetailText}>Designation</Text>
            <Text style={styles.profileDetailText}>Employee ID</Text>
            <Text style={styles.profileDetailText}>Email</Text>
            <Text style={styles.profileDetailText}>Location</Text>
          </View>

          <View style={{flexDirection:'column', justifyContent:'space-around'}}>
            <Text style={styles.profileDetailText1}> : {Items.name}</Text>
            <Text style={styles.profileDetailText1}> : {Items.designation}</Text>
            <Text style={styles.profileDetailText1}> : {Items.empID}</Text>
            <Text style={styles.profileDetailText1}> : {Items.email}</Text>
            <Text style={styles.profileDetailText1}> : {Items.location}</Text>
          </View>
        </View>


        {/* <View style={{justifyContent:'flex-start'}}>

        <View style={{flexDirection:'row', }}>
        <Text style={styles.profileDetailText}>Name</Text>
        <Text style={styles.profileDetailText}> : {Items.name}</Text>
        </View>
        <View style={{flexDirection:'row', }}>
        <Text style={styles.profileDetailText}>Designation</Text>
        <Text style={styles.profileDetailText}> : {Items.designation}</Text>
        </View>

        </View> */}

      </View>
    </View>
  );
};

export default EmployeeProfile;
