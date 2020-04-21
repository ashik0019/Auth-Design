import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

const App = () => {
  return (
    <View style={{ flex: 100 }}>
      <View style={{ flex: 50 }}>
        <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./assets/background.png')}>
          <View style={{ backgroundColor: '#2699FB', flex: 50, opacity: 0.9 }}>
            <View style={{ flex: 38, alignItems: 'center' }}>
              <View style={{ flex: 8, backgroundColor: 'red' }}></View>
              <View style={styles.topIcon}>
                <Image source={require('./assets/icon.png')} />
              </View>

              <View style={{ flex: 8, }}>
                <Text style={{ color: 'white', fontSize: 14, paddingTop: 7 }}>Ashiqur Rahman</Text>
                <Text style={{ color: 'white', fontSize: 14, textAlign: 'center' }}>Balance $500</Text>
              </View>
            </View>
            <View style={{ flex: 12, flexDirection: 'row', marginTop: 15, paddingTop: 20, }}>
              <View style={{ flex: 4, }}>
                <Text style={{ fontFamily: 'roboto', fontSize: 16, textAlign: 'center', color: 'white', borderRightColor: 'white', borderRightWidth: 2 }}>Help</Text>
              </View>
              <View style={{ flex: 4, }}>
                <Text style={{ fontFamily: 'roboto', paddingHorizontal: 5, fontSize: 16, textAlign: 'center', color: 'white', borderRightColor: 'white', borderRightWidth: 2 }}>Start Earning</Text>
              </View>
              <View style={{ flex: 4, }}>
                <Text style={{ fontFamily: 'roboto', fontSize: 16, textAlign: 'center', color: 'white' }}>Profile</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 50 }}>
        <View style={{ flex: 25, flexDirection: 'row' }}>
          <View style={{ flex: 8, marginTop: 10 }}>
            <View style={{ alignItems: 'center', paddingTop: 20 }}>
              <Image source={require('./assets/1.png')} />
            </View>
            <Text style={{ textAlign: 'center', color: '#2699FB', fontSize: 16, paddingTop: 5 }}>Dashboard</Text>
          </View>

          <View style={{ flex: 8, marginTop: 10 }}>
            <View style={{ alignItems: 'center', paddingTop: 20 }}>
              <Image source={require('./assets/2.png')} />
            </View>
            <Text style={{ textAlign: 'center', color: '#2699FB', fontSize: 16, paddingTop: 5 }}>Offer Rate</Text>
          </View>


          <View style={{ flex: 8, marginTop: 10 }}>
            <View style={{ alignItems: 'center', paddingTop: 20 }}>
              <Image source={require('./assets/3.png')} />
            </View>
            <Text style={{ textAlign: 'center', color: '#2699FB', fontSize: 16, paddingTop: 5 }}>Terms</Text>
          </View>

        </View>
        <View style={{ flex: 25, flexDirection: 'row' }}>

          <View style={{ flex: 8, marginTop: 10 }}>
            <View style={{ alignItems: 'center', paddingTop: 20 }}>
              <Image source={require('./assets/4.png')} />
            </View>
            <Text style={{ textAlign: 'center', color: '#2699FB', fontSize: 16, paddingTop: 5 }}>Earnings</Text>
          </View>

          <View style={{ flex: 8, marginTop: 10 }}>
            <View style={{ alignItems: 'center', paddingTop: 20 }}>
              <Image source={require('./assets/5.png')} />
            </View>
            <Text style={{ textAlign: 'center', color: '#2699FB', fontSize: 16, paddingTop: 5 }}>Payments</Text>
          </View>

          <View style={{ flex: 8, marginTop: 10 }}>
            <View style={{ alignItems: 'center', paddingTop: 20 }}>
              <Image source={require('./assets/6.png')} />
            </View>
            <Text style={{ textAlign: 'center', color: '#2699FB', fontSize: 16, paddingTop: 5 }}>News</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  topIcon: {
    paddingTop: 15,
    flexDirection: 'column',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderColor: '#2699CB',
    borderWidth: 1,
    backgroundColor: "rgba(255, 255, 255, 255)"
  }
})

