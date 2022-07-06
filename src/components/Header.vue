<template>
  <header class="header">
    <div class="container">
        <div 
          v-if="$store.state.login"
          class="header__inner" >
            <a href="" class="header__logo">
                <img src="@/assets/img/logo.png" alt="">
            </a>
            <nav class="nav">
                <router-link to="/users" class="nav__link">Пользователи</router-link>
                <router-link to="/statistic" class="nav__link">Статистика выхода средств</router-link>
                <router-link to="/sales" class="nav__link">Продажи</router-link>
                <router-link to="/settings" class="nav__link">Настройки</router-link>
            </nav>
            <div class="header__admin">Admin Panel</div>
        </div>

        <div class="header__inner" 
             v-else>
            <a href="" class="header__logo">
                <img src="@/assets/img/logo.png" alt="">
            </a>

            <div class="header__buttons">
              <button 
                class="header__btn btn btn-blue"
                @click="loginModalShow = true"
              >
                Вход
              </button>
            </div>
        </div>
    </div>
  </header>

  <my-dialog v-model:show="loginModalShow">
    <LoginForm 
      @showRegModal="openRegModal"
    />
  </my-dialog>

  <my-dialog v-model:show="regModalShow">
    <RegForm 
      @showAuthModal="openLoginModal"
    />
  </my-dialog>

  <my-dialog v-model:show="codeModalShow">
    <CodeForm/>
  </my-dialog>

  <my-dialog v-model:show="recoverModalShow">
    <PassRecoverForm/>
  </my-dialog>

  <my-dialog v-model:show="NewPassModalShow">
    <NewPassForm/>
  </my-dialog>
</template>

<script>

import LoginForm from "@/components/forms/LoginForm";
import RegForm from "@/components/forms/RegForm";
import CodeForm from "@/components/forms/CodeForm";
import PassRecoverForm from "@/components/forms/PassRecoverForm";
import NewPassForm from "@/components/forms/NewPassForm";

export default {
  name: 'Header',
  components: {
    LoginForm,
    RegForm,
    CodeForm,
    PassRecoverForm,
    NewPassForm
  },
  data() {
    return { 
      test: true,
      loginModalShow: false,
      regModalShow: false,
      codeModalShow: false,
      recoverModalShow: false,
      NewPassModalShow: false,
    }
  },
  methods: {
    openRegModal(){
      this.closeModals()
      this.regModalShow = true
    },
    openLoginModal(){
      this.closeModals()
      this.loginModalShow = true
    },
    closeModals(){
      this.loginModalShow = false
      this.regModalShow = false
    }
  }
}
</script>

<style lang="scss">
     @import "@/assets/scss/layout/_header";
</style>