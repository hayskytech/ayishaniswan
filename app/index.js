import { Image, Text, Card, Icon, Dialog, ListItem } from '@rneui/themed'
import { router } from 'expo-router';
import React, { useContext, useState } from 'react'
import { TouchableOpacity, ScrollView, View } from 'react-native'
import { MyContext } from './_layout';
const banner = require('../assets/banner1.jpg')
// import { getLocales } from 'expo-localization';
// const landCode = getLocales()[0].languageCode;


export default function index() {
  const { lang, setLang } = useContext(MyContext)
  const [box, setBox] = useState(!lang)
  function changeLang(code) {
    setLang(code)
    setBox(false)
  }
  return (
    <ScrollView>
      <Dialog
        isVisible={box}
      >
        <Text h4>Select your language</Text>
        <ListItem topDivider bottomDivider onPress={() => changeLang('ur')}>
          <Icon name='arrow-forward' />
          <ListItem.Content>
            <ListItem.Title>اردو</ListItem.Title>
          </ListItem.Content>
        </ListItem>
        <ListItem topDivider bottomDivider onPress={() => changeLang('en')}>
          <Icon name='arrow-forward' />
          <ListItem.Content>
            <ListItem.Title>English</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      </Dialog>
      <View style={{ padding: 10 }}>
        <Image
          // source={{ uri: `https://ayishaniswan.com/wp-content/uploads/2022/04/ayisha-niswan-kurnool.jpg` }}
          source={banner}
          style={{ height: 150, width: 'auto', resizeMode: 'contain' }}
        />
      </View>

      <Card>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>
          {lang === 'en' && 'Jamia Mohammadiya Ayisha Niswan'}
          {lang === 'ur' && 'جامعہ محمدیہ عائشہ نسوان'}
        </Text>
        <Card.Divider />
        <View style={ss.view}>
          <TouchableOpacity style={ss.card} onPress={() => router.push('Departments')}>
            <Icon name='list-alt' size={35} />
            <Text style={ss.text}>
              {lang === 'en' && 'Departments'}
              {lang === 'ur' && 'شعبه جات'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ss.card} onPress={() => router.push('AllPosts')}>
            <Icon name='list-alt' size={35} />
            <Text style={ss.text}>
              {lang === 'en' && 'All Posts'}
              {lang === 'ur' && 'تمام پوسٹس'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={ss.view}>
          <TouchableOpacity style={ss.card} onPress={() => router.push('About')}>
            <Icon name='person' size={35} />
            <Text style={ss.text}>
              {lang === 'en' && 'About us'}
              {lang === 'ur' && 'ہمارے بارے میں'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ss.card} onPress={() => router.push('Donate')}>
            <Icon name='favorite' size={35} />
            <Text style={ss.text}>
              {lang === 'en' && 'Donate'}
              {lang === 'ur' && 'عطیہ'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={ss.view}>
          <TouchableOpacity style={ss.card} onPress={() => router.push('Contact')}>
            <Icon name='call' size={35} />
            <Text style={ss.text}>
              {lang === 'en' && 'Contact'}
              {lang === 'ur' && 'رابطہ'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={ss.card} onPress={() => router.push('Settings')}>
            <Icon name='settings' size={35} />
            <Text style={ss.text}>
              {lang === 'en' && 'Settings'}
              {lang === 'ur' && 'ترتیبات'}
            </Text>
          </TouchableOpacity>
        </View>
      </Card>

    </ScrollView >


  )
}
const ss = {
  view: {
    display: 'flex', flexDirection: 'row', gap: 30, justifyContent: 'space-around', paddingHorizontal: 10
  },
  card: { width: '50%', padding: 20, display: 'flex', justifyContent: 'center' },
  text: { textAlign: 'center', fontSize: 16, fontFamily: 'Noto-Nastaliq-Urdu' }
}