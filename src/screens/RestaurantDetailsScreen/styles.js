import { StyleSheet } from "react-native";

export default StyleSheet.create({
  page: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 5 / 3,
  },
  title: {
    fontSize: 35,
    fontWeight: 600,
    marginVertical: 10,
  },
  subtitle: {
    color: "lightgray",
    fontSize: 15,
  },
  container: {
    margin: 10,
  },
  iconContainer: {
    position: "absolute",
    top: 15,
    left: 10,
  },
  menuTitle: {
    marginTop: 20,
    fontSize: 16,
    letterSpacing: 0.7,
  },
  button: {
    backgroundColor: "black",
    marginTop: "auto",
    padding: 20,
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    fontSize: 20,
  },
});
