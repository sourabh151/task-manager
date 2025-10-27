import { createHomeStyles } from "@/assets/styles/home.styles"
import { useTasks } from "@/hooks/useData"
import { useTheme } from "@/hooks/useTheme"
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import { Alert, TextInput, TouchableOpacity, View } from 'react-native'

const TaskInput = () => {
  const { colors } = useTheme()
  const { addTask } = useTasks()
  const styles = createHomeStyles(colors)
  const [value, setValue] = useState("")

  const handleInputSubmit = () => {
    try {
      addTask(value)
      setValue("")

    } catch (error) {
      if (error instanceof Error) {
        Alert.alert("error adding task", error.name)
      }
    }
  }
  return (
    <View style={styles.inputSection}>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder='enter task name'
          placeholderTextColor={colors.textMuted}
          value={value}
          onChangeText={setValue}
          onSubmitEditing={handleInputSubmit}
          style={styles.input}
        >
        </TextInput>
        <TouchableOpacity onPress={handleInputSubmit} activeOpacity={0.8} disabled={!value.trim()}>
          <LinearGradient colors={!value.trim() ? colors.gradients.muted : colors.gradients.empty}
            style={[styles.addButton, !value.trim() && styles.addButtonDisabled]}
          >
            <Ionicons name='add' size={24} color="#fff"></Ionicons>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default TaskInput
