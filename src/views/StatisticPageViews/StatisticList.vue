<template>
    <div class="admin__card">
        <div class="admin__card-title grey-text">Формировать отчет на определенную платежную систему</div>
        <div class="admin__card-select">
            <my-select 
            :currentOption="selectCurrent"
            :selectOptions="selectOptions"
            @changeSelect="changeSelect"
            />
        </div>
    </div>
    <div class="admin__table table-block clickable-table">
        <table>
            <thead>
            <tr>
                <th>Дата пополнения</th>
                <th>Количество транзакций</th>
                <th>Сумма</th>
            </tr>
            </thead>
            <tbody>
            <tr 
                v-for="(withdraw, index) in withdraws" 
                :key="index"
                @click="$router.push(`/statistic/${withdraw.id}`)"
            >
                <td>{{withdraw.date}}</td>
                <td>{{withdraw.quantity}}</td>
                <td>{{withdraw.sum}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
  data() {
    return {
      withdraws: [
        {id:'1', date:'22.09.2020 / 22:00', quantity: '12', sum: '1 500 ₽'},
        {id:'2', date:'22.09.2020 / 22:00', quantity: '12', sum: '600 ₽'},
        {id:'3', date:'22.09.2020 / 22:00', quantity: '12', sum: '100 ₽'},
        {id:'4', date:'22.09.2020 / 22:00', quantity: '21', sum: '1 000 ₽'},
      ],
      selectCurrent: 'Плат. система',
      selectOptions: [
        {name: 'Все', value: 1},
        {name: 'Visa', value: 2},
        {name: 'Mastercard', value: 3},
        {name: 'МИР', value: 4},
      ]
    }
  },
  methods: {
    changeSelect(option){
      this.selectCurrent = option.name
    }
  }
}
</script>

<style lang="scss" scoped>
    th,td{
        width: calc(100% / 3);
    }
      tbody {
        tr {
            cursor: pointer;
        }
    }
</style>
