<template>
  <div class="wrapper">
    <el-form
      class="wrapper-form"
      :model="loginForm"
      :rules="loginRules"
      ref="loginFormRef"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon="user" />
        </span>
        <el-input
          placeholder="username"
          name="username"
          type="text"
          v-model="loginForm.username"
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon="password" />
        </span>
        <el-input
          placeholder="password"
          name="password"
          v-model="loginForm.password"
          :type="pwdType"
        ></el-input>
        <span class="show-pwd">
          <svg-icon
            :icon="pwdType === 'password' ? 'eye' : 'eye-open'"
            @click="onchangePwdType"
          />
        </span>
      </el-form-item>
      <el-button
        type="primary"
        style="width: 100%; margin-bottom: 30px"
        :loading="loading"
        @click="handleLogin"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { validatePassword } from './rules'
import { useStore } from 'vuex'
const loginForm = ref({
  username: 'super-admin',
  password: '123456'
})
const loginRules = ref({
  username: [
    {
      required: true,
      trigger: 'blur',
      message: '用户名为必填项'
    }
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    }
  ]
})

const pwdType = ref('password')
const onchangePwdType = () => {
  if (pwdType.value === 'password') {
    pwdType.value = 'text'
  } else {
    pwdType.value = 'password'
  }
}

const loginFormRef = ref(null)
const loading = ref(false)
const store = useStore()
const handleLogin = () => {
  loginFormRef.value.validate((valid) => {
    if (!valid) return
    loading.value = true
    store
      .dispatch('user/login', loginForm.value)
      .then(() => {
        loading.value = false
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
      })
  })
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.wrapper {
  width: 100%;
  min-height: 100%;
  background-color: $bg;
  overflow: hidden;
  &-form {
    position: relative;
    width: 520px;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid ragb(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
