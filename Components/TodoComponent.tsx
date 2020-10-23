import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Text} from 'react-native';
import {  Button } from 'react-native-elements';

export default class Todo extends Component {

    props:any

    static navigationOptions = {
        title: 'Список',
      }

    constructor(props:any) {
        super(props);
    }


    handleAddTask(){
        this.props.navigation.navigate('Создать')
    }
    render(){



        return(
            <ScrollView style={styles.container}>
                    <Text style={styles.title}>
                        Список дел
                    </Text>
                    <View>
                        <Text></Text>
                        <Button title="X" onPress={() => {}}/>
                        <Button title="X" onPress={() => {}} />
                    </View>
                    <View style={styles.formButton}>
                        <Button
                            onPress={() => this.handleAddTask()}
                            title="Создать дело"
                            buttonStyle={{
                                backgroundColor: "#9370DB"
                            }}
                            />
                    </View>
                    <View style={styles.formButton}>
                        <Button
                            //onPress={() => this.handleExit()}
                            title="Выйти"
                            buttonStyle={{
                                backgroundColor: "#87CEFA"
                            }}
                            />
                    </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    title: {
        fontSize: 40,
        marginBottom: 40,
        fontWeight: "bold",
        color: '#262626',
        textAlign: 'center'
    },
    formButton: {
        margin: 20
    }
});
