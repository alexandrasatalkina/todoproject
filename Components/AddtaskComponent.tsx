import React, { Component } from 'react';
import { View, StyleSheet,  Text,  TextInput} from 'react-native';
import { Button } from 'react-native-elements';


export default class AddTask extends Component {
    props:any

    static navigationOptions = {
        title: 'Создать',
      }

    constructor(props:any) {
        super(props);
    }

    handleExit(){
        this.props.navigation.navigate('Список')
    }
    render(){


        
        return(
            <View style={styles.container}>
                    <Text style={styles.title}>
                        Добавить дело
                    </Text>
                    <TextInput
                            style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}
                            placeholder=" Заголовок"
                            //onChangeText={text => onChangeText(text)}
                            //value={value}
                    />
                    <TextInput
                        style={{ height: 100, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginTop: 10}}
                        placeholder=" Нужно сделать"
                        multiline
                        numberOfLines={4}
                        />
                    <View style={styles.formButton}>
                        <Button
                            onPress={() => this.handleExit()}
                            title="Назад"
                            buttonStyle={{
                                backgroundColor: "#9370DB"
                            }}
                            />
                    </View>
                    <View style={styles.formButton}>
                        <Button
                            //onPress={() => this.handleAddTask()}
                            title="Сохранить"
                            buttonStyle={{
                                backgroundColor: "#6495ED"
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