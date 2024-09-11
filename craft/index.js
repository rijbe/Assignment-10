const express = require('express');
const cors = require('cors');
require('dotenv').config()
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

console.log(process.env.DB_NAME) 
console.log(process.env.DB_PASS) 

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.jxhtigg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const craftCollection = client.db("craftDB").collection('craft')


    app.get('/craft', async(req, res)=>{
      const cursor = craftCollection.find();
      const result = await cursor.toArray();
      res.send(result)
    })

    app.get('/craft/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await craftCollection.findOne(query);
      res.send(result)
    })


    app.put('/craft/:id', async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updateCraft = req.body;
      
      const craft = {
        $set: {
          name: updateCraft.name,
          item: updateCraft.item,
          date: updateCraft.date,
          email: updateCraft.email,
          stock: updateCraft.stock,
          category: updateCraft.category,
          price: updateCraft.price,
          rating: updateCraft.rating, 
          photo: updateCraft.photo,
          short: updateCraft.short,
          radio: updateCraft.radio
        }
      };
    
      const result = await craftCollection.updateOne(filter, craft, options);
      res.send(result);
    });
    

    app.post('/craft', async(req, res)=>{
        const newCraft = req.body;
        console.log(newCraft)
        const result = await craftCollection.insertOne(newCraft);
        res.send(result)
    })

    app.delete('/craft/:id', async(req, res)=>{
      const id = req.params.id;
      const query = {_id: new ObjectId(id)};
      const result = await craftCollection.deleteOne(query)
      res.send(result)
    })



    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




app.get('/', (req, res)=>{
    res.send('your server is running');
})
app.listen(port, ()=>{
    console.log(`you get ready to:${port}`)
})