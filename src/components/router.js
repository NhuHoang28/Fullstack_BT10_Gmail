import GuiThu from "./GuiThu"
import HopThuDen from "./HopThuDen"
import ThuNhap from "./ThuNhap"
import VueRouter from "vue-router"
import thu from "./thu"
import MangXaHoi from './MangXaHoi'

const routes = [{
        path: '/GuiThu',
        component: GuiThu,
        name: 'gui-thu',
    },
    {
        path: '/ThuNhap',
        component: ThuNhap,
        name: 'thu-nhap'
    },
    {
        path: 'HopThuDen',
        component: HopThuDen,
        name: 'hop-thu-den',
        children: [{
                path: '/GuiThu/Chinh',
                component: thu,
                name: 'chinh',
            },
            {
                path: '/GuiThu/MangXaHoi',
                component: MangXaHoi,
                name: 'mang-xa-hoi',
            }
        ]
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
});
export default router