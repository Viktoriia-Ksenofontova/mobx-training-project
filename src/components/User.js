import { memo } from 'react';
import Greeting from "./Greeting";

const User = memo(({ profilePicture }) => {
  return (
    <div>
      <img src={profilePicture} alt="user" />
      <Greeting/>
    </div>
  )
});
User.displayName="User"

export default User;