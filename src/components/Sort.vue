<template>
    <div class="admin__top">
        <div class="admin__title display2">{{title}}</div>
        
        <div class="admin__sort">
            <div class="admin__sort-date">
                <input 
                    v-model="date" 
                    type="text" ref="dateRange" placeholder="Выберите период">
            </div>
            <button 
                @click="changeDate"
                class="admin__sort-btn btn btn-blue">Сформировать</button>
        </div>
    </div>
</template>

<script>
// import moment from 'moment';
import { Russian } from "flatpickr/dist/l10n/ru.js"
import flatpickr from "flatpickr";


export default {
  name: 'Sort',
  components: {
  },
  props:['title'],
  data() {
    return { 
        date: ''    
    }
  },
  methods: {
    changeDate(){
        console.log(this.date);
    }
  },
  mounted() {
    let dateInput = document.querySelector(".admin__sort-date input")
    flatpickr(dateInput, {
        mode: "range",
        dateFormat: "d.m.Y",
        monthSelectorType: "static",
        yearSelectorType: "static",
        "locale": Russian,
        prevArrow: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="#302F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
        nextArrow: `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 6L15 12L9 18" stroke="#302F2F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        `,
    });
  }
}
</script>

<style lang="scss">

</style>