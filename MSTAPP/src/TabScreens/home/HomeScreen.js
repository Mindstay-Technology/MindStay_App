import {View, Text, Image, TouchableOpacity, ScrollView, Alert} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/HomeStyles';
import TopHeader from '../../Components/TopHeader';

const HomeScreen = () => {
  const Navigation = useNavigation();
  const [currentTime, setCurrentTime] = useState(getCurrentTime);

  const getCurrentTime = () => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${hours}:${formattedMinutes}:${formattedSeconds}`;
  };

  useEffect(() => {
    // Update the time every second
    const intervalId = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);


  const handleLogout = () => {
    Alert.alert(
      '',
      'Do you want to proceed?',
      [
        {
          text: 'Cancel',
          style: 'cancel',          
        },
        {
          text: 'Yes',
          onPress: () => {
            // Handle the "Yes" button press here
            console.log('Yes button pressed');
          },
        },
      ],
      { cancelable: false }
    );
  };


  return (
    <View style={styles.homeContainer}>
      
      <TopHeader/>

      <ScrollView>
        <View style={styles.empDetailsView}>
          
          <View style={styles.empDetailsRow}>
            <Image source={require('../../assets/images/profile1.png')} style={{width:50, height:50, borderRadius:25, resizeMode:'contain', marginRight:'5%',}}/>
          <View>
          <Text style={styles.empNameText}>Abdul</Text>
          <Text style={styles.empDesignationText}>Developer</Text>
            <Text style={styles.empIDText}>Employee ID : 022</Text>
          </View>
          </View>
        </View>

        <View style={styles.OfficeTimeView}>
          <View style={{flexDirection:'row',marginLeft:'2%'}}>
          <Text style={styles.officeTimeText}>Office Time</Text>
          <Text style={styles.timeText}>: From 09:00 AM To 06:00 PM</Text>
          </View>
          <View style={{flexDirection:'row', marginLeft:'2%'}}>
          <Text style={styles.locationText}>Location</Text>
          <Text style={styles.locationText1}>: Bangalore</Text>
          </View>
        </View>

        {/* <View style={styles.locationView}>
          <Text style={styles.locationText}>Location</Text>
          <Text style={styles.locationText1}>: Bangalore</Text>
        </View> */}

        <View style={styles.startEndTimeView}>
          <View style={styles.startTimeView}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/startTime.png')}
                style={styles.startTimeImage}
                resizeMode="contain"
              />
              <Text style={styles.currentTimeText}>09:00</Text>
              <Text style={styles.startTimeText}> Start Office Time</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.endTimeView}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/startTime.png')}
                style={styles.endTimeImage}
                resizeMode="contain"
              />
              <Text style={styles.currentTimeText}>18:00</Text>
              <Text style={styles.endTimeText}>End Office Time</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.reportingManageView}>
          <View style={styles.jobReportingView}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/flag.png')}
                style={styles.jobReportingImage}
                resizeMode="contain"
              />

              <Text style={styles.jobReportingText}> Job Reporting</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.teamManageView}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/team.png')}
                style={styles.teamManageImage}
                resizeMode="contain"
              />
              <Text style={styles.teamManageText}>Team Management</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.teamRecordView}>
          <View style={styles.myTeamView}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/startTime.png')}
                style={styles.myTeamImage}
                resizeMode="contain"
              />

              <Text style={styles.myTeamText}> My Team</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.recordView}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/database.png')}
                style={styles.recordImage}
                resizeMode="contain"
              />
              <Text style={styles.recordText}>View Record</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.navigateWFHView}>
          <View style={styles.navigateView}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/navigation.png')}
                style={styles.navigateImage}
                resizeMode="contain"
              />
              <Text style={styles.navigateText}> Navigate to Allocated Location</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.wfhView}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/startTime.png')}
                style={styles.wfhImage}
                resizeMode="contain"
              />
              <Text style={styles.wfhText}>Apply/Cancel Leave</Text>
              <Text style={styles.wfhText1}>Work From Home</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.logoutButtonView}>
          <TouchableOpacity onPress={()=>handleLogout()}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>

        
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
