import axios from 'axios'

import React, { Component } from 'react'

const URL_ALL_EMP_DATA='http://localhost:8080/getAllEmp';
const URL_REGISTER_EMP='http://localhost:8080/registerEmp';
  
const response=null;
class ApiResp extends Component {
   
  
   welcome(){ 
        return "Hello Jay";
   }

     getAllEmp(){
        axios.get(URL_ALL_EMP_DATA).then((Response) =>{
        console.log(Response.data)
        response=Response.data;
      })

      return response;
  } 
  
  async registerEmp(body){   
        axios({  
          method: 'post',  
          url: URL_REGISTER_EMP,  
          data: body
        }).then((Response) =>{
            console.log(JSON.stringify(Response.data))
            response=Response.data;
        }) 
      return response;
  }
}

export default new ApiResp();

  
  