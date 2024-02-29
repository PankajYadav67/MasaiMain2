import React, { useState, useRef, useCallback, useMemo } from 'react';

const getRandomColor = () => {
  const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const Post = React.memo(({ post, onToggleVerify, getDelayedColor }) => {
  const boxStyle = useMemo(() => {
    return {
      backgroundColor: getDelayedColor(),
      width: '50px',
      height: '50px',
      marginRight: '10px',
    };
  }, [getDelayedColor]);

  return (
    <div className="post-container">
      <div style={boxStyle}></div>
      <div>
        <h3>{post.title}</h3>
        <p>{post.description}</p>
        <p>{post.body}</p>
        <button onClick={() => onToggleVerify(post.id)}>
          {post.verify ? 'Verified' : 'Verify'}
        </button>
      </div>
    </div>
  );
});

const App = () => {
  const [timer, setTimer] = useState(0);
  const [posts, setPosts] = useState([]);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const timerRef = useRef();

  const getDelayedColor = useCallback(() => {
    const delay = 1000; // 1 second delay
    const start = Date.now();
    while (Date.now() - start < delay) {
      // Synchronous delay
    }
    return getRandomColor();
  }, []);

  const handleAddPost = () => {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;

    if (title) {
      const newPost = {
        id: Date.now(),
        title,
        description,
        body: '',
        verify: false,
      };
      setPosts((prevPosts) => [...prevPosts, newPost]);
      titleRef.current.value = '';
      descriptionRef.current.value = '';
    }
  };

  const handleToggleVerify = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, verify: !post.verify } : post
      )
    );
  };

  // Increment the timer every second
  timerRef.current = setInterval(() => {
    setTimer((prevTimer) => prevTimer + 1);
  }, 1000);

  return (
    <div className="app-container">
      <h1>Timer: {timer}</h1>
      <div className="input-container">
        <input type="text" ref={titleRef} placeholder="Enter post title" />
        <input type="text" ref={descriptionRef} placeholder="Enter post description" />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onToggleVerify={handleToggleVerify}
          getDelayedColor={getDelayedColor}
        />
      ))}
      <style jsx>{`
        .app-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 50px;
        }

        .post-container {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          border: 1px solid #ccc;
          padding: 10px;
          border-radius: 5px;
        }

        .post-container div {
          display: flex;
          flex-direction: column;
        }

        .post-container h3 {
          margin: 0;
        }

        .input-container {
          margin-bottom: 10px;
        }

        input {
          margin-right: 10px;
          padding: 5px;
        }

        button {
          padding: 5px 10px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default App;
