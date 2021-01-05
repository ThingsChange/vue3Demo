import App from '../Root';

const LayOut = () => import(/* webpackChunkName: "QuickOrder" */ '../views/layout');
const Animation = () => import(/* webpackChunkName: "Animation" */ '../views/cssStudy/Animation');
// 软文分享朋友圈
// 404
const NotFound = () => import(/* webpackChunkName: "NotFound" */ '../components/ErrorPage/NotFound');
// 快应用落地页
const QuickAppLanding = () => import(/* webpackChunkName: "QuickApp" */ '../pages/quickappLanding/index');

const routes = [{
  path: '/',
  redirect: '/qy'
},
{
  path: '/newm/quickapp/vivo',
  component: QuickAppLanding,
  name: 'ViVoQuickAppLanding'
},
{
  path: '/qy',
  component: App,
  children: [
    // 彩蛋猫页面
    {
      path: '/cssStudy',
      name: 'Animation',
      component: Animation
    },
  ],
}
];

routes.push({
  path: '/*',
  component: NotFound
});

export default routes;
