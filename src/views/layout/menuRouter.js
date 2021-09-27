/**
 * @author  56477
 * @create 2018-05-22 10:31
 * @PROJECT_NAME vueDemo
 * @note 一二级导航对应的路由地址
 * */

import routes from '@/routes/routeList'

const routesList = routes.reduce((routes, route) => {
    if (!route.meta?.id) return routes
    let config = {
        id: route.meta.id,
        path: route.path,
        text: route.meta.text,
        child: [],
    }
    config.child = route.children.reduce((childs, child, childIndex) => {
        if (!child.meta?.text) return childs
        return childs.concat({
            id: `${route.meta.id}-${childIndex + 1}`,
            path: `${route.path}/${child.path}`,
            text: `${child.meta.text}`,
        })
    }, [])
    return routes.concat(config)
}, [])
export const routeConfig = routesList
