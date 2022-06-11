import React from 'react'
import { StyleSheet, Button, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
    const navigation = useNavigation();
  return (
    <View style={`${styles.footer}`}>
        <Button
            title= "Back"
            onPress={() => navigation.goBack()}
            color='black'
         />
        <Button
            title= "Home"
            onPress={() => navigation.navigate("Home")}
            color='black'
        />
    </View>
  )
}



const styles = StyleSheet.create({
    footer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-around',
        backgroundColor: '#7ef7bd',
        position: 'absolute',
        bottom: 0,
        height: 80,
        width: '100%'
    }
})
export default Footer