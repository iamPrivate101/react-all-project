import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export default function Github() {
    let dataFound = 1;
    const [data, setData] = useState("");
    const [userName, setUserName] = useState("iamPrivate101");
    const [submitCount, setSubmitCount] = useState(0);

    const loaderData = useLoaderData();

    useEffect(() => {
        fetch(`https://api.github.com/users/${userName}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            setData(data);
        })
    },[submitCount]);

    const handleChange = (e) => {
        setUserName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("here")
        setSubmitCount(preCount => preCount + 1)
        
    } 

    // if(data.message === "Not Found"){
    //     return (
    //         <>
    //             <h3>error</h3>
    //         </>
    //     )
    // }

    if(data.message == "Not Found") {
        dataFound = 0;
    }else {
        dataFound = 1;
    }

  return (
    <>
        
        
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">

        <form onSubmit={handleSubmit} class="w-full max-w-sm">
            <div class="flex items-center border-b border-teal-500 py-2">
                <input class="appearance-none bg-transparent border-none w-full text-white-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="text" placeholder="Jane Doe" aria-label="Full name" value={userName} onChange={handleChange} />
                <button class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                Sign Up
                </button>
            </div>
        </form>

            GitHub Detail 
            <h3>Name: { dataFound ? data.name : '' }</h3>
            <h4>Location: {dataFound ? data.location : ''} </h4>
            <h4>
            Followers: {dataFound ? data.followers : ''}
        
            </h4>

        </div>

        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
        <h3>Loader runs before the useEffect while the link is being clicked</h3>
        <h4>Name : {loaderData.name} </h4>
        <h4>location : {loaderData.location} </h4>
        <h4>follower : {loaderData.followers} </h4>
        </div>

        
    </>
  )
}


// Using Loader
export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/iamPrivate101');
    console.log(response)
    
    return response.json()
}