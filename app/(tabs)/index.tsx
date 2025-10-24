import { useTasks } from '@/hooks/useData'
import { ColorScheme, useTheme } from '@/hooks/useTheme'
import React, { useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'



const Index = () => {
  const { colors, toggleDarkMode } = useTheme()
  const { tasks, getAllTasks, addTask } = useTasks();

  const styles = getStyles(colors)

  useEffect(() => {
    getAllTasks()
  }, [])


  return (
    <View style={styles.container}>
      <Text style={{ paddingTop: 40, color: colors.text }}>
        {tasks[0]?.name}
      </Text>
      <TouchableOpacity>
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
    </View>
  )
}
const getStyles = (colors: ColorScheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg
    }
  })
}

export default Index
