import User from "../containers/user";
import Login from "../containers/user/login";
import Registry from "../containers/user/registry";
import Home from "../containers/Home";
import Homepage from "../containers/Home/Homepage";
import Manage from "../containers/Home/Manage";
import Checking from "../containers/Home/Checking";
import Job from "../containers/Home/Job";
import Archives from "../containers/Home/Archives";
import Allocation from "../containers/Home/Allocation";
import Class from "../containers/Home/Class";

const routes = [
    {
        path: "/user",
        name: "用户",
        component: User,
        children: [
            {
                path: "/user/login",
                component: Login
            },
            {
                path: "/user/registry",
                component: Registry
            },
            {
                from: "/user",
                to: "/user/login"
            }
        ]
    },
    {
        path: "/home",
        name: "首页",
        component: Home,
        children: [
            {
                path: "/home/homepage",
                name: "首页",
                component: Homepage
            },
            {
                path: "/home/manage",
                name: "员工管理",
                component: Manage,
                children: [
                    {
                        path: "/home/manage/archives",
                        name: "档案管理",
                        component: Archives
                    },
                    {
                        path: "/home/manage/allocation",
                        name: "分配管理",
                        component: Allocation
                    },
                    {
                        path: "/home/manage/class",
                        name: "课程管理",
                        component: Class
                    }
                ]
            },
            {
                path: "/home/job",
                name: "工作计划",
                component: Job
            },
            {
                path: "/home/check",
                name: "员工考勤",
                component: Checking
            }
        ]
    },
    {
        from: "/",
        to: "/user"
    }
];

export default routes;
