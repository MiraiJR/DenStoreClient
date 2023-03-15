<template>
  <div class="screen">
    <div class="auth">
      <h1 class="auth__title">REGISTER</h1>
      <div
        class="auth__notification"
        :class="[this.state.isSuccess ? 'success' : 'fail']"
      >
        {{ this.state.message }}
      </div>
      <div class="auth__username">
        <input
          type="text"
          name="username"
          placeholder="Username"
          v-model="user.username"
        />
        <i class="fa-solid fa-user -icon-modify"></i>
      </div>
      <div class="auth__password">
        <input
          type="password"
          name="password"
          placeholder="Password"
          v-model="user.password"
        />
        <i
          class="fa-solid fa-eye-slash -icon-modify"
          @click="onShowPassowrd"
        ></i>
      </div>
      <div class="auth__link">
        <div class="-link-forgetPassword">Did you had an account?</div>
        <router-link to="/login">Login</router-link>
      </div>
      <button type="submit" class="auth__button" @click="onSubmit">
        Register
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isShowPassword: false,
      user: {
        username: "",
        password: "",
      },
      state: {
        isSuccess: false,
        message: "",
      },
    };
  },
  methods: {
    onSubmit() {
      axios
        .post(
          "https://denstore-server.onrender.com/api/auth/register",
          this.user
        )
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/login");
          }
          this.state.isSuccess = res.data.success;
          this.state.message = res.data.message;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onShowPassowrd() {
      this.isShowPassword = !this.isShowPassword;

      if (this.isShowPassword) {
        this.$el.querySelector(".auth__password .-icon-modify").style.color =
          "#ccc";
        this.$el.querySelector(".auth__password input").type = "text";
      } else {
        this.$el.querySelector(".auth__password .-icon-modify").style.color =
          "black";
        this.$el.querySelector(".auth__password input").type = "password";
      }
    },
  },
};
</script>
