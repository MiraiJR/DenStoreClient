<template>
  <div class="screen">
    <div class="auth">
      <h1 class="auth__title">LOGIN</h1>
      <div class="auth__notification" :class="{ error: !this.state.isSuccess }">
        {{ this.state.message }}
      </div>
      <div class="auth__username">
        <input
          type="text"
          name="username"
          placeholder="Username"
          v-model="user.username"
          :style="[!this.state.isSuccess ? 'border: 1px solid red;' : '']"
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
        <div class="-link-forgetPassword">Forget password?</div>
        <router-link to="/register">Register</router-link>
      </div>
      <button type="submit" @click="onSubmit" class="auth__button">
        Login
      </button>

      <button class="btn btn-primary" @click="loginWithFb">Facebook</button>
    </div>
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import axios from "axios";
export default {
  props: {
    haha: {
      type: String,
      default: "oke",
    },
  },
  data() {
    return {
      isShowPassword: false,
      user: {
        username: "",
        password: "",
      },
      state: {
        isSuccess: true,
        message: "",
      },
    };
  },
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:5000/api/auth/login", this.user)
        .then((res) => {
          if (res.data.success) {
            this.$router.push("/");
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
        this.$el.querySelector(".auth__password input").type = "text";
        this.$el
          .querySelector(".auth__password > i")
          .classList.remove("fa-eye-slash");
        this.$el.querySelector(".auth__password > i").classList.add("fa-eye");
      } else {
        this.$el.querySelector(".auth__password input").type = "password";
        this.$el
          .querySelector(".auth__password > i")
          .classList.remove("fa-eye");
        this.$el
          .querySelector(".auth__password > i")
          .classList.add("fa-eye-slash");
      }
    },
    loginWithFb() {
      const firebaseConfig = {
        apiKey: "AIzaSyCG_922BctUyfXttIJSUax0DALwchvfLBQ",
        authDomain: "databaseweb1.firebaseapp.com",
        databaseURL: "https://databaseweb1-default-rtdb.firebaseio.com",
        projectId: "databaseweb1",
        storageBucket: "databaseweb1.appspot.com",
        messagingSenderId: "725643283647",
        appId: "1:725643283647:web:b1c2c8c96189a5a5848a0a",
        measurementId: "G-0P44Q32H1P",
      };

      // Initialize Firebase
      const firebaseApp = initializeApp(firebaseConfig);
      const auth = getAuth(firebaseApp);
      const provider = new FacebookAuthProvider();
      console.log(provider);
      signInWithPopup(auth, provider)
        .then((result) => {
          // The signed-in user info.
          const user = result.user;
          // This gives you a Facebook Access Token. You can use it to access the Facebook API.
          const credential = FacebookAuthProvider.credentialFromResult(result);
          // const accessToken = credential.accessToken;
          console.log(user);
          console.log(credential);
          // ...
        })
        .catch((error) => {
          // // Handle Errors here.
          // const errorCode = error.code;
          const errorMessage = error.message;
          // // The email of the user's account used.
          // const email = error.customData.email;
          // // The AuthCredential type that was used.
          // const credential = FacebookAuthProvider.credentialFromError(error);
          console.log(error, errorMessage);
        });
    },
  },
  created() {},
};
</script>
