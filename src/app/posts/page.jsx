//! different ways to fetch data in next.js
// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

// const getPosts = async () => {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//     return res.json();
//   } catch (err) {
//     throw new Error("Failed to fetch posts");
//   }
// };

// const getPosts = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if (!res.ok) {
//     throw new Error("Failed to fetch posts");
//   }

//   return res.json();
// };
// const PostsPage = async () => {
//   const posts = await getPosts();
//   return <div>Posts are coming soon: {posts.length}</div>;
// };

//! parallel data fetching

const PostsPage = async () => {
  const [postsRes, usersRes] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/posts"),
    fetch("https://jsonplaceholder.typicode.com/users"),
  ]);

  const posts = await postsRes.json();
  const users = await usersRes.json();
  console.log(posts);

  return (
    <div>
      <div className="border border-gray-200 rounded-2xl p-5">
        <h2>Posts length: {posts.length}</h2>
        <p>Posts:</p>
        {posts.map((post) => (
          <div key={post.id}>
            <h4>Name: {post.title}</h4>
          </div>
        ))}
      </div>
      <div>
        <h2>Users length: {users.length}</h2>
      </div>
    </div>
  );
};

export default PostsPage;
