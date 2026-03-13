import { use } from "react";






export default function Friends({friendsApi}) {

const freinds = use(friendsApi);
console.log(freinds)

  return (
    <div className="users">
      <h2>async await </h2>
      <h3>Loading test Suspense Check</h3>
    </div>
  );
}
