import * as actions from '../actions/actionsTypes';
import { updateObject } from '../utility';

// ======================== //
//      Initial State       //
// ======================== //
const initialState = {
  orders: [],
  loading: false,
  purchased: false
}

// ======================== //
// REDUCER HELPER FUNCTIONS //
// ======================== //
const purchaseInit = (state, action) => updateObject(state, {purchased: false});

const purchaseBurgerStart = (state, action) => updateObject(state, {loading: true});

const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder)});
};

const purchaseBurgerFail = (state, action) => updateObject(state, {loading: false});

const fetchOrdersStart = (state, action) => updateObject(state, {loading: true});

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, {
    orders: action.orders,
    loading: false});
};

const fetchOrdersFail = (state, action) => updateObject(state, {loading: false});

// ======================== //
//         REDUCER          //
// ======================== //
const reducer = (state=initialState, action) => {
  switch(action.type) {
    case actions.PURCHASE_INIT: return purchaseInit(state, action);
    case actions.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
    case actions.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
    case actions.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
    case actions.FETCH_ORDERS_START: return fetchOrdersStart(state, action);
    case actions.FETCH_ORDERS_SUCCESS: return fetchOrdersSuccess(state, action);
    case actions.FETCH_ORDERS_FAIL: return fetchOrdersFail(state, action);
    default: return state;
  }
}

export default reducer;