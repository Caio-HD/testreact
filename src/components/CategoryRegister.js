import { Card, CardContent, Button, TextField } from '@mui/material'
import React from 'react'
import axios from 'axios'

function CategoryRegister(props) {
  
  const [nome, setNome] = React.useState("")

  function registerCategory() {
    axios.post("https://8ttis6lx2b.execute-api.us-east-1.amazonaws.com/categoryreg", {
      "nome": nome,
      }).then( 
         r => {
         alert("Categoria registrada")      
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
            <TextField value={nome} onChange={(e) => { setNome(e.target.value)}} fullWidth id="standard-basic" label="Nome da Categoria" variant="standard"></TextField>
          </div>
          <div style={{ width: '50%', display: 'flex', marginTop: '20px', justifyContent: 'right'}}>
            <Button onClick={ () => registerCategory() } variant="contained">Salvar</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default CategoryRegister