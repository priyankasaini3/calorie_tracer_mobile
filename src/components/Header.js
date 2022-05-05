import React from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-paper'
import { theme } from '../core/theme'
import { getStatusBarHeight } from 'react-native-status-bar-height'
export default function Header(props) {
  return <Text style={styles.header} {...props} />
}

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: "white",
    fontWeight: 'bold',
    paddingVertical: 12,
    paddingTop:30 + getStatusBarHeight(),
  },
})
