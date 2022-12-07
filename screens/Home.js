import { View, Text, ScrollView, Image, Pressable} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  const onPressItem=(id, name) => {
        navigation.navigate('Detail', {id: id, name: name})
    }

  return (
    <ScrollView style={{ padding: 10 }}>
      <View>
        <Text style={{ fontSize: 25, color: 'black' }}>ทริปเที่ยวเชียงใหม่คนเดียว</Text>
      </View>

      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(1, 'จองตั๋วรถไฟ')}>
          <Image source={require('../img/pic/p1.jpg')} style={{ width: "100%", height:333 }}/>
          <Text style={{ fontSize: 20, marginTop: 10 }}>จองตั๋วรถไฟ</Text>
          <Text>group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.</Text>
        </Pressable>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(2, 'รถไฟตู้นอน')}>
          <Image source={require('../img/pic/p2.jpg')} style={{ width: "100%", height:333 }}/>
          <Text style={{ fontSize: 20, marginTop: 10 }}>รถไฟตู้นอน</Text>
          <Text>group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.</Text>
        </Pressable>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(3, 'วิวข้างทาง')}>
          <Image source={require('../img/pic/p3.jpg')} style={{ width: "100%", height:333 }}/>
          <Text style={{ fontSize: 20, marginTop: 10 }}>วิวข้างทาง</Text>
          <Text>group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.</Text>
        </Pressable>
      </View>
      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(4, 'วัดพระธาตุดอยสุเทพ')}>
          <Image source={require('../img/pic/p4.jpg')} style={{ width: "100%", height:333 }}/>
          <Text style={{ fontSize: 20, marginTop: 10 }}>วัดพระธาตุดอยสุเทพ</Text>
          <Text>group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Home;