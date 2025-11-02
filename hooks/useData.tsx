import { fetch } from 'expo/fetch';
import React, { createContext, useContext, useState } from 'react';
import { Alert } from 'react-native';
// Define the task type
export type Task = {
  _id: string;
  name: string;
  completed: boolean;
};
/**
 *  * Creates a new type from T, where properties in K are optional.
 *   */
// type MakeOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
//
// export type TaskUpdate = MakeOptional<Task, "completed" | "name">

type TaskContextType = {
  tasks: Task[];
  getAllTasks: () => void;
  addTask: ({ name, completed }: { name: string, completed?: boolean }) => void;
  updateTask: ({ name, completed, _id }: Task) => void;
  deleteTask: ({ taskId }: { taskId: string }) => void;
  setEmail: (email: string) => void;
  isLoading: boolean,
  setIsLoading: (isLoading: boolean) => void;
};

// Create the context
const TaskContext = createContext<TaskContextType | {}>({});

// Create the provider component
export const TaskProvider = ({ children }: { children: React.ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [email, setEmail] = useState('sourabh')
  const [isLoading, setIsLoading] = useState(true);


  const getAllTasks = () => {
    fetch(`https://task-manager-uizw.onrender.com/api/v1/users/tasks?email=${email}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok: " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setTasks(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.error("Fetch error:", error)
        Alert.alert("Todos not fetched", "unable to fetch.please check your internet")
      });

  }



  const addTask = ({ name, completed }: { name: string, completed?: boolean }) => {
    fetch(`https://task-manager-uizw.onrender.com/api/v1/users/tasks?email=${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, completed }),
    })
      .then(response => response.json())
      .then(newTask => {
        setTasks(prevData => [...prevData, newTask]);
      })
      .catch(error => {
        console.error("Add task error:", error);
        Alert.alert("Error", "Failed to add task.");
      });
  };

  const updateTask = ({ name, completed, _id }: Task) => {
    fetch(`https://task-manager-uizw.onrender.com/api/v1/users/tasks?email=${email}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ taskId: _id, name, completed }),
    })
      .then(response => response.json())
      .then(updatedTask => {
        setTasks(prevData => prevData.map(task => task._id === _id ? updatedTask : task));
      })
      .catch(error => {
        console.error("Update task error:", error);
        Alert.alert("Error", "Failed to update task.");
      });
  };

  const deleteTask = ({ taskId }: { taskId: string }) => {
    fetch(`https://task-manager-uizw.onrender.com/api/v1/users/tasks/${taskId}?email=${email}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setTasks(prevData => prevData.filter(task => task._id !== taskId));
        }
      })
      .catch(error => {
        console.error("Delete task error:", error);
        Alert.alert("Error", "Failed to delete task.");
      });
  };

  const deleteAllTasks = () => {
    fetch(`https://task-manager-uizw.onrender.com/api/v1/users/tasks/?email=${email}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setTasks([]);
        }
      })
      .catch(error => {
        console.error("Delete all tasks error:", error);
        Alert.alert("Error", "Failed to delete all tasks.");
      });
  };

  return (
    <TaskContext.Provider value={{ tasks, getAllTasks, addTask, updateTask, deleteTask, deleteAllTasks, setEmail, isLoading, setIsLoading }}>
      {children}
    </TaskContext.Provider>
  );
};

// Create the context consumer component
export const useTasks = () => {
  const context = useContext(TaskContext) as TaskContextType;
  if (!context) {
    throw new Error("useTasks must be used within a TaskProvider");
  }
  return context;
}
