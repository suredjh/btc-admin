<template>
    <ul>
        <li v-for="item in route" :key="item.name">
            <router-link v-if="ctype == 'home'" :to="item.path">{{item.name}}</router-link>
            <a @click="scrollIntoView(item.id)" :class="cid == item.id ? 'router-link-exact-active' : ''" v-else>{{item.name}}</a>
        </li>
    </ul>
</template>

<script>
const home = [
                {
                    path: '/',
                    name: '项目'
                },
                {
                    path: '/incompany',
                    name: '投资机构'
                },
                {
                    path: '/investor',
                    name: '投资人'
                }
            ];
const detail = [{id: 'base', name: '基本信息'},{id: 'distribution', name: '链上数据'},{id: 'hot', name: '社区热度'},{id: 'activity', name: '开发活跃度'}, {id: 'news', name: '相关资讯'}, {id: 'other', name: '其他'}]
export default {
    data () {
        return {
            route: home,
            ctype: 'home',
            cid: 'base'
        }
    },
    watch: {
        $route (next, pre) {
            if (/^\/detail/.test(next.path)) {
                if (!/^\/detail/.test(pre.path)) {
                    this.route = detail;
                    this.ctype = 'detail'
                }
            } else {
                this.route = home;
                this.ctype = 'home';
            }
        }
    },
    created () {
        if (/^\/detail/.test(this.$route.path)) {
            this.route = detail;
            this.ctype = 'detail';
        };
    },
    methods: {
        scrollIntoView (id) {
            this.cid = id;
            console.log(document.getElementById(id).scrollIntoView);
            document.getElementById(id).scrollIntoView(true);
        }
    }
}
</script>
<style lang="scss" scoped>
ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    cursor: pointer;
}
li {
    width: 100%;
    height: 50px;
    color: #ffffff;
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #ffffff;
    cursor: pointer;
}
li a {
    text-decoration: none;
    color: #ffffff;
    display: block;
    width: 100%;
    height: 100%;
    text-align: center;
    line-height: 50px;
    &:hover, &.router-link-exact-active  {
        background: #545d66;
    }
}
// .router-link-active {
//     text-decoration: none;
//     color: #ffffff;
//     display: block;
//     width: 100%;
//     height: 100%;
//     text-align: center;
//     line-height: 50px;
// }
</style>
