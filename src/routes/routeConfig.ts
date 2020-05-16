import Dashboard from '../components/Dashboard/Dashboard';
import Profile from '../components/Profile/Profile';
import Message from '../components/Message/Message';
import Work from '../components/Work/Work';
import Members from '../components/Members/Members';
import WeekReportEdit from '../components/Work/WeekReport/WeekReportEdit';
import MdGuide from '../components/MdUnit/MdGuide';
import AdminAuthorityManage from '../components/Admin/AuthorityManage';
import AdminUserManage from '../components/Admin/UserManage';
import AdminSystemNotice from '../components/Admin/SystemNotice'
import Sign from '../components/Work/Meeting/Sign';
import MeetingHistory from '../components/Work/Meeting/MeetingHistory';
import Leave from '../components/Work/Meeting/Leave';
import Meeting from '../components/Work/Meeting/Meeting';
import WeekReport from '../components/Work/WeekReport/WeekReport';
import Discuss from '../components/Work/Discuss/Discuss';

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
},  {
    label: "周报",
    path: '/Work/Report',
    component: WeekReport,
},{
    label: "编辑周报",
    path: '/Work/EditReport',
    component: WeekReportEdit,
}, {
    label: "Markdown导引",
    path: '/Work/MdGuide',
    component: MdGuide,
}, {
    label: "后台权限管理",
    path: '/Admin/AuthorityManage',
    component: AdminAuthorityManage,
}, {
    label: "后台系统公告",
    path: '/Admin/SystemNotice',
    component: AdminSystemNotice,
}, {
    label: "后台用户管理",
    path: '/Admin/UserManage',
    component: AdminUserManage,
}, {
    label: "签到",
    path: "/Work/Sign",
    component: Sign,
}, {
    label: "请假",
    path: "/Work/Leave",
    component: Leave,
}, {
    label: "历史会议",
    path: "/Work/HistoryMeeting",
    component: MeetingHistory
}, {
    label: "未完成会议",
    path: "/Work/Meeting",
    component: Meeting
},{
    label: "讨论区",
    path: "/Work/Discuss",
    component: Discuss
},
]