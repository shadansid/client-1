import React, { useEffect, useState } from 'react'
import axios from 'axios'

import AllUserBox from './AllUserBox';

const AllUsers = () => {
 const [data, setdata] = useState([]);
    useEffect(()=>{

        axios("http://64.227.140.80/api/getallusers").then(res=>res.data).then((data)=>{

            setdata(data);
            
        
          })
 
    })

  
  
 return (
  <>
    {data.map((ele)=>{
        return <>
        <AllUserBox Name={ele.Name} email={ele.email} userid={ele.userid} />
       
        </>

    })}
  </>
  )
}

export default AllUsers