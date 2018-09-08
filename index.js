const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const foo = {
    foo: 'foo',
  }

  const bar = {
    ...foo,
    bar: 'bar',
  }
  console.log('it works !!!', bar);

  res.json(bar);
})


app.listen(process.env.PORT || 1337);
