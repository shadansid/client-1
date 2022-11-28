
import Switch from '@mui/material/Switch';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
const AllUserBox = (props) => {
 
 
 
    const [checked, setChecked] = useState(false);



 


    const handleChange = (event) => {
  setChecked(event.target.checked);
  console.log(event.target.checked)
  axios({
      method: 'post',
      url: '/allowusers',
      data: {
        Allow: checked,
        userid:props.userid,
        email:props.email
        }
    });


};

 
 
 
 
    return (
   <>
     <div  style={{display:'flex', justifyContent:'space-around',alignItems:'center',height:'10vh' , border:'1px solid #888888'}}> <div>{props.Name}</div> <div>{props.email}</div>{props.checked}<div><Switch
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    /></div>  </div>

   </>
 
 
    )
}

export default AllUserBox