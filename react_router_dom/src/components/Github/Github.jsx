import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function Github() {
     const {username} =useParams() //extract : username from URL
     const data = useLoaderData()
     // const [loading,setLoading]=useState(true)

     // useEffect(() => {
     //      fetch(`https://api.github.com/users/shivsingh78`)
     //      .then((res)=> res.json())
     //      .then((data) => setData(data))
     //      .catch((err) => console.log(err))
     //      setLoading(false)
     // },[username])
     // if(loading) return <p>Loading...</p>
  return (
    <div>
      <h2>GitHub Followers of {username} = {data.followers}</h2>
      <img className='text-center ' src={data.avatar_url} alt="gitpicture" width={300} />
     
    </div>
  );
}

export default Github

export  const githubInfoLoader= async ()=>{
     const response = await fetch('https://api.github.com/users/shivsingh78')
     return response.json()
}