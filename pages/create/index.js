// import React from 'react'
// import { useRouter } from 'next/router'
// import mongodb from 'mongodb'

// const NewPost = () => {
//   const router = useRouter()

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     // get the values of the form fields
//     const title = event.target.elements.title.value
//     const content = event.target.elements.content.value

//     // connect to the MongoDB database
//     const client = await mongodb.MongoClient.connect()
//     const db = client.db('mydb')

//     // create the new post
//     const result = await db.collection('posts').insertOne({
//       title: title,
//       content: content
//     })

//     // redirect to the homepage after the post is created
//     router.push('/')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Title:
//         <input type="text" name="title" />
//       </label>
//       <label>
//         Content:
//         <textarea name="content"></textarea>
//       </label>
//       <button type="submit">Create Post</button>
//     </form>
//   )
// }

// export default NewPost
