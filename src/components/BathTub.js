import React, {useState,  useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const BathTub = () => {

  const [waterLevel, setWaterLevel] = useState(0);
  const [direction, setDirection] = useState(0);
  const [btnEnable, setBtnEnable] = useState(true);
  let timeStep = 2000; // ms

  // use React Hook
  useEffect(()=>{
    if( (waterLevel > 80 && direction === 1) || (waterLevel < 20 && direction === -1)){
      setBtnEnable(false);
      return;
    }
    setTimeout(()=>{
      setWaterLevel(waterLevel + 20 * direction);
    }, timeStep);
  }, [waterLevel, direction]);

  return (
    <div style={{ display:"inline-flex" }}>
      <div style={{ display:"grid" }}>
        <IconButton aria-label="Increase" onClick={ ()=>{setDirection(1) }} disabled={!btnEnable} >
          <ArrowUpwardIcon fontSize="large"></ArrowUpwardIcon>
        </IconButton>
        <IconButton aria-label="Decrease" onClick={ ()=>{setDirection(-1) }} disabled={btnEnable} style={{ float: "right" }} >
          <ArrowDownwardIcon fontSize="large"></ArrowDownwardIcon>
        </IconButton>
      </div>
      <div class="tub">
        <div class="water" style={{ height: waterLevel }}></div>
      </div>
  
    </div>

  );
};

export default BathTub;
