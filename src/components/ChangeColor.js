import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { changeColor } from '../redux/Theme';

const ChangeColor = () => {
  const [color, setColor] = useState();
  const dispatch = useDispatch();

  const colorHandler = (e) => {
    setColor(e.target.value);
  };
  const ChangeColorHandler = (e) => {
    dispatch(changeColor(color));
  };

  return (
    <div className='color'>
      <input type='text' onChange={colorHandler} />
      <button onClick={ChangeColorHandler}>Submit</button>
    </div>
  );
};

export default ChangeColor;
