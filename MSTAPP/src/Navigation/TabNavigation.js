import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../TabScreens/home/HomeScreen';
import MyProgram from '../TabScreens/myProgram/MyProgram';
import ChatList from '../TabScreens/chat/ChatList';
import {Image, View, Text} from 'react-native';
import EmployeeList from '../TabScreens/Employees/EmployeeList';


const CommonTabOptions = {
  headerShown: false,
  tabBarLabelStyle:{fontSize:10, fontWeight:'900'},
  tabBarItemStyle: {
     margin:'2%',
    alignItems:'center'
  },
  tabBarActiveTintColor: '#2676C2',
  tabBarInactiveTintColor: '#ffffff',
};

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="ChatList"
      screenOptions={{
        tabBarShowLabel: true,
        tabBarStyle: {
          height: 60,
        },
        
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          ...CommonTabOptions,
          tabBarLabel: 'Home',
          
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/home.png')}
                style={{
                  height: 28,
                  width: 28,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2676C2' : '#8D8D8D',
                }}
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="EmployeeList"
        component={EmployeeList}
        options={{   
          ...CommonTabOptions,       
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/emp.png')}
                style={{
                  height: 28,
                  width: 28,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2676C2' : '#8D8D8D',
                }}
              />
            </View>
          ),
          tabBarLabel: 'Employees',
        }}
      />

      <Tab.Screen
        name="MyProgram"
        component={MyProgram}
        options={{
          ...CommonTabOptions,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/program.png')}
                style={{
                  height: 28,
                  width: 28,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2676C2' : '#8D8D8D',
                }}
              />
            </View>
          ),
          tabBarLabel: 'My Program',
        }}
      />

      <Tab.Screen
        name="ChatList"
        component={ChatList}
        options={{
          ...CommonTabOptions,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../assets/icons/chat.png')}
                style={{
                  height: 28,
                  width: 28,
                  resizeMode: 'contain',
                  tintColor: focused ? '#2676C2' : '#8D8D8D',
                }}
              />
            </View>
          ),
          tabBarLabel: 'Chat',
        }}
      />

    </Tab.Navigator>
  );
};

export default MyTabs;
