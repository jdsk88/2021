import {
  CRYPTO_ADD,
  CRYPTO_CODES,
  CRYPTO_ERROR,
  CRYPTO_WIDGETDATA_SET,
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
  getWidgetData: async (dispatch, symbol) => {
    const res = await api.get(`/crypto/currencies/widgetdata/${symbol}`);
    return dispatch({
      type: CRYPTO_WIDGETDATA_SET,
      payload: res.data,
    });
  },
  getSymbolData: async (params) => {
    return await api.get(`/crypto/currencies/${params}`);
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
