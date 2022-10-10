import { defineStore } from 'pinia'

interface State {
    firstName: string
    lastName: string
    userId: number | null
}
let useAuthUserStore

export default useAuthUserStore = defineStore('userStore', {
    state: (): State => ({
        firstName: '宋',
        lastName: '丹丹',
        userId: null,
    }),
    getters: {
        fullName: state => {
            // console.log('这里是 state.fullName 的结果-----2-------1-', state.firstName, state.lastName)
            return state.firstName + state.lastName + state.userId
        },
        loggedIn: state => state.userId !== null,
        fullUserDetails(state) {},
        userObj: state => {
            // console.log('这里是   useObj  -------进入userObj-----', 0)
            return {
                firstName: state.firstName,
                lastName: state.lastName,
                userId: state.userId,
            }
        },
    },
    actions: {
        async loadeUser(id: number) {
            if (this.userId !== null) throw new Error('Already   logged in')
            // const res = await api.user.load(id)
            // this.updateUser(res)
        },
        updateUser(payload) {
            this.firstName = payload.firstName
            this.lastName = payload.lastName
            this.userId = payload.userId
        },
        celarUser() {
            this.$reset()
        },
    },
})
