import express from 'express'
import generateTask from './generate.js';

const app = express()

app.get('/', (req, res) => res.send(generateTask()))
app.get('/JSON', (req, res) => res.send({task:generateTask()}))

app.listen(3001, () => console.log('listening on port 3001'))