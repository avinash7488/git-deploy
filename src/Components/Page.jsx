import React from 'react'

const Page = ({data=[],loading}) => {
    if(loading){
        return <h1>Loading...</h1>
    }
  return (
    <div style={{display:"grid",gap:"10px",gridTemplateColumns:"repeat(4,1fr)",border:"1px solid"}}>
    {data.map((item)=><div key={item.full_name}style={{textAlign:"center", padding:"5px",boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
    <img src={item.owner.avatar_url} alt={item.name} style={{width:"100px",height:"120px"}}/>
        <h3>{item.name}</h3>
        <h4>{item.language}</h4>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <p>stars:{item.watchers_count}</p>
            <p>forks:{item.forks_count}</p>
        </div>
    </div>)}
    </div>
  )
}

export default Page