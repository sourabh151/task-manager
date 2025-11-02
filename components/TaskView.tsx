import { createHomeStyles } from '@/assets/styles/home.styles'
import { Task, useTasks } from '@/hooks/useData'
import { useTheme } from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useState } from 'react'
import { FlatList, Text, TextInput, TouchableOpacity, View, Alert, RefreshControl } from 'react-native'
import LoadingSpinner from './LoadingSpinner'

const TaskView = () => {
  const { isLoading, setIsLoading, tasks, getAllTasks } = useTasks()
  // const [refreshing,setRefreshing] = useState(false)
  const handleRefresh = () => {
    setIsLoading(true)
    getAllTasks()
  }
  return (
    <>
      {isLoading && <LoadingSpinner />}
      {!isLoading && <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem item={item} />}
        keyExtractor={(item) => item._id}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        }
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

  const toggleCompletion = (item: Task) => {
    return {
      ...item, completed: !item.completed
    }
  }
  const handleDelete = () => {
    Alert.alert("Delete Todos", "Are you sure you want to delete this Todo", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => { deleteTask({ taskId: item._id }) } }
    ])

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
            updateTask(toggleCompletion(item))
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
        {
          editText ? <View style={styles.container}>
            <View style={styles.editContainer}>
              <TextInput
                value={editText}
                onChangeText={setEditText}
                style={styles.editInput}
                autoFocus
                multiline
                placeholder='edit your todo...'
                placeholderTextColor={colors.textMuted}>

              </TextInput>
            </View>
            <View style={styles.editButtons}>
              <TouchableOpacity onPress={handleSaveEdit} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.success} style={styles.editButton}>
                  <Ionicons name='checkmark' size={16} color={"#fff"} />
                  <Text style={styles.editButtonText}>Save</Text>
                </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => { setEditText("") }} activeOpacity={0.8}>
                <LinearGradient colors={colors.gradients.danger} style={styles.editButton}>
                  <Ionicons name='logo-x' size={16} color={"#fff"} />
                  <Text style={styles.editButtonText}>Cancel</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View> : <>
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
          </>
        }

      </LinearGradient>
    </View>)
}

export default TaskView
