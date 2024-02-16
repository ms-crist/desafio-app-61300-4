import { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text, Pressable } from "react-native";
import allProducts from "../data/products.json";
import ProductItem from "../components/ProductItem";
import Search from "../components/Search";
import Header from "../components/Header";
import Footer from "../components/FooterApp";
import { AntDesign } from '@expo/vector-icons';
import { colors } from "../global/colors";



function ItemListCategories({ category, setCategorySelected }) {
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (category) {
      const products = allProducts.filter((product) => product.category === category);
      const filteredProducts = products.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    } else {
      const filteredProducts = allProducts.filter((product) =>
        product.title.includes(keyword)
      );
      setProducts(filteredProducts);
    }
  }, [category, keyword]);

  return (
    <View style={styles.container}>
      <View style={{backgroundColor: colors.blue_100, width: '100%'}}>
      <View style={{flexDirection: 'row', backgroundColor: colors.blue_100, marginRight: 280}}>
      <AntDesign name="arrowleft" size={24} color="white"></AntDesign>
      <Pressable onPress={()=> setCategorySelected('')}><Text style={{color: 'white'}}>Inicio</Text></Pressable>
      </View>
      </View>
      <Header title={"Productos"}
      />
      <Search onSearch={setKeyword} />
      <FlatList style={{width: "70%", marginTop: 30}}
        data={products}
        renderItem={({ item }) => <ProductItem product={item} />}
        keyExtractor={(item) => item.id}
      />
      <View style={{width: "100%"}} >
      <Footer/>
      </View>
    </View>
  );
}

export default ItemListCategories;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.green_300
  },
});
