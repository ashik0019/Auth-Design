import React from 'react'
import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Button, } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const Registration = () => {
    return (
        <View style={{ flex: 100, alignItems: 'center' }}>
            <View style={{ width: '100%', height: '50%', position: 'absolute' }}>
                <ImageBackground style={{ width: '100%', height: '100%' }} source={require('./assets/background.png')}>
                    <View style={{ backgroundColor: '#2699FB', flex: 50, opacity: 0.9 }}>
                        <View style={{ flex: 38, alignItems: 'center' }}>
                            <View style={{ flex: 2, backgroundColor: 'red' }}></View>
                            <View style={styles.topIcon}>
                                <Image source={require('./assets/icon.png')} />
                            </View>
                            <View style={{ flex: 8, }}>
                                <Text style={{ color: 'white', fontSize: 16, paddingTop: 7 }}>User Registration</Text>
                            </View>
                        </View>

                    </View>
                </ImageBackground>
            </View>
            <View style={{ width: '80%', height: '70%', backgroundColor: 'white', marginTop: '40%', elevation: 10, borderRadius: 2 }}>
                <View style={{ marginTop: '15%', marginHorizontal: 30 }}>
                    <View style={{marginBottom: 30}}>
                        <MaterialIcons name="face" style={{paddingTop: 15, paddingLeft: 10, color: '#2699FB'}}  size={20} color="#000" ></MaterialIcons>
                        <TextInput style={{ width: '100%', borderColor: '#2699FB', borderWidth: 1, paddingLeft: 37, fontSize: 16,position: 'absolute' }} placeholder="Full Name" placeholderTextColor="#2699FB" />
                    </View>
                    <View style={{marginBottom: 30}}>
                        <MaterialIcons name="mail" style={{paddingTop: 15, paddingLeft: 10, color: '#2699FB'}}  size={20} color="#000" ></MaterialIcons>
                        <TextInput style={{ width: '100%', borderColor: '#2699FB', borderWidth: 1, paddingLeft: 37, fontSize: 16,position: 'absolute' }} placeholder="Email Address" placeholderTextColor="#2699FB" />
                    </View>
                    <View style={{marginBottom: 30}}>
                        <MaterialIcons name="call" style={{paddingTop: 15, paddingLeft: 10, color: '#2699FB'}}  size={20} color="#000" ></MaterialIcons>
                        <TextInput style={{ width: '100%', borderColor: '#2699FB', borderWidth: 1, paddingLeft: 37, fontSize: 16,position: 'absolute' }} placeholder="Mobile No" placeholderTextColor="#2699FB" />
                    </View>
                    <View style={{marginBottom: 20}}>
                        <MaterialIcons name="lock" style={{paddingTop: 15, paddingLeft: 10, color: '#2699FB'}}  size={20} color="#000" ></MaterialIcons>
                        <TextInput style={{ width: '100%', borderColor: '#2699FB', borderWidth: 1, paddingLeft: 37, fontSize: 16,position: 'absolute' }} placeholder="Password" placeholderTextColor="#2699FB" />
                    </View>
                    
                    {/* <TextInput style={{ borderColor: '#2699FB', borderWidth: 1, padding: 10, fontSize: 16, marginTop: 20 }} placeholder="Password" placeholderTextColor="#2699FB" /> */}
                    <View style={{ marginTop: 20 }}>
                        <Button title="Registration" />
                    </View>
                    
                </View>
            </View>
        </View>
    )
}

export default Registration

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
    },
    
})
