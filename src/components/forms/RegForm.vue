<template>

    <div class="auth__title display2">Регистрация</div>
    <form class="auth__form">
        <fieldset class='mfg'>
            <label>Email / Телефон</label>
            <input type='text' placeholder="Введите email / телефон " autocomplete="off"/>
        </fieldset>
        <fieldset class='mfg'>
            <label>Пароль</label>
            <password-input/>
        </fieldset>
        <div class="auth__check check">
            <input type='checkbox' class='checkbox' />
            <label>Я даю согласие на обработку моих персональных данных </label>
        </div>
        <button class="auth__btn btn btn-blue">
            Далее
        </button>
        <button class="auth__reg text-btn btn"
                @click="showAuthModal"
                type="button"
        >
            Вход
        </button>
    </form>
</template>

<script>

export default {
    name: 'RegForm',
        components: {
    } ,
    methods: {
        showAuthModal(){
            this.$emit("showAuthModal")
        }
    }
}
</script>

<style lang="scss">
    
</style>