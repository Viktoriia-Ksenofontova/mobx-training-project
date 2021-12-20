import { PureComponent } from 'react';
import User from '../components/User';
import ViewAccountBalance from '../components/ViewAccounBalance';
import WithdrawButton from '../components/WithdrowButton';

class App extends PureComponent {
  state = {
    showBalance: false
  }

  displayBalance() {
    this.setState({showBalance: true})
  }


  render() {
    const { showBalance } = this.state;

    return (
      <div>
        <User profilePicture="../mops.png"/>
        <ViewAccountBalance showBalance={showBalance} displayBalance={this.displayBalance.bind(this)} />
        
        <section>
          <WithdrawButton amount={1000}/>
          <WithdrawButton amount={5000}/>
        </section>
      </div>
    );
  }
};

export default App;