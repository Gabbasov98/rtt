<template>
  <section class='settings'>
      <div class='container'>
        <div class="settings__title display2">Настройки</div>
        <div class='settings__block'>
          <div class="settings__subtitle display3">Изменить пароль</div>
          <div class="settings__change-pass">
            <fieldset class='mfg'>
                <label>Пароль</label>
                <password-input :placeholder="'Введите старый пароль'"/>
            </fieldset>
            <fieldset class='mfg'>
                <label>Пароль</label>
                <password-input :placeholder="'Введите новый пароль'"/>
            </fieldset>
            <fieldset class='mfg'>
                <label>Пароль</label>
                <password-input :placeholder="'Подтвердите новый пароль'"/>
            </fieldset>
            <button class="settings__btn btn btn-blue">Сохранить</button>
          </div>
        </div>

        <div class='settings__block set-balance'>
          <div class="settings__subtitle display3">Установить баланс</div>
          <div class="settings__set-balance">
            <div class="settings__set-balance-left">
              <div class="settings__set-balance-title grey-text">Баланс</div>
              <div class="settings__set-balance-desc display3">11 500 ₽</div>
            </div>
            <div class="settings__set-balance-right">
              <fieldset class='mfg'>
                <input type="text" placeholder="Установить новый баланс"/>
                <span class="mfg__currency grey-text">₽</span>
              </fieldset>
              <button class="settings__btn btn btn-blue">Сохранить</button>
            </div>
          </div>
        </div>

        <div class='settings__block'>
          <div class="settings__subtitle display3">Установить код подтверждения, для смены ролей, статусов  и удаления пользователей</div>
          <div class="settings__code">
            <fieldset class='mfg'>
                <label>Подтверждение</label>
                <input type="text" placeholder="Укажите код подтверждения">
            </fieldset>
            <button class="settings__btn btn btn-blue">Сохранить</button>
          </div>
        </div>

        <div class="users">
          <div class="users__title">Пользователи</div>
          <div class="users-card">
            <div class="users-card__info">
              <div class="users-card__info-item">
                <div class="users-card__info-title grey-text">ID</div>
                <div class="users-card__info-desc">263</div>
              </div>
              <div class="users-card__info-item">
                <div class="users-card__info-title grey-text">Login</div>
                <div class="users-card__info-desc">alexender_209</div>
              </div>
            </div>

            <div class="users-card__selects">
              <div class="users-card__select">
                <my-select class="gray"
                  :currentOption="roleSelectCurrent"
                  :selectOptions="roleSelectOptions"
                  @changeSelect="changeRoleSelect"
                />
              </div>
              <div class="users-card__select">
                <my-select class="gray"
                  :currentOption="statusSelectCurrent"
                  :selectOptions="statusSelectOptions"
                  @changeSelect="changeStatusSelect"
                />
              </div>
            </div>

            <div class="users-card__buttons">
              <button class="users-card__btn btn btn-gray">Удалить</button>
              <button class="users-card__btn btn btn-blue">Сохранить</button>
            </div>
          </div>
        </div>
      </div>

      <my-dialog v-model:show="codeModalShow">
        <div class="auth__title display2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 18L9 12L15 6" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Код подтверждения</span>
        </div>
        <form class="auth__form">
            <fieldset class='mfg'>
              <label>Код из SMS / Email</label>
              <input 
                type='number' maxlength="4" 
                placeholder="_ _ _ _" autocomplete="off"
                v-model="code"
                />
            </fieldset>
            <button class="auth__btn btn btn-blue">
                Готово
            </button>
        </form>
      </my-dialog>
  </section>
</template>

<script>

export default {
  name: 'Settings',
  components: {

  },
  data() {
    return {
      codeModalShow: false,
      roleSelectCurrent: 'Роль',
      roleSelectOptions: [
        {name: 'Роль1', value: 1},
        {name: 'Роль2', value: 2},
        {name: 'Роль3', value: 3}
      ],
      statusSelectCurrent: 'Статус',
      statusSelectOptions: [
        {name: 'Статус1', value: 1},
        {name: 'Статус2', value: 2},
        {name: 'Статус3', value: 3}
      ],
    }
  },
  methods: {
    changeRoleSelect(option){
      this.roleSelectCurrent = option.name
    },
    changeStatusSelect(option){
      this.statusSelectCurrent = option.name
    },
  }
}
</script>

<style lang="scss" scoped>
  @import "@/assets/scss/pages/settings";
  
</style>