import { View, Text, Image } from 'react-native'
import React from 'react'

const images = {
    1: require('../img/pic/p1.jpg'),
    2: require('../img/pic/p2.jpg'),
    3: require('../img/pic/p3.jpg'),
    4: require('../img/pic/p4.jpg')
}


const Detail = ({navigation, route}) => {
  return (
    <View>
      <Image source={images[route.params.id]} style={{ width: "100%", height:333 }}/>
          <Text style={{ fontSize: 20, marginTop: 10,marginLeft: 10, padding: 10 }}>{route.params.name}</Text>
    </View>
  )
}

export default Detail