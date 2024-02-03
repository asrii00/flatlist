import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';
import { DATA } from './Data';
import Row from './components/Row';
import Search from './components/Search';
import { useEffect, useState } from 'react';

export default function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    setItems(DATA)}, [])

  
  const executeSearch = (search) => {
    const searchArray = DATA.filter((item) => item.lastname.startsWith(search))
    setItems (searchArray)
  }

 

  return (
    <View style={styles.container}>
      <Search executeSearch={executeSearch}/>
      <FlatList
      data={items}
      renderItem = {({item}) => (
        <Row person={item}/>
      )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
});
