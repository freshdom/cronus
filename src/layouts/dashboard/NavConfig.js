// component
import Iconify from '../../components/Iconify';

// ----------------------------------------------------------------------

const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

const navConfig = [
  {
    title: '仪表台',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: '用户',
    path: '/dashboard/user',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: '进程防护状态',
    path: '/dashboard/status-process',
    icon: getIcon('clarity:firewall-solid-alerted'),
  },
  {
    title: '网络防护状态',
    path: '/dashboard/status-network',
    icon: getIcon('eos-icons:network-policy'),
  },
  {
    title: '报告',
    path: '/dashboard/reports',
    icon: getIcon('bxs:report'),
  },
  {
    title: 'Telegram Bot',
    path: '/dashboard/tg-bot',
    icon: getIcon('fluent:bot-20-filled'),
  },
  // {
  //   title: '文章',
  //   path: '/dashboard/blog',
  //   icon: getIcon('eva:file-text-fill'),
  // },
  {
    title: '登录',
    path: '/login',
    icon: getIcon('eva:lock-fill'),
  },
 
  {
    title: '404',
    path: '/404',
    icon: getIcon('eva:alert-triangle-fill'),
  },
];

export default navConfig;
