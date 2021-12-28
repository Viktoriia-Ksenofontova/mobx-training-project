import { memo } from 'react';
import Greeting from "./Greeting";
import useToCompareProps from '../hooks/useToCompareProps.js';

const User = memo(({ profilePicture }) => {
  const isPprevPropsIqualNextProps = useToCompareProps(profilePicture);
console.log(isPprevPropsIqualNextProps)
  return (
    <div>
      <img src={profilePicture} alt="user" />
      <Greeting />
      
      <p>{`isPprevPropsIqualNextProp: ${isPprevPropsIqualNextProps}`}</p>
    </div>
  )
});
User.displayName="User"

export default User;