import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from "@/assets/colors"
import { Ionicons } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'

const settingsScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Ionicons style={styles.header_side} name="apps-outline" size={20} />
        </View>
      </View>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 10,
    borderWidth: 1,
    borderColor: colors.iconPrivacy,
    height: 250
  },
  header: {
    flex: 1,
    flexDirection: "row",
  },
  header_center: {
    flex: 1
  },
  header_side: {
    width: 20,
    backgroundColor: colors.iconAppearance,
    color: colors.divider
  }
})

export default settingsScreen
