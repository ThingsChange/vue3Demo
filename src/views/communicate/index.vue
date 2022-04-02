<template>
    <div>
        <div class="layout-content">
            <div class="layout-main-content">
                <div>
                    <div>
                        <div span="16">
                            这里是一个父子组件传值的例子，大河小河，你懂得啊1
                        </div>
                    </div>
                    <div>
                        <div>
                            <div span="12">这里是大河</div>
                            <div>
                                <Button @click="adjustSmallDisCharge(1)"
                                    >大河有水小河满</Button
                                >
                                <Button @click="adjustSmallDisCharge(2)"
                                    >大河没水小河干</Button
                                >
                                <Button @click="deleteArray">删除数组</Button>
                            </div>
                        </div>
                        <div :gutter="10">
                            <div span="6">
                                <div>
                                    <label>大河水的流量：</label>
                                    <span v-text="bigDisChage"></span>
                                </div>
                            </div>
                            <div span="6">
                                <div>
                                    <label>大河的宽度：</label>
                                    <span v-text="riverWidth"></span>
                                </div>
                            </div>
                            <div span="6">
                                <div>
                                    <label>大河的长度：</label>
                                    <span v-text="riverLength"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SvgIcon from '@/components/SvgIcon'
export default {
    name: 'index',
    data() {
        return {
            timer: null,
            riverLength: 3000,
            riverWidth: 128,
            bigDisChage: 888,
            smallDisCharge: 333,
            students: [{ name: '小A' }, { name: '小B' }, { name: '小C' }],
            teachers: [],
            tabView: 'test1',
            changeTab: '北京',
        }
    },
    watch: {
        changeTab(newVal, oldVal) {
            switch (newVal) {
                case '北京':
                    this.tabView = 'test1'
                    break
                case '上海':
                    this.tabView = 'test2'
                    break
                case '深圳':
                    this.tabView = 'test3'
                    break
                default:
                    this.tabView = 'test1'
                    break
            }
        },
    },
    components: {
        /*    'small-river': SmallRiver,
    test1: test1,
    test2: test2,
    test3: test3,*/
        SvgIcon,
    },
    created() {
        this.teachers = [
            { name: '小A老师', age: 11 },
            { name: '小B老师', age: 12 },
            { name: '小C老师a', age: 13 },
        ]
        this.students.length = 1
    },
    methods: {
        adjustSmallDisCharge(type) {
            this.students.length = 2
            this.students[1] = { name: '小D' }
            this.students[2] = { name: '小f' }

            this.teachers.map(v => {
                console.log(v.name)
            })

            let that = this
            if (type === 3) {
                clearInterval(that.timer)
                that.timer = null
                return false
            }
            if (type === 4) {
                clearInterval(that.timer)
                that.timer = null
                return false
            }
            this.timer = setInterval(() => {
                if (type == 1) {
                    if (that.smallDisCharge >= 500) {
                        clearInterval(that.timer)
                        that.timer = null
                        return
                    }
                    that.smallDisCharge++
                } else {
                    if (that.smallDisCharge <= 0) {
                        clearInterval(that.timer)
                        that.timer = null
                        return
                    }
                    that.smallDisCharge--
                }
            }, 200)
        },
        deleteArray() {
            this.students.length = 1
        },
        waterToggle(item) {
            console.log('到底是防水吗')
            this.adjustSmallDisCharge(item)
        },
    },
}
</script>

<style scoped>
.bc-green {
    background: rgba(32, 195, 47, 0.5);
}
.bc-red {
    background: rgba(255, 0, 0, 0.5);
}
</style>
