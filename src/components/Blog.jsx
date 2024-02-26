import { Typography } from '@mui/material'
import React from 'react'
import { Button, TextField } from '@mui/material'

const Blog = () => {
  return (
    <div>
    
    
       <Typography variant='h4'>New Blog</Typography>
        <br /><br />
        <TextField variant='outlined' label="Blog name"/>
          <br /><br /><br />
        <TextField variant='outlined' label="Author name"/>
        <br /><br /><br />
        <TextField variant='outlined' label="Description"/>
        <br /><br /><br />
        <Button variant='contained' >submit</Button><br />
       

   
    </div>
  )
}

export default Blog