import { createHomeStyles } from '@/assets/styles/home.styles'
import Header from '@/components/Header'
import TaskView from '@/components/TaskView'
import { useTasks } from '@/hooks/useData'
import { useTheme } from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context"
import TaskInput from '../../components/TaskInput'


const Index = () => {
  const { colors, toggleDarkMode } = useTheme()
  const { getAllTasks, tasks } = useTasks();

  const styles = createHomeStyles(colors);

  useEffect(() => {
    getAllTasks()
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={colors.gradients.background} style={styles.container}>
        <StatusBar backgroundColor={colors.bg} barStyle={colors.statusBarStyle} />
        <Header />
        <TaskInput />
        <TaskView />
      </LinearGradient>
    </SafeAreaView>
  )
}


export default Index
