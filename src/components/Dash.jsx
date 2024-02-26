import React from 'react'
import { TableCell, TableContainer,Table, TableHead, TableRow, TableBody, }from '@mui/material'
import  { useState ,useEffect} from 'react';
 import axios from 'axios';
const Dash = () => {
    var[user,setUsers]=useState([]);
         useEffect(()=>{
            axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
                console.log(response.data)
                setUsers(response.data);
            })
         },[])
      return (
        <div>
    
    <TableContainer>
                <Table>
                
                   <TableHead>
                    <TableRow>
                        <TableCell ><h4>userId</h4> </TableCell>
                        <TableCell><h4>id</h4></TableCell>
                        <TableCell> <h4>title</h4></TableCell>
                        <TableCell> <h4>body</h4></TableCell>
                    </TableRow>
                   </TableHead>
                   <TableBody>
                    {user.map((val,i)=>{
                        return(
                         <TableRow>
                            <TableCell key={i}>{val.userId}
                            </TableCell> 
                            <TableCell  key={i}>{val.id}</TableCell>
                            <TableCell  key={i}>{val.title}</TableCell>
                            <TableCell  key={i}>{val.body}</TableCell>
                         </TableRow>
                        )
                    })
                }        
                    
                   </TableBody>
                </Table>
    
            </TableContainer>
        </div>
    
  )
}

export default Dash