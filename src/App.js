// 必要なライブラリとコンポーネントのインポート
import React, { useState } from 'react';  // useStateをインポート
import Calculator from './components/Calculator/Calculator';
import History from './components/History/History';
import './App.css';  // アプリ全体のスタイル

// App コンポーネントの定義
function App() {
  const [history, setHistory] = useState([]);  // 計算履歴を保持するためのstateを追加

  // 計算履歴を追加する関数
  const addHistory = (expression, result) => {
    setHistory([...history, { expression, result }]);
  };

  // 計算履歴をクリアする関数
  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="app">
      {/* Calculator コンポーネントに props として addHistory を渡す */}
      <Calculator onCalculate={addHistory} />
      {/* History コンポーネントに props として history と onClearHistory を渡す */}
      <History history={history} onClearHistory={clearHistory} />
    </div>
  );
}

// App コンポーネントのエクスポート
export default App;
