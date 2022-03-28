import { createAction } from "../../Utils/firebase/createAction"
import { getCollectionDataFromFirebase } from "../../Utils/firebase/firebaseUtils"
import { shopTypes } from "./shopTypes"

export const setShopData = (data)=>{
   return createAction(shopTypes.SETSHOPDATA,data)
}



export const setShopDataAsync =()=> async (dispatch)=>{
   
   dispatch(createAction(shopTypes.SETSHOPDATASTART))
   
   try{
      const data= await getCollectionDataFromFirebase()
      dispatch(createAction(shopTypes.SETSHOPDATASUCCESS,data))
   }catch(error){
      dispatch(createAction(shopTypes.SETSHOPDATAFAIL,error))
      
   }
}