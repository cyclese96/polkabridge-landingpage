import axios from "axios";

export const getPbrStats = async () => {
  let url =
    "https://api.coingecko.com/api/v3/simple/price?ids=polkabridge&vs_currencies=usd&include_market_cap=true&include_24hr_change=true";
  let response = await axios.get(url);

  return response.data;
};
