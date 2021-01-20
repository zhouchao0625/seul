//这里就可以引用你要显示的页面了
import home from '@/components/home.vue'
import page1 from '@/components/page1.vue'
import page2 from '@/components/page2.vue'

//配置路由，path就是你浏览器地址，component就是跟着你要显示的页面，/表示默认地址。
export default [
    {
        path:"/home",
        /*name: 'home',*/
        component:home,
        children: [{
            path: 'page1',// 与/page1的区别在于，page1的方式必须通过/home/page1访问，而/page1必须通过/page1访问
            name: 'page1',
            component:page1
            },
            {
                /*path: 'page2/:id',*/
                path: 'page2',
                name: 'page2',
                component:page2
            }
        ]
    },
    {
        path: '/',
        redirect: '/home/page1'
    }
]