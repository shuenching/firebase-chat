<template>
  <div class="login">
    <div class="login__form">
      <div class="login__form--row">
        <div class="login__form--row-title">E-mail:</div>
        <el-input
          v-model="email"
          placeholder="請輸入Email"
          class="login__form--row-input"
        ></el-input>
      </div>
      <div class="login__form--row">
        <div class="login__form--row-title">Password:</div>
        <el-input
          v-model="password"
          type="password"
          placeholder="請輸入密碼"
          class="login__form--row-input"
        ></el-input>
      </div>
    </div>
    <div class="login__buttons">
      <el-button
        @click.native="sendLogin"
        class="login__buttons--btn"
        type="primary"
        round
        >登入</el-button
      >
      <el-button class="login__buttons--btn" round>註冊</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions("user", ["login"]),
    sendLogin() {
      let data = { email: this.email, password: this.password };
      this.login(data)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  &__form {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 0.5rem;
    &--row {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-bottom: 0.5rem;
      &-title {
        flex: 30% 0 0;
        text-align: right;
        padding-right: 1rem;
      }
      &-input {
        flex: 60% 0 0;
      }
    }
  }
  &__buttons {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    &--btn {
      flex: 50% 0 0;
    }
  }
}
</style>