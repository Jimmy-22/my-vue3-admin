<template>
  <div class="navbar">
    <div class="navbar-right">
      <el-dropdown size="medium" split-button type="primary">
        {{ $store.getters.userInfo.username }}
        <template #dropdown>
          <el-dropdown-menu>
            <router-link to="/">
              <el-dropdown-item>首页</el-dropdown-item>
            </router-link>
            <el-dropdown-item @click="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {} from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const logout = () => {
  store.dispatch('user/logout')
}
</script>

<style lang="scss" scoped>
.navbar {
  border: 1px solid blue;
  overflow: hidden;
  height: 50px;
  position: relative;
  &-right {
    position: absolute;
    right: 10px;
    bottom: 0;
  }
}
</style>
