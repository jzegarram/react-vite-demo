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
    
    // const BASE_URL = "https://jsonplaceholder.typicode.com";

    const [users, setUsers] = useState([])
    
    // useEffect(()=>{

    //     fetch(`${BASE_URL}/users`)
    //     .then(response => response.json())
    //     .then(json => setUsers(json))
        
    // }, [])


    // useEffect(async() => {

    //     axios.get(`${baseURL}/users`).then((response) => {
    //       setUsers(response.data);
    //     });

    //   }, []);
 
 
    useEffect(() => {

        async function fetchData() {
            const remoteUsers = await usersService.getUsers()
            setUsers(remoteUsers)
        }
        fetchData()

    }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><b>Name</b></TableCell>
            <TableCell align="right"><b>Username</b></TableCell>
            <TableCell align="right"><b>Email</b></TableCell>
            <TableCell align="right"><b>Web</b></TableCell>
            <TableCell align="right"><b>City</b></TableCell>
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
