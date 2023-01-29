import {configureStore} from '@reduxjs/toolkit';
import  CartReducer  from '../cart/cart';
import  wishlistReducer  from '../wishlist/wishlist';
import  userReducer  from '../user/user';
import  dataReducer  from '../appData/appData';

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    wishlist:wishlistReducer,
    user:userReducer,
    data:dataReducer
  },
});