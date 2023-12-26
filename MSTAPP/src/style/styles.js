import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  
  //--------------------------------Styles for Login Page----------------------------------------
  loginContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  imageLogoStyle: {
    resizeMode: 'contain',
    marginLeft: '7%',
    marginBottom: '3%',
    width: 180,
    height: 100,
    marginTop: '5%',
  },
  welcomeText: {
    color: '#2676C2',
    fontSize: 26,
    fontWeight: '600',
    marginLeft: '7%',
    marginBottom:'2%'

    //fontFamily:'Poppins-SemiBold'
  },
  MindStayText: {
    color: '#2676C2',
    fontSize: 26,
    fontWeight: '900',
    marginLeft: '7%',
    marginBottom:'25%'
    //fontFamily:'Poppins-SemiBold'
  },

  empIDText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: '1%',
    marginTop: '10%',
    marginLeft: '1%',
    //fontFamily:'Poppins-SemiBold'
  },
  empInput: {
    height: 55,
    width: '25%',
    borderWidth: 1.3,    
    borderColor: '#FFFFFF33',
    borderRadius: 10,
    color: '#E9E9E9',
    paddingLeft: 15,
    marginLeft: '1%',
    marginBottom: '1%',
    backgroundColor: '#FFFFFF33',
    // fontFamily:'Poppins-Regular'
  },
  empIDErrorStyle: {
    color: 'red',
    marginBottom: '2%',
    alignSelf: 'flex-start',
    width: '80%',
    marginTop: '-1%',
    marginLeft: '1%',
  },
  passwordText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: '1%',
    marginTop: '2%',
    marginLeft: '1%',
    //fontFamily:'Poppins-SemiBold'
  },
  passwordInput: {
    height: 55,
    width: '25%',
    borderWidth: 1.3,    
    borderColor: '#FFFFFF33',
    borderRadius: 10,
    color: '#E9E9E9',
    paddingLeft: 15,
    marginLeft: '1%',
    marginBottom: '3%',
    backgroundColor: '#FFFFFF33',
    // fontFamily:'Poppins-Regular'
  },
  passwordErrorStyle: {
    color: 'red',
    marginBottom: '2%',
    alignSelf: 'flex-start',
    width: '80%',
    marginTop: '-3%',
    marginLeft: '1%',
  },
  getOTPButton: {

    backgroundColor: '#ffff',
    height: 44,
    width: '14%',
    borderRadius: 10,
    marginBottom: '3%',
    marginLeft: '7%',
    justifyContent: 'center',
    alignSelf: 'flex-start',
  },
  getOTPButtonText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: '#2676C2',
    // fontFamily:'Poppins-SemiBold'
  },
  
  
  //-----------------------------Styles for Notification Screen-------------------------------

  notifyContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems:'center',
    backgroundColor: '#ffffff',
  },
  notifyHeader: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#2676C2',
    marginBottom: '2%',
    alignItems: 'center',
  },
  notifyBackArrow: {
    width: 25,
    height: 25,
    marginLeft: '8%',
    resizeMode: 'contain',
  },
  notifyHeaderText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '900',
  },
  notifyTopRow: {
    flexDirection: 'row',
    marginBottom: '5%',
    marginTop: '5%',
    marginLeft: '3%',
  },
  notifyBack: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  notifyText: {
    color: '#333333',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: '5%',
  },
  notifyFlatData: {
    // flex:1,
    justifyContent: 'center',
    marginLeft: '5%',
    backgroundColor: '#ffffff',
    width: '90%',
    height: 130,
    borderRadius: 8,
    marginBottom: '2%',
  },
  notifyTrainerRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '95%',
    height: '70%',
    marginLeft: '2.5%',
    marginBottom: '3%',
  },
  notifyColumnView: {
    marginTop: '1%',
    marginLeft: '3%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  notifyName: {
    color: '#333333',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: '2%',
  },
  notifyDesignation: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: '2%',
  },
  notifyInterestText: {
    color: '#888888',
    fontSize: 12,
    fontWeight: '400',
    marginBottom: '3%',
  },
  decAccButtonView: {
    flexDirection: 'row',
  },
  notifyDecButton: {
    width: '35%',
    height: 30,
    backgroundColor: '#8383831A',
    borderRadius: 40,
    justifyContent: 'center',
    marginRight: '3%',
  },
  notifyDecText: {
    color: '#AFAFAF',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  notifyAccButton: {
    width: '35%',
    height: 30,
    backgroundColor: '#2676C233',
    borderRadius: 40,
    justifyContent: 'center',
  },

  notifyAccText: {
    color: '#2676C2',
    fontSize: 12,
    fontWeight: '400',
    textAlign: 'center',
  },
  notifyHorizontal: {
    width: '90%',
    backgroundColor: '#D9D9D9',
    height: 1,
    marginBottom: '3%',
    marginLeft: '5%',
  },

  notifyFlatData1: {
    // flex:1,
    justifyContent: 'center',
    marginLeft: '5%',
    backgroundColor: '#ffffff',
    width: '90%',
    height: 90,
    borderRadius: 8,
    marginBottom: '2%',
  },
  notifyPostedRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    width: '95%',
    height: '70%',
    marginLeft: '2.5%',
    marginBottom: '3%',
  },
  notifyPostedColumn: {
    marginTop: '1%',
    marginLeft: '3%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },

  //---------------------Styles for Search Screen-------------------------

  searchScreenContainer:{
    flex: 1,
    justifyContent: 'flex-start',
    // alignItems:'center',
    backgroundColor: '#ffffff',
  },
  ssHeaderView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5%',
    paddingBottom: '3%',
    marginLeft:'3%'
  },
  ssBackImage:{
    width: 15,
    height: 15,
    resizeMode: 'contain',
    marginLeft: '3%',
  },
  ssMagnifyImage:{
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginRight: '2%',
    resizeMode: 'contain',
  },
  
  ssSearchView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginHorizontal: '1%',
    width: '80%',
    backgroundColor: '#ffffff',
  },
  ssSearchIconStyle: {
    alignSelf: 'center',
    marginRight: '2%',
  },
  ssSearchInput: {
    height: 40,
    color: '#8D8D8D',
    fontSize: 12,
    fontWeight: '400',
  },
});
