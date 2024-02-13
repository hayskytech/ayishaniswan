import { ListItemTitle } from '@rneui/base/dist/ListItem/ListItem.Title'
import { Button, Icon, ListItem, Switch, Text } from '@rneui/themed'
import React, { useState } from 'react'
import { FlatList, View } from 'react-native'

export default function Students() {
  let x = {
    '001': { name: 'John', class: '2', att: true },
    '002': { name: 'Alice', class: '2', att: true },
    '003': { name: 'Bob', class: '2', att: true },
    '004': { name: 'Charlie', class: '2', att: true },
    '005': { name: 'David', class: '2', att: true },
    '006': { name: 'Eva', class: '2', att: true },
    '007': { name: 'Frank', class: '2', att: true },
    '008': { name: 'Grace', class: '2', att: true },
    '009': { name: 'Henry', class: '2', att: true },
    '010': { name: 'Ivy', class: '2', att: true },
    '011': { name: 'Jack', class: '2', att: true },
    '012': { name: 'Kelly', class: '2', att: true },
    '013': { name: 'Leo', class: '2', att: true },
    '014': { name: 'Mia', class: '2', att: true },
    '015': { name: 'Nathan', class: '2', att: true },
    '016': { name: 'Olivia', class: '2', att: true },
    '017': { name: 'Peter', class: '2', att: true },
    '018': { name: 'Quinn', class: '2', att: true },
    '019': { name: 'Riley', class: '2', att: true },
    '020': { name: 'Sam', class: '2', att: true },
  }

  const [students, setStudents] = useState(x)
  console.log(Object.entries(x));

  function showItem({ item }) {
    return (<ListItem topDivider bottomDivider containerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: 'bold', fontSize: 18 }}>{item[1].name}</ListItem.Title>
        <ListItem.Subtitle>Class: {item[1].class}</ListItem.Subtitle>
      </ListItem.Content>
      <Icon
        name={item[1].att ? 'check-circle' : 'cancel'}
        color={item[1].att ? 'green' : 'red'}
        size={30}
        style={{ padding: 15 }}
        onPress={() => markAtt(item[0])}
      />
    </ListItem>)

  }
  function markAtt(key) {
    x = { ...students }
    x[key].att = !x[key].att
    setStudents(x)
  }
  function headerComp() {
    return (
      <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
        <Text h3>Students</Text>
        <Button onPress={() => console.log('submitted')}>Submit</Button>
      </View>
    )
  }
  return (
    <>
      <FlatList
        ListHeaderComponent={headerComp}
        ListHeaderComponentStyle={{ padding: 10 }}
        data={Object.entries(students)}
        renderItem={showItem}
      />
    </>
  )
}
