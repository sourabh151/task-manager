import { useTasks, Task } from '@/hooks/useData'
import React, { useState } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import LoadingSpinner from './LoadingSpinner'
import { useTheme } from '@/hooks/useTheme'
import { createHomeStyles } from '@/assets/styles/home.styles'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'

const TaskView = () => {
  const { isLoading, tasks } = useTasks()
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem item={item} />}
        keyExtractor={(item) => item._id}
      />}
    </>
  )
}
const TaskItem = ({ item }: { item: Task }) => {
  const [editText, setEditText] = useState("");
  const { updateTask, deleteTask } = useTasks()
  const { colors } = useTheme()
  const styles = createHomeStyles(colors)

  const handleEditTodo = () => {
    setEditText(item.name)
  }
  const handleSaveEdit = () => {
    updateTask({ name: editText, completed: item.completed, _id: item._id })
    setEditText("")
  }

  const handleDelete = () => {
    deleteTask({ taskId: item._id })
  }
  return (
    <View style={styles.todoItemWrapper}>
      <LinearGradient
        colors={colors.gradients.surface}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.todoItem}
      >
        {/* checkbox */}
        <TouchableOpacity
          style={styles.checkbox} activeOpacity={0.7}
          onPress={() => {
            updateTask(item)
          }}>
          <LinearGradient
            colors={item.completed ? colors.gradients.success : colors.gradients.muted}
            style={[styles.checkboxInner,
            { borderColor: item.completed ? "transparent" : colors.border }]}>
            {item.completed &&
              <Ionicons name='checkmark' size={18} color={"#fff"} />
            }
          </LinearGradient>
        </TouchableOpacity>
        <View style={styles.todoTextContainer}>
          <Text
            style={[styles.todoText,
            item.completed && {
              textDecorationLine: "line-through",
              color: colors.textMuted,
              opacity: 0.6
            }
            ]}
          >
            {item.name}
          </Text>
        </View>
        <View style={styles.todoActions}>
          <TouchableOpacity
            onPress={handleEditTodo}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={colors.gradients.warning}
              style={styles.actionButton}
            >
              <Ionicons name='pencil' size={14} color={"#fff"} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleDelete}
            activeOpacity={0.8}
          >
            <LinearGradient
              colors={colors.gradients.danger}
              style={styles.actionButton}
            >
              <Ionicons name='trash' size={14} color={"#fff"} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>)
}

export default TaskView
