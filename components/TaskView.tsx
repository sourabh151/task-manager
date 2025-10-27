import { useTasks } from '@/hooks/useData'
import React from 'react'
import { FlatList, View } from 'react-native'
import LoadingSpinner from './LoadingSpinner'

const TaskView = () => {
    const { isLoading, tasks } = useTasks()
    return (
        <View style={{
            borderWidth: 1,
            borderColor: "red"
        }}>
            {isLoading && <LoadingSpinner />}
            {!isLoading && <FlatList
                data={tasks}
                renderItem={({ item }) => <View>{item.name}</View>}
                keyExtractor={(item) => item._id}
            />}
        </View>
    )
}

export default TaskView