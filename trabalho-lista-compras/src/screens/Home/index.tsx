import {FlatList, Text, TextInput, TouchableOpacity, View, Alert, Image} from "react-native"
import { Product } from "../../components/product";
import { styles } from "./styles";
import { useState } from "react";

export function Home(){
    const [productName, setProductName] = useState("");
    const [products, setProducts] = useState<string[]>([]);
 
    function handleAddProduct() {
    if (!productName.trim()) {  
        return Alert.alert(
            "Campo vazio", "Digite um produto antes de adicionar"
        );
    }
const normalizedName = productName.trim().toLowerCase();

    if (products.some(item => item.toLowerCase() === normalizedName)) {
        return Alert.alert(
            "Produto já cadastrado", "Já existe um produto na lista com esse nome"
        );
    }

    setProducts([...products, productName.trim()]);
    setProductName("");
}
 

    function handleProductRemove(name: string){
        Alert.alert("Remover", `Deseja remover o produto ${name}?`, [
            {
                text: 'Sim',
                onPress: () => setProducts(products.filter(product => product !== name))
            },
            {
                text: 'Não',
                style: 'cancel' 
            }
        ]);
    }

    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.title}>Lista de Compras</Text>

                <View style={styles.newProduct}> 
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione um novo produto"
                        placeholderTextColor="#BDBABA" 
                        keyboardType="default"
                        onChangeText={setProductName}
                        value={productName}
                    />
                 
                    <TouchableOpacity style={styles.button} onPress={handleAddProduct}>
                        <Image style={styles.iconButton} source={require("../../img/plus.png")}/>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.info}>
                <View style={styles.counter}>
                    <Text style={styles.createdText}>Produtos</Text>
                    <Text style={styles.counterNumber}>{products.length}</Text>
              </View>

              <View style={styles.counter}>
                    <Text style={styles.doneText}>Finalizados</Text>
                    <Text style={styles.counterNumber}></Text>
              </View>
            </View>

            <FlatList 
                data={products}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Product 
                        name={item}
                        onRemove={() => handleProductRemove(item)}
                    />
                )}
                ListEmptyComponent={() => (
                    <View style={styles.empty}>
                        <Image style={styles.icon} source={require("../../img/shoppingList.png")}/>
                        <Text style={styles.listTitle}>Você ainda não tem produtos na lista de compras</Text>
                        <Text style={styles.subListText}>Adicione produtos e organize sua lista de compras</Text>
                    </View>
                )}
                contentContainerStyle={products.length === 0 && { flex: 1, justifyContent: "center" }}
            />
        </View>
    );
}
