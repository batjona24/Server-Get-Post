import express from 'express';

const app = express();
app.use(express.json());

//GET
app.get('/unique', async (req, res) => {
  const { numbers } = req.query;
 
  const newArr = numbers.split(',');
  const unique= newArr.filter((value, index, array) => array.indexOf(value) === index);
 
  res.send(String(unique));
});

app.get('/sum', async (req, res) => {
  const { numbers } = req.query;
  
  const newArr = numbers.split(',');
  let sum = 0;

    for(const number of newArr){
      sum += Number(number);
    } 


  res.send('summ is '+ String(sum));
});

// POST
app.post('/unique', async (req, res) => {
  const { numbers=[] } = req.body;
  
  const unique = numbers.filter((value, index, array) => array.indexOf(value) === index);
  
  res.send(String(unique));
});

app.post('/sum', async (req, res) => {
  const { numbers=[] } = req.body;
  
  let sum = 0;
  for(const number of numbers){
    sum += number;
  }

  res.send(String(sum));
});

const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//http://localhost:3000/sum?numbers=1,5,2,4,4,5
//http://localhost:3000/unique?numbers=1,5,2,4,4,5

/*
{
  "number" : [1,5,2,4,4,5]
}
*/