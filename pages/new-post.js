// pages/new-post.js
import React from 'react'
import { useRouter } from 'next/router'

const NewPost = () => {
  const router = useRouter()

  const handleSubmit = (event) => {
    event.preventDefault()
    // get the values of the form fields
    const title = event.target.elements.title.value
    const content = event.target.elements.content.value

    // send the form data to the API
    fetch('/api/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, content })
    }).then(() => {
      // redirect to the homepage after the post is created
      router.push('/')
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input type="text" name="title" />
      </label>
      <label>
        Content:
        <textarea name="content"></textarea>
      </label>
      <button type="submit">Create Post</button>
    </form>
  )
}

export default NewPost
