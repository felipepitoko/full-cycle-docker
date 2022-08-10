import express from "express"
import * as url from 'url';
import * as fs from 'fs';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = express()

app.get('/',(req,res)=>{
    const link_pagina = new URL('page.html', import.meta.url)
    // console.log(link_pagina)
    // console.log(__dirname)
    // const pagina = fs.readFileSync(link_pagina, 'utf-8')
    return res.status(200).sendFile(__dirname+'page.html')
})

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Escutando a vadia puta na porta 3000')
})
// console.log("Hello vadia puta")