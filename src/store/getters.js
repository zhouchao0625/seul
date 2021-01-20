export default {
    //类似于state的计算属性
    formatterName(state){
        return state.name + "getters";
    },
    getUserInfo(state) {
        return state.userInfo;
    }
}