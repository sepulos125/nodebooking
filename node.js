import express from 'express'; 
const app = express();        
const port = 5000;  

app.get('/', (req, res) => {    
    res.send("dziala wszystko gra gitara") 
})

app.listen(port, () => {  
    console.log(`Now listening on port ${port}`); 
})