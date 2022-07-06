export default [{
    path: '/statistic',
    name: 'Statistic',
    component: () =>
        import ('@/views/Statistic.vue'),
    children: [

        {
            path: '',
            component: () =>
                import ('@/views/StatisticPageViews/StatisticList.vue'),
            meta: {
                title: 'Статистика выхода средств'
            }
        },
        {
            path: ':id',
            component: () =>
                import ('@/views/StatisticPageViews/StatisticDay.vue'),
            meta: {
                title: 'Статистика выхода средств'
            }
        },
    ]
}, ]