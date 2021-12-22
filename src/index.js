import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from "./containers/Login";
import UserProvider, { UserConsumer } from './context/UserContext';
const App = React.lazy(()=> import('./containers/App'));

const Root =() => {
    return (
     <UserProvider>
     <UserConsumer>
      {({ user, handleLogin }) =>
          user ? (
            <Suspense fallback={<div>Loading...</div>}>
              <App />
            </Suspense>
          ) : (
            <Login handleLogin={handleLogin} />
          )
      }
     </UserConsumer>
   </UserProvider>
    )
}

 ReactDOM.render(<Root />, document.getElementById('root'));




// work with observer
// import { makeAutoObservable } from 'mobx';
// import { observer } from 'mobx-react';

// class UserNickName {
//     firstName = 'Vika';
//     age = 30;

//     constructor() {
//         makeAutoObservable(this)
//     };

//      increment = function () {
//          this.age += 1
//      };

//      decrement = function() {
//         this.age-=1
//     }
// }


// @observer class Counter extends React.Component {

//   handleIncrement = () => { this.props.store.increment() };
//   handleDecrement = () => { this.props.store.decrement() };

//   render() {
//     return (
//       <div className="App"> 
//         <h1>{this.props.store.firstName}</h1>
//         <h1>{this.props.store.age}</h1>
//         <button onClick={this.handleDecrement}>-1</button>
//         <button onClick={this.handleIncrement}>+1</button>
//       </div>
//     );
//   }
// }
// const MyStore = new UserNickName();

// ReactDOM.render(<Counter store={MyStore } />, document.getElementById('root'));



