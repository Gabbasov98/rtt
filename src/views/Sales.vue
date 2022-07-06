<template>
  <section class='admin'>
      <div class='container'>
          <div class='admin__inner'>
            <div class="admin__content">
              <Sort :title="$route.meta.title"/>
              <div class="admin__card">
                <div class="admin__card-title grey-text">Формировать отчет на определенный вид продаж</div>
                <div class="admin__card-select">
                    <my-select 
                    :currentOption="selectCurrent"
                    :selectOptions="selectOptions"
                    @changeSelect="changeSelect"
                    />
                </div>
              </div>
              <router-view/>
            </div>
          </div>
          
      </div>
  </section>
</template>

<script>
import Sort from "@/components/Sort";

export default {
  name: 'Sales',
  components: {
    Sort
  },
  data() {
    return {
      selectCurrent: 'Вид продажи',
      selectOptions: [
        {name: 'Все', value: 1, path: '/sales'},
        {name: 'Парковки', value: 2, path: '/sales/parking'},
        {name: 'Билеты', value: 3, path: '/sales/tickets'},
        {name: 'Подорожник', value: 4, path: '/sales/podorojnik'},
      ]
    }
  },
  methods: {
    changeSelect(option){
      this.$router.replace({path:option.path})
      this.selectCurrent = option.name
    }
  }
}
</script>

<style lang="scss" scoped>
  .admin__content{
    width: 100%;
  }
</style>
