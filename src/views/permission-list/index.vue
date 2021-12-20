<template>
  <div>权限列表页面</div>
</template>

<script setup>
import { permissionList } from '@/api/permission'
import { ref } from 'vue'

const allPermission = ref([])
const getPermissionList = async () => {
  allPermission.value = await permissionList()
}
getPermissionList()
</script>

<style lang="scss" scoped></style>
