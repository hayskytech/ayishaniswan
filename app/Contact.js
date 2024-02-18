import { Image, Text } from '@rneui/themed'
import React from 'react'
import { Linking, Platform, ScrollView, TouchableOpacity, View } from 'react-native'
const map = require('../assets/map.png')
export default function Contact() {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text h4 style={{ marginVertical: 10 }}>Address</Text>
        <Text>#5/47, Shamiyah Masjid Lane, Three shops, One Town, Kurnool 518001, Andhra Pradesh</Text>
        <Text h4 style={{ marginVertical: 10 }}>Contact Numbers</Text>
        <Text>Phone: 08518-240999</Text>
        <Text>Cell: +91 9291697786</Text>
        <TouchableOpacity
          onPress={() => {
            const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
            const latLng = `15.825926572106962,78.0502482586984`;
            const label = 'Jamia Mohammadiya Ayisha Niswan Kurnool';
            const url = Platform.select({
              ios: `${scheme}${label}@${latLng}`,
              android: `${scheme}${latLng}(${label})`
            });
            Linking.openURL(url);
          }}
        >
          <Text h4 style={{ marginVertical: 10 }}>Map Location</Text>
          <Image source={map} style={{ width: '100%', height: 150 }} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}