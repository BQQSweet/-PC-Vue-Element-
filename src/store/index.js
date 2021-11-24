import Vue from 'vue'
import Vuex from 'vuex'
import ajax from "../utils/ajax";
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        currentSong: ""
    },
    mutations: {
        updateSong(state,data) {
            state.currentSong=data
        }
    }
    ,
    actions: {
        async getSongData(context,id) {
            const [err, res] = await ajax.get(`/song/url?id=${id}`)
            context.commit('updateSong',res.data[0])
        }
    },
    modules: {},
})
