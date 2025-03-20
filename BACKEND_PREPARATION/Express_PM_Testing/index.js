import express from 'express'
const app = express();

const PORT = 3000;

app.get('/', (req, res)=>{
res.send("Hello Anuj")
})

app.get('/contact', (req, res)=>{
    res.send("contact Page")
})

app.get('/about', (req, res)=>{
    res.send("About Page")
})

app.listen(PORT,(req, res)=>{
console.log(`Server is Running on ${PORT}`)
})