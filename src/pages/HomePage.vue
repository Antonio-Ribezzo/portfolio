<script>
    export default {
        name: 'HomePage'
    }
</script>

<template>
  <div id="jumbotron" class="container d-flex flex-column justify-content-md-center mt-5 text-white">
    <span id="textMyName" class="d-block mt-2 text-center font-size-h0">I'm Antonio</span>
    <h1 class="mt-2 mb-5 text-center font-size-h1">Portfolio/23</h1>
    <div class="d-flex flex-column justify-content-center align-items-center text-center flex-md-row justify-content-md-between text-md-start mb-md-4 mt-5">
      <div class="d-flex flex-column mb-5">
        <h2 class="font-size-h2">Full Stack <br> Developer</h2>
        <div class="d-flex flex-column">
            <h3 class="font-size-h3">Here some of my latest <br> projects and idea &#128161;  </h3>
        </div>
      </div>
      <div class="d-flex flex-column mb-5">
        <h2 class="font-size-h2">Creative & Technical <br> Web Developer</h2>
        <div class="d-flex flex-column">
          <h3 class="text-uppercase mb-0 font-size-h3">last update &star; <span>Jul/23</span></h3>
          <h3 class="text-capitalize font-size-h3">&copy; Antonio Ribezzo</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    #jumbotron{
        height: 80vh;
        h1,#textMyName{
            font-family: 'Audiowide', sans-serif;
        }
    }

    @media screen and (max-width: 570px) {
        .font-size-h0 {
          font-size: 1rem;
          line-height: 1rem;
        }
        .font-size-h1 {
          font-size: 3rem;
          line-height: 3rem;
        }
    
        .font-size-h2 {
          font-size: 2rem;
          line-height: 2rem;
        }
    
        .font-size-h3 {
          font-size: 0.8rem;
          line-height: 1rem;
        }
    }

    @media screen and (min-width: 571px) and (max-width: 767px) {
        .font-size-h0 {
          font-size: 1rem;
          line-height: 1rem;
        }
        .font-size-h1 {
          font-size: 4rem;
          line-height: 4rem;
        }
    
        .font-size-h2 {
          font-size: 2rem;
          line-height: 2rem;
        }
    
        .font-size-h3 {
            font-size: 0.8rem;
            line-height: 1rem;
        }
    }

    @media screen and (min-width: 768px) and (max-width: 1023px) {
        .font-size-h0 {
          font-size: 1rem;
          line-height: 1rem;
        }
        .font-size-h1 {
          font-size: 5rem;
          line-height: 5rem;
        }
    
        .font-size-h2 {
          font-size: 2rem;
          line-height: 2rem;
        }
    
        .font-size-h3 {
          font-size: 1rem;
          line-height: 1.2rem;
        }
    }

    @media screen and (min-width: 1024px) {
        .font-size-h0 {
          font-size: 1rem;
          line-height: 1rem;
        }
        .font-size-h1 {
          font-size: 8rem;
          line-height: 8rem;
        }
    
        .font-size-h2 {
          font-size: 2.5rem;
          line-height: 2.5rem;
        }
    
        .font-size-h3 {
          font-size: 1rem;
          line-height: 1.3rem;
        }
    }
</style>