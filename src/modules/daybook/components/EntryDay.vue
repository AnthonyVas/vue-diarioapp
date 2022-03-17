<template>
    <div class=" entry-container mb-3 pointer p-2"
        @click="$router.push({name: 'entry', params:{id:10}})"
    >

        <!-- Titulo -->

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, Jueves</span>
        </div>

        <div class="entry-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore incidunt repellat, nostrum optio, voluptatibus, ducimus possimus sapiente ad eaque soluta voluptates rerum aut pariatur. Amet veritatis et iste ad dolor harum saepe rerum. Quia voluptatem ut perferendis nemo, quidem sapiente repellat doloremque iste vel, vero enim, corrupti animi quam blanditiis.
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover{
            background-color: lighten($color: grey, $amount: 45);
        }
        .entry-description{
            font-size: 14px;
        }
    }
</style>