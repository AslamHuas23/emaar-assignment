import React, {Component, useState, useEffect, memo } from 'react'
import {Text} from 'react-native'
import ErrorBoundary from '../../components/ErrorBoundary'
import ProfileView from './Profile'


class Profile extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }

  componentWillMount () {
    this.props.navigation.setOptions({
      title: this.props.route.params.userData.name.first + " " + this.props.route.params.userData.name.last,
    });
  }
  render() {
    return (
      <ErrorBoundary>
    <ProfileView userData={this.props.route.params.userData}/>
  </ErrorBoundary>
    )
  }
}

export default Profile

// const Profile = (props) => {

//   const userData = props.route.params.userData

//   useEffect(() => {
//     props.navigation.setOptions({
//       title: userData.name.first + " " + userData.name.last,
//     });
//   }, [props.navigation]);

//   return <ErrorBoundary>
//     <ProfileView userData={userData}/>
//   </ErrorBoundary>
// }

// export default memo(Profile) 