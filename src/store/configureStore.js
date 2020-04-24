import { createStore, applyMiddleware, compose } from "redux";
import { offline } from "redux-offline";
import offlineConfig from "redux-offline/lib/defaults";
import rootReducers from "../reducers";
import thunk from "redux-thunk";
import * as localforage from "localforage";
import axios from 'axios';

offlineConfig.persistOptions = { storage: localforage }; // store offline data in indexedDB

// overriding effect
const customConfig = {
  ...offlineConfig,
  effect: (effect, action) => {
    console.log("Effect value", effect)
    let method = effect ? effect.method : 'GET';
    axios(effect);
    // return axios({method: effect.method, url: effect.url, data : action.payload && action.payload.content});
  }
};

export default function configureStore(initialState) {
  return createStore(
    rootReducers,
    initialState,
    compose(applyMiddleware(thunk), offline(offlineConfig))
  );
}
