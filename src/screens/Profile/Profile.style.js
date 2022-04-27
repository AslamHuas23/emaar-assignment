import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center'
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: 'center'
  },
  line: { 
    width: "75%", 
    borderBottomColor: "#343434", 
    borderBottomWidth: 2, 
    alignSelf: 'center' 
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'flex-end', 
    justifyContent: 'center',
    marginBottom: 10
  },
  ageView: {
    width: 50, 
    alignItems: 'center', 
    marginLeft: -30
  },
  detailsView: {
    width: "75%",
    alignSelf: 'center' 
  },
  ageText: {
    alignSelf: 'center', 
    zIndex: 1},
  triangleShapeView: {
    width: 0,
    height: 0,
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderBottomWidth: 25,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FCEF75',
    marginBottom: -10
  },
  triangleShapeView1: {
    marginTop: -10,
    width: 0,
    height: 0,
    borderLeftWidth: 25,
    borderRightWidth: 25,
    borderTopWidth: 25,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: '#FCEF75'
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
    fontSize: 10,
    marginBottom: 4
  },
  userProfile: {
    height: 150,
    width: 150,
    borderRadius: 2,
    alignSelf: "center",
    marginVertical: 20
  },
  nameRow: {
    width: "100%",
    flexDirection: 'row'
  },
  nameCol: { width: "50%" },
  dateCol: { width: "50%", alignItems: 'flex-end' }
})

export default styles
