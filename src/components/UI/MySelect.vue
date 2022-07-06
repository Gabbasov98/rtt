<template>
    <div 
        class="my-select"
        :class="{ 'open': open }"
    >
        <div 
            class="my-select__current"
            @click="showSelect"
        >
            <span>{{currentOption}}</span>
            <span class="my-select__arrow">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.5">
                        <path d="M18 9L12 15L6 9" stroke="#302F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                </svg>
            </span>
        </div>
        <div class="my-select__dropdown">
            <div 
                class="my-select__option"
                v-for="option in selectOptions"
                :key="option.value"
                :class="{ 'my-select__option--active': option.value === activeOption}"
                @click="selectOption(option)"
            >
                {{option.name}}
            </div>
        </div>

        <div 
            class="my-select__bg"
            @click="hideSelect"
            v-if="open"
        ></div>
    </div>
</template>

<script>
export default {
    name: 'my-select',
    props: {
        currentOption: String,
        selectOptions: Array
    },
    data(){
        return {
            open: false,
            activeOption: '',
        }
    },
    methods: {
        showSelect(){
            this.open = true
        },
        hideSelect(){
            this.open = false
        },
        selectOption(option){
            this.activeOption = option.value
            this.hideSelect()
            this.$emit("changeSelect",option)
        }
    },
}
</script>

<style lang="scss" scoped: ;>
    .my-select{
        min-width: 100%;
        position: relative;
        &.gray{
            .my-select{
                &__option,
                &__current{
                    background: #F3F3F3;
                }
            }
        }
        &__bg{
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: 3;
        }
        &__current{
            height: 40px;
            background: #FFFFFF;
            border-radius: 8px;
            padding: 0 16px;
            display: flex;
            align-items:center;
            justify-content: space-between;
            font-size: 16px;
            line-height: 130%;
            cursor: pointer;
            white-space: nowrap;
        }
        &__arrow{
            display: flex;
            align-items:center;
            margin-left: 5px;
        }
        &__dropdown{
            z-index: 5;
            width: 100%;
            top: 100%;
            left: 0;
            position: absolute;
            opacity: 0;
            pointer-events: none;
            transition:all .225s;
        }
        &__option{
            background: #FFFFFF;
            box-shadow: 0px 2px 24px rgba(167, 167, 167, 0.25);
            border-radius: 8px;
            height: 40px;
            display: flex;
            align-items:center;
            padding: 0 16px;
            margin-top: 2px;
            &:hover,
            &--active{
                cursor: pointer;
                background: #0077FF !important;
                color: #fff;
            }
            &--active{
                pointer-events: none;
            }
        }
        &.open{
            .my-select{
                &__dropdown{
                    opacity: 1;
                    pointer-events: unset;
                }
            }
        }
    }
</style>