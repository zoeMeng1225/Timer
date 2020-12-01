import React, {useState} from 'react';
import Btn from './componnet/BtnComponent';
import Display from './componnet/Display';
import './App.css';


const App = () => {
  //initailize watch time
  const [time, setTime] = useState({ms : 0, s: 0, m : 0, h : 0});
  const [interve, setInterve] = useState();
  const [status, setStatus] = useState(0);

  //归零的状态
  //Not started: 0;
  //started = 1;
  //stop: 2;

  //obtain initailized watch
  let updateMs = time.ms;
  let updateS = time.s;
  let updateM = time.m;
  let updateH = time.h;

  const runTime = () => {
    if(updateMs == 100){
      updateS++;
      updateMs = 0;
    }

    if(updateS == 60){
      updateM++;
      updateS = 0;   // 归零
    }

    if(updateM == 60){
      updateH++;
      updateM = 0;
    }

    //默认ms 先走；
    updateMs++;
    return setTime({ms: updateMs, s : updateS, m: updateM, h: updateH});
  }

  const start = () => {
    runTime();
    setStatus(1);
    setInterve(setInterval(runTime, 10));
  }

  const stop = () => {
    clearInterval(interve);
    setStatus(2)  // stop: 2;
  }


  const reset = () => {
    clearInterval(interve);
    setStatus(0);
    setTime({ms: 0, s: 0, m: 0, h: 0})
  }


  const resume = () => start();

  return(
    <div className = "main-section">
      <div className = "clock-section">
        <div className = "stopwatch" style = "background:red">
          <Display time = {time}/>
          <Btn start = {start} 
               stop = {stop} 
               status = {status} 
               reset = {reset}
               resume = {resume}
          />
        </div>
      </div>
    </div>
  )
}


export default App;
