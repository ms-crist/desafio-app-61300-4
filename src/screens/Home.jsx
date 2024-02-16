import {View, StyleSheet } from "react-native";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Footer from "../components/FooterApp";
import { colors } from "../global/colors";



function Home({setCategorySelected}) {
  return (
    <View style={styles.container}>
      <Header title={"Inicio"}/>
      <Categories setCategorySelected={setCategorySelected}/>
      <Footer/>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    backgroundColor: colors.green_300
  },
});
