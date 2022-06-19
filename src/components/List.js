import React from 'react'
import { FlatList, Text } from 'react-native'

const List = ({data}) => {
  return (
    <FlatList
        style={{backgroundColor: 'blue'}}
        data={data}
        renderItem = {({item}) => <Text style={{fontSize: 20, color: 'white'}}>{item.value}</Text>}
    />
  )
}



export default List;
