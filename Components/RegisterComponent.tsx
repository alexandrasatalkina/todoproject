import React, { Component } from 'react';
import { View, StyleSheet, ScrollView} from 'react-native';
import { Input, Button} from 'react-native-elements';


export default class Register extends Component {
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

    render(){
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Input
                        placeholder="Ваше имя"
                        onChangeText={(username) => this.setState({username})}
                        //value={this.state.username}
                        />
                    <Input
                        placeholder="Email"
                        onChangeText={(email) => this.setState({email})}
                        //value={this.state.email}
                        />
                    <Input
                        placeholder="Пароль"
                        onChangeText={(password) => this.setState({password})}
                        //value={this.state.password}
                        />
                    <Input
                        placeholder="Повтор пароля"
                        onChangeText={(conferm) => this.setState({conferm})}
                        //value={this.state.conferm}
                        />
                    <View style={styles.formButton}>
                        <Button
                            //onPress={() => this.handleRegister()}
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
