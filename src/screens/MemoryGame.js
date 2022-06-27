import React, { useEffect, useState } from "react";
import { Image, View, TouchableNativeFeedback, Text, StyleSheet, TouchableOpacity } from 'react-native'
import url1 from '../../assets/cheems/cheems1.jpg';
import url2 from '../../assets/cheems/cheems2.jpg';
import url3 from '../../assets/cheems/cheems3.jpg';
import url4 from '../../assets/cheems/cheems4.jpg';
import backUrl from '../../assets/cardBack.png';
import { DisplayGameState } from "../components/DisplayGameState";

const cheems = [
    { id: 1, url: url1, backUrl },
    { id: 2, url: url2, backUrl },
    { id: 3, url: url3, backUrl },
    { id: 4, url: url4, backUrl },
  ];
  
let pairOfCheems = [...cheems, ...cheems, ];
pairOfCheems = shuffle(pairOfCheems);

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

const MemoryGame = () => {
    const [openedCard, setOpenedCard] = useState([]);
    const [matched, setMatched] = useState([]);
    const [win, setWin] = useState(false);
    const [contador, setContador] = useState(0);

    const flipCard = (index) => setOpenedCard((opened) => [...opened, index]);
    
    
    useEffect(() => {
        if (openedCard.length < 2) return;
        
        const firstMatched = pairOfCheems[openedCard[0]];
        const secondMatched = pairOfCheems[openedCard[1]];
        
        if(openedCard.length === 2)
        {
            if (secondMatched && firstMatched.id === secondMatched.id) {
                setMatched([...matched, firstMatched.id]);
            }
            setTimeout(() => setOpenedCard([]), 1000);
            setContador(contador + 1);

        }
        
    
    }, [openedCard]);

    useEffect(() => {
        if(matched.length >= 4) setWin(true);
    }, [matched]);
    
    const restart = () => {
        setOpenedCard([]);
        setMatched([]);
        setContador(0);
        pairOfCheems = shuffle(pairOfCheems);
    }


    return (
        <View style={styles.game}>
            <DisplayGameState
                text='Ganaste'
                func={restart}
                state={{
                    display: win,
                    setDisplay: setWin
                }}
                color='#0060FF'
            />
            <Text style={{color: '#8cfffd', fontSize: 20}}>Intentos: {contador}</Text>
            <View style={styles.cardContainer}>
                {pairOfCheems.map(({id, url, backUrl}, index) => {
                //lets flip the card
                let isFlipped = false;
                if (openedCard.includes(index) && openedCard.length < 3) isFlipped = true;
                if (matched.includes(id)) isFlipped = true;
                return (
                    <TouchableOpacity
                        key={index}
                        style={styles.card}
                        onPress={() => flipCard(index)}
                        disabled={(isFlipped ? true : false)}
                    >
                        <View >
                            <Image
                                style={{width: 80, height: 90, margin: 1, borderRadius: 10, backgroundColor: 'black'}}
                                source={isFlipped && (url)}
                                alt="cheems-name"
                            />
                        </View>
                    </TouchableOpacity>
                );
                })}
            </View>
        </View>
      );
}

const styles = StyleSheet.create({
    game: {
        alignItems:'center',
        backgroundColor: 'black',
        borderTopColor: "#7ef7bd", 
        borderTopWidth: 1,
        flex: 1,
        justifyContent: 'center',
    },
    cardContainer: {
        height: 300,
        padding: 20,
        alignItems:'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    card: {
        backgroundColor: '#7ef7bd',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10,
        margin: 1,
        padding: 5,
    },

  })

export default MemoryGame


