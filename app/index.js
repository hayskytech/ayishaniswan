import { Image } from '@rneui/themed'
import React from 'react'
import { ScrollView, Text } from 'react-native'

export default function index() {
  return (
    <>
      <ScrollView>
        <Text style={{ textAlign: 'center', margin: 20, border: 'solid black', fontFamily: 'serif', fontSize: 20, }}>WELCOME</Text>
        <Image source={{ uri: `https://ayishaniswan.com/wp-content/uploads/2022/04/ayisha-niswan-kurnool.jpg` }} style={{ height: 320, }} />
      </ScrollView >
    </>
  )
}