<template>
  <el-card>
    <el-table :data="allRoles" style="width: 100%">
      <el-table-column prop="id" label="序号" min-width="50" />
      <el-table-column prop="title" label="角色" min-width="100" />
      <el-table-column prop="describe" label="描述" min-width="400" />
      <el-table-column prop="action" label="操作" min-width="200">
        <el-button type="primary" size="mini">分配权限</el-button>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { ref } from 'vue'
import { roleList } from '@/api/role'
const allRoles = ref([])

const getRoleList = async () => {
  allRoles.value = await roleList()
}
const res = getRoleList()
console.log(res)
</script>

<style lang="scss" scoped></style>
