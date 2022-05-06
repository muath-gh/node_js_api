const { application } = require('express');
const express = require('express');
const app = express();
const port = 3000
const service = require('./service/users')
app.use(express.json());
app.get('/', (req, res) => {
    res.json({message: 'alive'});
  });

  app.get('/allUsers',(req,res)=>{
      try{
      res.json(service.allUsers())
      }catch(err){
          console.log('Error while fetching users',err.message)
          res.json('error')
      }
  })

app.post('/createUser',(req,res)=>{
    try{
res.json(service.createUser(req.body))
    }catch(err){
        console.log('Error while creating user',err.message);
        res.json('error');
    }
})

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });