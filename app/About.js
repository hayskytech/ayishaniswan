import { Button, Text } from '@rneui/themed'
import React, { useContext, useEffect } from 'react'
import { ScrollView, View } from 'react-native'
import { MyContext } from './_layout'

export default function About() {
  const { lang, setLang } = useContext(MyContext)
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        {lang === 'en' &&
          <Text>Jamia Mohammadia Ayisha Niswan is an ancient religious institution of religious education and training for women and girls in the city of Kurnool, which was founded by Hazrat Maulana Syed Shah Noorullah Qadri (may Allah have mercy on him) 26 years ago today.</Text>
        }
        {lang === 'ur' &&
          <>
            <Text>جامعہ محمدیہ عائشہ نسوان شہر کرنول میں خواتین و لڑکیوں کی دینی تعلیم و تربیت کا ایک قدیم دینی ادارہ ہے ، جس کی بنیاد حضرت مولانا سید شاہ نور اللہ قادری رحمہ اللہ آج سے 26 سال قبل رکھی ۔
            </Text>
            <Text>
              اب تک اس ادارہ سے ہزاروں لڑکیوں اور خواتین نے دینی و تربیت حاصل کی ہے۔ اور سینکڑوں طالبات سند فضیلت حاصل کر چکی ہیں۔
              شعبہ جات جامعہ :{'\n'}
              ادارہ ھذا میں پانچ شعبہ جات قائم ہیں۔
              {'\n'}1- شعبہء قاعدہ
              {'\n'}2- شعبہء ناظرہ
              {'\n'}3-شعبہء عالمیت وفضیلت پانچ سالہ
              {'\n'}4- شعبہء تربیت دوسالہ
              {'\n'}5- شعبہء مسائیہ
            </Text>
          </>
        }

      </View>

    </ScrollView>
  )
}