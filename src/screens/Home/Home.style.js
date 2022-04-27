import { StyleSheet } from 'react-native'

const styles =  StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  listItem: {
    flexDirection: 'row',
    marginVertical: 5,
    width: "95%",
    alignSelf: 'center',
    borderBottomWidth: 1,
    paddingBottom: 5,
    borderColor: "#E6E1E1"
  },
  listItemCol1: {
    marginHorizontal: 5
  },
  listItemCol2: {
    flex: 1,
  },
  listItemCol3: {
    alignSelf: 'flex-end',

  },
  nameText: {
    fontSize: 12
  },
  emailText: {
    fontSize: 10
  },
  userProfile: { 
    height: 40, 
    width: 40,
    borderRadius: 2 
  },
  nameRow: { 
    width: "100%", 
    flexDirection: 'row' 
  },
  nameCol: { width: "50%" },
  dateCol: { width: "50%", alignItems:'flex-end' }
})

export default styles
