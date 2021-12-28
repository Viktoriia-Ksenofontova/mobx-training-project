import { memo } from 'react';
import { UserConsumer } from "../context/UserContext";

const ViewAccountBalance = memo(({ showBalance, displayBalance }) => {
 
  return (
    <>
      {!showBalance ? (
        <div>
          <p>
            Woud you like to view your account balance? 
          </p>
          <button onClick={displayBalance}>Yes</button>
      </div>
      ) : (
          <UserConsumer>
            {({ user }) => (
              <div>
                <p>Total amount:</p>
                <span>{user.totalAmount}</span>
              </div>)
            }
          </UserConsumer>
    )}
    </>
)
});

ViewAccountBalance.displayName = "ViewAccountBalance";

export default ViewAccountBalance;