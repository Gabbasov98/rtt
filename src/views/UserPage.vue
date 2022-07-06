<template>
  <section class='admin'>
      <div class='container'>
        <div class="breadcrumbs">
          <router-link to="/users" class="breadcrumbs__item">Пользователи</router-link>
          <span class="breadcrumbs__item">{{$route.meta.title}}</span>
        </div>
          <div class='admin__inner'>
            <aside class="admin__sidebar">
              <Sidebar/>
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

import Sidebar from "@/components/userPageComponents/Sidebar";
import Sort from "@/components/Sort";

export default {
  name: 'Home',
  components: {
    Sidebar,
    Sort
  },
}
</script>
