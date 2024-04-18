import React from 'react';
import './History.css';  // スタイルシートをインポート

const History = ({ history, onClearHistory }) => {
    if (!history.length) {
      return <div className="history-container">履歴はありません。</div>;
    }
  
    return (
      <div className="history-container">
        <h2>計算履歴</h2>
        <div className="history-list">
          {history.map((item, index) => (
            <div key={index} className="history-item">
              <span>{item.expression} = {item.result}</span>
            </div>
          ))}
        </div>
        <button onClick={onClearHistory} className="clear-history">履歴をクリア</button>
      </div>
    );
  };

export default History;
