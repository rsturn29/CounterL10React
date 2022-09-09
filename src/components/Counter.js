import React from 'react';

const Counter = ({ count, onDecrement, onIncrement, onNumberChange, onNumberInput, buttonClicked }) => {

    return (
      <div>
        <div>
          <button onClick={onDecrement}>-</button>
          <span>{count}</span>
          <button onClick={onIncrement}>+</button>
          <br/><br/>
          <p>Number of times the increment/decrement buttons have been clicked:{buttonClicked}</p>
          <input type='text' onChange={event=> onNumberChange(event.target.value)} />
          <button onClick={onNumberInput}>Change Count Number</button>

        </div>
      </div>
    );
}


export default Counter;