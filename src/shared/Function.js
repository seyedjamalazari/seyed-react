const shorten =title=>{
   const  splitedItems=title.split(" ");
    const newsplitedItems=`${splitedItems[0]}${splitedItems[1]}`;
    return newsplitedItems;
}
 const isIncart=(state,id)=>{ 
     const result=!!state.selectedItems.find(item =>item.id===id)
     return result;

 }
 const quantityCount=(state,id)=>{
     const index=state.selectedItems.findIndex(item =>item.id===id)
     if(index===-1){
         return false
        
     }else{
         return state.selectedItems[index].quantity;
     }
 }

const validate=data=>{
    const errors={};

    if(!data.name.trim()){
        errors.name="name is required"        
    }else {
        delete errors.name
    }
    if(!data.email){
        
        errors.email="eamil required"
    }else if (!/\S+@\S+\.\S+/.test(data.email)){
        errors.email="email address invalid"
    } else {
        delete errors.email
    }
    if(!data.password){
        errors.password="password is required"
    }else if (data.password.length < 6){
        errors.password ="password is need to be 6 chrector or more"        
    }else {
        delete errors.password
    }
    if(!data.confirmPassword){
        errors.confirmPassword ="confirm the password"
    }else if (data.confirmPassword !== data.password){
        errors.confirmPassword ="password do not match"
    }else {
        delete errors.confirmPassword
    }
    if(data.isAccepted){
        delete errors.isAccepted
    }else {
        errors.isAccepted="accept is regulations"
    }
return errors;
}


 
export{shorten ,isIncart,quantityCount,validate}