import React,{useReducer ,createContext} from 'react';
 const initialState={
     selectedItems:[],
     total:0,
     itemConter:0,
     checkOut:false
}
 const cartReducer=(state,action)=>{
     switch(action.type){
     case "Add-Item":
         if(!state.selectedItems.find(item=>item.id===action.payload.id))
         state.selectedItems.push({
            ...action.payload,
            quantity:1 
         });
         return{
             ...state,
             selectedItems:[...state.selectedItems]
         }
         case "Remove-Item":
             const newselectedItems=state.selectedItems.filter(item=>item.id!==action.payload.id);
             return{
                 ...state,
                 selectedItems:[...newselectedItems]
             }
             case "In-Crease":
                 const indexI=state.selectedItems.findIndex(item=>item.id===action.payload.id);
                 state.selectedItems[indexI].quantity++;
                 return{
                     ...state
                 }
                 case "De-Crease":
                    const indexD=state.selectedItems.findIndex(item=>item.id===action.payload.id);
                    state.selectedItems[indexD].quantity--;
                    return{
                        ...state
                    }
                    case "Check-Out":
                        return{
                            selectedItems:[],
                            total:0,
                            itemConter:0,
                            checkOut:true

                        }
                      case "Clear":
                        return{
                            selectedItems:[],
                            total:0,
                            itemConter:0,
                            checkOut:false
                        }
                        default:
                           return state;                              
                           }
 }

 export const CartContexts=createContext();
const CartContextProvider = ({children}) => {
const [state,dispatch]=useReducer(cartReducer,initialState);
    return (
       <CartContexts.Provider value={{state:state,dispatch:dispatch}}>
           {children}
       </CartContexts.Provider>
    );
};

export default CartContextProvider;