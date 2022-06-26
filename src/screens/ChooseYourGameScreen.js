import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const ChooseYourGameScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.game}>
        <View >
            <TouchableOpacity
                /* style={styles.buttonLocation} */
                onPress={() => navigation.push('GuessMyNumber')}
            >
                <View style={styles.button}>
                    <Text style={styles.winText}>GuessMyNumber</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                /* style={styles.buttonLocation} */
                onPress={() => navigation.push('GuessYourNumber')}
            >
                <View style={styles.button}>
                    <Text style={styles.winText}>GuessYourNumber</Text>
                </View>
            </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    game: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black',
      borderTopColor: "#7ef7bd", 
      borderTopWidth: 1,
    },
    gameContainer: {
        alignItems: 'center',
        width: '100%',
    },
    buttonsContainer: {
        backgroundColor: '#7ef7bd',
        borderRadius: 20
    },
    winText: {
      color: 'black', 
      fontSize: 20,
      marginVertical: 20,
    },
    input: {
      textAlign: 'center',
      margin: 35,
      color: '#7ef7bd',
      fontSize: 20,
    },
    listContainer: {
        width: '100%',
    },
    button: {
      padding: 10,
      margin: 10,
      backgroundColor: '#7ef7bd',
      borderRadius: 200,
    }
   
  })
