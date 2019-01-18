import Vue from 'vue';
import Router from 'vue-router';
const _import = require('./_import_' + process.env.NODE_ENV);
import Full from '@/containers/Full'
import Full2 from '@/containers/Full2'

import Buttons from '@/views/components/Buttons'

// Views - Pages
import Page404 from '@/views/errorPages/Page404'
import Page500 from '@/views/errorPages/Page500'

/* login */
const Login = _import('login/index');
Vue.use(Router);

export const constantRouterMap = [
    { path: '/login', component: Login, hidden: true },
    {path: '/pages',redirect: '/pages/p404', name: 'Pages',
          component: {
            render (c) { return c('router-view') }
              // Full,
          },
          children: [{path: '404',  name: 'Page404', component: _import('errorPages/Page404') },
                     {path: '500',name: 'Page500',component: _import('errorPages/Page404')},
                    ]
    }


]

export default new Router({
  mode: 'hash', 
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});

export const asyncRouterMap = [

 {
    path: '/',
    redirect: '/dashboard',
    name: '首页',
    component: Full,
    hidden:false,
    children: [
     {path: '/dashboard',name: 'Dashboard',icon:'speedometer',component: _import('Dashboard')},
     {path: '/introduction',name: '介绍',icon:'thumbsup',component: _import('Introduction')},
     {path: '/components',name: 'component组件',redirect: '/components/buttons',icon:'bookmark',
        component: {render (c) { return c('router-view') }},
        children: [ {path: 'buttons',name: 'Buttons按钮',icon:'social-youtube',component: _import('components/Buttons'), hidden:false, },
                    {path: 'hoverbuttons',name: '悬停特效按钮',icon:'wand',component: _import('components/HoverButtons')},
                    {path: 'alert',name: 'Alert警告提示',icon:'alert',component: _import('components/Alert')},
                    {path: 'card',name: 'Card卡片',icon:'ios-browsers-outline',component: _import('components/Card')},
                    {path: 'datepicker',name: 'DatePicker',icon:'ios-calendar-outline',component: _import('components/DatePicker')},
                    {path: 'form',name: 'Form表单',icon:'ios-list-outline',component: _import('components/Form')},
                    {path: 'modal',name: 'Modal对话框',icon:'ios-chatbubble-outline',component: _import('components/Modal')},
                    {path: 'select',name: 'Select选择器',icon:'ios-arrow-down',component: _import('components/Select')},
                    {path: 'spin',name: 'Spin加载中',icon:'load-d ',component: _import('components/Spin')},
                    {path: 'steps',name: 'Steps步骤条',icon:'ios-checkmark-outline',component: _import('components/Steps')},
                    {path: 'timeline',name: 'Timeline时间轴',icon:'android-more-vertical',component: _import('components/Timeline')},
                    {path: 'transfer',name: 'Transfer穿梭框',icon:'ios-pause-outline',component: _import('components/Transfer')},
                    {path: 'timepicker',name: 'Timepicker',icon:'ios-clock-outline',component: _import('components/Timepicker')},
                    {path: 'upload',name: 'Upload上传',icon:'ios-cloud-upload-outline',component: _import('components/Upload')},
                  ]
      },
       {path: '/charts',name: 'echart图表',redirect: '/charts/shopchart',icon:'pie-graph',
        component: {render (c) { return c('router-view') }},
        children: [ {path: 'shopchart',name: '商场统计图表',icon:'stats-bars',component: _import('charts/ShopChart'), hidden:false, },
                    {path: 'radarchart',name: '雷达图',icon:'arrow-graph-up-right',component: _import('charts/RadarChart')},
                    {path: 'cakechart',name: '蛋糕销量图表',icon:'ios-analytics',component: _import('charts/CakeChart')}
                  ]
      },
      {path: '/table', name: '表格综合实例',icon:'ios-paper',component: _import('Table'),meta: { role: ['admin'] }},
      {path: '/jsontree', name: 'JSON视图',icon:'merge',component: _import('JsonTree')},
      {path: '/tabledetail/:id',name: 'TableDetail', hidden:true, component: _import('TableDetail')},
      {path: '/tinymce',name: 'Tinymce编辑器',icon:"android-document",component: _import('Tinymce')},
      {path: '/markdown',name: 'Markdown',icon:"android-list",component: _import('Markdown')},
      
    ]
  },

   {
    path: '/shenglv',
    redirect: '/shenglv/design',
    name: '胜率控制',
    component: Full2,
    hidden:false,
    children: [
     {path: '/shenglv/design',name: '设计想法',icon:'speedometer',component: _import('shenglv/Design')},
    ]
  },

  {
    path: '/userdata',
    redirect: '/userdata/moneyrank',
    name: "用户信息",
    component: Full2,
    hidden: false,
    children: [
      {path: '/userdata/useraccount', name: '用户账户', icon: 'speedometer', component: _import('userdata/UserAccount')},
      {path: '/userdata/moneyrank', name: '金币排行', icon: 'speedometer', component: _import('userdata/MoneyRank')},
      {path: '/userdata/transationrecord', name: '转账记录', icon: 'speedometer', component: _import('userdata/TransationRecord')},
    ]
  },

  {
    path: '/systemsetting',
    redirect: '/systemsetting/noticecontent',
    name: "系统管理",
    component: Full2,
    hidden: false,
    children: [
      {path: '/systemsetting/noticecontent', name: '银商喇叭', icon: 'speedometer', component: _import('systemsetting/NoticeContent')},
      {path: '/systemsetting/transfersetting', name: '转账设置', icon: 'speedometer', component: _import('systemsetting/TransferSetting')},
      {path: '/systemsetting/registergiving', name: '注册赠送', icon: 'speedometer', component: _import('systemsetting/RegisterGiving')},
      {path: '/systemsetting/loginsetting', name: '登录设置', icon: 'speedometer', component: _import('systemsetting/LoginSetting')},
      // {path: '/systemsetting/moneyrank', name: '金币排行', icon: 'speedometer', component: _import('userdata/MoneyRank')},
      // {path: '/systemsetting/transationrecord', name: '转账记录', icon: 'speedometer', component: _import('userdata/TransationRecord')},
    ]
  },

  {
    path: '/gamesetting',
    redirect: '/gamesetting/bcbm',
    name: "子游戏设置",
    component: Full2,
    hidden: false,
    children: [
      {path: '/gamesetting/bcbm', name: '奔驰宝马', icon: 'speedometer', component: _import('gamesetting/bcbm')},
      {path: '/gamesetting/blackjack', name: '21点', icon: 'speedometer', component: _import('gamesetting/blackjack')},
      {path: '/gamesetting/dntg', name: '大闹天宫', icon: 'speedometer', component: _import('gamesetting/dntg')},
      {path: '/gamesetting/hhsw', name: '虎虎生威', icon: 'speedometer', component: _import('gamesetting/hhsw')},
      {path: '/gamesetting/shz', name: '水浒传', icon: 'speedometer', component: _import('gamesetting/shz')},
      {path: '/gamesetting/srnn', name: '四人牛牛', icon: 'speedometer', component: _import('gamesetting/srnn')},
      {path: '/gamesetting/tbnn', name: '通比牛牛', icon: 'speedometer', component: _import('gamesetting/tbnn')},
    ]
  },

  {
    path: '/yinshangutils',
    redirect: '/yinshangutils/shangxiafen',
    name: "银商工具",
    component: Full2,
    hidden: false,
    children: [
      {path: '/yinshangutils/shangxiafen', name: '上分', icon: 'speedometer', component: _import('yinshangutils/ShangXiaFen')},
      // {path: '/systemsetting/moneyrank', name: '金币排行', icon: 'speedometer', component: _import('userdata/MoneyRank')},
      // {path: '/systemsetting/transationrecord', name: '转账记录', icon: 'speedometer', component: _import('userdata/TransationRecord')},
    ]
  },

  {
    path: '/datastatistics',
    redirect: '/datastatistics/online',
    name: "数据分析",
    component: Full2,
    hidden: false,
    children: [
      {path: '/datastatistics/online', name: '在线统计', icon: 'speedometer', component: _import('datastatistics/Online')},
      {path: '/datastatistics/game', name: '子游戏统计', icon: 'speedometer', component: _import('datastatistics/Game')},
      {path: '/datastatistics/money', name: '金币统计', icon: 'speedometer', component: _import('datastatistics/Money')},
      {path: '/datastatistics/register', name: '注册统计', icon: 'speedometer', component: _import('datastatistics/Register')},
      {path: '/datastatistics/shuishou', name: '税收统计', icon: 'speedometer', component: _import('datastatistics/ShuiShou')},
    ]
  },

  {
    path: '/log',
    redirect: '/log/login',
    name: "日志系统",
    component: Full2,
    hidden: false,
    children: [
      {path: '/log/login', name: '管理员登录日志', icon: 'speedometer', component: _import('log/Login')},
      {path: '/log/operation', name: '管理员操作日志', icon: 'speedometer', component: _import('log/Operation')},
    ]
  },


  { path: '*', redirect: '/pages/404', hidden: true }
  
];
