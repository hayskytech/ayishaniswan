import { Drawer } from 'expo-router/drawer';
import { Icon, Image, ListItem, Text, ThemeProvider, createTheme } from '@rneui/themed';
import { FlatList, SafeAreaView, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from 'expo-router';
import { createContext, useEffect, useState } from 'react';
import { useFonts } from 'expo-font';
import * as SecureStore from 'expo-secure-store';
import Update from '../others/Update';
const logo = require('../assets/logo1.png')

export const MyContext = createContext(null)
export default function Layout() {
  const [lang, setLang] = useState('ur')
  const [font, setFont] = useState('Roboto')
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

  useEffect(() => {
    if (lang === 'ur') {
      setFont('Noto-Nastaliq-Urdu')
    } else {
      setFont('Roboto')
    }
    save('lang', lang)
  }, [lang])

  const [fontsLoaded] = useFonts({
    'Noto-Nastaliq-Urdu': require('../assets/fonts/NotoNastaliqUrdu-VariableFont_wght.ttf'),
  })
  const theme = createTheme({
    // lightColors: {
    //   primary: 'red',
    // },
    // darkColors: {
    //   primary: 'blue',
    // },
    components: {
      Button: {
        raised: true,
        // color: 'blue'
      },
      Text: {
        style: {
          fontSize: 16,
          fontFamily: font
        },
        h4Style: {
          marginVertical: 10
        }
      },
      CardTitle: {
        style: {
          fontFamily: font,
        }
      }
    },
  });
  function drawyerContent(props) {
    const items = [
      { link: '/', icon: 'home', name: 'Home' },
      { link: '/About', icon: 'person', name: 'About' },
      { link: '/Departments', icon: 'list', name: 'Departments' },
      { link: '/Contact', icon: 'call', name: 'Contact' },
      { link: '/Donate', icon: 'favorite', name: 'Donate' },
      { link: '/Settings', icon: 'settings', name: 'Settings' },
    ]
    return (
      <SafeAreaProvider>
        <SafeAreaView>
          <Update />
          <View style={{ marginTop: 20 }}>
            <Image source={logo}
              style={{ maxHeight: 250, minHeight: 250, width: '100%', objectFit: 'contain' }}
            />

            <FlatList
              data={items}
              renderItem={({ item }) =>
                <ListItem
                  bottomDivider topDivider
                  onPress={() => router.push(item.link)}>
                  <Icon name={item.icon} />
                  <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              }
            />

          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <MyContext.Provider value={{ lang, setLang }}>
        <Drawer
          sceneContainerStyle={{ backgroundColor: 'transparent' }}
          drawerStyle={{ width: '60%', backgroundColor: 'white' }}
          drawerType='slide'
          edgeWidth={30}
          drawerContent={drawyerContent}
        // screenOptions={{ header: CustomHeader }}
        >
          <Drawer.Screen
            name="index"
            options={{
              drawerLabel: 'Home',
              title: 'Home',
              headerShown: true
            }}
          />

        </Drawer>
      </MyContext.Provider>
    </ThemeProvider>
  );
}