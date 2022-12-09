import {View,Text,Image,Pressable} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
    const onPress=() => {
        navigation.navigate('One')
    }
  return (
    <Pressable onPress={onPress}>
        <View style={{ height: '100%', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
            <View style={{ flex: 0.95, justifyContent: 'center' }}>
                <Image source={require('../img/ask2.png')} style={{ width: 250, height:250 }}/>
            </View>
            <View style={{ flex: 0.05 }}>
                <Text style={{color: 'black'}}>Dodeep.co</Text>
            </View>
        </View>
    </Pressable>
  );
}

export default Splash;