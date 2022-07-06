<template>

    <div class="auth__title display2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 18L9 12L15 6" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Код подтверждения</span>
    </div>
    <form class="auth__form">
        <fieldset class='mfg'>
            <label>Код из SMS / Email</label>
            <input 
                type='number' maxlength="4" 
                placeholder="_ _ _ _" autocomplete="off"
                v-model="code"
                />
        </fieldset>
        <div class="auth__code-hint">
            Код отправили на <strong>+7 919 228 5647</strong>
        </div>
        <button type="button" class="auth__code-change blue-text">Изменить</button>
        <button class="auth__btn btn btn-blue">
            Готово
        </button>
        <div class="auth__code-hint auth__code-hint--mt16">
            Повторно отпраувить через: <strong>20</strong>
        </div>
    </form>
</template>

<script>

export default {
    name: 'CodeForm',
        components: {
    } ,
    data() {
        return {
            code: null
        }
    },
    methods: {
        
    },
    watch: {
        code(){
            if(this.code > 9999){
                let newCode = this.code.toString()
                newCode = newCode.substring(0, newCode.length-1);
                this.code = +newCode
            }
        }
    }
}
</script>

<style lang="scss">
    
</style>