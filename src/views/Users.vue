<template>
  <section class='users'>
    <div class='container'>
      <h1 class="users__title">Пользователи</h1>     
      <div class="users__table table-block clickable-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Дата регистрации</th>
              <th>ФИО</th>
              <th>Баланс</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="user in users" 
              :key="user.id"
              @click="$router.push(`/users/${user.id}`)"
            >
              <td>{{user.id}}</td>
              <td>{{user.regDate}}</td>
              <td>{{user.name}}</td>
              <td>{{user.balance}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'Users',
  components: {

  },
  data() {
    return { 
      users: [
        {id: '211', regDate: '22.09.2020', name: 'Данные не указаны', balance: '1 500 ₽'},
        {id: '213', regDate: '30.03.2020', name: 'Иванов Иван Иванович', balance: '2 500 ₽'},
        {id: '3453', regDate: '02.10.2020', name: 'Петров Петр Петрович', balance: '1 000 ₽'},
        {id: '475', regDate: '22.09.2020', name: 'Данные не указаны', balance: '0 ₽'}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
     @import "@/assets/scss/pages/users";
     th,td{
        width: 25%;
    }
</style>