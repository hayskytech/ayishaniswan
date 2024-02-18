import { useEffect } from 'react'
import { Alert, Linking, BackHandler } from 'react-native'
import Constants from 'expo-constants';
import axios from 'axios';
import * as Application from 'expo-application';


export default function Update() {

  useEffect(() => {
    if (!__DEV__) {
      const currentVersion = Application.nativeBuildVersion
      axios.get('https://ayisha-niswan-knl-default-rtdb.firebaseio.com/data/version.json')
        .then((res) => {
          console.log('online', res.data)
          console.log('curr', currentVersion)
          if (res.data > currentVersion) {
            handleUpdate()
          }
        })
        .catch(error => {
          console.error(error);
        })
    }
  }, [])

  const openAppPageInPlayStore = () => {
    const playStoreUrl = `https://play.google.com/store/apps/details?id=${Constants.expoConfig.android.package}`;
    Linking.canOpenURL(playStoreUrl)
      .then((supported) => {
        if (supported) {
          Linking.openURL(playStoreUrl);
        } else {
          console.error('Cannot open URL:', playStoreUrl);
        }
      })
      .catch((err) => console.error('An error occurred:', err));
  };

  const handleUpdate = () =>
    Alert.alert(
      'New Update Available',
      'Open Google Play Store and update',
      [
        {
          text: 'Exit',
          onPress: () => BackHandler.exitApp(),
          style: 'cancel',
        },
        {
          text: 'Update Now',
          onPress: openAppPageInPlayStore,
          style: 'default',
        },
      ],
      {
        cancelable: false,
        // onDismiss: () =>
        // Alert.alert('This alert was dismissed by tapping outside of the alert dialog.',),
      },
    );
}
