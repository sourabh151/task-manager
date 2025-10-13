import { ThemeProvider, useTheme } from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

const layoutComponent = () => {
    const { colors } = useTheme();
    return (
        <ThemeProvider>
            <Tabs
                screenOptions={{
                    tabBarActiveTintColor: colors.primary,
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
        </ThemeProvider>
    )
}

export default layoutComponent