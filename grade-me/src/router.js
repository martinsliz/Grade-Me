import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ClassList from './components/ClassList'
import StudentList from './components/StudentList'

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