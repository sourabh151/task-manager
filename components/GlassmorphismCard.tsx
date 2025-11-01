// import React from 'react';
// import { Canvas, Rect, BlurMask, LinearGradient, vec, Fill } from '@shopify/react-native-skia';
// import { StyleSheet, View } from 'react-native';
//
// const GlassmorphismCard = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <View style={styles.container}>
//       <Canvas style={StyleSheet.absoluteFill}>
//         {/* Background content (e.g., image, other UI elements) would go here */}
//         {/* For demonstration, a simple fill */}
//         <Fill color="lightblue" />
//
//         {/* The glassmorphism effect layer */}
//         <Rect x={50} y={50} width={200} height={150} color="rgba(255, 255, 255, 0.2)">
//           <BlurMask blur={10} style="normal" />
//           {/* Optional: Subtle gradient for more depth */}
//           <LinearGradient
//             start={vec(0, 0)}
//             end={vec(200, 150)}
//             colors={['rgba(255,255,255,0.1)', 'rgba(255,255,255,0.05)']}
//           />
//         </Rect>
//       </Canvas>
//       <View style={styles.contentContainer}>
//         {children}
//       </View>
//     </View>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   contentContainer: {
//     position: 'absolute',
//     // Position and style your content within the glassmorphism area
//   },
// });
//
// export default GlassmorphismCard;
