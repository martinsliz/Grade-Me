import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ClassPage from './components/ClassPage'
import StudentPage from './components/StudentPage'

const routes = [
    { path: '/', component: HomePage, name: 'HomePage' },
    { path: '/about', component: AboutPage, name: 'AboutPage' },
    { path: '/class', component: ClassPage, name: 'ClassPage' },
    { path: '/student', component: StudentPage, name: 'StudentPage' },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router