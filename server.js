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

app.post("/employees", async(req, res) => {
    try{
        const {employee_id, store_id, employee_name,  employee_phonenumber, employee_email,employee_roll } = req.body; //request variables
        const newEmployees = await pool.query(
            "INSERT INTO employees (employee_id, store_id, employee_name,  employee_phonenumber, employee_email,employee_roll ) VALUES ($1, $2, $3, $4, $5, $6)",
            [employee_id, store_id, employee_name,  employee_phonenumber, employee_email,employee_roll ] 
        );

        res.json(newEmployees.rows[0]) // return the first row created

    }catch(err){
        console.log(err.message)
    }

}) 

 //Router for get request to get all data from the store table
app.get("/employees", async(req, res) => {
    try{
        const allEmployees = await pool.query(
            "SELECT * FROM employees",
        );

        res.json(allEmployees.rows)

    }catch(err){
        console.log(err.message)
    }

})

// product table insert and get function
app.post("/product", async(req, res) => {
    try{
        const {product_id, store_id, product_name,  product_price } = req.body; //request variables
        const newProduct = await pool.query(
            "INSERT INTO employees (employee_id, store_id, employee_name,  employee_phonenumber, employee_email,employee_roll ) VALUES ($1, $2, $3, $4, $5, $6)",
            [product_id, store_id, product_name,  product_price ] 
        );

        res.json(newProduct.rows[0]) // return the first row created

    }catch(err){
        console.log(err.message)
    }

}) 

app.get("/product", async(req, res) => {
    try{
        const allProduct = await pool.query(
            "SELECT * FROM employees",
        );

        res.json(allProduct.rows)

    }catch(err){
        console.log(err.message)
    }

})



// customer table insert and get function
app.post("/customers", async(req, res) => {
    try{
        const {customers_id, purchase_id, customers_name,  customers_phonenumber, customers_address } = req.body; //request variables
        const newCustomers = await pool.query(
            "INSERT INTO customers (employee_id, store_id, employee_name,  employee_phonenumber, employee_email,employee_roll ) VALUES ($1, $2, $3, $4, $5, $6)",
            [customers_id, purchase_id, customers_name,  customers_phonenumber, customers_address ] 
        );

        res.json(newCustomers.rows[0]) // return the first row created

    }catch(err){
        console.log(err.message)
    }

}) 

 
app.get("/customers", async(req, res) => {
    try{
        const allCustomers = await pool.query(
            "SELECT * FROM customers",
        );

        res.json(allCustomers.rows)

    }catch(err){
        console.log(err.message)
    }

})


// purchase table insert and get function
app.post("/purchases", async(req, res) => {
    try{
        const {purchase_id, store_id, product_id,  purchase_date, purchase_price } = req.body; //request variables
        const newPurchases = await pool.query(
            "INSERT INTO customers (employee_id, store_id, employee_name,  employee_phonenumber, employee_email,employee_roll ) VALUES ($1, $2, $3, $4, $5, $6)",
            [purchase_id, store_id, product_id,  purchase_date, purchase_price ] 
        );

        res.json(newPurchases.rows[0]) // return the first row created

    }catch(err){
        console.log(err.message)
    }

}) 

 
app.get("/purchases", async(req, res) => {
    try{
        const allPurchases = await pool.query(
            "SELECT * FROM customers",
        );

        res.json( allPurchases.rows)

    }catch(err){
        console.log(err.message)
    }

})


app.listen(3000, () => {
    console.log("server is listening on port 3000")
})