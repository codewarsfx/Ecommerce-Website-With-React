export enum shopTypes {
    SETSHOPDATASTART ="SET_SHOP_DATA_START",
    SETSHOPDATASUCCESS= "SET_SHOP_DATA_SUCCESS",
    SETSHOPDATAFAIL="SET_SHOP_DATA_FAIL"
}

//typing the shop data array that will be coming from firebase

export type shopCategoryItem ={
    id:number;
    imageUrl:string;
    name:string;
    price:number
}

export type shopCategory = {
    title:string;
    imageUrl:string;
    items: shopCategoryItem[ ]
}

export type categoryMap={
    [key:string]: shopCategoryItem[]
}