import React, { useState } from 'react';
import './Calculator.css';


const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    // 数値と演算子を入力する関数
    const handleInput = (value) => {
        setInput(input + value);
    };

    // 計算結果を表示する関数a

    const calculate = () => {
        try {
            // eslint-disable-next-line no-eval
            setResult(eval(input).toString());
        } catch (error) {
            setResult('Error');
        }
    };

    // 入力をクリアする関数
    const clearInput = () => {
        setInput('');
        setResult('');
    };

    return (
        <div>
            <div className="display">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <div className="result">{result}</div>
            </div>
            <div className="buttons">
                <button onClick={() => handleInput('1')}>1</button>
                <button onClick={() => handleInput('2')}>2</button>
                <button onClick={() => handleInput('3')}>3</button>
                <button onClick={() => handleInput('4')}>4</button>
                <button onClick={() => handleInput('5')}>5</button>
                <button onClick={() => handleInput('6')}>6</button>
                <button onClick={() => handleInput('7')}>7</button>
                <button onClick={() => handleInput('8')}>8</button>
                <button onClick={() => handleInput('9')}>9</button>
                <button onClick={() => handleInput('0')}>0</button>
                <button onClick={() => handleInput('+')}>+</button>
                <button onClick={() => handleInput('-')}>-</button>
                <button onClick={() => handleInput('*')}>*</button>
                <button onClick={() => handleInput('/')}>/</button>
                <button onClick={calculate}>=</button>
                <button onClick={clearInput}>C</button>
            </div>
        </div>
    );
};

export default Calculator;
