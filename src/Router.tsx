import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chart from "./routes/Chart";
import Coin from "./routes/Coin";
import Coins from "./routes/Coins";
import Price from "./routes/Price";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Router에게 URL이 변수값을 갖는다는걸 말해줌 */}
        <Route path="/:coinId" element={<Coin />}></Route>
        <Route path="/" element={<Coins />}></Route>
        <Route path="chart" element={<Chart />}></Route>
        <Route path="price" element={<Price />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
