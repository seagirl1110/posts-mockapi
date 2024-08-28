import './App.css';
import Header from './components/header';
import { useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'https://66ced66e901aab24841fc56e.mockapi.io';
const POSTS_URL = `${BASE_URL}/posts`;

function App() {
  async function getAllPosts() {
    try {
      const data = await axios.get(POSTS_URL);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePost(id) {
    try {
      const data = await axios.delete(`${POSTS_URL}/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function createPost(newPost) {
    try {
      const data = await axios.post(POSTS_URL, newPost);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  async function updatePost(id, updateInfo) {
    try {
      const data = await axios.put(`${POSTS_URL}/${id}`, updateInfo);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPosts();
    //   deletePost(70);
    //   createPost({ title: 'MY-title', text: 'MY-text' });
    //   updatePost(70, { text: 'MY-NEW-TEXT' });
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
