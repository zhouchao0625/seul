export default {
    setUserInfoAsync(context,userinfo){
        setTimeout(() => {
            if(userinfo) {
                context.commit('set_userInfo',userinfo);
            }else{
                context.commit('set_userInfo','mayday');
            }
        },1000)
    }
}