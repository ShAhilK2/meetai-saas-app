"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
export default function Home() {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const {data :session} = authClient.useSession();

  const onSubmit = ()=>{
    authClient.signUp.email({
      email,
      name,
      password

    },{
      onError : ()=>{
        window.alert('Something went wrong')
      },onSuccess:()=>{
        window.alert('User created successfully')
      }
    })
  }
  const onLogin = ()=>{
    authClient.signIn.email({
      email,
      password

    },{
      onError : ()=>{
        window.alert('Something went wrong')
      },onSuccess:()=>{
        window.alert('Login Successfully')
      }
    })
  }

  if(session){
  return <div className="flex flex-col space-y-2 p-4">
    <p>Logged in as {session.user.name}</p>
    <Button onClick={()=>authClient.signOut()}>Sign Out</Button>

  </div>
  }
  return (
    <>
      <div className="flex flex-col space-y-4 p-4"> 
    <Input value={name} onChange={(e)=>setName(e.target.value)}  placeholder="Name" />
    <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
    <Input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
    <Button onClick={onSubmit}>Create User</Button>
      
    </div>
    <div className="flex flex-col space-y-4 p-4"> 
 
    <Input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
    <Input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password"/>
    <Button onClick={onLogin}>Login User</Button>
      
    </div>
    </>
  
  );
}
