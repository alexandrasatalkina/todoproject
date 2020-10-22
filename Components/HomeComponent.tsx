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
        title: 'Home',
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
                    //onPress={() => this.handleLogin()}
                    title="Вход"
                    buttonStyle={{
                        backgroundColor: "#512DA8"
                    }}
                    />
                </View>
                <View style={styles.formButton}>
                    <Button
                    onPress={() => this.props.navigation.navigate('Регистрация')}
                    title="Регистрация"
                    titleStyle={{
                        color: "blue"
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

