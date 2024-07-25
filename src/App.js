import { DataGrid } from "@mui/x-data-grid";
import UserList, { useUserData } from "./components/UserList"
import { Avatar, Button, Card, CardActions, CardContent, Drawer, Input, Table, TableBody, TableCell, TableRow, TextField, Tooltip, Typography } from "@mui/material"
import { useState } from "react";

function App() {
  const { data } = useUserData()
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  function toggleDrawer() {
    setIsOpen(!isOpen)
  }
  const columns = [
    {
      field: "avatar",
      headerName: "Avatar",
      renderCell: (params) => {
        return <Avatar src={params.value} sx={{ width: "48px", height: "48px" }} alt={params.row.name} />
      },
      sortable: false
    },
    {
      field: "name",
      headerName: "Name",
      width: "400",
      renderCell: params => {
        return <Tooltip title={params.row.name}>{params.value}</Tooltip>
      }
    }
    ,
    {
      headerName: "action",
      renderCell: params => {
        return <Button color="primary" variant="contained" onClick={e => {
          setIsOpen(true)
          setId(params.row.id)
          setName(params.row.name)}}>Edit</Button>
      }
    }
  ]
  return (
    <>
      <DataGrid rows={data} columns={columns} />
      <Drawer open={isOpen} anchor="right" onClick={toggleDrawer}>
        <Card>
          <CardContent>
          <TextField variant="outlined" placeholder="Enter the name" label="Name" value={name} onChange={e => {
            setName(e.target.value)
            }} />
          </CardContent>
          <CardActions><Button variant="contained" color="primary" onClick={e => handleForm(name,id)}>Submit</Button></CardActions>
        </Card>
      </Drawer>
    </>
  );
}


function handleForm(name, id) {
  console.log(name,id)
}

export default App;