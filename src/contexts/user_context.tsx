import React, { createContext, useContext, useEffect, useState } from 'react'
import UserInterface from '../interfaces/user';
import fire from '../utils/firebase/fire'
import { getUserDocument } from '../utils/firebase/firestore';
import 'firebase/auth';
const USER_CONTEXT=createContext<[UserInterface|null|undefined,any]>([undefined,null]);

export function useUser(){
    return useContext(USER_CONTEXT);
}

export default function UserContext({children}:any){
    const [user,setUser]=useState<UserInterface|null|undefined>(undefined)
    useEffect(()=>{
        fire.auth().onAuthStateChanged(user=>{
            console.log(user)
            if(user&&user.email){
                getUserDocument(user.email).then(user_doc=>setUser(user_doc));
            } else setUser(null);
        })
    },[])
    return <USER_CONTEXT.Provider value={[user,setUser]}>
        {children}
    </USER_CONTEXT.Provider>
}