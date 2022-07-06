<template>
    <div class="admin__table table-block clickable-table">
        <table>
            <thead>
            <tr>
                <th>Дата пополнения</th>
                <th>Кол-во транзакций за парковки</th>
                <th>Кол-во транзакций за билеты</th>
                <th>Кол-во транзакций Подорожник</th>
                <th>Общее кол-во транзакций</th>
            </tr>
            </thead>
            <tbody>
            <tr 
                v-for="(sale, index) in sales" 
                :key="index"
                @click="$router.push(`/sales/${sale.id}`)"
            >
                <td>{{sale.date}}</td>
                <td>{{sale.parkingQuantity}}</td>
                <td>{{sale.ticketsQuantity}}</td>
                <td>{{sale.roadQuantity}}</td>
                <td>{{sale.parkingQuantity + sale.ticketsQuantity + sale.roadQuantity}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
  data() {
    return {
      sales: [
        {id: 1, date:'22.09.2020 / 22:00', parkingQuantity: 12, ticketsQuantity: 34, roadQuantity: 23},
        {id: 2, date:'22.09.2020 / 22:00', parkingQuantity: 21, ticketsQuantity: 54, roadQuantity: 12},
        {id: 3, date:'22.09.2020 / 22:00', parkingQuantity: 22, ticketsQuantity: 12, roadQuantity: 21},
        {id: 4, date:'22.09.2020 / 22:00', parkingQuantity: 32, ticketsQuantity: 23, roadQuantity: 32},
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
    th,td{
        width: 20%;
    }
</style>
