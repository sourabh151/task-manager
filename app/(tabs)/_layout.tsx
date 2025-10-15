import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'
import { useTheme } from "@/hooks/useTheme"

const LayoutComponent = () => {
  const { colors } = useTheme()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
          backgroundColor: colors.bg,
          borderTopWidth: 1,
          borderColor: colors.border,
          height: 100,
          paddingBottom: 30,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        }, headerShown: false,
        animation:"shift"
      }}
    >
      <Tabs.Screen name="index" options={{
        title: 'Todos',
        tabBarIcon: function({ color, size }) {
          return <Ionicons name="flash-outline" color={color} size={size} />
        },
      }} />
      <Tabs.Screen name="settings" options={{
        title: 'Settings',
        tabBarIcon: function({ color, size }) {
          return <Ionicons name="settings" color={color} size={size} />
        },
      }} />
    </Tabs>
  )
}

export default LayoutComponent
