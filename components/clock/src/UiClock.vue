<script>
import TurnClock from 'vue-turn-clock';
export default {
    components: {
        TurnClock
    }
}
</script>

<template>
    <TurnClock class="flip-clock-mini" theme="separate" color="#" background="#015812" bgColor="rgba(1, 88, 18, 1)" />
</template>

<style lang="scss">
.flip-clock-mini {
    .count-item-view .single {
        width: 100px !important;
        height: 150px !important;
    }

    .count-item-view::after {
        content: '';
        display: none !important;
    }

    .count-item-view.single {
        &:nth-child(1) {
            display: none;
        }

        &:nth-child(2) {
            display: none;
        }

        &:nth-child(5) {
            margin-right: 20px;
        }

        &:nth-child(10) {
            margin-left: 20px;
        }
    }

    .count-clock-time-unit {
        display: none;
    }

    .count-item-view {
        width: 50px !important;
        height: 190px !important;
        border-radius: 20px !important;
        @apply bg-primary;

        * {
            font-size: 40px !important;
            font-weight: 600;
            font-family: "Inter", sans-serif !important;

            &::after {
                // display: none;
            }

            font-weight: 600;
            font-family: "Inter",
            sans-serif;
        }
    }

    .count-item-view .count-clock-halving-line {
        // display: none;
    }

    .count-item-view .count-clock-next .count-clock-down {
        font-size: 40px !important;
        // display: none;
        padding: 0 !important;
    }

    .count-item-view .count-clock-up,
    .count-item-view .count-clock-down {
        padding: 20px 10px 0 !important;
        @apply bg-primary;

    }

    .count-down-view {
        height: 60px;
    }

    .count-item-view::before {
        content: '';
        // display: none;
    }

    .count-item-view .count-clock-current .count-clock-up {
        font-size: 40px !important;
        margin-top: 50px;
        height: 120px !important;
    }

    .count-item-view .count-clock-up {
        margin-top: 50px;
    }

    .count-item-view .count-clock-up {
        font-size: 40px !important;
    }

    .count-down-view {
        gap: 2px;
    }
}
</style>