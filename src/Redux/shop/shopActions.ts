import { createAction,Action, ActionWIthPayload} from "../../Utils/firebase/createAction"
import { shopTypes,shopCategory } from "./shopTypes"

// export const setShopData = (data)=>{
//    return createAction(shopTypes.SETSHOPDATA,data)
// }

export type FetchCategoriesStart = Action<shopTypes.SETSHOPDATASTART>

export type FetchCategoriesSuccess = ActionWIthPayload<shopTypes.SETSHOPDATASUCCESS,shopCategory[]>

export type FetchCategoriesFailed = ActionWIthPayload<shopTypes.SETSHOPDATAFAIL,Error>

export type categoryActions = FetchCategoriesStart| FetchCategoriesSuccess | FetchCategoriesFailed


export const createShopDataStart = ():FetchCategoriesStart =>createAction(shopTypes.SETSHOPDATASTART)

export const createSetShopDataSuccess = (data:shopCategory[]):FetchCategoriesSuccess=> createAction(shopTypes.SETSHOPDATASUCCESS, data)

export const createSetDataFail = (error:Error):FetchCategoriesFailed=> createAction(shopTypes.SETSHOPDATAFAIL,error)




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