import { createAction } from "../../Utils/firebase/createAction"
import { shopTypes } from "./shopTypes"

export const setShopData = (data)=>{
   return createAction(shopTypes.SETSHOPDATA,data)
}


export const createShopDataStart = ()=>createAction(shopTypes.SETSHOPDATASTART)

export const createSetShopDataSuccess = (data)=> createAction(shopTypes.SETSHOPDATASUCCESS, data)

export const createSetDataFail = (error)=> createAction(shopTypes.SETSHOPDATAFAIL,error)




//previous implementation using redux thunk

// export const setShopDataAsync =()=> async (dispatch)=>{
   
//    dispatch(createShopData)
   
//    try{
//       const data= await getCollectionDataFromFirebase()
//       dispatch(createAction(shopTypes.SETSHOPDATASUCCESS,data))
//    }catch(error){
//       dispatch(createAction(shopTypes.SETSHOPDATAFAIL,error))
      
//    }
// }