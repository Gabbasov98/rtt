<template>
    <div class="admin-sidebar admin-sidebar--full">
        <div class="admin-sidebar__info">
            <div class="admin-sidebar__info-item">
                <div class="admin-sidebar__name display3">Иванов Иван Иванович</div>
                <div class="admin-sidebar__phone admin-sidebar__info-title grey-text">+7 938-365-85-74</div>
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
        <div class="admin-sidebar__links">
            <router-link :to="`/users/${$route.params.id}`" class="admin-sidebar__link">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.4168 4.58334C16.0418 4.58334 14.8502 5.86667 14.6668 6.41667C11.4585 5.04167 4.5835 6.14167 4.5835 11C4.5835 12.65 4.5835 13.75 6.41683 15.125V18.3333H10.0835V16.5H12.8335V18.3333H16.5002V14.6667C17.4168 14.2083 18.0585 13.75 18.3335 12.8333H20.1668V9.16667H18.3335C18.3335 8.25 17.8752 7.79167 17.4168 7.33334V4.58334Z" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M1.8335 8.25V9.16667C1.8335 10.175 2.6585 11 3.66683 11H4.5835" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>История пополнения баланса</span>
            </router-link>
            <router-link :to="`/users/${$route.params.id}/ticket`" class="admin-sidebar__link">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.75 13.75V15.5833C2.75 16.0696 2.94315 16.5359 3.28697 16.8797C3.63079 17.2235 4.0971 17.4167 4.58333 17.4167H17.4167C17.9029 17.4167 18.3692 17.2235 18.713 16.8797C19.0568 16.5359 19.25 16.0696 19.25 15.5833V13.75M2.75 8.24999V6.41666C2.75 5.93043 2.94315 5.46412 3.28697 5.1203C3.63079 4.77648 4.0971 4.58333 4.58333 4.58333H17.4167C17.9029 4.58333 18.3692 4.77648 18.713 5.1203C19.0568 5.46412 19.25 5.93043 19.25 6.41666V8.24999H2.75Z" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.25 13.75C18.5207 13.75 17.8212 13.4603 17.3055 12.9445C16.7897 12.4288 16.5 11.7293 16.5 11C16.5 10.2707 16.7897 9.57118 17.3055 9.05546C17.8212 8.53973 18.5207 8.25 19.25 8.25" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.75 13.75C3.47935 13.75 4.17882 13.4603 4.69454 12.9445C5.21027 12.4288 5.5 11.7293 5.5 11C5.5 10.2707 5.21027 9.57118 4.69454 9.05546C4.17882 8.53973 3.47935 8.25 2.75 8.25" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.9165 4.58333V6.41666" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.9165 15.5833V17.4167" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11.9165 10.0833V11.9167" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Транзакции оплат билета</span>
            </router-link>
            <router-link :to="`/users/${$route.params.id}/parking`" class="admin-sidebar__link">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.66797 13.7507C3.66797 13.7507 4.58464 12.834 7.33463 12.834C10.0846 12.834 11.918 14.6673 14.668 14.6673C17.418 14.6673 18.3346 13.7507 18.3346 13.7507V2.75065C18.3346 2.75065 17.418 3.66732 14.668 3.66732C11.918 3.66732 10.0846 1.83398 7.33463 1.83398C4.58464 1.83398 3.66797 2.75065 3.66797 2.75065V13.7507Z" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M3.66797 20.1667V13.75" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Транзакции оплат парковки</span>
            </router-link>
            <router-link :to="`/users/${$route.params.id}/road`" class="admin-sidebar__link">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.75 2.75V7.33333H7.33333" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.79583 11.9173C2.99888 13.7559 3.81398 15.473 5.11022 16.7928C6.40646 18.1125 8.10863 18.9583 9.94335 19.1943C11.7781 19.4303 13.6389 19.0429 15.2269 18.0942C16.815 17.1455 18.0382 15.6907 18.7 13.9632C19.3618 12.2358 19.4238 10.3361 18.8761 8.56922C18.3285 6.8023 17.2029 5.27072 15.6801 4.22043C14.1573 3.17015 12.3258 2.66211 10.4795 2.77791C8.63333 2.8937 6.8796 3.62662 5.5 4.85895L2.75 7.33395" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 6.41602V10.9993L14.6667 12.8327" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>История пополнения Подорожник</span>
            </router-link>
        </div>
        <button class="admin-sidebar__logout">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.25 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V4.58333C2.75 4.0971 2.94315 3.63079 3.28697 3.28697C3.63079 2.94315 4.0971 2.75 4.58333 2.75H8.25" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.668 15.5827L19.2513 10.9993L14.668 6.41602" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19.25 11H8.25" stroke="#262732" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <span>Выйти</span>
        </button>
    </div>
</template>

<script>


export default {
  components: {
    
  }
}
</script>