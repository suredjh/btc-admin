<template>
    <div class="item-content">
        <div class="item-top">
            <div class="it-img"><img :src="baseInfo.icon" alt=""></div>
            <div class="it-name">比特币（BTC）</div>
        </div>
        <!-- 基本信息 -->
        <div class="item-list" id="base">
            <div class="item-list-title"><img src="../../assets/images/title.jpg" alt="">基本信息</div>
            <div class="content">
                <div class="c-title">基础</div>
                <div class="c-con">
                    <div class="c-list">发行总量：{{baseInfo.maximumSupply}}</div>
                    <div class="c-list">流通数量：{{baseInfo.trafic}}</div>
                    <div class="c-list">共识机制：{{baseInfo.consensusMethod}}</div>
                    <div class="c-list">白皮书：<a download href="baseInfo.whitepaper">PDF</a></div>
                    <div class="c-list">发行时间：{{baseInfo.releaseDate}}</div>
                    <div class="c-list">上市价格：{{baseInfo.ITOPrice}}</div>
                    <div class="c-list">历史最高价：{{baseInfo.highestPrice}}</div>
                    <div class="c-list">历史最低价：{{baseInfo.lowestPrice}}</div>
                </div>
                <div class="c-title">交易所分布</div>
                <div class="c-con">
                    <div class="c-list">N/A</div>
                </div>
                <div class="c-title">项目简介</div>
                <div class="c-con">
                    <div class="c-list-flex">{{baseInfo.about}}</div>
                </div>
                <div class="c-title">团队成员</div>
                <div class="c-con">
                    <div class="c-list-usr">
                        <div>姓名</div>
                        <div>日本聪</div>
                        <div>N/A</div>
                    </div>
                    <div class="c-list-usr">
                        <div>职位</div>
                        <div>创始人</div>
                        <div>N/A</div>
                    </div>
                    <div class="c-list-usr">
                        <div>介绍</div>
                        <div>{{baseInfo.about}}</div>
                        <div>N/A</div>
                    </div>
                </div>
            </div>
        </div> 
        <!-- 链上数据 -->
        <div class="item-list" id="distribution">
            <div class="item-list-title"><img src="../../assets/images/title.jpg" alt="">链上数据</div>
            <div class="content">
                <div class="c-title">持币地址</div>
                <div class="c-con">
                    <div class="c-list">
                        <div>地址总数</div>
                        <div class="c-list-num">1223456</div>
                    </div>
                    <div class="c-list">
                        <div>24小时新增地址数</div>
                        <div class="c-list-pre down">8.098 <img src="../../assets/images/down.png" alt=""><span>-3.74%</span></div>
                    </div>
                    <div class="c-list">
                        <div>活跃地址总数</div>
                        <div class="c-list-num">1223456</div>
                    </div>
                    <div class="c-list">
                        <div>24小时新增活跃地址数</div>
                        <div class="c-list-pre up">8.098<img src="../../assets/images/up.png" alt=""><span>+3.74%</span></div>
                    </div>
                </div>
                <!-- list && map -->
                <div class="c-con">
                    <div class="lists" style="width: 380px;">
                        <div class="ls-top">
                            <span>十大富豪榜</span>
                            <span>点击查看更多</span>
                        </div>
                        <div class="ls-title">
                            <div>排名</div>
                            <div>账户</div>
                            <div>额度</div>
                            <div>占比</div>
                        </div>
                        <div class="ls-con">
                            <div class="ls-con-list" v-for="(item, index) in richList" :key="item.id">
                                <div><span :class="['list-sort', {'red-sort': index < 3}]">NO.{{index + 1}}</span></div>
                                <div class="ellipsis">{{item.address}}</div>
                                <div>{{item.volume}}</div>
                                <div>{{(item.percent*100).toFixed(3) + '%'}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="map">
                        <div class="ls-top">持币地址分布</div>
                        <div id="main1" style="width: 100%; height: 320px;"></div>
                    </div>
                </div>
                <div class="c-title">交易趋势</div>
                <div class="c-con">
                    <div class="c-list">
                        <div>24小时交易量</div>
                        <div class="c-list-num">{{projectTrend.transaction}}</div>
                    </div>
                    <div class="c-list">
                        <div>24小时交易笔数</div>
                        <div class="c-list-pre up">{{projectTrend.deals}}<img src="../../assets/images/up.png" alt=""><span>+{{projectTrend.transactionPerDeal}}%</span></div>
                    </div>
                    <div class="c-list">
                        <div>平均每笔交易量</div>
                        <div class="c-list-num">{{projectTrend.transactionPerDeal}}</div>
                    </div>
                </div>
                <div class="c-con">
                    <div class="lists" style="width: 300px;">
                        <div class="ls-top">
                            <span>交易龙虎榜</span>
                            <span>点击查看更多</span>
                        </div>
                        <div class="ls-title">
                            <div>排名</div>
                            <div>账户</div>
                            <div>交易额</div>
                        </div>
                        <div class="ls-con">
                            <div class="ls-con-list" v-for="(item, index) in transactionList" :key="item.id">
                                <div><span :class="['list-sort', 'red', {'red-sort': index < 3}]">NO.{{index + 1}}</span></div>
                                <div class="ellipsis">{{item.address}}</div>
                                <div>{{item.valume}}</div>
                            </div>
                        </div>
                    </div>
                    <div class="lists" style="padding-left: 100px;">
                        <div class="ls-top">
                            <span>特殊地质交易监测</span>
                            <span>点击设置</span>
                        </div>
                        <div class="ls-title">
                            <div>输出账户</div>
                            <div>输入账户</div>
                            <div>额度</div>
                            <div>时间</div>
                        </div>
                        <div class="ls-con">
                            <div class="ls-con-list" v-for="item in mtransactionList" :key="item.id">
                                <div class="ellipsis">{{item.from}}</div>
                                <div class="ellipsis">{{item.to}}</div>
                                <div>{{item.volume}}</div>
                                <div>{{item.updated}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 社区热度 -->
        <div class="item-list" id="hot">
            <div class="item-list-title"><img src="../../assets/images/title.jpg" alt="">社区热度</div>
            <div class="content">
                <div class="c-title">社交平台</div>
                <div class="c-ind-title"><img src="../../assets/images/twitter.png" alt="">Twitter</div>
                <div class="c-con c-con5">
                    <div class="c-list">
                        <div>关注者</div>
                        <div class="c-list-num">{{twitterActivity.followers}}</div>
                    </div>
                    <div class="c-list">
                        <div>24小时关注者</div>
                        <div class="c-list-num">{{twitterActivity.followerIncrementIn24}}</div>
                    </div>
                    <div class="c-list">
                        <div>发帖总数</div>
                        <div class="c-list-num">{{twitterActivity.posts}}</div>
                    </div>
                    <div class="c-list">
                        <div>24小时新增发帖数</div>
                        <div class="c-list-num">{{twitterActivity.postsIncrementIn24}}</div>
                    </div>
                    <div class="c-list">
                        <div>点赞总数</div>
                        <div class="c-list-num">{{twitterActivity.likes}}</div>
                    </div>
                </div>
                <div class="c-ind-title"><img src="../../assets/images/facebook.png" alt="">Facebook</div>
                <div class="c-con c-con5">
                    <div class="c-list">
                        <div>关注着</div>
                        <div class="c-list-num">{{facebookActivities.followers}}</div>
                    </div>
                    <div class="c-list">
                        <div>24小时关注者</div>
                        <div class="c-list-num">{{facebookActivities.followerIncrementIn24}}</div>
                    </div>
                    <div class="c-list">
                        <div>发帖总数</div>
                        <div class="c-list-num">{{facebookActivities.posts}}</div>
                    </div>
                    <div class="c-list">
                        <div>24小时新增发帖数</div>
                        <div class="c-list-num">{{facebookActivities.postsIncrementIn24}}</div>
                    </div>
                    <div class="c-list">
                        <div>点赞总数</div>
                        <div class="c-list-num">{{facebookActivities.likes}}</div>
                    </div>
                </div>
                <div class="c-ind-title"><img src="../../assets/images/telegram.png" alt="">Telegram</div>
                <div class="c-con c-con5">
                    <div class="c-list">
                        <div>关注者</div>
                        <div class="c-list-num">{{telegramActivities.followers}}</div>
                    </div>
                    <div class="c-list">
                        <div>24小时关注者</div>
                        <div class="c-list-num">{{telegramActivities.followerIncrementIn24}}</div>
                    </div>
                </div>
                <div class="c-title">其他指数</div>
                <div class="c-ind-title">谷歌指数 N/A</div>
            </div>
        </div> 
        <!-- 开发活跃度 -->
        <div class="item-list" id="activity">
            <div class="item-list-title"><img src="../../assets/images/title.jpg" alt="">开发活跃度</div>
            <div class="content">
                <div class="c-title">社交平台</div>
                <div class="c-ind-title">Twitter</div>
                <div class="c-con c-con5">
                    <div class="c-list">
                        Contributors: {{githubActivities.contributors}}
                    </div>
                    <div class="c-list">
                        Watch: {{githubActivities.watches}}
                    </div>
                    <div class="c-list">
                        Star: {{githubActivities.stars}}
                    </div>
                    <div class="c-list">
                        Folk: {{githubActivities.folks}}
                    </div>
                    <div class="c-list">
                        Releases: {{githubActivities.releases}}
                    </div>
                    <div class="c-list">
                        最近一次提交代码: {{githubActivities.lastCommitTime}}
                    </div>
                    <div class="c-list">
                        最新版信息: 1.0.0
                    </div>
                </div>
                <div class="c-title">代码更新</div>
                <div id="main2" style="width: 100%; height: 300px;"></div>
                <div class="switch-timer">
                    <span :class="['timer-list', {'active': ctimer == '7'}]" @click="switchTimer(7)">7天</span>
                    <span :class="['timer-list', {'active': ctimer == '30'}]" @click="switchTimer(30)">30天</span>
                    <span :class="['timer-list', {'active': ctimer == '90'}]" @click="switchTimer(90)">90天</span>
                </div>
            </div>
        </div> 
        <!-- 相关资讯 -->
        <div class="item-list" id="news">
            <div class="item-list-title"><img src="../../assets/images/title.jpg" alt="">相关资讯</div>
            <div class="content">
                
            </div>
        </div> 
        <!-- 其他 -->
        <div class="item-list" id="other">
            <div class="item-list-title"><img src="../../assets/images/title.jpg" alt="">其他</div>
            <div class="content">
                
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts';
export default {
    name: 'detail',
    data () {
        return {
            ctimer: '90',
            baseInfo: {},
            richList: [],
            transactionList: [],
            mtransactionList: [],
            githubCommits: {},
            myChart2: null,
            project_id: '',
            twitterActivity: {},
            githubActivities: {},
            telegramActivities: {},
            facebookActivities: {},
            projectTrend: {},
            projectDistribution: []
        }
    },
    created () {
        let id = this.$route.params.id;
        if (!id) return false;
        this.project_id = id;
        // base info
        this.$http(`/project/1`).then(res => {
            this.baseInfo = res;
        })
        // 十大富豪榜
        this.$http('/projectRich', {params: {project_id: id}}).then(res => {
            this.richList = res;
        })
        // 交易趋势
        this.$http('/projectTrend', {params: {project_id: id}}).then(res => {
            // console.log('projectTrend', res);
            this.projectTrend = res[0];
        })
        // 查询交易龙虎榜
        this.$http('/projectRichOfTransaction', {params: {project_id: id}}).then(res => {
            this.transactionList = res;
        })
        // 查询被监控交易  404 (Not Found)    特殊地质交易监测
        this.$http('/projectMonitoredTransaction', {params: {project_id: id, user_id: 1}}).then(res => {
            this.mtransactionList = res;
        })

        // 查询钱包地址 持币地址
        this.$http('/projectWallet', {params: {project_id: id, user_id: 1}}).then(res => {
            console.log('projectWallet', res)
            // this.projectWalle = res;
        })


        // 查询被监控交易地址
        this.$http('/projectUserMonitor', {params: {project_id: id, user_id: 1}}).then(res => {
            console.log('查询被监控交易地址', res);
        })
        // 查询项目最新的的Twitter活跃度, 当前只支持查询最新一天（未必是当天）
        this.$http('/projectTwitterActivities', {params: {project_id: id}}).then(res => {
            // console.log('查询项目最新的的Twitter活跃度, 当前只支持查询最新一天（未必是当天）', res);
            this.twitterActivity = res[0];
        })
        // 查询项目最近的的Facebook活跃度, 当前只支持查询最新一天（未必是当天）
        this.$http('/projectFacebookActivities', {params: {project_id: id}}).then(res => {
            // console.log('查询项目最近的的Facebook活跃度, 当前只支持查询最新一天（未必是当天）', res);
            this.facebookActivities = res[0];
        })
        // 查询项目最近的的Telegram活跃度, 当前只支持查询最新一天（未必是当天）
        this.$http('/projectTelegramActivities', {params: {project_id: id}}).then(res => {
            // console.log('查询项目最近的的Telegram活跃度, 当前只支持查询最新一天（未必是当天）', res);
            this.telegramActivities = res[0];
        })
        // 询项目最近的的Github活跃度, 当前只支持查询最新一天（未必是当天）
        this.$http('/projectGithubActivities', {params: {project_id: id}}).then(res => {
            // console.log('询项目最近的的Github活跃度, 当前只支持查询最新一天（未必是当天）', res);
            this.githubActivities = res;
        })
        // this.getGithubCommits(this.ctimer);
    },
    mounted() {
        this.createDistributionChart();
        this.createGithubCommitsChart(this.ctimer);
    },
    methods: {
        switchTimer (timer) {
            if (this.ctimer == timer) return false;
            this.ctimer = timer;
            this.createGithubCommitsChart(timer);
        },
        getProjectDistribution () {
            return new Promise((resolve, reject) => {
                // 持币地址分布
                this.$http('/projectDistribution', {params: {project_id: this.project_id}}).then(res => resolve(res))
            })
        },
        async createDistributionChart () {
            this.myChart && this.myChart.dispose();
            this.myChart = echarts.init(document.getElementById('main1'));
            let projectDistribution = this.projectDistribution.length > 0 ? this.projectDistribution : await this.getProjectDistribution();
            let data = projectDistribution.map(item => {
                let { percent: value, section: name} = item;
                return {value, name}
            })
            this.projectDistribution = projectDistribution;
            let option = {
                    tooltip: {
                        trigger: 'item',
                        formatter: "{a} <br/>{b}: ({d}%)"
                    },
                    legend: {
                        orient: 'vertical',
                        // x: 'right',
                        right: 100,
                        data: data.map(item => item.name)
                    },
                    series: [
                        {
                            name:'',
                            type:'pie',
                            selectedMode: 'single',
                            radius: [0, '60%'],

                            label: {
                                normal: {
                                    position: 'inner'
                                }
                            },
                            labelLine: {
                                normal: {
                                    show: false
                                }
                            },
                            data: data
                        },
                        // {
                        //     name:'访问来源',
                        //     type:'pie',
                        //     radius: ['60%', '75%'],
                        //     label: {
                        //         normal: {
                        //             show: false,
                        //             formatter: '{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ',
                        //             backgroundColor: '#eee',
                        //             borderColor: '#aaa',
                        //             borderWidth: 1,
                        //             borderRadius: 4,
                        //             // shadowBlur:3,
                        //             // shadowOffsetX: 2,
                        //             // shadowOffsetY: 2,
                        //             // shadowColor: '#999',
                        //             // padding: [0, 7],
                        //             // rich: {
                        //             //     a: {
                        //             //         color: '#999',
                        //             //         lineHeight: 22,
                        //             //         align: 'center'
                        //             //     },
                        //             //     abg: {
                        //             //         backgroundColor: '#333',
                        //             //         width: '100%',
                        //             //         align: 'right',
                        //             //         height: 22,
                        //             //         borderRadius: [4, 4, 0, 0]
                        //             //     },
                        //             //     hr: {
                        //             //         borderColor: '#aaa',
                        //             //         width: '100%',
                        //             //         borderWidth: 0.5,
                        //             //         height: 0
                        //             //     },
                        //             //     b: {
                        //             //         fontSize: 16,
                        //             //         lineHeight: 33
                        //             //     },
                        //             //     per: {
                        //             //         color: '#eee',
                        //             //         backgroundColor: '#334455',
                        //             //         padding: [2, 4],
                        //             //         borderRadius: 2
                        //             //     }
                        //             // }
                        //         }
                        //     },
                        //     data:[
                        //         {value:335, name:'直达'},
                        //         {value:310, name:'邮件营销'},
                        //         {value:234, name:'联盟广告'},
                        //         {value:135, name:'视频广告'},
                        //         {value:1048, name:'百度'},
                        //         {value:251, name:'谷歌'},
                        //         {value:147, name:'必应'},
                        //         {value:102, name:'其他'}
                        //     ]
                        // }
                    ]
                };
            this.myChart.setOption(option);
        },
        getGithubCommits (timer) {
            return new Promise((resolve, reject) => {
                // 查询项目的的Github提交数
                this.$http('/projectGithubCommits', {params: {project_id: this.project_id, scope: timer}}).then(res => {
                    this.githubCommits[timer] = res;
                    resolve(res);
                })
            })
        },
        // 创建git提交数量的图表
        async createGithubCommitsChart (timer) {
            let githubCommits = this.githubCommits[this.ctimer] || await this.getGithubCommits(timer);
            this.myChart2 && this.myChart2.dispose();
            this.myChart2 = echarts.init(document.getElementById("main2"));
            let cdata = [];
            let cdate = [];
            githubCommits.forEach(element => {
                let {commits, date} = element; 
                cdata.push(commits);
                cdate.push(date);
            });
            let option2 = {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    text: '',
                },
                toolbox: {
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: cdate
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 10
                }, {
                    start: 0,
                    end: 10,
                    handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                    handleSize: '80%',
                    handleStyle: {
                        color: '#fff',
                        shadowBlur: 3,
                        shadowColor: 'rgba(0, 0, 0, 0.6)',
                        shadowOffsetX: 2,
                        shadowOffsetY: 2
                    }
                }],
                series: [
                    {
                        name:'',
                        type:'line',
                        // smooth:true,
                        symbol: 'none',
                        sampling: 'average',
                        itemStyle: {
                            color: 'rgb(255, 70, 131)'
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(255, 158, 68)'
                            }, {
                                offset: 1,
                                color: 'rgb(255, 70, 131)'
                            }])
                        },
                        data: cdata
                    }
                ]
            };
            this.myChart2.setOption(option2);
        }
    }
}
</script>

