<script>
export default {
    props: {
        info: {
            type: Object,
            required: true
        }
    },
    data() {
        return {

        }
    },
    methods: {
    },
    mounted() {

    }
}
</script>

<template>
    <router-link :to="{ path: '/workerDetail', query: { id: info?.id } }">
        <div class="worker-card" :style="{'background': $route.query.id == info?.id ? 'rgba(1, 88, 18, 0.2)' : 'rgba(1, 88, 18, 0.05)'}">
            <div class="worker-card-wrapper">
                <div class="worker-img">
                    <img :src="info?.img" alt="">
                </div>
                <div class="worker-card-text-wrapper">
                    <h2>{{ info?.fullname }}</h2>
                    <div class="worker-card-spans">
                        <span>{{ info?.role }}</span>
                        <span>{{ info?.phone }}</span>
                    </div>
                </div>
            </div>
        </div>
    </router-link>
</template>

<style></style>