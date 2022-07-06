<template>
    <div class="admin__table table-block clickable-table">
        <table>
            <thead>
            <tr>
                <th>ID пользователя</th>
                <th>ФИО</th>
                <th>Оплата билета</th>
                <th>Подорожник</th>
                <th>Оплата парковки</th>
            </tr>
            </thead>
            <tbody>
            <tr 
                v-for="(sale, index) in sales" 
                :key="index"
                @click="$router.push(`/users/${sale.userId}`)"
            >
                <td>{{sale.userId}}</td>
                <td>{{sale.name}}</td>
                <td>
                  <svg v-if="sale.ticket" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="#24AE31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="#24AE31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </td>
                <td>
                  <svg v-if="sale.podorojnik" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="#24AE31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="#24AE31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </td>
                <td>
                  <svg v-if="sale.parking" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z" stroke="#24AE31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M9 12L11 14L15 10" stroke="#24AE31" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </td>
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
        {userId: 2312, name: 'Иванов Иван Иванович', ticket: true, podorojnik: false, parking: false},
        {userId: 32, name: 'Иванов Иван Иванович', ticket: false, podorojnik: false, parking: true},
        {userId: 1425, name: 'Иванов Иван Иванович', ticket: false, podorojnik: true, parking: false},
        {userId: 211, name: 'Иванов Иван Иванович', ticket: false, podorojnik: false, parking: true},
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