<style scoped>

html, body {
    /* background: #f0f0f0; */
    padding: 20px;
    font-size: 14px;
}
.item-top {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.it-img {
    width: 60px;
    height: 60px;
    /* border: 1px solid #efefef; */
}
.it-img img {
    width: 100%;
}
.it-name {
    padding-left: 15px;
    font-weight: bold;
    font-size: 18px;
}
.item-content {
    padding: 20px;
}
.item-list {
    width: 100%;
    overflow: hidden;
    background: #f8f8f8;
}
.item-list-title {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 16px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.item-list-title img {
    width: 36px;
}
.content {
    background: #ffffff;
    border: 1px solid #eeeeee;
    padding: 0 20px;
    min-height: 200px;
}
.c-title {
    width: 100%;
    height: 20px;
    padding-left: 10px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-left: 4px solid #ba1816;
}
.c-ind-title {
    padding-left: 14px;
    padding-top: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.c-ind-title img {
    width: 34px;
    margin-right: 5px;
}
.c-con {
    width: 100%;
    padding-left: 14px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
}
.c-con5 {
    justify-content: flex-start;
}
.c-list {
    width: 25%;
    padding-top: 15px;
}
.c-con5 .c-list {
    width: 20%;
}
.c-list-flex {
    flex: 1;
}
.c-list-usr {
    width: 120px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
.c-list-usr:last-child {
    flex: 1;
}
.c-list-num {
    font-size: 16px;
    font-weight: bold;
    line-height: 40px;
}
.c-list-pre {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.c-list-pre span{
    display: inline-block;
}
.c-list-pre img {
    width: 10px;
    margin: 0 5px;
}
.c-list-pre.down {
    color: #fa5452;
    font-weight: bold;
}
.c-list-pre.down span {
    color: #ffffff;
    font-weight: normal;
    background: #fa5452;
    padding: 0 10px;
    border-radius: 10px;
}
.c-list-pre.up {
    color: #3cc28c;
    font-weight: bold;
}
.c-list-pre.up span {
    color: #ffffff;
    font-weight: normal;
    background: #3cc28c;
    padding: 0 10px;
    border-radius: 10px;
}
.lists, .map {
    height: 410px;
    display: flex;
    flex-direction: column;
}
.lists {
    flex: 1;
    /* width: 380px; */
}
.ls-top {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.ls-title {
    background: #f0f0f0;
    color: #999999;
    display: flex;
}
.ls-title > div {
    flex: 1;
    text-align: center;
}
.ls-con {
    width: 100%;
    max-height: 320px;
    overflow: hidden;
    overflow-y: auto;
}
.ls-con-list {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.ls-con-list > div {
    flex: 1;
}
.list-sort {
    padding: 4px 10px;
    background: #f0f0f0;
    border-radius: 5px;
}
.red {
    color: red;
}
.red-sort {
    background-color: #faeaea;
    color: #cd2324;
}
.map {
    flex: 1;
    padding-left: 100px;
}

.switch-timer{
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
}
.timer-list {
    display: inline-block;
    width: 50px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #cccccc;
}
.timer-list:nth-child(2) {
    border-left: none;
    border-right: none;
}
.timer-list.active {
    background: #7c5ba2;
    color: #ffffff;
}
</style>
