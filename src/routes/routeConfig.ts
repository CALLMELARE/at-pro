import Dashboard from '../components/Dashboard/Dashboard';
import Profile from '../components/Profile/Profile';
import Message from '../components/Message/Message';
import Work from '../components/Work/Work';
import Members from '../components/Members/Members';
import WeekReport from '../components/Work/WeekReport';
import MdGuide from '../components/MdUnit/MdGuide';

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
}, {
    label: "成员",
    path: '/Members',
    component: Members,
},{
    label: "编辑周报",
    path: '/Work/EditReport',
    component: WeekReport,
},{
    label: "Markdown导引",
    path: '/Work/MdGuide',
    component: MdGuide,
}]