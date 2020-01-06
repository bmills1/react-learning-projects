import React from 'react';
import {
    StyleSheet,
    Test,
    View,
    StatusBar,
    TextInput
} from 'react-native';


export default function Forms() {
    return (


            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                />
            </View>


    );
}

const styles =StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center,',
        alignItems:'center'
    },

    inputBox: {
        width:300,
        backgroundColor:'rbga(255,255,55,0.3)'
    }
})