<template>

    <div class="auth__title display2">Войдите</div>
    <div class="auth__desc grey-text">Введите данные, чтобы войти в кабинет</div>
    <form class="auth__form">
        <fieldset class='mfg'>
            <label>Email / Телефон</label>
            <input type='text' autocomplete="off" placeholder="Введите email / телефон "/>
        </fieldset>
        <fieldset class='mfg'>
            <label>Пароль</label>
            <password-input/>
        </fieldset>
        <button type="button" class="auth__forgot grey-text">Забыли пароль?</button>
        <button class="auth__btn btn btn-blue">
            Вход
        </button>
        <button class="auth__reg text-btn btn"
                @click="showRegModal"
                type="button"
        >
            Регистрация
        </button>
    </form>
</template>

<script>

export default {
    name: 'LoginForm',
        components: {
    } ,
    methods: {
        showRegModal(){
            this.$emit("showRegModal")
        }
    }
}
</script>

<style lang="scss">
    
</style>