import React, {useState} from "react";
import TextField from '@material-ui/core/TextField';
import firebase from "firebase";
import {useHistory} from "react-router-dom";
import {Spinner} from "react-bootstrap";
function LoginCard(){
    const history = useHistory();
    const [loginstate,changeuser]=useState(false);
    const [progressstate,changeprogres]=useState(false);
    const [boolval,setbool] =useState({
        isvalidname :false ,
        isvalidemail:false,
        isvalidpassword:false
    });

    const [data,setdata]=useState({
        username:"",
        email:"",
        password:""
    })
    function handleclick(){
        changeprogres(true);
        console.log(boolval);
        if(!data.email.includes("@") || !data.email===""){
           setbool( prevval=>{
             
            return ({
                   ...prevval,
                   "isvalidemail":true
               });
           }
        ) 
        }else{
            setbool( prevval=>{
                 return ({
                    ...prevval,
                    "isvalidemail":false
                });
            })
        }
        if(data.username.length <5){
             
            setbool( prevval=>{
                
                return ({
                    ...prevval,
                    "isvalidname":true
                });
            }
         )
        }else{
            setbool( prevval=>{
                return ({
                   ...prevval,
                   "isvalidname":false
               });
           })
       }
        
        if(data.password.length<7){
            setbool( prevval=>{
                  
                return ({
                    ...prevval,
                    "isvalidpassword":true
                });
            }
         )
         
        }else{
            setbool( prevval=>{
                return ({
                   ...prevval,
                   "isvalidpassword":false
               });
           })
       }
        
        if(!boolval.isvalidemail && !boolval.isvalidname && !boolval.isvalidpassword && loginstate){
            changeprogres(false);
            console.log(data)
            var email = data.email;
            var password = data.password;
        
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                
                firebase.firestore().collection("Food maker").doc(firebase.auth().currentUser.uid).set({
      name:data.username,
      mobile:"9999999999",
     
    }).then((res)=>{
        
        history.replace("/homepage")
      console.log(res);
    })
           
                   
                })
                .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
                    console.log(errorMessage);
             });
        }

        if(!boolval.isvalidemail  && !boolval.isvalidpassword && !loginstate){
            var em = data.email;
            var pass = data.password;
            firebase.auth().signInWithEmailAndPassword(em,pass).then((res)=>{
                changeprogres(false);
                history.replace("/homepage");
            }).catch((err)=>{
                console.log(err.errorMessage);
            });
        }
    }
      
    function handlechange(event){
        const {name,value} = event.target;
       
        setdata(prevval=>{
         return (
                {...prevval,
                [name]:value}       
            )
        });
    }  
    function handlelogin(){
        changeuser(res=>{
            return !res;
        })
    } 
    return (
     !progressstate? <div className="logininputform logincard" >
           
          {loginstate ? <TextField id="standard-basic"
            name="username"
            error={boolval.isvalidname}
            defaultValue=""
            helperText={!boolval.isvalidname ?"":"Enter minimum of 4 characters"}
             label="User Name"
            onChange={handlechange} />:null}
               
            <TextField 
            id="standard-basic"
            helperText={!boolval.isvalidemail ?"":"Enter a valid email Id"} 
            name="email" 
            error={boolval.isvalidemail} 
            label="Email"  
            onChange={handlechange} />
            
            <TextField 
            id="standard-basic" 
            name="password" 
            type="password"
            helperText={!boolval.isvalidpassword ?"":"Minimum of 7 characters required"} 
            error={boolval.isvalidpassword} 
            label="Password"  
            onChange={handlechange}  />
                <button type="button" class="btn btn-outline-primary btn-sm" onClick={handleclick} >{!loginstate?"Log in":"Sign up"}</button>
                <button  className="crtebtn" onClick={handlelogin}>{!loginstate?"Create a Account":"Already have a account"}</button>
            </div>:<div style={{height:"100%",widht:"100%",backgroundColor:"black"}}><Spinner animation="grow"/></div>
    );
}

export default LoginCard;