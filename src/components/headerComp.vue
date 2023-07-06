<script>
    export default {
        name: 'headerComp'
    }
</script>

<template>
    <nav class="navbar navbar-expand-md my-3 py-0">
            <div class="container">

                <router-link :to="{ name: 'home'}" class="navbar-brand">
                    <div>
                        <img src="img/sfondo-trasparente-bezz.png" alt="logo-navbar" class="img-fluid" style="height:100px">
                    </div>
                </router-link>

                <!-- humburger -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <!-- <img src="" alt="Toggle navigation"> -->
                    <!-- <font-awesome-icon :icon="['fas', 'burger']" alt="Toggle navigation" class="text-white fs-1"/> -->
                    <font-awesome-icon :icon="['fas', 'bars']" alt="Toggle navigation" class="text-white fs-1"/>
                </button>



                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav ms-auto gap-2">
                        <li class="nav-item">
                            <router-link :to="{ name: 'home'}" class="nav-link badge rounded-pill bg-dark p-3">Home </router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'projects'}" class="nav-link badge rounded-pill bg-dark p-3">Projects</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'about-me'}" class="nav-link badge rounded-pill bg-dark p-3">About me</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link :to="{ name: 'contacts'}" class="nav-link badge rounded-pill bg-dark p-3">Contacts</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<style lang="scss" scoped>
    
</style>