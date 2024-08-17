import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

class Login extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor:'gray',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: 'red', width: 50, height: 100}} />
          <View style={{backgroundColor: 'blue', width: 50, height: 100}} />
          <View style={{backgroundColor: 'orange', width: 50, height: 100}} />
          <View style={{backgroundColor: 'yellow', width: 50, height: 200}} />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>text1</Text>
          <Text>text2</Text>
          <Text>text3</Text>
          <Text>text4</Text>
          <Text>text5</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Image
            source={{
              uri: 'https://asset.kompas.com/crops/pi3kG20B6HYl2enSgoI-JKuvn_4=/0x0:0x0/750x500/data/photo/2015/02/12/1621063spidermanp.jpg',
            }}
            style={{width:100, height:100, borderRadius: 50, marginRight: 14}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Rais</Text>
            <Text>Muhamad</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
