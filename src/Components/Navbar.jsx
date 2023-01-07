import React from 'react';
import { useState } from 'react';
import Page from './Page';

const Links = ['All','HTML','CSS','JavaScript'];


 function Navbar() {
  const [items,setItems]= useState([]);
  const[loading,setLoading]=useState(false);

  const fetchData=async(language)=>{
    setLoading(true);
    let res= await fetch(`https://api.github.com/search/repositories?q=stars:%3E1+language:${language}`);
    let data= await res.json();
    setItems(data.items);
    setLoading(false);
   // console.log(items)
  }
  const handleClick=(val)=>{
    console.log(val)
   val==="All"?fetchData("All"):val==="HTML"?fetchData("HTML"):val==="CSS"?fetchData("CSS"):fetchData("javaScript");
  }
    return( 
        <>
          <div style={{display:"flex", alignItems:"center",justifyContent:"space-around",padding:"10px", border:"1px solid",cursor:"pointer"}} >
           {Links.map((link)=><div key={link} onClick={()=>handleClick(link)}>{link}</div>)}
          </div>
          <Page data={items} loading={loading}/>
        </>
    )
}

export default Navbar;