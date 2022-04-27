import React, { Component } from 'react'
import { View, Text, Image, SafeAreaView} from 'react-native'
import styles from './Profile.style'

class ProfileView extends Component {
    constructor(props) {
      super(props)
    
      this.state = {

      }
    }

  render() {
      const {userData} = this.props
    return (
        <SafeAreaView style={styles.safeAreaView} >
        <View style={styles.profileView}>
          <Image source={{ uri: userData.picture.large }} style={styles.userProfile} />
          <View style={styles.ageView}>
            <View style={styles.triangleShapeView}></View>
            <Text style={styles.ageText}>{userData.dob.age}</Text>
            <View style={styles.triangleShapeView1}></View>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.line}>
          <Text style={{...styles.emailText,...{marginTop: 5}}}>{"Email: " + userData.email}</Text>
          <Text style={styles.emailText}>{"Date Joined: " + new Date(userData.registered.date).toDateString()}</Text>
          <Text style={styles.emailText}>{"DOB: " + new Date(userData.dob.date).toDateString()}</Text>
          <Text style={{ ...styles.nameText, ...{ marginTop: 10 } }}>LOCATION</Text>
        </View>
        <View style={styles.detailsView}>
          <Text style={{...styles.emailText,...{marginTop: 5}}}>{"city: " + userData.location.city}</Text>
          <Text style={styles.emailText}>{"state: " + userData.location.state}</Text>
          <Text style={styles.emailText}>{"country: " + userData.location.country}</Text>
          <Text style={styles.emailText}>{"postcode: " + userData.location.postcode}</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default ProfileView