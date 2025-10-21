import { useTasks } from '@/hooks/useData'
import { useTheme } from '@/hooks/useTheme'
import React, { useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'



const Index = () => {
    const { colors, toggleDarkMode } = useTheme()
    const { tasks, getAllTasks, addTask } = useTasks();

    useEffect(() => {
        getAllTasks()
    }, [])


    return (
        <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: colors.bg
        }}>
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

export default Index
