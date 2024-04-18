import React, { useState } from 'react';
import './Calculator.css';

const Calculator = ({ onCalculate }) => {  // onCalculateをpropsとして受け取る
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleInput = (value) => {
        setInput(input + value);
    };
    /* eslint-disable no-eval */
    const calculate = () => {
        try {
            const calcResult = eval(input).toString();  // 計算結果を一時変数に保存

            setResult(calcResult);
            onCalculate(input, calcResult);  // 計算履歴に追加
            setInput('');
            

        } catch (error) {
            setResult('Error');
        }
    };
    /* eslint-enable no-eval */
    const clearInput = () => {
        setInput('');
        setResult('');
    };

    return (
        <div className='calculator-container'>
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
