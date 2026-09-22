const express = require('express')
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// Criar usuário
app.post('/usuarios', async (req, res) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
        age: Number(req.body.age),
        email: req.body.email,
      },
    })
    res.status(201).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Listar usuários
app.get('/usuarios', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Atualizar usuário
app.put('/usuarios/:id', async (req, res) => {
  try {
    const user = await prisma.user.update({
      where: { id: Number(req.params.id) },
      data: {
        name: req.body.name,
        age: Number(req.body.age),
        email: req.body.email,
      },
    })
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Deletar usuário
app.delete('/usuarios/:id', async (req, res) => {
  try {
    await prisma.user.delete({
      where: { id: Number(req.params.id) },
    })
    res.status(200).json({ message: 'Usuário deletado com sucesso!' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))