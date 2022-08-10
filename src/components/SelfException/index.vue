<script lang="tsx">
import { computed, defineComponent, PropType, ref } from 'vue'
import { ExceptionEnum } from '@/enums/exceptionEnum'

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
        const getMapValue = computed((): MapValue => {
            return unref(statusMapRef).get(unref(getStatus)) as MapValue
        })
        const { title, subTitle, btnText, icon, handler, status } = unref(getMapValue) || {}
        // const  go = useGo();
        return () => {
            return (
                <Result title={props.title || title} sub-title={props.subTitle || subTitle} status={status} class="abc">
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
