import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const ChooseYourGameScreen = () => {
    const navigation = useNavigation();
  return (
    <View>
        <View>
            <TouchableOpacity
                /* style={styles.buttonLocation} */
                onPress={() => navigation.push('GuessMyNumber')}
            >
                <View /* style={styles.button} */>
                    <Text /* style={styles.buttonText} */>GuessMyNumber</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                /* style={styles.buttonLocation} */
                onPress={() => navigation.push('GuessYourNumber')}
            >
                <View /* style={styles.button} */>
                    <Text /* style={styles.buttonText} */>GuessYourNumber</Text>
                </View>
            </TouchableOpacity>

        </View>
    </View>
  )
}