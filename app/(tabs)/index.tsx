import { createHomeStyles } from '@/assets/styles/home.styles'
import { useTasks } from '@/hooks/useData'
import { useTheme } from '@/hooks/useTheme'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useEffect } from 'react'
import { StatusBar, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'



const Index = () => {
  const { colors, toggleDarkMode } = useTheme()
  const { tasks, getAllTasks, addTask } = useTasks();

  const styles = createHomeStyles(colors);

  useEffect(() => {
    getAllTasks()
  }, [])


  return (
    <LinearGradient
      colors={colors.gradients.background}>
      <StatusBar barStyle={colors.statusBarStyle} />
      <SafeAreaView style={styles.safeArea}>
        <Text style={{ paddingTop: 40, color: colors.text }}>
          {tasks[0]?.name}
        </Text>
        <TouchableOpacity style={styles.title}>
          <Text onPress={() => {
            toggleDarkMode()
          }}>
            change theme
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text onPress={() => {
            addTask("New Task from index")
          }}>
            add task
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  )
}


export default Index
