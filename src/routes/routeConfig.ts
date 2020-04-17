import Dashboard from '../components/Dashboard/Dashboard';
import Profile from '../components/Profile/Profile';
import Message from '../components/Message/Message';
import Work from '../components/Work/Work';

export default [{
    label: "首页",
    path: '/',
    component: Dashboard,
}, {
    label: "个人",
    path: '/Profile',
    component: Profile
}, {
    label: "消息",
    path: '/Message',
    component: Message
}, {
    label: "工作",
    path: '/Work',
    component: Work,
}]