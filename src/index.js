import React, {Component }from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { makeAutoObservable } from 'mobx';
import { observer } from "mobx-react-lite";


class Timer {
    secondsPassed = 0

    constructor() {
        makeAutoObservable(this)
    }

    increaseTimer() {
        this.secondsPassed += 1
    }
}

const myTimer = new Timer();
const TimerView = observer(({ timer }) => <span>Seconds passed: {timer.secondsPassed}</span>);



ReactDOM.render(
    <TimerView timer={myTimer} />,
  document.getElementById('root')
);

setInterval(() => {
    myTimer.increaseTimer()
}, 1000)