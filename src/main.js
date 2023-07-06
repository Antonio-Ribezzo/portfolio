import { createApp } from 'vue'
import App from './App.vue'

// importo il router
import { router } from './router';

// importo bootstrap
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// importo i font
import '@fontsource/audiowide';

// importo the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faBurger, faArrowLeft, faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faBurger, faArrowLeft, faBars)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(router)
.mount('#app')
