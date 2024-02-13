import { Image } from '@rneui/themed'
import React from 'react'
import { ScrollView, Text } from 'react-native'

export default function index() {
  return (
    <>
      <ScrollView>
        <Image source={{ uri: `https://ayishaniswan.com/wp-content/uploads/2022/04/ayisha-niswan-kurnool.jpg` }} style={{ height: 200 }} />
      </ScrollView >
    </>
  )
}
