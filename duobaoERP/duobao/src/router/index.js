import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'Hello',
//       component: Hello
//     }
//   ]
// })
import home from '../components/home.vue'
// components rightpage
// goodsmanage
import sellgoods from '../components/goodsmanage/SellGoods.vue'
import releasegoods from '../components/goodsmanage/ReleaseGoods.vue'
import shelfgoods from '../components/goodsmanage/ShelfGoods.vue'
import goodsclass from '../components/goodsmanage/GoodsClass.vue'
import issuefinshed from '../components/goodsmanage/IssueFinshed.vue'
import issueunfinshed from '../components/goodsmanage/IssueUnfinshed.vue'
import appointwin from '../components/goodsmanage/AppointWin.vue'
import robotconfig from '../components/goodsmanage/RobotConfig.vue'
// useradmin
import useradmin from '../components/useradmin/UserAdmin.vue'
import vestuser from '../components/useradmin/VestUser.vue'
// orderadmin
import orderpay from '../components/orderadmin/Orderpay.vue'
import orderpayed from '../components/orderadmin/Orderpayed.vue'
import recharpay from '../components/orderadmin/RecharPay.vue'
import recharpayed from '../components/orderadmin/RecharPayed.vue'
import winlist from '../components/orderadmin/WinList.vue'
import robotwinlist from '../components/orderadmin/RobotWinList.vue'
// markadmin
import aciman from '../components/markadmin/AciMan.vue'
import backnowaci from '../components/markadmin/BackNowAci.vue'
import backnowlist from '../components/markadmin/BackNowList.vue'
import banneradmin from '../components/markadmin/BannerAdmin.vue'
import cardredpack from '../components/markadmin/CardRedPack.vue'
import giveredpack from '../components/markadmin/GiveRedPack.vue'
import indexalert from '../components/markadmin/indexalert.vue'
import pushman from '../components/markadmin/pushman.vue'
// systemadmin
import adminlist from '../components/systemadmin/adminlist.vue'
import feedbacklist from '../components/systemadmin/feedbacklist.vue'
// countadmin
import buycount from '../components/countadmin/buycount.vue'
import cardcount from '../components/countadmin/cardcount.vue'
import figurecount from '../components/countadmin/figurecount.vue'
import goodscount from '../components/countadmin/goodscount.vue'
import orderuser from '../components/countadmin/orderuser.vue'
import profitcount from '../components/countadmin/profitcount.vue'
import usercount from '../components/countadmin/usercount.vue'
import yesterdaycount from '../components/countadmin/yesterdaycount.vue'
// 配置路由
export default new Router({
  routes: [
    {
    path: '/',
    component: home,
    children:[
        {
        path: '/',
        component: goodsclass
      },
      {
        path: '/sellgoods',
        component: sellgoods
      },
      {
        path: '/releasegoods',
        component: releasegoods
      },
      {
        path: '/shelfgoods',
        component: shelfgoods
      },
      {
        path: '/goodsclass',
        component: goodsclass
      },
      {
        path: '/issuefinshed',
        component: issuefinshed
      },
      {
        path: '/issueunfinshed',
        component: issueunfinshed
      },
      {
        path: '/appointwin',
        component: appointwin
      },
      {
        path: '/robotconfig',
        component: robotconfig
      },
      {
        path: '/useradmin',
        component: useradmin
      },
      {
        path: '/vestuser',
        component: vestuser
      },
      {
        path: '/orderpayed',
        component: orderpayed
      },
      {
        path: '/orderpay',
        component: orderpay
      },
      {
        path: '/recharpayed',
        component: recharpayed
      },
      {
        path: '/recharpay',
        component: recharpay
      },
      {
        path: '/winlist',
        component: winlist
      },
      {
        path: '/robotwinlist',
        component: robotwinlist
      },
      {
        path: '/aciman',
        component: aciman
      },
      {
        path: '/backnowlist',
        component: backnowlist
      },
      {
        path: '/backnowaci',
        component: backnowaci
      },
      {
        path: '/banneradmin',
        component: banneradmin
      },
      {
        path: '/cardredpack',
        component: cardredpack
      },
      {
        path: '/giveredpack',
        component: giveredpack
      },
      {
        path: '/indexalert',
        component: indexalert
      },
      {
        path: '/pushman',
        component: pushman
      },
      {
        path: '/adminlist',
        component: adminlist
      },
      {
        path: '/feedbacklist',
        component: feedbacklist
      },
      {
        path: '/buycount',
        component: buycount
      },
      {
        path: '/cardcount',
        component: cardcount
      },
      {
        path: '/figurecount',
        component: figurecount
      },
      {
        path: '/goodscount',
        component: goodscount
      },
      {
        path: '/orderuser',
        component: orderuser
      },
      {
        path: '/profitcount',
        component: profitcount
      },
      {
        path: '/usercount',
        component: usercount
      },
      {
        path: '/yesterdaycount',
        component: yesterdaycount
      }
    ]
  }

  ]
})

