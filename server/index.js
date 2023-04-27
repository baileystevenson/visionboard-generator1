const express= require('express')

const path=  require('path')

const app = express()


app.use(express.json())
app.use(express.static(__dirname+'/public'))
app.get('/',(req,res)=> {
    res.status(200).sendFile(path.join(__dirname,"../public/index.html"))
})
app.get('/js',(req,res)=> {
    res.status(200).sendFile(path.join(__dirname,"../public/capstone_main.js"))
})
app.get('/css',(req,res)=> {
    res.status(200).sendFile(path.join(__dirname,"../public/styles.css"))
})


const {getAllWant,createWant,deleteWant} = require('./controller')

app.get(`/api/want`, getAllWant)
app.post(`/api/want`, createWant)
app.delete(`/api/want/:id`, deleteWant)

const {getAllGoal,createGoal,deleteGoal} = require('./controller')

app.get(`/api/goal`, getAllGoal)
app.post(`/api/goal`, createGoal)
app.delete(`/api/goal/:id`, deleteGoal)

const {getAllInspire,createInspire,deleteInspire} = require('./controller')

app.get(`/api/inspire`, getAllInspire)
app.post(`/api/inspire`, createInspire)
app.delete(`/api/inspire/:id`, deleteInspire)

const {getAllDream,createDream,deleteDream} = require('./controller')

app.get(`/api/dream`, getAllDream)
app.post(`/api/dream`, createDream)
app.delete(`/api/dream/:id`, deleteDream)


app.listen(4000, console.log("Server running on 4000."))
