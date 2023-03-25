import './App.css';
import axios from 'axios';

function App() {
      async function getUserData(userId) {
  try {
    //Axios çağrıları yapıldı Try-Catch Bloğuna sarıldı.
    const [userData, posts] = await Promise.all([
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`),
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    ]);
    return {
      ...userData.data,
      posts: posts.data
    };
  } catch (error) {
    console.error(error);
  }
};
//yazılan axios fonksiyonu console.log'da görüntülenmesi için çağrıldı.
console.log(getUserData(1))
}

export default App;
