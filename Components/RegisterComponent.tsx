import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Alert} from 'react-native';
import { Input, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class Register extends Component <{}, { username: string, password: string, email: string, conferm: string}> {
    props:any

    static navigationOptions = {
        title: 'Регистрация',
      }
    constructor(props:any) {
        super(props);

        this.state = {
            username: '',
            email: '',
            password: '',
            conferm: '',
        }
    }



    handleRegister = async () => {
        try {
          await AsyncStorage.multiSet([['username_'+this.state.username, this.state.username], ['password_'+ this.state.username, this.state.password], ['email_'+this.state.username, this.state.email], ['conferm_'+this.state.username, this.state.conferm]])
          Alert.alert('Регистрация прошла успешно!')
          await AsyncStorage.setItem('default_name', this.state.username)
          await AsyncStorage.setItem('default_password', this.state.password)
          this.props.navigation.navigate('Список')

        } catch (err) {
            console.log(err)
        }
    }


    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Input
                        placeholder="Ваше имя"
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username}
                        autoCapitalize='none'
                        />
                    <Input
                        placeholder="Email"
                        onChangeText={(email) => this.setState({email})}
                        value={this.state.email}
                        autoCapitalize='none'
                        />
                    <Input
                        placeholder="Пароль"
                        onChangeText={(password) => this.setState({password})}
                        value={this.state.password}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        />
                    <Input
                        placeholder="Повтор пароля"
                        onChangeText={(conferm) => this.setState({conferm})}
                        value={this.state.conferm}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        />
                    <View style={styles.formButton}>
                        <Button
                            onPress={() => this.handleRegister()}
                            title="Регистрация"
                            buttonStyle={{
                                backgroundColor: "#512DA8"
                            }}
                            />
                    </View>
                </View>
            </ScrollView>
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
