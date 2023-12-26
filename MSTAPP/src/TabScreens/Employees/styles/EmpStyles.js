import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  //-----------------------------Styles for emp tab screen-------------------------------
  empListContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems:'center',
    backgroundColor: '#ffffff',
  },
  empListView: {
    width: '95%',
    height: 80,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: '5%',
    alignSelf: 'center',
    justifyContent: 'center',
    elevation: 5,
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  empListRowData: {
    flexDirection: 'row',
    marginLeft: '5%',
    // alignContent:'center',
    alignItems: 'center',
    //  justifyContent:'space-around'
  },
  empListProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'contain',
    //   alignItems:'center',
    marginRight: '3%',
  },
  empListName: {
    color: '#2676C2',
    fontSize: 14,
    fontWeight: '900',
  },
  empListDesignation: {
    color: '#2676C2',
    fontSize: 14,
    fontWeight: '600',
  },
  empListID: {
    color: '#2676C2',
    fontSize: 14,
    fontWeight: '600',
  },
  forwardImageView: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#2676C233',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2676C233',
    position: 'absolute',
    left: '80%',
  },

  //-----------------------Styles for EmployeeProfile screen--------------------------------
  empProfileContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems:'center',
    backgroundColor: '#ffffff',
  },
  empProfileHeader: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#2676C2',
    marginBottom: '2%',
    alignItems: 'center',
  },
  profileBackArrow: {
    width: 26,
    height: 26,
    marginLeft: '8%',
    resizeMode: 'contain',
  },
  profileHeaderText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
  },

  profileDetailsView: {
    alignSelf: 'center',
    justifyContent:'center',
    marginTop: '5%',
    alignItems: 'center',
    width:'90%',
    height:'50%',
    borderColor:'#ffffff',
    borderWidth:1,
    elevation:5,
    backgroundColor:'#ffffff'
  },
  profileDetailImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: '5%',
  },
  profileDetailsView1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
   // borderColor:'red',
    //borderWidth:1,
  },
  profileDetailText: {
    color: '#2676C2',
    fontSize: 20,
    fontWeight: '600',
    marginBottom:'5%',
    alignItems:'center',
    justifyContent:'flex-start'
  },
  profileDetailText1: {
    color: '#333333',
    fontSize: 20,
    fontWeight: '600',
    marginBottom:'5%',
    alignItems:'center',
    justifyContent:'flex-start'
  },
});
