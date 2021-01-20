<template>
      <div class="home">
          <header></header>
          <nav>
              <el-menu
                      :default-active="activeIndex"
                      class="el-menu-demo"
                      mode="horizontal"
                      @open="handleOpen"
                      @close="handleClose"
                      @select="handleMenuSelect"
                      background-color="#2066AE"
                      text-color="#fff"
                      active-text-color="#ffd04b"
                        :router="true">
                  <el-menu-item index="page1" route="/home/page1">
                      <span slot="title">页面1</span>
                  </el-menu-item>
                  <el-menu-item index="page2" route="/home/page2">
                      <span slot="title">页面2</span>
                  </el-menu-item>
              </el-menu>
          </nav>
          <main>
              <router-view></router-view>
          </main>
          <footer></footer>

      </div>
</template>

<script>
export default {
    name: 'Home',
    data() {
       return {
           input: "",
           activeIndex: 'page1',
       }
    },
    mounted() {
       this.$bus.$on('sayHello', function (val) {
           alert("hello" + val)
       })
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        handleMenuSelect(key, keyPath) {

        }
    },
    watch: {
        $route: {
            handler(to,from) {
                this.activeIndex = to.name;
            },
            immediate: true
        }
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
    .home{
        header{}
        nav{
            .el-menu.el-menu--horizontal{
                border-bottom: 0;
            }
            background-color: #2066AE;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 100;
            .el-menu-demo{
                max-width: 1480px;
                min-width: 1080px;
                margin: 0 auto;
                .el-menu-item{
                    font-weight: 300;
                    font-size: 17px;
                }
                .el-menu-item.is-active{
                    background: linear-gradient(to bottom, #292929, #555555) !important;
                    color: #fff !important;
                    border-bottom: 0 !important;
                }
            }
        }
        main{
            margin-top: 60px;
            overflow: auto;
            height: calc(100% - 141px);
            min-height: 1080px;
        }
        footer{}
    }
</style>
