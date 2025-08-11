import { Link } from "react-router-dom";

export default function Create() {
  
 const create = (e) => {
  e.preventDefault(); 
  const title=e.target.title.value;
  const content=e.target.content.value;
  // console.log(title,content);
  const res= await fetch('http://localhost:3000/blogs');

};

  return (
    <form onSubmit={create}>
      <h1>Create</h1>
      <Link to='/'>Back</Link>
      <br />
      <label htmlFor='title'>Title</label>
      <br />
      <input type='text' />
      <br />
      <label htmlFor='content'>Content</label>
      <br />
      <textarea name='content'></textarea>
      <br />
      <button type='submit'  >Create</button>
    </form>
  );
}
