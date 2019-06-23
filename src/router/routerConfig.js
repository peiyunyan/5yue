import React from 'react'
import Loadable from 'react-loadable'

const Loading = () => {
    return <div>loading...</div>
}

const Home = Loadable({
    loader : () => import('../views/home'),
    loading : Loading
})

const Find = Loadable({
    loader : () => import('../views/find'),
    loading : Loading
})

const Classify = Loadable({
    loader : () => import('../views/classify'),
    loading : Loading
})

const My = Loadable({
    loader : () => import('../views/my'),
    loading : Loading
})

const ShopCar = Loadable({
    loader : () => import('../views/shopCar'),
    loading : Loading
})

const Issue = Loadable({
    loader : () => import('../views/issue'),
    loading : Loading
})

const PayClose = Loadable({
    loader : () => import('../views/payClose'),
    loading : Loading
})

const Detail = Loadable({
    loader : () => import('../views/detail'),
    loading : Loading
})

const routers = [
    {
        path : '/home',
        component : Home
    },
    {
        path : '/find',
        component : Find,
        children : [
            {
                path : '/find/issue',
                component : Issue
            },
            {
                path : '/find/payClose',
                component : PayClose
            },
            {
                path : '/find',
                redirect : '/find/issue'
            }
        ]
    },
    {
        path : '/classify',
        component : Classify
    },
    {
        path : '/shopCar',
        component : ShopCar
    },
    {
        path : '/my',
        component : My
    },
    {
        path : '/detail/:id',
        component : Detail
    },
    {
        path : '/',
        redirect : "/home"
    }
] 

export default routers