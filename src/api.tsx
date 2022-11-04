const BASE_URL = `https://api.coinpaprika.com/v1`;
// fetcher 함수는 꼭 fetch promise를 return 해야함
// json data의 Promise를 return
export async function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(coinId: string | undefined) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((res) => res.json());
}
//fetchCoinInfo의 argu로 coinId라는 이름의 string prop로 전달
export function fetchCoinTickers(coinId: string | undefined) {
  return fetch(`${BASE_URL}/tickers/${coinId}`).then((res) => res.json());
}

export function fetchCoinHistory(coinId: string | undefined) {
  console.log("coinId", coinId);

  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;
  return fetch(
    `https://ohlcv-api.nomadcoders.workers.dev/?coinId=${coinId}`
  ).then((res) => {
    res.json();
  });
}
