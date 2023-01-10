import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  console.log("여기에 치는 듯 쉽네요")
  const name = "이하람"
  return (
    <>
      <View style={styles.container}>
        <Text>{name}</Text>
        <StatusBar style="auto" />
      </View>
      <Text>default</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
