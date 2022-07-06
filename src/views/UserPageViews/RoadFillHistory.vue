<template>
    <div class="admin__info">
        <div class="admin__info-title grey-text">Сумма пополнений за весь период пользования</div>
        <div class="admin__info-sum">16 500 ₽</div>
    </div>

    <div class="admin__card">
        <div class="admin__card-title grey-text">Формировать отчет на определенную карту</div>
        <div class="admin__card-select">
          <my-select 
            :currentOption="cardSelectCurrent"
            :selectOptions="cardSelectOptions"
            @changeSelect="changeSelect"
          />
        </div>
    </div>

    <div class="admin__table table-block">
        <table>
          <thead>
            <tr>
              <th>Дата / Время пополнения</th>
              <th>Метод пополнения</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(fill, index) in fills" 
              :key="index"
            >
              <td>{{fill.date}}</td>
              <td>{{fill.method}}</td>
              <td>{{fill.sum}}</td>
            </tr>
          </tbody>
        </table>
    </div>
</template>

<script>

export default {
    components: {
        
    },  
    data() {
      return { 
        fills: [
          {date:'22.09.2020 / 22:00', method: 'Карта', sum: '1 500 ₽'},
          {date:'22.09.2020 / 22:00', method: 'Карта', sum: '600 ₽'},
          {date:'22.09.2020 / 22:00', method: 'U-Money', sum: '100 ₽'},
          {date:'22.09.2020 / 22:00', method: 'Карта', sum: '1 000 ₽'},
        ],
        cardSelectCurrent: 'Карты',
        cardSelectOptions: [
          {name: 'Все', value: 1},
          {name: '•••• •••• 3536 7387', value: 2},
          {name: '•••• •••• 3677 7387', value: 3},
        ]
      }
    },
    methods: {
      changeSelect(option){
        this.cardSelectCurrent = option.name
      }
    }
}

</script>

<style lang="scss" scoped>
    th,td{
        width: calc(100% / 3);
    }
</style>