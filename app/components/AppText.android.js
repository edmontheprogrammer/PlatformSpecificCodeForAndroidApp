import React from 'react'
import { StyleSheet, Text } from 'react-native';

function AppText({children}) {
  return (
    <Text style={styles.text}>{children}</Text>
  )
}

const styles = StyleSheet.create({
    text: {
        // this line sets the color on all platforms, android and ios, to tomato 
        color: "tomato", 
        fontSize: 18, 
        fontFamily: "Roboto", 
        },
})

export default AppText; 