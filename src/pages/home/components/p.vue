<template>
    <div>
        <!-- 分类 -->
        <div class="classify">
            <div class="title">分类</div>
            <ul class="lists">
                <li v-for="item in clists" :key="item.title" @click="changeClassify(item.id)" :class="['list', {'active': item.id === activeInfo}]">{{item.title}}</li>
            </ul>
        </div>
        <!-- 列表 -->
        <div class="table-titles">
            <div class="title-first">项目</div>
            <div>模块</div>
            <div>市值</div>
            <div>排名</div>
            <div>成立时间</div>
        </div>
        <div class="tlist" v-for="item in infoLists" :key="item.id" @click="checkDetailHandle(item.id)">
            <div class="tinfo">
                <div class="img"><img :src="item.icon" /></div>
                <div class="info">{{item.symbol}}</div>
            </div>
            <div>{{item.categoryName}}</div>
            <div>{{item.marketValue}}</div>
            <div>{{item.rank}}</div>
            <div>{{item.releaseDate}}</div>
        </div>
        <div :style="{padding: '20px 0', textAlign: 'center'}">
            <el-pagination
            background
            @current-change="getDataListHandle"
            :current-page.sync="page"
            layout="prev, pager, next"
            :total="total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            infoLists: [],
            page: 1,
            total: 1,
            pageSize: 10,
            ctype: 1,
            activeInfo: '',
            clists: [{id: '', title: '全部'}]
        }
    },
    created() {
        this.$http('/category').then(res => {
            this.clists = this.clists.concat(res);
            return this.getDataListHandle(this.page);
        })
    },
    methods: {
        getDataListHandle (page = 1) {
            let params = {
                categories: this.activeInfo,
                page,
                limit: this.pageSize
            }
            this.$http('/projects', { params}).then(res => {
                let {allcount, data} = res;
                this.infoLists = data.map(item => ({...item, categoryName: item.category === '' ? '全部' : this.clists.filter(list => list.id == (item.category+''))[0].title}));
                this.total = allcount;
                // console.log(this.infoLists)
            })
        },
        checkDetailHandle (id) {
            this.$router.push({ path: `/detail/${id}`});
        },
        changeClassify (id) {
            if (this.activeInfo === id) return false;
            this.activeInfo = id;
            this.page = 1;
            return this.getDataListHandle();
        }
    }
}
</script>
<style lang="scss" scoped>
.table-titles {
    color: #999999;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    & > div {
        flex: 1;
    }
    .title-first {
        // min-width:  400px;
        width: 30%;
        padding-left: 20px;
        text-align: left;
    }
}
.tlist {
    color: #999999;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 80px;
    background: #ffffff;
    box-shadow: 0 0 5px #cccccc;
    margin-top: 5px;
    cursor: pointer;
    & > div {
        flex: 1;
        &:first-child {
            text-align: left;
            width: 30%;
            padding-left: 20px;
        }
    }
    &:hover {
        background: #efefef;
    } 
    img {
        width: 100%;
        height: 100%;
    }
}
.tinfo {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    .img {
        width: 52px;
        height: 52px;
        border: 1px solid #efefef;
    }
    .info {
        flex: 1;
        padding-left: 5px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
}
.classify {
    width: 100%;
    overflow: hidden;
    padding: 15px;
    background: #ffffff;
    box-shadow: 0 0 5px #cccccc;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    .title {
        color: #000000;
        font-weight: bold;
    }
}
.lists {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    .list {
        width: 130px;
        color: #999999;
        padding: 5px 0;
        cursor: pointer;
        &.hover, &.active {
            color: blueviolet;
        }
    }
}
</style>
