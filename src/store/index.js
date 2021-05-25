// import Vue from 'vue'
// import Vuex from 'vuex'
import Events from './modules/events'
import LogIn from './modules/login'
import User from './modules/user'
import Cate from './modules/categories'
import eventImage from "@/store/modules/eventImage";

import {createStore} from 'vuex'

//Vue.use(Vuex)
//
// export default new Vuex.Store({
//   modules: {
//     Events,
//     LogIn,
//     User,
//     Cate,
//     eventImage
//   }
// })

const store = createStore({
  modules: {
    Events,
    LogIn,
    User,
    Cate,
    eventImage
  }
})

export default store;

