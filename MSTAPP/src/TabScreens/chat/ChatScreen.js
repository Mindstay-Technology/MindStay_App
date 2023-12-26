import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useCallback, useState, useEffect} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import styles from './styles/chatStyles';

const ChatScreen = ({route}) => {
  const {empData} = route.params;
  const Navigation = useNavigation();

  const getCurrentTime = () => {
    const currentDate = new Date();
    const options = {
      timeZone: 'Asia/Kolkata',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Intl.DateTimeFormat('en-US', options).format(currentDate);
  };

  // useFocusEffect(useCallback(()=>{
  //   setCustomStyle({ontSize: 16,
  //     fontWeight: '600',});
  //     setMessageInput('')
  // }), [])
  const [messageInput, setMessageInput] = useState('');
  const [messages, setMessages] = useState([]);

  const [customStyle, setCustomStyle] = useState({
    fontSize: 16,
    fontWeight: '600',
  });

  const gotoChatList = useCallback(() => {
    Navigation.navigate('ChatList');
  }, [Navigation]);

  const sendMessage = () => {
    if (messageInput.trim() === '') {
      return;
    }
    const newMessage = {
      //  id: messages.length.toString(),
      text: messageInput,
      timestamp: getCurrentTime(),
    };
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessageInput('');
  };

  const renderMessages = ({item, index}) => {
    return (
      <View style={styles.messageListView}>
        <View style={styles.myMsgView}>
          <Text style={styles.myMsgText}>{item.text} </Text>
          <Text style={styles.timeStampText}>{item.timestamp}</Text>
        </View>
      </View>
    );
  };

  const keyExtractor = item => item.toString();

  return (
    <View style={styles.chatScreenContainerView}>
      <View
        style={{marginTop: '20%', width: '100%'}}>
        <FlatList
          data={messages}
          renderItem={renderMessages}
          keyExtractor={keyExtractor}
        />
      </View>

      <View style={styles.chatScreenHeaderView}>
        <TouchableOpacity onPress={() => gotoChatList()}>
          <Image
            source={require('../../assets/icons/backArrow.png')}
            style={styles.backArrow}
          />
        </TouchableOpacity>
        <Image source={empData.image} style={styles.containerProfileImage} />
        <Text style={styles.containerEmpName}>{empData.name}</Text>
      </View>
      <View style={styles.sendMsgInputView}>
        <View style={styles.inputAttachView}>
          <TextInput
            value={messageInput}
            onChangeText={text => {
              setMessageInput(text);
              setCustomStyle({
                fontSize: text.length <= 0 ? 14 : 18,
                fontWeight: text.length <= 0 ? '500' : '600',
              });
            }}
            placeholder="Message"
            placeholderTextColor="#8D8D8D"
            style={[
              styles.typeMsgInput,
              {
                fontSize: customStyle.fontSize,
                fontWeight: customStyle.fontWeight,
              },
            ]}
          />
          <TouchableOpacity>
            <Image
              source={require('../../assets/icons/attach.png')}
              style={styles.attachImage}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.sendImageView}
          onPress={() => sendMessage()}>
          <Image
            source={require('../../assets/icons/chat_send.png')}
            style={styles.sendImage}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;
