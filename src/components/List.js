import React from 'react'
import { FlatList, Text } from 'react-native'

const List = ({data}) => {
  return (
    <FlatList
        data={data}
        renderItem = {({item}) => 
          <Text style={{fontSize: 20, color: (Number(item.key) % 2 == 0) ? '#7ef7bd' : 'white', textAlign: 'center'}}>{item.value}</Text>
        }
    />
  )
}



export default List;