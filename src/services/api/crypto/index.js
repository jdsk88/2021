import {
  CRYPTO_ADD,
  CRYPTO_CODES,
  CRYPTO_ERROR,
  CRYPTO_LINECHART_SET,
  CRYPTO_WIDGETDATA_SET,
  CRYPTO_HISTORY_SET,
} from "store/actions";
import api from "../index";

const CryptoServices = {
  getAllData: async (dispatch, symbol) => {
    const res = await api.get(`/crypto/currencies/all`);
    return dispatch({
      type: CRYPTO_ADD,
      payload: res.data,
    });
  },
  getAllHistoryData: async (dispatch, symbol, limit) => {
    const res = await api.get(
      `/crypto/database/${symbol}/${limit}`
    );
    return dispatch({
      type: CRYPTO_HISTORY_SET,
      payload: res.data,
    });
  },
  getWidgetData: async (dispatch, symbol) => {
    const res = await api.get(`/crypto/currencies/widgetdata/${symbol}`);
    return dispatch({
      type: CRYPTO_WIDGETDATA_SET,
      payload: res.data,
    });
  },
  getSymbols: async (dispatch) => {
    const res = await api.get(`/crypto/currencies`);
    return dispatch({
      type: CRYPTO_CODES,
      payload: res.data,
    });
  },
  getLineChartData: async (dispatch) => {
    const res = await api.get(`/crypto/currencies/widgetdata/lineChart`);
    return dispatch({
      type: CRYPTO_LINECHART_SET,
      payload: res.data,
    });
  },
};
export default CryptoServices;

// const getAllCryptoData = async (dispatch, symbol) => {
//   try {
//     const res = await api.get(`/crypto/currencies/widgetdata/${symbol}`);
//     dispatch({
//       type: CRYPTO_ADD,
//       payload: res.data,
//     });
//   } catch (e) {
//     dispatch({
//       type: CRYPTO_ERROR,
//       payload: console.log(e),
//     });
//   }
// };

// export default getAllCryptoData;
