import React, { useState } from 'react'
import { TextField ,Button} from '@mui/material'
import { Box } from '@mui/system';
import axios from 'axios'

const UploadID = () => {
  
  const [image,setimage] = useState();
  // console.log(image,12);
  const submit = ()=>{

    let name  = document.getElementById('name').value
    let adhar  = document.getElementById('adhar').value
    let phone  = document.getElementById('phone').value
    let pancard  = document.getElementById('pancard').value

    console.log(name)
    console.log(adhar)



const formdata = new FormData();
formdata.append('name',name)
formdata.append('adhar',adhar)
formdata.append('phone',phone)
formdata.append('pancard',pancard)
formdata.append('image',image)

console.log("this is form data :  "+ formdata)
console.log(formdata)

    axios({
  method: 'post',
  url: '/userkyc',
  
  // data: JSON.stringify({
  //   name: name,
  //   adhar: adhar,
  //   phone:phone,
  //   pan:pan
  // })
  formdata, headers:{
    'Content-Type': 'multipart/form-data'
  }
}).then((response) => {
  console.log(response);
}, (error) => {
  console.log(error);
});;




  
  }
  
  
  return (
    
    <>
    <Box sx={{display:'flex', flexDirection:'column' , justifyContent:'space-around'}}>

<div style={{margin:'12px'}}><TextField id="name" label="Full Name" variant="outlined" /></div>
<div style={{margin:'12px'}}><TextField id="adhar" label="AdharCard Number" variant="outlined" /></div>
<div style={{margin:'12px'}}><TextField id="phone" label="Phone Number" variant="outlined" /></div>
<div style={{margin:'12px'}}><TextField id="pancard" label="PAN Number" variant="outlined" />
</div>
  
<div style={{margin:'12px'}}> <Button variant="contained" component="label">
  Upload ID
  <input id='img' hidden accept="image/*" onChange={(e) => setimage(e.target.files[0])} multiple type="file" />
</Button></div>
    
    
<div style={{margin:'12px'}}><Button onClick={submit} variant="contained" component="label">Submit</Button></div>
    </Box>
    </>

  )
}

export default UploadID