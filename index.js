const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')
require('dotenv').config()



//middleware
app.use(cors())
app.use(express.json())



// ROUTES

// create note

app.post('/notes', async (req, res) => {
   try {
    const {title} = req.body
    const {description} = req.body
    const newNote = await pool.query("INSERT INTO notes (title, description) VALUES (?, ?)",
    [title, description])
    res.json(newNote)
   } catch (error) {
        console.error(error)
   }
  })


// get all notes

app.get('/notes', async (req, res) => {
    try {
     const notes = await pool.query("SELECT * FROM notes");
     res.json(notes[0])
    } catch (error) {
         console.error(error)
    }
   })
 

// get a note

app.get('/notes/:id', async (req, res) => {
    try {
    const {id} = req.params
    const note = await pool.query("SELECT * FROM notes WHERE id = ?", [id]);
    res.json(note[0])
    } catch (error) {
         console.error(error)
    }
   })

// update a note

app.put('/notes/:id', async (req, res) => {
    try {
    const {id} = req.params
    const {title} = req.body
    const {description} = req.body
    const updateNote = await pool.query("UPDATE notes SET title = ?, description = ?  WHERE id = ?", [title, description, id]);
    res.json(updateNote[0])
    } catch (error) {
        console.error(error)
    }
   })

// delete a note

app.delete('/notes/:id', async (req, res) => {
    try {
    const { id } = req.params
    await pool.query("DELETE FROM notes WHERE id = ?", [id]);
    res.json('Note Deleted!')
    } catch (error) {
        console.error(error)
    }
   })



   const PORT = process.env.PORT || 3001
   app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`)
   })