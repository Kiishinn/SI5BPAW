const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/about', (req, res) => 
    {res.send('Halaman tentang perusahaan');
    
});

app.get('/contact', (req, res) => 
    {res.send('Kontak perusahaan');
    
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})