import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const layoutComponent = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'green',
                tabBarStyle: {
                    backgroundColor: '#1e293b',
                    borderTopWidth: 1,
                    borderColor: "yellow",
                    height: 100,
                    paddingBottom: 30,
                    paddingTop: 5
                },
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600',
                }, headerShown: false
            }}
        >
            <Tabs.Screen name="index" options={{
                title: 'Todos',
                tabBarIcon: function ({ color, size }) {
                    return <Ionicons name="flash-outline" color={color} size={size} />
                },
            }} />
            <Tabs.Screen name="settings" options={{
                title: 'Settings',
                tabBarIcon: function ({ color, size }) {
                    return <Ionicons name="settings" color={color} size={size} />
                },
            }} />
        </Tabs>
    )
}

export default layoutComponent