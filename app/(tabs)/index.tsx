import { useTheme } from '@/hooks/useTheme'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const Index = () => {
  const { colors, toggleDarkMode } = useTheme()
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg
    }}>
      <Text style={{ paddingTop: 40, color: colors.text }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
      <TouchableOpacity>
        <Text onPress={() => {
          toggleDarkMode()
        }}>
          change theme
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index
