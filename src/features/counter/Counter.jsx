import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './counterSlice';
import { incrementAsync } from './counterThunk';
import { selectCounterValue, selectCounterStatus } from './counterSelectors';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(selectCounterValue);
    const status = useSelector(selectCounterStatus);
    const [inputValue, setInputValue] = useState(1);

    return (
        <div>
            <h2>Compteur : {count}</h2>
            <p>Status : {status}</p>

            <div>
                <button onClick={() => dispatch(decrement())}>-1</button>
                <button onClick={() => dispatch(increment())}>+1</button>
            </div>

            <div>
                <input
                    type="number"
                    value={inputValue}
                    onChange={(e) => setInputValue(Number(e.target.value))}
                />
                <button onClick={() => dispatch(incrementAsync(inputValue))}>
                    Incrémenter après 1s
                </button>
            </div>
        </div>
    );
};

export default Counter;
