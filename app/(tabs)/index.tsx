import { createHomeStyles } from '@/assets/styles/home.styles'
import Header from '@/components/Header'
import { useTasks } from '@/hooks/useData'
import { useTheme } from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect } from 'react'
import { StatusBar, TouchableOpacity } from 'react-native'



const Index = () => {
    const { colors, toggleDarkMode } = useTheme()
    const { tasks, getAllTasks, addTask } = useTasks();

    const styles = createHomeStyles(colors);

    useEffect(() => {
        getAllTasks()
    }, [])


    return (
        // <SafeAreaView style={styles.container}>
        // </SafeAreaView>
        <LinearGradient colors={colors.gradients.primary} style={styles.container}>
            <StatusBar backgroundColor={colors.bg} barStyle={colors.statusBarStyle} />
            <TouchableOpacity onPress={toggleDarkMode} style={styles.header}>
                <Header />
            </TouchableOpacity>
        </LinearGradient>
    )
}


export default Index
