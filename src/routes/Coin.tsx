import { useParams } from "react-router-dom";

interface RouteParams {
  coinId: string;
}
function Coin() {
  //useParams URL의 파라미터 사용가능
  const { coinId } = useParams<{ coinId: string }>();
  console.log(coinId);
  return <h1>Coin : {coinId}</h1>;
}

export default Coin;
