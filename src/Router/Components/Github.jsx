import React, { useEffect, useState } from 'react'

function Github() {
    const [gitdata,setgitData]=useState([])
    useEffect(()=>{
        fetch(`https://api.github.com/users/nomanchaudhary`)
        .then((response) => response.json())
        .then((data)=> {
            console.log(data)
            setgitData(data);
        }).catch((error)=>{
            console.log(`Sorry Data Is Not Available ${error}`)
        })
    },[])
  return (
    <div className='text-center m-4 text-black p-4 text-3xl'>Github followers: {gitdata.followers}
    <img src={gitdata.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github
