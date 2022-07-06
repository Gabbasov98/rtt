<template>
    <div class="admin__info">
        <div class="admin__info-title grey-text">Сумма затрат на парковку за весь период пользования</div>
        <div class="admin__info-sum">16 500 ₽</div>
    </div>

    <div class="admin__table table-block">
        <table>
          <thead>
            <tr>
              <th>Дата / Время транзакции</th>
              <th>ID парковочной зоны</th>
              <th>Время стоянки</th>
              <th>Сумма</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(pay, index) in parkingPays" 
              :key="index"
            >
              <td>{{pay.date}}</td>
              <td>{{pay.parkingId}}</td>
              <td>{{pay.time}}</td>
              <td>{{pay.sum}}</td>
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
      parkingPays: [
        {date:'22.09.2020 / 22:00', parkingId: '1242', time: '00:15', sum: '1 500 ₽'},
        {date:'22.09.2020 / 22:00', parkingId: '1242', time: '00:15', sum: '600 ₽'},
        {date:'22.09.2020 / 22:00', parkingId: '1242', time: '00:15', sum: '100 ₽'},
        {date:'22.09.2020 / 22:00', parkingId: '1242', time: '00:15', sum: '1 000 ₽'},
      ]
    }
  },
}

</script>

<style lang="scss" scoped>
    th,td{
        width: 25%;
    }
</style>