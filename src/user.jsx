export default function User({ user }) {
  const {
    address: { city },
    company: { name: companyName },
    name: userName,
  } = user;
  return (
    <div>
      <p className="users">City Name : {city}</p>
      <p className="users">Company Name : {companyName}</p>
      <p className="users">UserName Name : {userName}</p>
    </div>
  );
}
