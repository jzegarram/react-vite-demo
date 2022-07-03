import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from "axios";
import usersService from "../services/user.service"
import { usePreviousProps } from '@mui/utils';

export default function BasicTable() {
    // useEffect(()=>{

    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(json => console.log(json))
        
    // }, [])

    const [users, setUsers] = useState([])

    // const baseURL = "https://jsonplaceholder.typicode.com";

    // useEffect(async() => {
    //     axios.get(`${baseURL}/users`).then((response) => {
    //       setUsers(response.data);
    //     });
    //   }, []);
 
 
useEffect(async() => {
    const u = await usersService.getUsers()
    return setUsers(u)
}, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Web</TableCell>
            <TableCell align="right">City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={`${user.name}${user.email}`}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.name}
              </TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.website}</TableCell>
              <TableCell align="right">{user.address.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
