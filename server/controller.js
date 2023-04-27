const wantData = []
const inspireData = []
const dreamData = []
const goalData = []

let newID =1

module.exports={
    getAllWant:(req,res) => {
        res.status(200).send(wantData)
    },

    
    getAllInspire:(req,res) => {
        res.status(200).send(inspireData)
    },

  
    getAllDream:(req,res) => {
        res.status(200).send(dreamData)
    },

 
    getAllGoal: (req,res) => {
        res.status(200).send(goalData)
    },




createWant: (req, res) => {
    let{ want } = req.body
    let newWant = {
    id: newID,
    want: want,
   }
   console.log(newWant)
    
    wantData.push(newWant)
    res.status(200).send(wantData)
    
    newID++
},

deleteWant: (req, res) => {
    let {id} = req.params
    let index = wantData.findIndex(wantObj => wantObj.id === +id)
    wantData.splice(index,1)
    res.status(200).send(wantData)
    },


createGoal: (req, res) => {
    let{ goal } = req.body
    let newGoal = {
    id: newID,
    goal: goal,
    }
        
    goalData.push(newGoal)
    res.status(200).send(goalData)
        
    newID++
    },
    
deleteGoal: (req, res) => {
    let {id} = req.params
    let index = goalData.findIndex(goalObj => goalObj.id === +id)
    goalData.splice(index,1)
    res.status(200).send(goalData)
    },


createInspire: (req, res) => {
    let{ inspire } = req.body
    let newInspire = {
    id: newID,
    inspire: inspire,
    }
            
    inspireData.push(newInspire)
    res.status(200).send(inspireData)
            
    newID++
    },
        
deleteInspire: (req, res) => {
    let {id} = req.params
    let index = inpsireData.findIndex(inspireObj => inpsireObj.id === +id)
    inspireData.splice(index,1)
    res.status(200).send(inspireData)
    },


createDream: (req, res) => {
    let{ dream } = req.body
    let newDream = {
    id: newID,
    dream: dream,
    }
        
    dreamData.push(newDream)
    res.status(200).send(dreamData)
        
    newID++
    },
    
deleteDream: (req, res) => {
    let {id} = req.params
    let index = dreamData.findIndex(dreamObj => dreamObj.id === +id)
    dreamData.splice(index,1)
    res.status(200).send(dreamData)
    }

}
