import { useTheme } from '@/hooks/useTheme'
import React, { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface Task {
  name: string,
  completed: boolean,
  _id: string,
  createdAt: string
}

const Index = () => {
  const { colors, toggleDarkMode } = useTheme()
  const [data, setData] = useState<Task[]>([])
  const [email, setEmail] = useState('sourabh')
  const getAllTasks = () => {
    fetch(`https://task-manager-uizw.onrender.com/api/v1/users/tasks?email=${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData(data)
      })
      .catch((error) => console.error("Fetch error:", error));
  }
  useEffect(() => {
    getAllTasks()
  });


  const addTask = (name: string, completed: boolean = false) => {
    fetch(`https://task-manager-uizw.onrender.com/api/v1/users/tasks?email=${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, completed }),
    })
      .then(response => response.json())
      .then(newTask => {
        setData(prevData => [...prevData, newTask]);
      })
      .catch(error => console.error("Add task error:", error));
  };

  const updateTask = (taskId: string, name?: string, completed?: boolean) => {
    fetch(`https://task-manager-uizw.onrender.com/api/v1/users/tasks?email=${email}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taskId, name, completed }),
    })
      .then(response => response.json())
      .then(updatedTask => {
        setData(prevData => prevData.map(task => task._id === taskId ? updatedTask : task));
      })
      .catch(error => console.error("Update task error:", error));
  };

  const deleteTask = (taskId: string) => {
    fetch(`https://task-manager-uizw.onrender.com/api/v1/users/tasks/${taskId}?email=${email}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setData(prevData => prevData.filter(task => task._id !== taskId));
        }
      })
      .catch(error => console.error("Delete task error:", error));
  };

  const deleteAllTasks = () => {
    fetch(`https://task-manager-uizw.onrender.com/api/v1/users/tasks/?email=${email}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setData([]);
        }
      })
      .catch(error => console.error("Delete all tasks error:", error));
  };
  return (
    <View style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.bg
    }}>
      <Text style={{ paddingTop: 40, color: colors.text }}>
        {data[0]?.name}
      </Text>
      <TouchableOpacity>
        <Text onPress={() => {
          toggleDarkMode()
        }}>
          change theme
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Index
