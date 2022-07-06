export default [{
    path: '/users/:id',
    name: 'UserPage',
    component: () =>
        import ('@/views/UserPage.vue'),
    children: [

        {
            path: '',
            component: () =>
                import ('@/views/UserPageViews/BalanceFillHistory.vue'),
            meta: {
                title: 'История пополнения баланса'
            }
        },
        {
            path: 'ticket',
            component: () =>
                import ('@/views/UserPageViews/TicketPayment.vue'),
            meta: {
                title: 'Транзакции оплат билета'
            }
        },
        {
            path: 'parking',
            component: () =>
                import ('@/views/UserPageViews/ParkingPayment.vue'),
            meta: {
                title: 'Транзакции оплат парковки'
            }
        },
        {
            path: 'road',
            component: () =>
                import ('@/views/UserPageViews/RoadFillHistory.vue'),
            meta: {
                title: 'История пополнения Подорожник'
            }
        },

    ]
}, ]