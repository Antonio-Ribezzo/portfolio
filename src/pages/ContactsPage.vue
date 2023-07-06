<script>
    import axios from 'axios';
    import { store } from '../store';

    export default {
        name: 'ContactsPage',
        data(){
            return{
                store,
                name:'',
                email:'',
                message:'',
                success: false,
                errors: {}
            }
        },
        methods: {
            sendForm(){
                //chiamata axios con validazione
                const data = {
                    name: this.name,
                    email: this.email,
                    message: this.message
                }

                axios.post(`${this.store.base_Url}/api/contacts`, data).then(res => {
                    //riscrivo false oppure true alla variabile success
                    this.success = res.data.success

                    console.log(this.success)

                    if(this.success){
                        //se è true
                        this.name = '';
                        this.email = '';
                        this.message = '';
                    } else {
                        //se ci sono degli errori dal LeadController ho generato la chiave errors a cui ho associato il validator
                        this.errors = res.data.errors;
                    }
                })
            }
        }
    }
</script>

<template>
   <h1 class="text-white text-center my-3">Contacts Page</h1>
   <div class="container text-white mb-5">
        <form @submit.prevent="sendForm()">
            <div class="mb-3">
                <label for="" class="form-label">Name</label>
                <input v-model="name" type="text" class="form-control" name="name" id="" placeholder="Name" required>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Email</label>
                <input v-model="email" type="email" class="form-control" name="email" id="" placeholder="Email" required>
            </div>
            <div class="mb-3">
                <label for="" class="form-label">Message</label>
                <textarea v-model="message" class="form-control" name="message" id="" rows="5" required></textarea>
            </div>
            <button class="btn btn-outline-light" type="submit">Send</button>
        </form>

   </div>
</template>

<style lang="scss" scoped>

.container{
    height: 50vw;
}
    
</style>