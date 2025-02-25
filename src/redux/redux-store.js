import { combineReducers, createStore } from 'redux';
import mainBranchReducer from './main-branch-reducer';

let reducers = combineReducers({ mainBranch: mainBranchReducer });

let store = createStore(reducers);

export default store;
