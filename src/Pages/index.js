import { View,Text,StyleSheet,Image,TouchableOpacity } from "react-native"
import Slider from '@react-native-community/slider'
import { useState } from "react"
import { ModalPassword } from "../Components/Modal"
import { Modal } from "react-native"
let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'



export function Home(){
  const [modal,setModal] = useState(false)
  const [size,setSize] = useState(10)
  const [passwordValue,setPasswordValue] = useState("")

  function generatorPassword(){
    let password = ''
    for(let i = 0, n = charset.length;i< size;i++){
      password+=charset.charAt(Math.floor(Math.random() * n))
    }
    console.log(password)
    setPasswordValue(password)
    setModal(true)

  }





  return(
    <View style={styles.container}>
      <Image
      source={require('../assets/logo.png')}
      style={styles.logo}
      
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
        
        style={{height:50}}
        minimumValue={6}
        maximumValue={20}
        maximumTrackTintColor="#ff0000"
      minimumTrackTintColor="#000"
      thumbTintColor="#392de9"
      value={size}
      onValueChange={(value) => setSize(value.toFixed(0))}
        
        
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText} onPress={generatorPassword}> Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modal} animationType="fade" transparent={true}>
        <ModalPassword password={passwordValue} handleClose={() => setModal(false)}/>
      </Modal>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60,
  },
  area:{
    marginTop: 14,
    marginBottom:14,
    width:"80%",
    backgroundColor:'#fff',
    borderRadius:8,
    padding:8
  },
  button:{
    backgroundColor:'#392de9',
    width:"80%",
    height:50,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:8,
    marginBottom:18

  },
  title:{
    fontSize:30,
    fontWeight:'bold'    
  },
  buttonText:{
    color:"#fff",
    fontSize:20,

  }
})