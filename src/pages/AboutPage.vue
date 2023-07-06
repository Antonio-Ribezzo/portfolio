<script>
    export default {
        name: 'AboutPage'
    }
</script>

<template>
   <div class="d-flex flex-column justify-content-start align-items-center p-3 my-5 container rounded-4 position-relative">
        <!-- immagine di background -->
        <img id="logo-img" src="img/sfondo-trasparente-bezz.png" alt="about-me-photo" class="position-absolute">
        <!-- content -->
        <img id="about-img" src="img/about.png" alt="about-me-photo" class="img-fluid rounded-circle my-4">
        <p class="text-secondary text-center fs-3">
            "I'm a passionate <span class="text-danger fst-italic">Full Stack Web Developer</span> with expertise in a wide range of technologies. I specialize in both front-end and back-end development, bringing together the best of both worlds to create exceptional web experiences.

            On the front-end, I'm skilled in <span class="text-success fst-italic">HTML, CSS, Bootstrap, JavaScript, Vue.js,</span> and <span class="text-success fst-italic">Vite</span>. I have a keen eye for design and user experience, and I leverage these skills to build visually stunning and intuitive interfaces.

            In the back-end realm, I excel in <span class="text-success fst-italic">PHP</span> and <span class="text-success fst-italic">Laravel</span>, two powerful technologies for building robust and scalable web applications. I have experience working with MySQL databases, ensuring efficient data management and retrieval.

            <!-- With a solid command of Node.js, I can effortlessly develop server-side applications and leverage its event-driven architecture to build high-performance web solutions. -->

            I'm always eager to stay up-to-date with the latest advancements in web development, constantly expanding my skillset to provide cutting-edge solutions. Whether you're looking to revamp your front-end design or build a scalable back-end infrastructure, I'm here to bring your vision to life.<br>

            Thank you for visiting my website, and I look forward to the opportunity to collaborate with you in creating exceptional digital experiences!"
        </p>
   </div>
</template>

<style lang="scss" scoped>
    div{
        // height: 80rem;
        background-color: rgba(54, 53, 53, 0.256);
        background-position: center;
        background-repeat: no-repeat;
        background-size:auto;
        #about-img{
            width: 15rem;
            aspect-ratio: 1;
        }
        #logo-img{
            filter: brightness(0.5);
            filter: opacity(0.2);
	        top: 50%;
	        left: 50%;
	        transform: translate(-50%, -50%);
        }
    }
</style>