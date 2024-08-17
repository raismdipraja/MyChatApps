import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from "../src/Style/styles";

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState({
    loadingLogin: false,
    loadingSign: false,
  });

  const AuthSign = async () => {
    const response = await fetch(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDE-n9x4H5tLq5WLLTRaruWpsmkT298dwk',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      },
    );
    const resData = await response.json();
    console.log(resData);
  };

  const AuthLogin = async (e, p) => {
    if (email === '' || password === '') {
      Alert.alert('Peringatan!!!', 'Mohon Masukan Email dan Password', [
        {
          text: 'Okay',
        },
      ]);
    } else {
      try {
        setLoading({
          loadingLogin: true,
        });
        const response = await fetch(
          'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDE-n9x4H5tLq5WLLTRaruWpsmkT298dwk',
          {
            method: 'POST',
            headers: {
              'Content-type': 'application/json',
            },
            body: JSON.stringify({
              email: e,
              password: p,
              returnSecureToken: true,
            }),
          },
        );
        const resData = await response.json();
        console.log('resData', resData);
        if (resData.idToken) {
          await props.navigation.navigate('Home');
        } else {
          Alert.alert('Peringatan!!!', resData.error.message, [
            {
              text: 'Okay',
            },
          ]);
        }
        setLoading({
          loadingLogin: false,
        });
      } catch (error) {
        setLoading({
          loadingLogin: false,
        });
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Logo}>MyChat</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Masukan Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => {
            setEmail(text);
          }}
          required
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Masukan Password"
          placeholderTextColor="#003f5c"
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>
      <TouchableOpacity
        style={styles.forget}
        onPress={() => {
        // console.log('Forget Password');
        }}>
        <Text style={styles.forget}>Forget Password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.LoginBtn}
        onPress={() => AuthLogin(email, password)}>
        {loading.loadingLogin ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={styles.LoginText}>Login</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={AuthSign}>
        <Text style={styles.LoginText}>SignUp</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
