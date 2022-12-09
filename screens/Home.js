import { View, Text, ScrollView, StatusBar, Button, Image, TextInput, Pressable, StyleSheet, SectionList, SafeAreaView, HorizontalScroll, FlatList} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Home = ({navigation}) => {
  const onPressItem=(id, name) => {
        navigation.navigate('Detail', {id: id, name: name})
    }

  const [text, onChangeText] = React.useState(null);
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  
  const Item = () => (
  <View style={styles.item}>
    <Text></Text>
  </View>
  );


  return (
    <ScrollView style={{ padding: 10 }}>
      
      <View style={{ alignItems: 'center'}}>
          
        <Text style={{ fontSize: 25, color: 'black' }}>ถาม-ตอบ</Text>

        <Image source={require('../img/ask2.png')} style={{ width: 100, height:100, marginTop: 10 }}/>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="เขียนเกี่ยวกับสุขภาพของคุณ"
        keyboardType="text"
      />
      </View>

      <View style={[styles.container, { flexDirection: "colum"}]}>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>โรคทั่วไป</Text>
        </View>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>โรคทางตา</Text>
        </View>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>โรคผิวหนัง</Text>
        </View>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>กระดูกและข้อ</Text>
        </View>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>ทางเดินหายใจ</Text>
        </View>
        <View style={styles.top}>
          <Text style={{ fontSize: 20 }}>สุขภาพจิต</Text>
        </View>
      </View>

      

      
      <View style={styles.border2}>
        <Pressable onPress={() => onPressItem(4, 'วัดพระธาตุดอยสุเทพ')}>
          <Text style={{ fontSize: 20, marginTop: 10 }}>วัดพระธาตุดอยสุเทพ</Text>
          <Text>group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.</Text>
        </Pressable>
      </View>

      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(4, 'วัดพระธาตุดอยสุเทพ')}>
          <Text style={{ fontSize: 20, marginTop: 10 }}>วัดพระธาตุดอยสุเทพ</Text>
          <Text>group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.</Text>
        </Pressable>
      </View>

      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(4, 'วัดพระธาตุดอยสุเทพ')}>
          <Text style={{ fontSize: 20, marginTop: 10 }}>วัดพระธาตุดอยสุเทพ</Text>
          <Text>group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.</Text>
        </Pressable>
      </View>

      <View style={{marginVertical: 10}}>
        <Pressable onPress={() => onPressItem(4, 'วัดพระธาตุดอยสุเทพ')}>
          <Text style={{ fontSize: 20, marginTop: 10 }}>วัดพระธาตุดอยสุเทพ</Text>
          <Text>group of islands in Thailand between the large island of Phuket and the Malacca Coastal Strait of Thailand.</Text>
        </Pressable>
      </View>
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  item: {
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  input: {
    fontSize: 18,
    width: 300,
    height: 100,
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor:"#737373",
    padding: 10,
  
  },
  border1: {
    width: 200,
    fontSize: 20,
    padding: 10,
    marginLeft: 1,
  },
  border2: {
  marginVertical: 10,
   borderWidth:1,
   borderColor:"blue",
    borderRadius: 10
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  top: {
    flex: 0.3,
    backgroundColor: "#C0C0C0",
    height: 100,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 15
  }
});





export default Home;