import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native';

Platform.select({
    android: {
        fontSize: 18, 
        fontFamily: "Roboto", 
    }, 
    ios: {
        fontSize: 20, 
        fontFamily: "Avenir"
    }, 
})

function AppText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        // this line sets the color on all platforms, android and ios, to tomato 
        color: "tomato", 
        // this line adds a platform specific code, in this case, "android" from the 
        ...Platform.select({
            android: {
                fontSize: 18, 
                fontFamily: "Roboto", 
            },
        })
        
    
    
    },
})

export default AppText; 