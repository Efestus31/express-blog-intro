const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Benvenuto nel mio blog!</h1>');
  });