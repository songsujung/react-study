import { useState, useEffect } from "react";

// 암호화폐와 그 가격을 나열
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); // 기본 값으로 빈 배열을 넘겨주어 coin array를 0으로 시작, 아무 것도 설정을 안해주면 coins가 undefined이 되어 에러가 난다.
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(response => response.json())
      .then((json) => {
        setCoins(json)
        setLoading(false);
      });
  }, []); // 해당 Effect를 한 번만 사용할 거기때문에 어떤 것에도 의존하지 않고 []로 비워둠(빈 배열이면 한 번만 작동)
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <ul>
        {coins.map((coin) => (
          <li>{coin.name}({coin.symbol}) : ${coin.quotes.USD.price} USD</li>
        ))}
        </ul>
      )}

    </div>
  );
}

export default App;
