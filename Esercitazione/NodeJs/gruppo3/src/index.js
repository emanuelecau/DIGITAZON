import express from 'express'  // qui si importa la libreria express, si usa una sintassi diversa rispetto alla default, (require) vedi jsonpack si inseririsce il type module
const app = express()
const port = 8000

import bodyParser from 'body-parser' // si importa questa libreria per parsare le stringhe nei post e nei put, si installa poi in terminale npm install body-parser
app.use(bodyParser.json()) //va insieme al precedente


import * as students from './routesGroup.mjs' // si importano tutti gli elementi dal path e si da loro il nome user attraverso "as"



app.get("/digitazon/2023/02/group/3/students", students.getGroup)
app.get("/digitazon/2023/02/students", students.getAll)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`) // stringhe di default che associano il temrminale alla portasopra indicata all'inizio pagina
})
