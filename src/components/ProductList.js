import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardContent } from '@mui/material'
import axios from 'axios';

function ProductList(props) {

  const [rows, setRows] = React.useState([])

  React.useEffect(() => {
    axios.get("https://8ttis6lx2b.execute-api.us-east-1.amazonaws.com/productlist").then(
      r => {
        setRows(r.data.response)
      }
    )
  }, [])
  
  return (
    <Card>
      <CardContent>
        <div style={{ fontSize: "20px" }}>
          {props.texto}
        </div>
        <div style={{ marginTop: "12px" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell>Produto</TableCell>
                  <TableCell>Preço</TableCell>
                  <TableCell>Categoria</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.id}
                    </TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>R$ {row.price}</TableCell>
                    <TableCell>{row.category}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductList