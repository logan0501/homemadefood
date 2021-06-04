import React,{useState} from "react";
import {Button} from "react-bootstrap";
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import firebase from "firebase";
import { useHistory } from "react-router";
function Myaddform(){
 
    const [checked,changecheck]=useState(true);
    const history = useHistory();
    const [filestate,changefile] =useState("");
    const [datas,setdatas]=useState({
        name:"",
        duration:"",
        price:0,
        available:true,
    });
    function handlechange(event){
        const {value,name} =event.target;
       
        setdatas(prev=>{
        
            return ({
                ...prev,
              [name]:value,
                
            })
        })
    }
    function handleclick(){
         
    // firebase.firestore().collection("menus").add({
    //   name:"logan",
    //   name1:"sethu",
    //   name2:"nishant"
    // }).then((res)=>{
    //   console.log(res);
    // })
    console.log(datas);
    var id;
    var uid = firebase.auth().currentUser.uid;
   
    var {name,duration,price,available} = datas;
     
   
        var ref =firebase.storage().ref();
    if(name && duration && price  && available!=null && uid!=null){
        
       
        firebase.firestore().collection("Food maker").doc(uid)
        .collection("menus").add(datas).then((res)=>{
            id = res.id;
            ref.child(`foodmakers/${uid}/menus/${id}`)
            .put(filestate).then(res=>{
                console.log("file uploaded");
            res.ref.getDownloadURL().then((url=>{
               var myurl =url;
               console.log(myurl);
              
               
               firebase.firestore().collection("Food maker").doc(uid)
            .collection("menus").doc(id).set({...datas,file:myurl}).then((res)=>{
                console.log(res);
                 
              });
         
               history.push("/homepage");    
            
            
            }));
            
        });
       });

      
      

      
       
    }
    
    

    }
    return  (
        <div className="myform card">

            <TextField id="standard-basic" name="name" onChange={handlechange} label="Food Name" />
            <TextField id="standard-basic" name="duration" onChange={handlechange} label="Duration for preparation" />
            <TextField id="standard-basic" name="price" onChange={handlechange} label="Price" />
            <div style={{display:"flex",alignItems:"end",paddingTop:"20px",flexWrap:"wrap"}}>
            <input id="file-id" type="file"  onChange={()=>changefile(document.getElementById("file-id").files[0])} />
            <FormControlLabel  control={<Checkbox style={{paddingTop:"5px"}} checked={checked} onChange={()=>{changecheck(!checked)}}/>} label="Available" />
            </div>
            <Button variant="primary" onClick={handleclick}>Create Menu</Button>
        </div>
        
    );
}

export default Myaddform;