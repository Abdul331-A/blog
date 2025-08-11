

export async function getBlogs() {
    const res = await fetch('http://localhost:3000/blogs');
    const data = await res.json();
    return data;
    
}
// console.log(data);


