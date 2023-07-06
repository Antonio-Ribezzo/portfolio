<script>
    import { store } from '../store.js';

    export default {
        name: 'ProjectCard',
        props: ['projectDetails','projectIndex'],
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="card bg-dark text-white flex-wrap">
        <router-link class="text-decoration-none" :to="{name: 'project', params:{ id: projectIndex} }">
            <img class="card-img-top" :src="store.base_Url + '/storage/' + projectDetails.cover_image " :alt="projectDetails.title">
            <div class="card-body">
                <h2 class="card-title text-center text-white">{{ projectDetails.title }}</h2>
            </div>
        </router-link>
        </div>
</template>

<style lang="scss" scoped>
    .card{
        // width: calc(95% / 2);
        // height: 38rem;
            &:hover{
            scale: 105%;
            cursor: pointer;
            box-shadow: 0 4px 8px 0 rgba(228, 225, 225, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19);
            }
        img{
            width: 100%;
            height: 15rem;
        }
    }

</style>