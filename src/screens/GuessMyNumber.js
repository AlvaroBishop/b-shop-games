import React, { useState } from 'react'
import { StyleSheet, View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import List from '../components/List';


const mapItems = (items) => items.map((value, i) => ({ key: i.toString(), value }));

const generateRandomNumber = (max, min = 1) => Math.floor(Math.random() * (max - min) + min);

const calculateText = (number, random) => {
    const soClose = 5;
    const diff = Math.abs(random - number)

    if(diff < soClose) {
        if(number < random) return "Estas muy cerca! tu numero es un poco bajo"
        else return "Estas muy cerca! tu numero es un poco alto"
    } else {
        if(number < random) return "Tu numero es muy bajo"
        else return "Tu numero es muy alto"
    }
}


const GuessNumber = () => {
    const [number, setNumber] = useState('')
    const [message, setMessage] = useState('')
    const [guessList, setGuessList] = useState([])
    const [win, setWin] = useState(false)
    const [count, setCount] = useState(0)
    const [random, setRandom] = useState(generateRandomNumber(101))


    const handleOnChange = newNumber => {
        setNumber(newNumber)
    }

    const handleOnPress = () => {
        const num = parseInt(number)
        if(!isNaN(num))
        {
            const numRand = parseInt(random)
            const text = calculateText(num, numRand)

            if(num === numRand) setWin(true);

            setNumber("");
            setMessage(text);
            
                setGuessList([
                    num,
                    ...guessList
                ]);
            setCount(count + 1)
        }

    }
    return (
        <View style={styles.game}>
            <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
                <TextInput
                    style={styles.input}
                    autoFocus
                    placeholder='Guess My Number (1-100)'
                    onChangeText={handleOnChange}
                    defaultValue = {number}
                    keyboardType='number-pad'
                />

                <TouchableOpacity 
                    onPress={handleOnPress}
                >
                    <Text>Probar</Text>
                </TouchableOpacity>

                {
                    win 
                        ? <Text> Felicidades, lo has adivinado en {count} intentos.</Text>
                        : <Text>{message}</Text>
                }

            </View>

            <List
                styl={{flex: 1}}
                data={mapItems(guessList)}
            />
        </View>
        
    )
}


const styles = StyleSheet.create({
  game: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    height: '100%',
  },
  
  input: {
    width: 200,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white'
  },
  list: {
    backgroundColor: 'red',
    flexDirection: 'row',

  }
})

export default GuessNumber;