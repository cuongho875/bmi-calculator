import React from 'react'

export const getData = (key) => {
    if(!localStorage) return;
    try{
        return JSON.parse(localStorage.getItem(key))
      }
      catch{
          console.error("error")
      }
}
export const storeData = (key,item) => {
    if(!localStorage){
        return
    }
    try{
        return localStorage.setItem(key,JSON.stringify(item))
    }
    catch{
        console.error("error")
    }
  }
  