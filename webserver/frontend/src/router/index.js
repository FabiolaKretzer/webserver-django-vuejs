import Vue from 'vue'
import Router from 'vue-router'
import ListBook from '@/components/ListBook'
import EditBook from '@/components/EditBook'
import DeleteBook from '@/components/DeleteBook'
import NewBook from '@/components/NewBook'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/books',
            name: 'ListBook',
            component: ListBook
        },
        {
            path: '/books/:bookId/edit',
            name: 'EditBook',
            component: EditBook
        },
        {
            path: '/books/:bookId/delete',
            name: 'DeleteBook',
            component: DeleteBook
        },
        {
            path: '/books/new',
            name: 'NewBook',
            component: NewBook
        }
    ], 
    mode: 'history'
})