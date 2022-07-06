<template>
    <div class="dialog" 
        v-if="show" 
        @click="hideDialog"
    >
        <div class="dialog__content"
             @click.stop   
        >
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'my-dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }, 
    methods: {
        hideDialog(){
            this.$emit("update:show", false)
        }
    }
}
</script>

<style lang="scss">
    .dialog{
        background: rgba(#262732,.4);
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        position: fixed;display: flex;
        &__content{
            margin: auto;
            padding: 40px 32px;
            background: #FFFFFF;
            box-shadow: 0px 2px 24px rgba(167, 167, 167, 0.25);
            border-radius: 8px;
            width: 407px;
            min-height: 465px;
            max-width: 100%;
        }
    
    }
</style>