export default function Productslist() {
    const [products, setproducts] = useState([]);
    useEffect(()=>{
        axios.get(API_URL + "/products")
        .then(response => {
            setproducts(response.data);
        })
        .catch(error => console.error("Erro ao carregar produtos:",error));
    },[]);
    return (
        <ScrollView contentContainerStyle = {StyleSheet.container}>
            {products.map(item => (
                <View>
                    <Text style = {{fontSize: 18, fontWeight: "bold"}}>{item.name}</Text>
                </View>
                
            ))}
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container:{
        display: "flex",
        justifyContent:"center",
        alignItems: "center",
        padding:15
    }
});