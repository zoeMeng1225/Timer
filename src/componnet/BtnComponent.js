import React from 'react';


const BtnComponnent = (props) => {
  return(
      <div>
        {props.status === 0 ? 
        <div className = "start_btn">
          <button onClick = {props.start}>START</button>
        </div> : ""}

        {props.status === 1 ?
          <div className = "btn_nonStart">
          <button onClick = {props.reset} className = "btn-restart">RESET</button>
          <button onClick = {props.stop} className = "btn-stop">STOP</button>
        </div> : ""}


        {props.status == 2 ?
           <div className = "btn_nonStart">
           <button onClick = {props.reset} className = "btn-restart">RESET</button>
           <button onClick = {props.resume} className = "btn-stop">RESUME</button>
         </div> : ""
        }
      </div>
  )
}


export default BtnComponnent;





