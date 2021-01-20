export default {
    set_userInfo(state, userinfo) {
        state.userInfo = userinfo;
        localStorage.userInfo = JSON.stringify(userinfo);
    }
}