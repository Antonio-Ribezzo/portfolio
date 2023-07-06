<script>
    import axios from 'axios';
    import ProjectCard from '../components/ProjectCard.vue';

    import { store } from '../store';


    export default {
        name: 'ProjectsPage',
        components:{
            ProjectCard
        },
        data(){
            return{
                store,
                projects: [],
                currentPage:1,
                lastPage:null,
                type: null,
                selectedType:"all",
                technologies: null,
                selectedTechnologies: []
            }
        },

        mounted(){
            this.getProjects(1);
            this.getTypes();
            this.getTechnologies();
        },

        watch:{
          selectedTechnologies:{
            handler:"getProjects",
            deep:true
          }
        },

        methods:{
          getProjects(projectApiPage){

            const params = {
              page: projectApiPage
            }

            if(this.selectedType !== 'all'){
              params.type_id = this.selectedType
            }

            if(this.selectedTechnologies.length > 0){
              params.technology_id = this.selectedTechnologies.join(',');
            }

            axios.get(`${this.store.base_Url}/api/projects`,{params}).then(res => {
              //nell'array vuoto 'projects' devo inserire i dati provenienti dall'api
            //   console.log(res.data.projects)
              
              this.projects = res.data.projects.data
              this.currentPage=res.data.projects.current_page
              this.lastPage=res.data.projects.last_page

            })
          },
          getTypes(){
            axios.get(`${this.store.base_Url}/api/type`).then(res => {
              this.type = res.data.types
            })
          },
          getTechnologies(){
            axios.get(`${this.store.base_Url}/api/technologies`).then(res => {
              this.technologies = res.data.technologies
            })
          }
        }
    }
</script>

<template>
  <h1 class="text-white text-center mb-4">Projects</h1>


  <div class="container mb-4 d-flex flex-row justify-content-start align-items-start px-5">

    <!-- checkbox Technologies  -->
    <div class="my-3">
      <button type="button" class="fs-6 btn btn-dark form-select form-select-sm" data-bs-toggle="collapse" data-bs-target="#collapseTechnologies" role="button" aria-expanded="false" aria-controls="collapseTechnologies">
        Technologies
      </button>
      <div id="collapseTechnologies" class="collapse mt-2 p-4 rounded bg-dark text-white">
        <div class="bg-dark rounded">
          <label v-for="(el,index) in technologies" :key="index" :for="el.name" class="me-2">
            <input class="me-1" type="checkbox" :value="el.id" v-model="selectedTechnologies" :id="el.name">{{ el.name }}
          </label>
        </div>
      </div>
    </div>

    <!-- selected type of project -->
    <div class="my-3 ms-3">
      <select @change="getProjects()" v-model="selectedType" class="form-select form-select-sm text-white border-0 fs-6 p-2" id="projectTypeSelect">
        <option value="all">All Projects</option>
        <option v-for="(elem, index) in type" :key="index" :value="elem.id" >{{ elem.name_type }}</option>
      </select>
    </div>

      

  </div>

  <!-- project cards -->
  <div class='container d-flex justify-content-center gap-5 align-items-start flex-wrap mb-3 px-5'>
    <ProjectCard 
      v-for="(el,index) in projects"
        :projectDetails="el"
        :projectIndex="index + 1"
    />
  </div>

  <!-- pagination -->
  <nav aria-label="Page navigation">
    <ul class="pagination pagination-sm justify-content-center mt-5 mb-3">
      <li class="page-item">
        <a class="page-link bg-dark border-0" @click.prevent="getProjects(currentPage - 1)" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>

      <li class="page-item" :class="(currentPage === elem)? 'active' : ''" aria-current="page" v-for="(elem,index) in lastPage" :key="index">
        <a class="page-link bg-dark border-0" @click.prevent="getProjects(elem)" href="#" aria-label="Previous">
          {{elem}}
        </a>
      </li>

      <li class="page-item">
        <a class="page-link bg-dark border-0" @click.prevent="getProjects(currentPage + 1)" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  select{
    background-color: #212529;
    &:hover{
      cursor: pointer;
      background-color: #424649;
    }
  }
</style>