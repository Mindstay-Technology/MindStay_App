import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({

  //-----------------------------Styles for Chat tab screen------------------------------- 
  chatListContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems:'center',
    backgroundColor: '#ffffff',
  },
  chatListView:{
    marginTop:'3%',
    width:'95%',
   // borderWidth:1,
   // borderColor:'#E3E3E3',
    alignSelf:'center',
    borderRadius:10
  },
  chatListHeaderMsg:{
    color:'#333333',
    fontSize:16,
    fontWeight:'900',
    marginLeft:'5%',
    marginBottom:'3%',
    marginTop:'3%'
  },
  searchMessageView:{
    flexDirection:'row',
    width:'90%',
    height:50,
    borderWidth:1,
    borderColor:'#E3E3E3',
    alignSelf:'center',
    justifyContent:'space-between',
    alignItems:'center',
    borderRadius:30,
    marginBottom:'5%'
  },
  searchMessageText:{
    color:'#333333',
    fontSize:14,
    fontWeight:'400',
    marginLeft:'5%',
  },
  searchIcon:{
    marginRight:'5%'
  },
  empChatListView: {
    width:'95%',
    height:70,
    backgroundColor:'#ffffff',
    alignSelf:'center',
    justifyContent:'center',
    marginBottom:'2%'
  },
  empChatRowData:{
    flexDirection:'row',
    marginLeft:'2%',
  // alignContent:'center',
    alignItems:'center',
  //  justifyContent:'space-around'
    
  },
  chatProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
 //   alignItems:'center',
    marginRight:'3%'
  },
  empNameText:{
    color:'#000',
    fontSize:14,
    fontWeight:'900'
  },
  messageText:{
    color:'#333333',
    fontSize:14,
    fontWeight:'400',
  },
  msgTimeCountView:{
    position:'absolute',
    left:'85%',
    alignSelf:'center',
  },
  msgTimeText:{
    color:'#2676C2',
    fontSize:12,
    fontWeight:'600',
    
  },
  msgCountView:{
    width:25,
    height:25,
    borderRadius:12.5,
    backgroundColor:'#2676C2',
    alignSelf:'flex-end',
    justifyContent:'center',
   },
   msgCountText:{
    color:'#ffffff',
    fontSize:10,
    fontWeight:'900',
    textAlign:'center'
   },

   //---------------------Styles for Chat Container view ------------------------
   chatScreenContainerView:{
    flex: 1,
   // justifyContent: 'flex-start',
    // alignItems:'center',
    backgroundColor: '#ffffff',
   },
   chatScreenHeaderView:{
    flexDirection:'row',
    height:70,
    backgroundColor:'#2676C2',   
    marginBottom:'3%',
    alignItems:'center',
    position:'absolute',
    width:'100%',
    bottom:'90%'

   },
   backArrow:{
    width:26,
    height:26,
    marginLeft:'5%',
   },
   containerProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
    marginRight:'2%'
 //   alignItems:'center',
  },
  containerEmpName:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'600',
  },
  sendMsgInputView:{
    flexDirection:'row',
   // justifyContent:'space-between',
    marginHorizontal:'1%',
    position:'absolute',
    top:'93%',
      
  },
  inputAttachView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'85%',
    height:50,
    borderRadius:30,
    borderWidth:1,
    borderColor:'#FFFFFF33',
    backgroundColor:'lightgrey',
    marginRight:'1%',
    opacity:.7
  //  elevation:5, 

    
  },
  typeMsgInput:{
    fontSize:18,
    fontWeight:'400',
    paddingLeft:'2%',
    marginLeft:'5%'
  },
  attachImage:{
width:25,
height:25,
marginRight:'4%'
  },
  sendImageView:{
    width:50, 
    height:50,
    borderRadius:25,
    backgroundColor:'#2676C2',
    justifyContent:'center'
  },
  sendImage:{
    width:35,
    height:35,
    alignSelf:'center'
  },

//   messageListView:{
// //    backgroundColor:'lightgreen'
//     width:'95%',
//     height:'90%',
//     borderWidth:1,
//     borderColor:'red'
//   },

myMsgView:{
  width:'60%',
  borderWidth:1,
  borderColor:'#2676C2',
  left:'38%',
  backgroundColor:'#2676C2',
  borderTopLeftRadius:8,
  borderTopRightRadius:20,
  borderBottomLeftRadius:8,
  marginBottom:'2%'
},
myMsgText:{
  color:'#ffffff',
  fontSize:12,
  fontWeight:'400',
  marginLeft:'2%',
  padding:'3%'
},
timeStampText:{
  color:'#ffffff',
  fontSize:10,
  fontWeight:'400',
  left:'75%',
  bottom:'5%',
  position:'absolute'
}
});
