import React, { useEffect  ,useState } from 'react'

const Github = () => {
    const [data , setData]=useState({});

    useEffect(()=>{
        fetch('https://api.github.com/users/mohdafzal11')
        .then(response=>response.json())
        .then(data=>setData(data))
    },[])
  return (
    <div>Github Followers:{ data.following}</div>
  )
}

export default Github