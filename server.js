const express = require("express")
const app = express()
const pool = require("./db")

app.use(express.json())

//Router for post request to add data to the store table
app.post("/store", async(req, res) => {
    try{
        const {store_id, store_name, location_city, is_open, store_phonenumber} = req.body; //request variables
        const newStore = await pool.query(
            "INSERT INTO store (store_id, store_name, location_city, is_open,store_phonenumber) VALUES ($1, $2, $3, $4, $5)",
            [store_id, store_name, location_city, is_open, store_phonenumber] 
        );

        res.json(newStore.rows[0]) // return the first row created

    }catch(err){
        console.log(err.message)
    }

})

 

//Router for get request to get all data from the store table
app.get("/store", async(req, res) => {
    try{
        const allStores = await pool.query(
            "SELECT * FROM store",
        );

        res.json(allStores.rows)

    }catch(err){
        console.log(err.message)
    }

})

//Router for get request to get all the ids from the store table
app.get("/store/id", async(req, res) => {
    try{
        const allStores = await pool.query(
            "SELECT store_id FROM store",
        );

        res.json(allStores.rows)

    }catch(err){
        console.log(err.message)
    }

})

//Router for get request to get both the ids and names from the store table
app.get("/store/id&name", async(req, res) => {
    try{
        const allStores = await pool.query(
            "SELECT store_id,store_name FROM store",
        );

        res.json(allStores.rows)

    }catch(err){
        console.log(err.message)
    }

})

//Router for get request to get data for a specific store id
app.get("/store/:id", async(req, res) => {
    const {id} = req.params;
    try{
        const store = await pool.query("SELECT * FROM store WHERE store_id = $1 ", [id])
        res.json(store.rows[0])

    }catch(err){
        console.log(err.message)
    }

})

app.listen(3000, () => {
    console.log("server is listening on port 3000")
})