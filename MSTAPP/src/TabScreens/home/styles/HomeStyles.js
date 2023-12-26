import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  //-----------------------------Styles for home tab screen-------------------------------
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems:'center',
    backgroundColor: '#ffffff',
  },
   empDetailsView: {
    width: '95%',
    height: 70,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent:'center',
    marginBottom: '5%',
    backgroundColor:'#ffffff',
    elevation:5,
  },
  empDetailsRow: {
    flexDirection: 'row',
    alignItems:'center',
    marginLeft:'2%'
  },
  empNameText: {
    color: '#2676C2',
    fontSize: 14,
    fontWeight: '900',
  //  textAlign: 'center',
    marginTop: '1%',
    marginBottom: '1%',
  },
  
  empDesignationText: {
    color: '#2676C2',
    fontSize: 14,
    fontWeight: '900',
  },
  empIDText: {
    color: '#2676C2',
    fontSize: 14,
    fontWeight: '900',
  },
  OfficeTimeView: {
   flexDirection: 'column',
   justifyContent:'space-around',
    width: '95%',
    height: 70,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: '5%',
    elevation:5,
    backgroundColor:'#ffffff',
    
  },
  officeTimeText: {
    color: '#2676C2',
    fontSize: 14,
    fontWeight: '900',
    marginLeft: '2%',
    alignSelf:'center'
  },
  timeText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: '2%',
  //  marginTop: '2%',
  },
  locationText: {
    color: '#2676C2',
    fontSize: 14,
    fontWeight: '900',
    marginLeft: '2%',
  },
  locationText1: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    marginLeft: '8%',

  },
  startEndTimeView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '5%',
  },
  startTimeView: {
    width: '40%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 25,
    backgroundColor:'#ffffff',
    elevation:5
  },
  startTimeImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  currentTimeText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: '5%',
  },
  startTimeText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  endTimeView: {
    width: '40%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 25,
    backgroundColor:'#ffffff',
    elevation:5
  },
  endTimeImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '5%',
  },
  endTimeText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },

  reportingManageView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '5%',
  },

  jobReportingView: {
    width: '40%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 25,
    backgroundColor:'#ffffff',
    elevation:5
    
  },
  jobReportingImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '20%',
  },
  jobReportingText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },

  teamManageView: {
    width: '40%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 25,
    backgroundColor:'#ffffff',
    elevation:5
  },
  teamManageImage: {
    width: 40,
    height: 40,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '15%',
  },
  teamManageText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },

  //-----------
  teamRecordView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '5%',
  },

  myTeamView: {
    width: '40%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 25,
    backgroundColor:'#ffffff',
    elevation:5
  },
  myTeamImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '20%',
  },
  myTeamText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },

  recordView: {
    width: '40%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 25,
    backgroundColor:'#ffffff',
    elevation:5
  },
  recordImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '20%',
  },
  recordText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },

  //-----------
  navigateWFHView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: '3%',
  },

  navigateView: {
    width: '40%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 25,
    backgroundColor:'#ffffff',
    elevation:5
  },
  navigateImage: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '10%',
  },
  navigateText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },

  wfhView: {
    width: '40%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 25,
    backgroundColor:'#ffffff',
    elevation:5
  },
  wfhImage: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    marginTop: '5%',
    marginBottom: '10%',
  },
  wfhText: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  wfhText1: {
    color: '#333333',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },

  logoutButtonView: {
    width: '95%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 8,
    justifyContent: 'center',
    alignSelf:'center',
    backgroundColor:'#ffffff',
    elevation:5,
    marginTop:'5%',
    marginBottom:'3%'
  },
  logoutText: {
    color: '#2676C2',
    fontSize: 20,
    fontWeight: '900',
    textAlign: 'center',
  },
});
