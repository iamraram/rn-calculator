import { Text, Pressable, StyleSheet } from "react-native"
import propTypes from "prop-types"

export const ButtonTypes = {
  ORANGE: "ORANGE",
  GRAY: "GRAY",
}

const Selected = {
  ORANGE: ["#f57c00", "#ffa726"],
  GRAY: ["#373737", "#757575"],
}

const CustomButton = ({ title, onPress, btnStyle, btnType }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          backgroundColor: Selected[btnType][0],
        },
        pressed && {
          backgroundColor: Selected[btnType][1],
        },
        btnStyle,
      ]}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  )
}

CustomButton.defaultProps = {
  btnType: ButtonTypes.GRAY,
}

CustomButton.propTypes = {
  title: propTypes.string.isRequired,
  onPress: propTypes.func.isRequired,
  btnStyle: propTypes.object.isRequired,
  btnType: propTypes.oneOf(Object.values(ButtonTypes)),
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1976d2",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50
  },
  title: {
    fontSize: 54,
    color: "white",
  },
})

export default CustomButton
