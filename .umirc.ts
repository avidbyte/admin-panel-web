import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'AdminPanel',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: ' CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: '系统管理',
      path: '/manage',
      routes: [
        { name: '用户管理', path: '/manage/user', component: './Manage/User' },
        { name: '角色管理', path: '/manage/role', component: './Manage/Role' },
        { name: '菜单管理', path: '/manage/menu', component: './Manage/Menu' },
        { name: '部门管理', path: '/manage/dept', component: './Manage/Dept' },
        { name: '岗位管理', path: '/manage/post', component: './Manage/Post' },
        { name: '字典管理', path: '/manage/dict', component: './Manage/Dict' },
        {
          name: '通知公告',
          path: '/manage/notice',
          component: './Manage/Notice',
        },
        { name: '日志管理', path: '/manage/log', component: './Manage/Log' },
        // 可以继续添加更多的子菜单项
      ],
    },
    {
      name: '系统监控',
      path: '/monitor',
      routes: [
        {
          name: '在线用户',
          path: '/monitor/online',
          component: './Monitor/Online',
        },
        {
          name: '定时任务',
          path: '/monitor/cron',
          component: './Monitor/Cron',
        },
        {
          name: '数据监控',
          path: '/monitor/data-monitoring',
          component: './Monitor/DataMonitoring',
        },
        {
          name: '服务监控',
          path: '/monitor/service-monitoring',
          component: './Monitor/ServiceMonitoring',
        },
        {
          name: '缓存监控',
          path: '/monitor/cache-monitoring',
          component: './Monitor/CacheMonitoring',
        },
        // 可以继续添加更多的子菜单项
      ],
    },
    // 添加登录页面路由
    {
      path: '/login',
      component: './Login',
      layout: false, // 设置为false，表示不使用默认的布局
    },
    // 添加404页面路由
    {
      path: '/404',
      component: './404',
      layout: false, // 设置为false，表示不使用默认的布局
    },
    // 默认重定向到404页面或其他指定页面
    {
      path: '*',
      redirect: '/404',
      layout: false, // 设置为false，表示不使用默认的布局
    },
  ],
  npmClient: 'pnpm',
});
