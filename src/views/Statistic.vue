<template>
  <section class='admin'>
      <div class='container'>
          <div class='admin__inner'>
            <aside class="admin__sidebar">
              <div class="admin-sidebar">
                <div class="admin-sidebar__info">
                  <div class="admin-sidebar__info-item">
                      <div class="admin-sidebar__info-title grey-text">Сумма пополнений за весь период пользования</div>
                      <div class="admin-sidebar__info-desc display3">3 500 ₽</div>
                  </div>
                  <div class="admin-sidebar__info-item">
                      <div class="admin-sidebar__info-title grey-text">ID</div>
                      <div class="admin-sidebar__info-desc display3">263</div>
                  </div>
                  <div class="admin-sidebar__info-item">
                      <div class="admin-sidebar__info-title grey-text">Баланс</div>
                      <div class="admin-sidebar__info-desc display3">1 500 ₽</div>
                  </div>
                </div>
              </div>
            </aside>
            <div class="admin__content">
              <Sort :title="$route.meta.title"/>
              <router-view/>
            </div>
          </div>
      </div>
  </section>
</template>

<script>
import Sort from "@/components/Sort";

export default {
  name: 'Statistic',
  components: {
    Sort,
  },
  data() {
   
  },
}
</script>

