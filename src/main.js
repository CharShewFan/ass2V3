import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {store} from './store'
import axios from 'axios'
import vuex from 'vuex'
import {createVuetify} from 'vuetify'


// an axios interceptor which set up the header and base route
const instance = axios.create({
    // baseURL: 'http://localhost:4943/api/v1',
    //baseURL:'http://csse-s365docker1.canterbury.ac.nz:4001/api/v1'
});

let token = localStorage.getItem("token");
console.log("main js token")
console.log(token)
if (token !== null || token !== undefined) {
    instance.defaults.headers.common['X-Authorization'] = token;
}


instance.interceptors.request.use(
    function(config) {
        let token = localStorage.getItem("token");
        if (token) {
            config.headers["X-Authorization"] = token;
            config.headers.test = 'I am only a header!';
            console.log(config)
        }
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

router.beforeEach((to,from,next)=>{
    if(to.meta.loginRequire === true){
        console.log("store.state.loginStatus")
        console.log(store.getters.isLogIn)
        if(store.getters.isLogIn !== true){
            next({path:"/login",name:"Login",query:{
                    redirect:to.fullPath
                }})
        }else{
            next();
        }
    }else{
        next()
    }

})

createApp(App).use(router,axios,store,vuetify,vuex).mount('#app')
