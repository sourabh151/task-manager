import { createHomeStyles } from '@/assets/styles/home.styles';
import { useTasks } from '@/hooks/useData';
import { useTheme } from '@/hooks/useTheme';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  const { colors } = useTheme();
  const styles = createHomeStyles(colors);
  const { tasks } = useTasks()
  const completed = tasks.filter(task => task.completed).length
  const progressPercentage = tasks.length === 0 ? 0 : (completed / tasks.length) * 100
  return (
    <View style={styles.header}>
      <View style={styles.titleContainer}>
        <LinearGradient colors={Object.values(colors.gradients.primary)} style={styles.iconContainer}>
          <Ionicons name='flash-outline' size={28} color="#fff" />
        </LinearGradient>
        <View style={styles.titleTextContainer} >
          <Text style={styles.title}>Today&apos;s Tasks 👀</Text>
          <Text style={styles.subtitle}>{`${completed} of ${tasks.length} completed`}</Text>
        </View>
      </View>

      <View style={styles.progressContainer}>
        <View style={styles.progressBarContainer}>
          <View style={styles.progressBar}>
            <LinearGradient colors={colors.gradients.success} style={[styles.progressFill, { width: `${progressPercentage}%` }]}>
            </LinearGradient>
          </View>
          <Text style={styles.progressText}>{Math.round(progressPercentage)}%</Text>
        </View>
      </View>
    </View>
  )
}

export default Header
