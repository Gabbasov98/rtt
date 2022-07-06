<template>
    <div class="admin__table table-block clickable-table">
        <table>
            <thead>
            <tr>
                <th>Дата пополнения</th>
                <th>Кол-во транзакций за парковки</th>
            </tr>
            </thead>
            <tbody>
            <tr 
                v-for="(sale, index) in sales" 
                :key="index"
                @click="$router.push(`/sales/parking/${sale.id}`)"
            >
                <td>{{sale.date}}</td>
                <td>{{sale.parkingQuantity}}</td>
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
        {id: 1, date:'22.09.2020 / 22:00', parkingQuantity: 12},
        {id: 2, date:'22.09.2020 / 22:00', parkingQuantity: 21},
        {id: 3, date:'22.09.2020 / 22:00', parkingQuantity: 22},
        {id: 4, date:'22.09.2020 / 22:00', parkingQuantity: 32},
      ],
    }
  },
  mounted(){
    console.log(this.$route);
  }
}
</script>

<style lang="scss" scoped>
    th,td{
        width: 50%;
    }
</style>
