import styled from 'styled-components'




export const ImgContainer = styled.div`
    width: 23%;
    padding-right: 15px;
    img {
      width: 100%;
      height: 100%;
    }
`


export const Quantity=styled.span`
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
`

export const CheckOutItemContainer = styled.div`

 width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  
  .name,
  ${Quantity},
  .price {
    width: 23%;
  }


`

export const RemoveButton = styled.span`
   padding-left: 12px;
    cursor: pointer;
`
  
  
