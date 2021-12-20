import { memo } from 'react';
import { UserConsumer } from "../context/UserContext";

const WithdrawButton = memo(({ amount }) => {
  return (
    <UserConsumer>
      {({ handleWithdrawal }) => (
          <button
            data-amount={amount}
            onClick={handleWithdrawal}
          >
            WITHDRAW {amount}
          </button>
      )}

    </UserConsumer>
  )
});

WithdrawButton.displayName = 'WithdrawButton';

export default WithdrawButton;