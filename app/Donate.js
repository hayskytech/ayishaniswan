import { Text } from '@rneui/themed'
import React from 'react'
import { ScrollView, View } from 'react-native'

export default function Donate() {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text h4>Need help</Text>
        <Text>About 200 female students are getting education and training in the madrasa. This institution has no permanent source of income.{'\n'}The educational expenses of the deserving students are met with the help of Zakat and sponsorship and all other expenses are met with the monthly and special donations of the benefactors.</Text>

        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
          Institute Requirements:
        </Text>
        <Text>
          To teach students:
        </Text>
        <Text>
          1- Cloth stitching machines.
        </Text>
        <Text>
          2- Computers.
        </Text>

        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>
          How do you support the Institution:
        </Text>
        <Text>
          1- Do monthly or annual donations.
        </Text>
        <Text>
          2- Do the educational sponsorship of one or more female students.
        </Text>
        <Text>
          3- Pay annual Zakat and Sadaqat.
        </Text>

        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>
          How to send your money:{'\n'}
        </Text>
        <Text selectable>
          You can also deposit money directly into a bank account.{'\n'}
          JAMIA MOHAMMADIA AYISHA NISWAN.{'\n'}
          Account number: 520101198145442{'\n'}
          IFSC CODE: UBIN0902063 (UNION BANK OF INDIA){'\n'}
          Or you can send money on phone pay, google pay, amazon pay, paytm 9291697786
        </Text>

        <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 10 }}>
          Important Note:
        </Text>
        <Text selectable>
          In case of amount transfer, please send your name and address along with phone number to determine Zakat, Sadaqat, Donations, and Sponsorship on WhatsApp number 9291697786. Or notify the above-mentioned phone number.
        </Text>
      </View>
    </ScrollView>
  )
}
