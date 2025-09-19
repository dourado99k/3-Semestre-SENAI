import express from 'express';
import { usuarioRouter } from './routes/usuarios.js'
import { pacientesRouter } from './routes/pacientes.js'
import { consultasRouter } from './routes/consulta.js'
import { prontuarioRouter } from './routes/prontuario.js'
import { exameRouter } from './routes/exame.js'

const app = express()
app.use(express.json())

// rotas usuario
app.use(usuarioRouter);

// // rotas exames
app.use(exameRouter);

// rotas pacientes
app.use(pacientesRouter);

// rotas prontuario
app.use(prontuarioRouter);

// rotas consulta
app.use(consultasRouter);

const port = 5000

app.listen(port, () => console.log(`Api rodando na porta ${port}`))
