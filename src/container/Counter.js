import React, { useState } from 'react';

function Counter() {
    const [number, setNumber] = useState(0);
    return (
        <div className="container">
            <h1>counter</h1>
            <span
                className={`value ${number > 0 ? 'text-green' : 'text-red'} ${
                    number === 0 && 'text-black'
                }`}
            >
                {number}
            </span>
            <div className="button-container">
                <button
                    className="btn decrease"
                    onClick={() => {
                        setNumber(number - 1);
                    }}
                >
                    decrease
                </button>
                <button
                    className="btn reset"
                    onClick={() => {
                        setNumber(0);
                    }}
                >
                    reset
                </button>
                <button
                    className="btn increase"
                    onClick={() => {
                        setNumber(number + 1);
                    }}
                >
                    increase
                </button>
            </div>
        </div>
    );
}

export default Counter;
