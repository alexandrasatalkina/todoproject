import React, { Component } from 'react';
import { View, StyleSheet, Alert} from 'react-native';
import { Input,  Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default class Home extends Component <{}, { username: string, password: string}> {
    props:any;

    constructor(props:any) {
        super(props);
        this.getData();

        this.state = {
            username: '',
            password: '',
        }
    }

    static navigationOptions = {
        title: 'Вход',
      }

      handleLogin = async () => {
            try {
            const username = await AsyncStorage.getItem('username_'+this.state.username)
            const password = await AsyncStorage.getItem('password_'+this.state.username)
            if (this.state.username == username && this.state.password == password){
                this.props.navigation.navigate('Список')
                await AsyncStorage.setItem('default_name', this.state.username)
                await AsyncStorage.setItem('default_password', this.state.password)
             }
             else {
                 Alert.alert('Неверный логин или пароль!')
             }
          } catch (err) {
              console.log(err)
          }
      }

      getData = async() => {
          try {
            const username = await AsyncStorage.getItem('default_name')
            const password = await AsyncStorage.getItem('default_password')
            console.log(username!==null)
            if(username!==null){
                this.setState({username})
            }
            if(password!==null){  
            
                this.setState({password})
            }
          }catch (err){
                Alert.alert('Поля не заполнены!')
          }
      }
      
      

      render(){
        return (
            <View style={styles.container}>
                <Input
                    placeholder="Ваше имя"
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                    autoCapitalize='none'
                    />
                <Input
                    placeholder="Пароль"
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    secureTextEntry={true}
                    autoCapitalize='none'
                    />
                <View style={styles.formButton}>
                    <Button
                    onPress={() => this.handleLogin()}
                    title="Вход"
                    buttonStyle={{
                        backgroundColor: "#9370DB"
                    }}
                    />
                </View>
                <View style={styles.formButton}>
                    <Button
                    onPress={() => this.props.navigation.navigate('Регистрация')}
                    title="Регистрация"
                    titleStyle={{
                        color: "#B0E0E6"
                    }}
                    />
                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    formButton: {
        margin: 20
    }
});

