export default [{
    path: '/sales',
    name: 'Sales',
    component: () =>
        import ('@/views/Sales.vue'),
    children: [{
            path: '',
            component: () =>
                import ('@/views/SalesPageViews/SalesList.vue'),
            meta: {
                title: 'Продажи'
            }
        },
        {
            path: ':id',
            component: () =>
                import ('@/views/SalesPageViews/SalesDetail.vue'),
            meta: {
                title: 'Продажи'
            }
        },
        {
            path: 'parking',
            component: () =>
                import ('@/views/SalesPageViews/SalesParking.vue'),
            meta: {
                title: 'Продажи'
            }
        },
        {
            path: 'parking/:id',
            component: () =>
                import ('@/views/SalesPageViews/SalesParkingUser.vue'),
            meta: {
                title: 'Продажи'
            }
        },
        {
            path: 'tickets',
            component: () =>
                import ('@/views/SalesPageViews/SalesTickets.vue'),
            meta: {
                title: 'Продажи'
            }
        },
        {
            path: 'tickets/:id',
            component: () =>
                import ('@/views/SalesPageViews/SalesTicketsUser.vue'),
            meta: {
                title: 'Продажи'
            }
        },
        {
            path: 'podorojnik',
            component: () =>
                import ('@/views/SalesPageViews/SalesPodorojnik.vue'),
            meta: {
                title: 'Продажи'
            }
        },
        {
            path: 'podorojnik/:id',
            component: () =>
                import ('@/views/SalesPageViews/SalesPodorojnikUser.vue'),
            meta: {
                title: 'Продажи'
            }
        },
    ]
}, ]