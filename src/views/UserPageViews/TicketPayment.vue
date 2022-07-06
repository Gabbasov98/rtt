<template>
    <div class="admin__info">
        <div class="admin__info-title grey-text">Сумма затрат на билеты за весь период пользования</div>
        <div class="admin__info-sum">3 500 ₽</div>
    </div>

    <div class="admin__tabs">
      <div 
        class="admin__tab"
        :class="{ 'admin__tab--active': currentTab==='available' }"
        @click="currentTab='available'"
      >
        Действующие
      </div>
      <div 
        class="admin__tab"
        :class="{ 'admin__tab--active': currentTab==='notAvailable' }"
        @click="currentTab='notAvailable'"
      >
        Не действующие
      </div>
    </div>

    <div class="admin__table table-block">
        <table 
          v-if="currentTab==='available'"
          class="table1"
        >
          <thead>
            <tr>
              <th>Дата / Время транзакции</th>
              <th>Сумма</th>
              <th>QR</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(transaction, index) in availableTransactions" 
              :key="index"
            >
              <td>{{transaction.date}}</td>
              <td>{{transaction.sum}}</td>
              <td>
                <button 
                  class="show-qr"
                  @click="showQr(transaction.qr)"
                >
                  <img src="@/assets/img/qr2.svg" alt="">
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <table 
          v-if="currentTab==='notAvailable'"
          class="table2"
        >
          <thead>
            <tr>
              <th>Дата / Время транзакции</th>
              <th>Дата / Время использования</th>
              <th>Сумма</th>
              <th>QR</th>
            </tr>
          </thead>
          <tbody>
            <tr 
              v-for="(transaction, index) in notAvailableTransactions" 
              :key="index"
            >
              <td>{{transaction.date}}</td>
              <td>{{transaction.date2}}</td>
              <td>{{transaction.sum}}</td>
              <td>
                <button 
                  class="show-qr"
                  @click="showQr(transaction.qr)"
                >
                  <img src="@/assets/img/qr2.svg" alt="">
                </button>
              </td>
            </tr>
          </tbody>
        </table>
    </div>

    <div class="qr-modal" 
      v-if="qrImg"
      @click="qrImg=''"
    >
      <div 
        class="qr-modal__content"
        @click.stop
      >
        <button 
          class="qr-modal__close"
          @click="qrImg=''"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.2">
              <path d="M13.5 4.5L4.5 13.5" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.5 4.5L13.5 13.5" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
          </svg>
        </button>
        <div class="qr-modal__img">
          <img :src="require(`@/assets/img/${qrImg}`)" alt="">
        </div>
      </div>
    </div>
</template>

<script>

export default {
  metaInfo: {
      title: 'About Us'
  },
  components: {
  
  },
  data() {
    return { 
      availableTransactions: [
          {date:'22.09.2020 / 22:00', sum: '1 500 ₽', qr: 'qr.png'},
          {date:'22.09.2020 / 22:00', sum: '600 ₽', qr: 'qr.png'},
          {date:'22.09.2020 / 22:00', sum: '100 ₽', qr: 'qr.png'},
          {date:'22.09.2020 / 22:00', sum: '1 000 ₽', qr: 'qr.png'},
      ],
      notAvailableTransactions: [
          {date:'22.09.2020 / 22:00', date2:'22.09.2020 / 22:00', sum: '1 500 ₽', qr: 'qr.png'},
          {date:'22.09.2020 / 22:00', date2:'22.09.2020 / 22:00', sum: '600 ₽', qr: 'qr.png'},
          {date:'22.09.2020 / 22:00', date2:'22.09.2020 / 22:00', sum: '100 ₽', qr: 'qr.png'},
          {date:'22.09.2020 / 22:00', date2:'22.09.2020 / 22:00', sum: '1 000 ₽', qr: 'qr.png'},
      ],
      qrImg: '',
      currentTab: 'available',
    }
  },
  methods: {
    showQr(qr){
      this.qrImg = qr
    }
  },
}

</script>

<style lang="scss" scoped>
    .table1 th,td{
        width: calc(100% / 3);
    }
    .table2 th,td{
        width: 25%;
    }
    .qr-modal{
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(#262732,.4);
        display: flex;
        &__content{
            margin: auto;
            width: 410px;
            background: #FFFFFF;
            box-shadow: 0px 2px 24px rgba(167, 167, 167, 0.25);
            border-radius: 8px;
            padding: 40px 32px;
            position: relative;
        }
        &__close{
          position: absolute;
          top: 15px;
          right: 15px;
          &:hover{
            g{
              opacity: 1;
            }
          }
        }
        &__img{
          img{
            width: 100%;
            display: block;
          }
        }
    }
</style>