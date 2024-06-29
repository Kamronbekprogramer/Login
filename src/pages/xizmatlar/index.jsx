// import React from 'react'

// const Index = () => {
//   return (
//     <div>
//       <h1>xizmatlar</h1>
//     </div>
//   )
// }

// export default Index

import * as React from 'react';
import { DataGrid, GridSearchIcon } from '@mui/x-data-grid';
import { Button, IconButton, InputBase, Paper } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Index() {
  return (
    <>
    <div className="py-3 flex justify-between items-center">
        <div className="w-96">
          <Paper
            component="form"
            sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 400,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Qidiruv"
              inputProps={{ "aria-label": "search google maps" }}
              />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              <GridSearchIcon />
            </IconButton>
          </Paper>
        </div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setModal(true)}
        >
          xizmat qo'shish
        </Button>
      </div>
    <div style={{ height: 530, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
            pagination: {
                paginationModel: { page: 0, pageSize: 5 },
            },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        />
    </div>
        </>
  );
}