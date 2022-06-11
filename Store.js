import React from 'react';
import {StyleSheet, Button, View, Text, Image, ScrollView} from 'react-native';
import Card from './Card';
import cards from './cards';
import { useNavigation } from '@react-navigation/native';

function Store({}) {
    
    const navigation = useNavigation();
    return (
        <View style={{backgroundColor: 'black', height: '100%'}}>
            <ScrollView style={styles.scroll}> 
            <Text style={{textAlign:'center', fontSize: 30, color: '#7ef7bd'}}>Games</Text>
            <View style={styles.containerButton}>
                {
                    cards.map( card => {
                        const { id, title, description, stock, url } = card;
                        return (
                            <Card key={id}>
                                    <Image 
                                        style={{width: '100%', height: 110,
                                        borderTopRightRadius: 10, borderTopLeftRadius: 10}}
                                        source={{uri: url}}
                                    />
                                    {/* <Text style={styles.text}>{title}</Text> */}
                                    <Text style={styles.text}>{description}</Text>
                                    <Button 
                                        title={`Jugar`}
                                        onPress={() => navigation.push('Details', {
                                            title: title,
                                            description: description,
                                            stock: stock,
                                            url: url,
                                        })}
                                        color='black'
                                        
                                    />
                            </Card>
                        )
                    })
                }
            </View>
            </ScrollView>

            
            
        </View>
    );
}

const styles = StyleSheet.create({
    containerButton: {
        marginRight: 'auto',
        marginLeft: 'auto',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center', 
        backgroundColor: '#2c2e2d',
        borderRadius: 50,
        marginTop: 50,
        padding: 10,
        overflow: 'hidden',

        width: '95%',
        height: 'auto',
    },

    text: {
        color: 'black',
        marginVertical: 4   
    },

    scroll: {
        marginBottom: 90,
    }
})

export default Store;