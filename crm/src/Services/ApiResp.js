import axios from 'axios'

export default class Apiresp {

    URL_ALL_EMP_DATA='http://localhost:8080/getAllEmp';
     URL_REGISTER_EMP='http://localhost:8080/registerEmp';
    
    
     getAllEmp= () => {
        axios.get(URL_ALL_EMP_DATA).then((Response) =>{
        console.log(Response.data)
        })
    } 
    
     registerEmp =(body) => {
        // const body={
        //     "lastname" :"Prakash1",
        //     "firstname" : "Jay1",
        //     "address" : "Hajipur Bihar 844116",
        //     "email":"gmail",
        //     "city" : "Vaishali",
        //     "phone" : "123456780"
        //     }
          
          
          axios({  
            method: 'post',  
            url: URL_REGISTER_EMP,  
            data: body
          }).then((Response) =>{
              console.log(Response.data)
          }) 
    }

    
}
  
  