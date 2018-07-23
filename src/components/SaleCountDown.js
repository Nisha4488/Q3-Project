import React from 'react'
import Countdown from 'react-countdown-now';

const Completionist = () => <span>Sale Ended</span>;

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days}D:{hours}H:{minutes}M:{seconds}S</span>;
  }
};

const SaleCountDown =(props)=>{
  return(
    <div className="text-danger">
      <Countdown date={new Date(props.timestamp).getTime()}  renderer={renderer} />
    </div>
  )
}
export default SaleCountDown
