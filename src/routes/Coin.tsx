import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { useLocation } from "react-router-dom";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loading = styled.span`
  text-align: center;
  font-size: 24px;
  color: white;
`;

interface RouteParams {
  coinId: string;
}
interface RouteState {
  state: string;
}
function Coin() {
  const [loading, setLoading] = useState(true);
  //useParams URL의 파라미터 사용가능
  const { coinId } = useParams<{ coinId: string }>();
  const { state } = useLocation() as RouteState;
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);
  return (
    <Container>
      <Header>
        {/* 외부에서 디테일 페이지로 접근할 경우 state를 가져오지 못 함 */}
        <Title> {state || "Loading"}</Title>
      </Header>
      {loading ? <Loading>Loading...</Loading> : null}
    </Container>
  );
}

export default Coin;
