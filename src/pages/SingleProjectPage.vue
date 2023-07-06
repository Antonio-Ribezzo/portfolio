<script>
    import axios from 'axios';
    import { store } from '../store.js';

    export default {
        name: 'SingleProjectPage',
        data(){
            return{
                store,
                project:[]
            }
        },
        mounted(){
            console.log(this.$route);
            this.getSingleProject();
            // console.log(this.$project)
        },
        methods:{
            getSingleProject(){
                axios.get(`${this.store.base_Url}/api/projects/${this.$route.params.id}`).then((response)=>{
                    if(response.data.success===true){
                        this.project = response.data.project;
                        console.log(response.data.project)
                        console.log(this.project)
                    }else{
                        //redirect to 404 page
                        this.$router.push({name: 'not-found'})
                    }
                })
            }
        }
    }
</script>

<template>
    <div class='container d-flex flex-column align-items-center justify-content-center my-5 position-relative text-white'>   
        <div class="card bg-dark p-3 mb-2">
            <img :src="store.base_Url + '/storage/' + project.cover_image " :alt="project.title" class="card-img-top">
        </div>
        <h1 class="mt-2 mb-0">{{project.title}}</h1>
        <!-- type -->
        <p v-if="project.type" class="text-secondary fs-5 my-2">
            {{ project.type.name_type }}
        </p>
        <!-- technologies -->
        <div v-if="project.technologies" class="my-2">
            <span v-for="(el,index) in project.technologies" :key="index" class="badge rounded-pill text-bg-success mx-1">{{el.name}}</span>        
        </div>
        <!-- description -->
        <p class="card rounded p-3 bg-dark text-white my-2">{{ project.description }}</p>
        <!-- link -->
        <a :href="project.link" target="_blank" class="my-2 btn btn-outline-light">Go!</a>
        <!-- arrow prev -->
        <router-link :to="{ name: 'projects'}" class="mt-2 btn btn-outline-light rounded-circle position-absolute" style="top:-4rem; left:1rem;">
            <font-awesome-icon :icon="['fas', 'arrow-left']" />
        </router-link>
    </div>
</template>

<style lang="scss" scoped>


</style>