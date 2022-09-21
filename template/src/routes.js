import{lazy} from 'react';
const DashBoard = lazy(() => import("../src/Views/dashboard"));
const StudentCreate = lazy(() => import("../src/Views/Student/StudentCreate"));
const StudentList = lazy(() => import("../src/Views/Student/StudentList"));

export const Routes = [
    {
        path:"/",
        component:DashBoard,
        exact:true
    },
    {
        path:"/dashboard",
        component:DashBoard,
        exact:true
    },
    {
        path:"/students",
        component:StudentList,
        exact:true
    },
    {
        path:"/students/create",
        component:StudentCreate,

    },
    {
        path:"/students/list",
        component:StudentList,

    }
]