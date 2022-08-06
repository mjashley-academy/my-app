import React, { useEffect, useState } from "react";

export default function GetFetchAPI() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts?_limit=3";
    fetch(apiUrl, { method: "GET" })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const deletePost = async (id) => {
    const delUrl = `https://jsonplaceholder.typicode.com/posts/${id}`;
    fetch(delUrl, { method: "DELETE" }).then((response) => {
      if (response.status === 200) {
        const remainData = posts.filter((post) => {
          return post.id !== id;
        });
        setPosts(remainData);
      } else {
        return;
      }
    });
  };

  const addPosts = async (title, body) => {
    const addUrl = "https://jsonplaceholder.typicode.com/posts";
    await fetch(addUrl, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        body: body,
        userId: Math.random().toString(36).slice(2),
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPosts((posts) => [data, ...posts]);
        setTitle("");
        setBody("");
      })
      .catch((err) => console.log(err.message));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title);
    console.log(body);
    addPosts(title, body);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          name=""
          id=""
          cols="40"
          rows="5"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Add Post</button>
      </form>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button
              onClick={() => {
                return deletePost(post.id);
              }}
            >
              DELETE
            </button>
          </div>
        );
      })}
    </div>
  );
}

