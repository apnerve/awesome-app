import UserList, { useUserData } from "./components/UserList"
import {Table, TableBody, TableCell, TableRow, Typography} from "@mui/material"

function App() {
  const { data } = useUserData()
  return (
      <Table>
        <TableBody>
          {data.map(user => <TableRow>
            <TableCell><img src={user.avatar} /></TableCell>
            <TableCell>
              <Typography component={"h3"} variant="h2">{user.name}</Typography>
              </TableCell>
          </TableRow>)}
        </TableBody>
      </Table>
  );
}

export default App;