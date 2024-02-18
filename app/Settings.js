import React, { useContext, useEffect } from 'react'
import { MyContext } from './_layout';
import * as SecureStore from 'expo-secure-store';
import { Button, Icon, ListItem, Text } from '@rneui/themed';
import { Platform, ScrollView, View } from 'react-native';
import { router } from 'expo-router';
import { useFonts } from 'expo-font';


export default function Settings() {
  const { lang, setLang } = useContext(MyContext)
  async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
      setLang(result)
    }
  }
  useEffect(() => {
    getValueFor('lang')
  }, [])
  function changeLang(code) {
    setLang(code)
    save('lang', code)
  }
  const [fontsLoaded] = useFonts({
    'Noto-Nastaliq-Urdu': require('../assets/fonts/NotoNastaliqUrdu-VariableFont_wght.ttf'),
  });

  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text h4>Select your language</Text>
        <ListItem topDivider bottomDivider onPress={() => changeLang('ur')}>
          <Icon name='arrow-forward' />
          <ListItem.Content>
            <ListItem.Title>اردو</ListItem.Title>
          </ListItem.Content>
          {lang === 'ur' && <Icon name='check-circle' color='green' />}
        </ListItem>
        <ListItem topDivider bottomDivider onPress={() => changeLang('en')}>
          <Icon name='arrow-forward' />
          <ListItem.Content>
            <ListItem.Title>English</ListItem.Title>
          </ListItem.Content>
          {lang === 'en' && <Icon name='check-circle' color='green' />}
        </ListItem>
        <Button icon={<Icon color='white' name='arrow-back' />}
          onPress={() => router.push('/')}
          title='Back to Home' />

      </View>
    </ScrollView>
  )
}
