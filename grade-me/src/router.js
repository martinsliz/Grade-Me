import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ClassList from './pages/ClassList'
import StudentList from './pages/StudentList'
import ClassPage from './pages/ClassPage'
import StudentPage from './pages/StudentPage'

const routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/about', component: AboutPage, name: 'AboutPage' },
    { path: '/classlist', component: ClassList, name: 'ClassList' },
    { path: '/classlist/:id', component: ClassPage, name: 'ClassPage' },
    { path: '/classlist/:id/studentlist', component: StudentList, name: 'StudentList' },
    { path: '/student/:id', component: StudentPage, name: 'StudentPage' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router