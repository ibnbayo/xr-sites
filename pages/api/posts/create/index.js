// api/posts/create.js
// import mongodb from 'mongodb'
import { MongoClient } from 'mongodb';


export default async (req, res) => {
  // get the values of the form fields
  const { title, content } = req.body

  // connect to the MongoDB database
  const client = await MongoClient.connect('mongodb://localhost:27017')
  const db = client.db('mydb')

  // create the new post
  const result = await db.collection('posts').insertOne({
    title: title,
    content: content
  })

  // return a success response
  res.status(200).json({ success: true })
}