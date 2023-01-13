import { useState } from "react"
import { StyleSheet, Text, SafeAreaView } from "react-native"
import CustomButton, { ButtonTypes } from "./components/Button"
import { getStatusBarHeight } from "react-native-status-bar-height";



export default function App() {
  let [result, setResult] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.mainText}>{result}</Text>
      <CustomButton
        title="+"
        onPress={() => (setResult(result += 1))}
        btnStyle={{ width: 100, height: 100, margin: 10 }}
        btnType={ButtonTypes.ORANGE}
      />
      <CustomButton
        title="-"
        onPress={() => (setResult(result -= 1))}
        btnStyle={{ width: 100, height: 100, margin: 10 }}
        btnType={ButtonTypes.ORANGE}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: getStatusBarHeight() 
  },
  mainText: {
    color: "white",
    fontSize: 80,
    margin: 10
  },
})
