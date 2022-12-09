
import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';


const FormUpdate = () => {

    const [postName, setName] = useState("");
  const [postAuthor, setAuthor] = useState("");
  const [postContent, setContent] = useState("");
  const [postCategory, setCategory] = useState("");
  const [id, setId] = useState("")

    let handleSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   let res = await fetch("http://localhost:3004/insert", {
    //     method: "POST",
    //     body: JSON.stringify({
    //       postName: postName,
    //       postAuthor: postAuthor,
    //       postContent: postContent,
    //     }),
    //   }
    //   );
    //   let resJson = await res.json();
    //   if (res.status === 200) {
    //     setName("");
    //     setAuthor("");
    //     setMessage("User created successfully");
    //   } else {
    //     setMessage("Some error occured");
    //   }
    // } catch (err) {
    //   console.log(err);
    // }


    axios.put("https://xr-speeds-production.up.railway.app/update", {
        id: id,
            postName: postName,
         postAuthor: postAuthor,
          postContent: postContent,
          postCategory: postCategory,
        });
  };




  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={id}
          placeholder="id"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="text"
          value={postName}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={postAuthor}
          placeholder="Email"
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input
          type="text"
          value={postContent}
          placeholder="Mobile Number"
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit">Update</button>

        {/* <div className="message">{message ? <p>{message}</p> : null}</div> */}
      </form>
    </div>
  );
}

export default FormUpdate