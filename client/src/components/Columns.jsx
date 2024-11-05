import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react'

const columns = [
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'age', headerName: 'Age', type: 'number', width: 90 },
  { field: 'gender', headerName: 'Gender', width: 100 },
  { field: 'contact', headerName: 'Contact', width: 160 },
  { field: 'reason', headerName: 'Reason', width: 160} ,
  { field: 'timeIn', headerName: 'Time In', width: 90} ,
  { field: 'timeOut', headerName: 'Time Out', width: 90} ,
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  const [rows, setRows] = useState([]); // State to store database data

  useEffect(() => {
    // Fetch data from the backend
    axios.get('http://localhost:3001/games')
      .then(response => {
        // Map response data to the rows format
        const formattedRows = response.data.map((entry, index) => ({
          id: index + 1, // Unique ID for each row
          firstName: entry.name,
          lastName: entry.surname,
          age: entry.age,
          gender: entry.gender,
          contact: entry.contact,
          reason: entry.reason,
          timeIn: entry.timein,
          timeOut: entry.timeout,
        }));
        setRows(formattedRows); // Update rows state with the formatted data
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <Paper sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
