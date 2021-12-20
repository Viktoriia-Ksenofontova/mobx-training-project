import { createContext, Component } from "react";

const { Provider, Consumer } = createContext();

class UserProvider extends Component{
  constructor() {
    super()
    this.state = {
      user: null,
      handleLogin: this.handleLogin,
      handleWithdrawal: this.handleWithdrawal
    }
  }
  
  handleLogin = (e) => {
    e.preventDefault();

    this.setState({
      user: {
        name: "Vika",
        totalAmount: 250070
      }
    })
  };

  handleWithdrawal = (e) => {
    const { name, totalAmount } = this.state.user;

    const withdrawalAmount = e.target.dataset.amount;

    this.setState({
      user: {
        name,
        totalAmount: totalAmount - withdrawalAmount
      }
    })
  };

  render() {
     return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
};

export { UserProvider as default, Consumer as UserConsumer };