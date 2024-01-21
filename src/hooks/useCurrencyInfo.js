import { useEffect,useState } from "react";
 //for custom hooks format will js

 // ek basic function jo ki ek array return kar raha woo nhi ek custom hook hai 

// ! Custom Hook bhi buildin hooks ko use kar shaktey hai like , useEffect , useState
function useCurrencyInfo(currency){
    const [data,setData] = useState({}); // empty {} reason agar server or data mey koi value nhi hai tho agar loop nhi lagaye gey tho site crash nhi hogi
    // when hook/API load hoga tabh mey  call karao 
    //  we use effect beacuse after render we want to load our data to handle the data 
    // useEffect hook component life cycle mey mount aur unmount hota hai 
    useEffect(()=>{
                // Fetching data from the specified API using the provided currency
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then(
                        // Parsing the response as JSON kyuki humko server o/p string mey mila hai 

            (res)=> res.json()
                        // Updating the data state with the retrieved information for the specified currency

        ).then((res)=>setData(res[currency]))
        // console.log(data);
    },[currency]) // currency dependency is liye hai kyuki we want conversion inr to usd
            // Logging the current state of data (this will log the previous state due to closure)

    console.log(data);
    return data;
}

export default useCurrencyInfo; // isko use karkey we return the whole method 
