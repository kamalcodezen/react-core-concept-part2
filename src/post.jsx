export default function Post({ post }) {
  const { id, title} = post;

  return (
    <div className="users">
      <p>ID : {id}</p>
      <br></br>
      <p>Title : {title}</p>
    </div>
  );
}
