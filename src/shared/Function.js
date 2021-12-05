const shorten =title=>{
   const  splitedItems=title.split(" ");
    const newsplitedItems=`${splitedItems[0]}${splitedItems[1]}`;
    return newsplitedItems;
}
export{shorten}