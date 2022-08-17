<script lang="tsx">
import { computed, defineComponent, PropType, ref, unref } from 'vue'
import { ExceptionEnum } from '@/enums/exceptionEnum'
import { Button, Result } from 'ant-design-vue'

import { useRoute } from 'vue-router'

interface MapValue {
    title: string
    subTitle: string
    btnText?: string
    icon?: string
    handler?: Fn
    status?: string
}

export default defineComponent({
    name: 'SelfException',
    props: {
        status: {
            type: Number as PropType<number>,
            default: ExceptionEnum.PAFE_NOT_FOUND,
        },
        title: {
            type: String as PropType<string>,
            default: '',
        },
        subTitle: {
            type: String as PropType<string>,
            default: '',
        },
        full: {
            type: Boolean as PropType<boolean>,
            default: false,
        },
    },
    setup(props) {
        const statusMapRef = ref(new Map<string | number, MapValue>())
        // const go = useGo()
        const { query } = useRoute()
        unref(statusMapRef).set(ExceptionEnum.PAGE_NOT_ACCESS, {
            title: '403',
            status: `${ExceptionEnum.PAGE_NOT_ACCESS}`,
            subTitle: '错误是403',
            btnText: props.full ? '首页' : '重新登陆',
            handler: () => (v: any) => console.log('这里是 v 的结果-------------', v),
        })
        const getStatus = computed(() => {
            const { status: routeStatus } = query
            const { status } = props
            return Number(routeStatus) || status
        })
        const getMapValue = computed((): MapValue => {
            return unref(statusMapRef).get(unref(getStatus)) as MapValue
        })
        const { title, subTitle, btnText, icon, handler, status } = unref(getMapValue) || {}
        // const  go = useGo();
        return () => {
            return (
                <Result title={props.title || title} sub-title={props.subTitle || subTitle} status={status as any} class="abc">
                    {{
                        extra: () =>
                            btnText && (
                                <Button type="primary" onClick={handler}>
                                    {() => btnText}
                                </Button>
                            ),
                        icon: () => (icon ? <img src={icon} /> : null),
                    }}
                </Result>
            )
        }
    },
})
</script>

<style scoped></style>
