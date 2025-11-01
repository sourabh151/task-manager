import { createHomeStyles } from '@/assets/styles/home.styles'
import Header from '@/components/Header'
import TaskView from '@/components/TaskView'
import { useTasks } from '@/hooks/useData'
import { useTheme } from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import TaskInput from '../../components/TaskInput'


const Index = () => {
  const { getAllTasks } = useTasks();
  const { colors } = useTheme()
  const styles = createHomeStyles(colors);

  useEffect(() => {
    getAllTasks()
  }, [])


  return (
    <LinearGradient colors={colors.gradients.background} style={styles.container}>
      <StatusBar backgroundColor={colors.warning} barStyle={colors.statusBarStyle} />
      <Header />
      <TaskInput />
      <TaskView />
    </LinearGradient>
  )
}


export default Index
