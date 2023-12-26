import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import styles from './styles/chatStyles';
import {Employees} from '../../constants/Constants';
import TopHeader from '../../Components/TopHeader';

const ChatList = () => {
  const Navigation = useNavigation();
  const [chatListData, setChatListData] = useState(Employees);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const [searchText, setSearchText] = useState('');
  const [isSearch, setIsSearch] = useState(false);


  

  const gotoChatScreen = (item, index) => {
    Navigation.navigate('ChatScreen', {empData: item});
  };


  const handleSearch = (text) => {
    setIsSearch(true);
    // Update the search text
    setSearchText(text);

    // Filter employees based on the entered text
    const filtered = chatListData.filter((employee) =>
      employee.name.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredEmployees(filtered);
  };


  const renderChatListData = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => gotoChatScreen(item, index)}>
        <View style={styles.empChatListView}>
          <View style={styles.empChatRowData}>
            <Image source={item.image} style={styles.chatProfileImage} />
            <View>
              <Text style={styles.empNameText}>{item.name}</Text>
              <Text style={styles.messageText}>Hi how are you</Text>
            </View>
          </View>

          <View style={styles.msgTimeCountView}>
            <Text style={styles.msgTimeText}>9:14 AM</Text>
            <View style={styles.msgCountView}>
              <Text style={styles.msgCountText}>10</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const keyExtractor = item => item.toString();
  //-----------------------------------------------------------------
  return (
    <View style={styles.chatListContainer}>
    <TopHeader/>

      <View style={styles.chatListView}>
        <ScrollView>
          <Text style={styles.chatListHeaderMsg}>Messages (12)</Text>

          <View style={styles.searchMessageView}>
            <TextInput
              value={searchText}
              onChangeText={handleSearch}
              placeholder="Search Message"
              style={styles.searchMessageText}
              autoFocus={false}
            />
            <TouchableOpacity>
              <Image
                source={require('../../assets/icons/magnify.png')}
                style={styles.searchIcon}
              />
            </TouchableOpacity>
          </View>

          <FlatList
            data={isSearch ? filteredEmployees : chatListData}
            renderItem={renderChatListData}
            keyExtractor={keyExtractor}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default ChatList;
