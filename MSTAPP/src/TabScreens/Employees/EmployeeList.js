import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles/EmpStyles';
import {Employees} from '../../constants/Constants';
import TopHeader from '../../Components/TopHeader';

const EmployeeList = () => {
  const Navigation = useNavigation();
  const [empListData, setEmpListData] = useState(Employees);


  const gotoEmpProfile = (item, index) => {
    Navigation.navigate('EmployeeProfile', {Items: item});
  };

  const renderEmpData = ({item, index}) => {
    return (
      <View style={styles.empListView}>
        <View style={styles.empListRowData}>
          <Image source={item.image} style={styles.empListProfileImage} />
          <View>
            <Text style={styles.empListName}>{item.name}</Text>
            <Text style={styles.empListDesignation}>{item.designation}</Text>
            <Text style={styles.empListID}>{item.empID}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => gotoEmpProfile(item, index)}
          style={styles.forwardImageView}>
          <Image
            source={require('../../assets/icons/forwardArrow.png')}
            style={{width: 30, height: 30, resizeMode:"contain"}}
            
          />
        </TouchableOpacity>
      </View>
    );
  };

  const keyExtractor = item => item.toString();
  return (
    <View style={styles.empListContainer}>
    
      <TopHeader/>

      <ScrollView>
        <FlatList
          data={empListData}
          renderItem={renderEmpData}
          keyExtractor={keyExtractor}
        />
      </ScrollView>
    </View>
  );
};

export default EmployeeList;
