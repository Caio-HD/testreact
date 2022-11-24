import { Card, CardContent, Button, TextField, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import React from 'react'
import axios from 'axios';

function ProductRegister(props) {

  const [name, setName] = React.useState("")
  const [price, setPrice] = React.useState("")
  const [category, setCategory] = React.useState("")
  const [categoriesOptions, setCategoriesOptions] = React.useState([])

  React.useEffect(() => {
    axios.get("https://8ttis6lx2b.execute-api.us-east-1.amazonaws.com/categorylist").then(
      r => {
        setCategoriesOptions(r.data.response)
      }
    )
  }, [])

  function registerProduct() {
    axios.post("https://8ttis6lx2b.execute-api.us-east-1.amazonaws.com/productreg", {
      "name": name,
      "price": price,
      "category": category
    }).then(
      r => {
        alert("Produto cadastrado")
      })
  };

  return (
    <Card>
      <CardContent>
        <div style={{ fontSize: "20px" }}>
          {props.texto}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '50%', marginTop: '14px' }}>
            <TextField value={name} onChange={(e) => { setName(e.target.value) }} fullWidth id="standard-basic" label="Nome do Produto" variant="standard"></TextField>
          </div>
          <div style={{ width: '50%', marginTop: '14px' }}>
            <TextField value={price} onChange={(e) => { setPrice(e.target.value) }} fullWidth id="standard-basic" label="Preço" variant="standard"></TextField>
          </div>
          <div style={{ width: '50%', marginTop: '14px' }}>
            <FormControl variant="standard" fullWidth>
              <InputLabel id="demo-simple-select-standard-label">Categoria</InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select"
                value={category}
                label="Categoria"
                onChange={(e) => {setCategory(e.target.value)}}
              >
                {
                  categoriesOptions.map(c => (
                  <MenuItem value={c.id}>{c.nome}</MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </div>
          <div style={{ width: '50%', marginTop: '20px', display: 'flex', justifyContent: 'right' }}>
            <Button onClick={() => (registerProduct())} variant="contained">Salvar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductRegister