import { configureStore } from '@reduxjs/toolkit'
import onlineShopRuducer from './onlineShopSlice'
export const store = configureStore({
  reducer: {
    onlineShop:onlineShopRuducer
  },
})

