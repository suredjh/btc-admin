<template>
    <div>
        <div class="top">
            <div :class="['tab-btn', {'active': ctype == 1}]" @click="ctype = 1">项目</div>
            <div :class="['tab-btn', {'active': ctype == 2}]" @click="ctype = 2">DAPP</div>
        </div>
        <project v-if="ctype == 1" />
        <dapp v-else />
    </div>
</template>

<script>
import project from './components/p';
import dapp from './components/dapp';
export default {
    name: 'home',
    components: {
        project,
        dapp
    },
    data () {
        return {
            ctype: 1
        }
    }
}
</script>
<style lang="scss" scoped>
.top {
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
}
.tab-btn {
    width: 100px;
    height: 40px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    // box-shadow: -10px 0 5px #cccccc;
    &:hover {
        color: red;
    }
    &.active {
        background: #eb4553;
        color: #ffffff;
    }
}
</style>

