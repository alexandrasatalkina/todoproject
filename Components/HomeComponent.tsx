import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { Input,  Button} from 'react-native-elements';


export default class Home extends Component {
    props:any

    constructor(props:any) {
        super(props);

        this.state = {
            username: '',
            password: '',
        }
    }

    static navigationOptions = {
        title: 'Вход',
      }

      handleLogin(){
          return(
            this.props.navigation.navigate('Список')
          )
      }

      render(){
        return (
            <View style={styles.container}>
                <Input
                    placeholder="Ваше имя"
                    //onChangeText={(username) => this.setState({username})}
                    //value={this.state.username}
                    />
                <Input
                    placeholder="Пароль"
                    //onChangeText={(password) => this.setState({password})}
                    //value={this.state.password}
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

