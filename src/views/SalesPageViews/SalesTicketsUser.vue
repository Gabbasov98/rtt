<template>
    <div class="admin__table table-block clickable-table">
        <table>
            <thead>
            <tr>
                <th>ID пользователя</th>
                <th>ФИО</th>
            </tr>
            </thead>
            <tbody>
            <tr 
                v-for="(user, index) in users" 
                :key="index"
                @click="$router.push(`/users/${user.userId}`)"
            >
                <td>{{user.userId}}</td>
                <td>{{user.userName}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
  data() {
    return {
      users: [
        {userId: '232', userName: 'Иванов Иван Иванович'},
        {userId: '152', userName: 'Иванов Иван Иванович'},
        {userId: '281', userName: 'Иванов Иван Иванович'},
        {userId: '287', userName: 'Иванов Иван Иванович'},
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
    th,td{
        width: 50%;
    }
</style>
