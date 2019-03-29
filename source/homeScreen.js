import React, { Component } from 'react';
import { AppRegistry, ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity, ItemSeperatorComponent } from 'react-native';
import * as data1 from './users.json';
console.disableYellowBox = true;

export default class UserListApp extends Component {
    static navigationOptions = {

        title: 'USER LIST',
        headerTitleStyle: { color: 'white' },
        headerStyle: { backgroundColor: 'deepskyblue'}

    };

    
    goToNextScreen(item) {
        this.props.navigation.navigate('info', {inform: item});
    }

    renderSeparator = () => {
        return (
            <View style={styles.separator}>
            </View>
        )
    }

    renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.goToNextScreen(item)}>
                <Text style={styles.itemContainer}>{item}</Text>
            </TouchableOpacity>
            
        )
    }

    render() {

        var json = data1.people;
        var arrayJson = [];
        for (let i in json) {
            var info = json[i].firstName + " " + json[i].lastName;
            arrayJson.push(info);
        }

        return (
            <ScrollView>
                <View style={styles.container}>
                    <FlatList
                        data={arrayJson}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={this.renderSeparator}
                    />
                </View>
            </ScrollView>
            
            
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    itemContainer: {
        padding: 10,
        height: 60,
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        height: 1,
        width: '100%',
        backgroundColor: 'lightgray'
    }
});
AppRegistry.registerComponent('userList', () => UserListApp);
