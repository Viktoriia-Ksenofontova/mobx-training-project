import { UserConsumer } from "../context/UserContext";


const Greeting = () => {
  return (
    <UserConsumer>
      {({ user }) =>
        <p>
          Welcome, {user.userName} !
        </p>}
    </UserConsumer>
  )
  
};

export default Greeting;