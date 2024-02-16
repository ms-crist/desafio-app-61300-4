import { StyleSheet, Text, Image } from "react-native";
import Card from "./Card";
import { View } from "react-native-web";


const ProductItem = ({product}) => {
  return (
    
      <Card>
        <Text style={styles.text}>{product.title}</Text>
        <Image style={styles.image} source={{uri: product.images}}/>
      </Card>
      
    
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: 'PoppinsRegular',
    width: '70%',
    padding: 20
  },
  image: {
    width: '30%',
  },
  textMin: {
    fontSize: 14,
    width: '70%'
  }
});
