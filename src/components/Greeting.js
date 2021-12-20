import { UserConsumer } from "../context/UserContext";

const Greeting = () => {
  return (
    <UserConsumer>
      {({ user }) =>
        <p>
          Welcome, {user.name} !
        </p>}
    </UserConsumer>
  )
  
};

export default Greeting;