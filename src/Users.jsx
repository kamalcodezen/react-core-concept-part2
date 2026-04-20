import { use } from "react";
import User from "./user";

export default function Users({ fetchUsers }) {
  const users = use(fetchUsers);

  return (
    <div>
      <h1>Hello React User</h1>
      {users.map((user) => ( 
        <User key={user.id} user={user}></User>
      ))}
    </div>
  );
}

// export default function Users({fetchUsers}) {
//   const users = use(fetchUsers);
//   console.log(users)
//   return (
//     <div className="users">
//       <p>kamal {users.length}</p>
//     </div>
//   );
// }
