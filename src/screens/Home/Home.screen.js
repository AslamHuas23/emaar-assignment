import React, { useState, useEffect, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Image, SafeAreaView, Dimensions, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, BackHandler, FlatList } from 'react-native'
import { updateUsers } from '../../stores/actions/user.action'
import styles from './Home.style'
import axios from 'axios'

const HomeScreen = (props) => {
  const [page, setPage] = useState(0);

  const counter = useSelector((state) => state.counterReducer.counter)
  const users = useSelector((state) => state.userReducer.users)

  const dispatch = useDispatch()

  useEffect(() => {
    getData()
  }, []);

  const getData = () => {
    axios.get(`https://randomuser.me/api?page=${page}&results=100`).then((response) => {
      console.log(response.data);
      dispatch(updateUsers(response.data.results))
    });
    setPage(page + 1)
  }

  const itemView = (data) => {
    return <TouchableOpacity 
    onPress={() => props.navigation.navigate("Profile", {userData: data.item})}
    style={styles.listItem}>
      <View style={styles.listItemCol1}>
        <Image style={styles.userProfile} source={{ uri: data.item.picture.large }} />
      </View>
      <View style={styles.listItemCol2}>
        <View style={styles.nameRow}>
          <View style={styles.nameCol}>
            <Text style={styles.nameText}>{data.item.name.first + " " + data.item.name.last}</Text>
          </View>
          <View style={styles.dateCol}>
            <Text style={styles.emailText}>{new Date(data.item.registered.date).toDateString()}</Text>
          </View>
        </View>
        <Text style={styles.emailText}>{data.item.name.first + " " + data.item.name.last}</Text>
        <Text style={styles.emailText}>{"Country | " + data.item.location.country}</Text>
      </View>
    </TouchableOpacity>
  }

  return <SafeAreaView style={styles.safeAreaView} >
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      data={users}
      onEndReached={getData}
      onEndReachedThreshold={0.5}
      renderItem={itemView}
    />
  </SafeAreaView>
}

export default memo(HomeScreen) 