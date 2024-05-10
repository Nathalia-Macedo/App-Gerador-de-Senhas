import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () =>{
     const getItem = async (key) =>{
      try{
       const passwords = await AsyncStorage.getItem(key)
       return JSON.parse(passwords) || [];
      }catch(erro){
        console.log('erro ao buscar',erro)
        return []
      }


     }
  
     const saveItem = async (key,value) => {
       try{
        let passwords = await getItem(key)
        passwords.push(value)

        await AsyncStorage.setItem(key, JSON.stringify(passwords) )
       }catch(erro){
        console.log(erro)
       }
     }

     const removeItem = async (key, item) =>{
         try{
            let passwords = await getItem(key) 
            
            let myPasswords = passwords.filter((password) => {
                return(password!==item)
            })
          

             await AsyncStorage.setItem(key, JSON.stringify(myPasswords))
             return myPasswords




             
         }catch(erro){
            console.log(erro)
     }
    }

     return{
        getItem,
        saveItem,
        removeItem
     }

}


export default useStorage