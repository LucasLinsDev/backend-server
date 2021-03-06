import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv'
const app=express();

dotenv.config();
const port = 3000;
app.use(cors());

app.use(express.json());

app.get('/',async(req,res)=>{
  

const url=`https://${process.env.CASA}.myvtex.com/api/oms/pvt/orders?q=1246930501700-01`;

  try{
    const response=await axios.get(url,{
      headers:{
        'Content-Type': 'application/json',
    
        Accept: 'application/json',
    
        'X-VTEX-API-AppKey': process.env.API_KEY,
    
        'X-VTEX-API-AppToken': process.env.API_TOKEN
    
      }
    });
    console.log(response.data.list);
    console.log("-----------------");
  
    console.log(response.data.list[0]['orderId']);
    console.log(response.data.list[0].clientName);
    console.log(response.data.list[0].totalValue);
    console.log(response.data.list[0].status);
    console.log(response.data.list[0].statusDescription);
   
  }catch(error){
    console.log(error);
  }
})



app.post('/api/v1/pontos',async(req,res)=>{

  const {OrderId}= req.body;
  console.log(OrderId);
  return res.json({message:OrderId})

})
  
app.listen(port,()=>{
  console.log(`SERVER APP LISTENING ON PORT ${port}`)
})