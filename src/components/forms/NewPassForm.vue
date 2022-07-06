<template>

    <div class="auth__title display2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Новый пароль</span>
    </div>
    <form class="auth__form">
        <fieldset class='mfg'>
            <label>Новый пароль</label>
            <password-input/>
        </fieldset>
        <button class="auth__btn btn btn-blue">
            Сохранить
        </button>
    </form>
</template>

<script>

export default {
    name: 'NewPassForm',
        components: {
    } 
}
</script>

<style lang="scss">
    
</style>