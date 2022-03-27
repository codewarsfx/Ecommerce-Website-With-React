import { createAction } from "../../Utils/firebase/createAction"
import { shopTypes } from "./shopTypes"

export const setShopData = (data)=>{
   return createAction(shopTypes.SETSHOPDATA,data)
}