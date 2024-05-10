import { View,Text,StyleSheet,FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState,useEffect } from "react";
import { useIsFocused } from "@react-navigation/native";
import useStorage from "../useStorage";
import { PasswordItem } from "../Components/PasswordItem";
export function Passwords(){

    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const { getItem, removeItem } = useStorage()

    useEffect(() =>{
      async function loadPaswwords(){
        const passwords = await getItem('@pass')
       setListPasswords(passwords)
    }

      loadPaswwords()
    },[focused])


     async function handleDeletePassword(item){
           const passwords = await removeItem('@pass',item)
           setListPasswords(passwords)
    }
     return(
       <SafeAreaView style={{flex:1}}>
            <View style={styles.header}>
                <Text style={styles.title}>Minhas senhas</Text>
            </View>

            <View style={styles.content}>
                <FlatList
                style={{flex:1, paddingTop:14}}
                keyExtractor={(item)=>String(item) }
                renderItem={({item}) => <PasswordItem data={item} removePassword={() => handleDeletePassword(item)}/>}
                data={listPasswords}/>
            </View>
       </SafeAreaView>
        
     )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#392de9",
        paddingTop:58,
        paddingBottom:14,
        paddingLeft:14,
        paddingRight:14
    },
    title:{
        fontSize:18,
        color:'#fff',
        fontWeight:"bold"
    },
    content:{
        flex: 1,
        paddingLeft: 14,
        paddingRight:14
    }
})