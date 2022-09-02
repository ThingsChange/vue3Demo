<template>
    <div
        @click="shadowClose ? closeChildWin() : ''"
        :style="{ zIndex: zIndex }"
        :class="['cover', contentDisplay ? 'content-center' : '', needGlass ? 'glass' : '']"
        @touchmove.prevent="toucuMoveEvent"
    >
        <section @click.stop :class="['inner', { isHidden: isHidden }]">
            <div @click="closeChildWin" v-if="closeBtn" class="info-name_close model-close">
                <!--                <SvgIcon color="#999" height="0.33" name="menuDetailClose" width="0.33" />-->
            </div>
            <slot name="content"></slot>
        </section>
        <p class="close_wrap" v-if="bottomClose" @click.stop="closeChildWin">
            <span class="btn">
                <SvgIcon class="close" color="#fff" height="0.32" name="close" width="0.32" />
            </span>
        </p>
    </div>
</template>

<script>
// import SvgIcon from '../SvgIcon'

export default {
    name: 'CoverBest',
    // components: { SvgIcon },
    props: {
        // 是否展示右上角关闭按钮
        closeBtn: { type: [Boolean, Number], default: true },
        // 是否允许点击遮罩层关闭
        shadowClose: { type: [Boolean, Number], default: true },
        // 是否允许滑动遮罩层关闭
        touchMoveClose: { type: [Boolean, Number], default: false },
        // 是否展示下边关闭按钮
        bottomClose: { type: [Boolean, Number], default: false },
        // 内容区域位置 false：底部；true:居中
        contentDisplay: { type: [Boolean, Number], default: false }, // true :居中
        // 遮罩层是否需要高斯模糊
        needGlass: { type: [Boolean, Number], default: false },
        // 弹窗闭合条件据此组件层级深度，如果在页面直接引入，传入1，避免关闭事件错误赋值
        level: { type: Number, default: 2 },
        zIndex: { type: Number, default: 999 },
        // 是否禁止隐藏
        isHidden: { type: Boolean, default: false },
    },
    methods: {
        closeChildWin() {
            console.log('这里是 123 的结果-------------', 123)
            this.$emit('update:modelValue', false)
            if (this.level === 2) this.$parent.$emit('update:modelValue', false)
        },
        toucuMoveEvent() {
            if (this.touchMoveClose) this.closeChildWin()
        },
    },
}
</script>

<style scoped lang="scss">
.cover {
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    overflow: hidden;
    .inner {
        //width: 100%;
        position: relative;
        overflow: hidden;
    }
    .isHidden {
        overflow: visible;
    }
    .info-name_close {
        top: 0;
        right: 0;
        display: flex;
        padding: 0.48rem;
        position: absolute;
    }
    .info-name_close:before {
        padding: 0.6rem 0.6rem;
        top: 50%;
        z-index: 10;
        content: '';
        position: absolute;
        transform: translateY(-50%);
    }
    .close_wrap {
        //padding: 0.4rem;
        margin-top: 0.6rem;
        .btn {
            position: relative;
            border-radius: 100%;
            display: inline-block;
            width: 0.72rem;
            height: 0.72rem;
            border: 1px solid #fff;
            .close {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }
}
.content-center {
    justify-content: center;
}
.glass {
    backdrop-filter: blur(5px);
}
</style>
