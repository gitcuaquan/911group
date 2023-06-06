<template>
    <header class="fixed-top">
        <div :class="`bg-dark header-top  ${isShown ? 'show' : ''}`">
            <div class="container">
                <div class="row justify-content-between">
                    <div class="text-light fw-light d-flex col">
                        <div class="border-end pe-2 me-2">
                            <small><i class="fa-sharp fa-regular fa-envelope"></i> ducminh.911@gmail.com</small>
                        </div>
                        <div>
                            <small>
                                <i class="fa-solid fa-square-phone"></i> +84 987.635.354
                            </small>
                        </div>
                    </div>
                    <div class="text-light text-end col d-none d-md-block">
                        <i class="fa-brands me-2 fa-square-facebook"></i>
                        <i class="fa-brands me-2 fa-instagram"></i>
                        <i class="fa-brands me-2 fa-square-youtube"></i>
                        <i class="fa-brands me-2 fa-square-pinterest"></i>
                        <i class="fa-brands fa-square-twitter"></i>
                    </div>
                </div>
            </div>
        </div>
        <nav :class="`navbar navbar-expand-lg bg-light ${!isShown ? 'bg-opacity-50' : ''}  py-0`">
            <div class="container">
                <button class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <router-link class="navbar-brand mx-auto"
                             to="/">
                    <img src="/img/lg.png"
                         alt="911 group"
                         style="width: 70px;">
                </router-link>

                <div class="collapse navbar-collapse"
                     id="navbarSupportedContent">
                    <ul class="navbar-nav justify-content-end w-100 mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link to="/"
                                         class="nav-link  active"
                                         aria-current="page"
                                         href="#">{{ $t('home') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about"
                                         class="nav-link  "
                                         aria-current="page"
                                         href="#">{{ $t('introduce') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about"
                                         class="nav-link  "
                                         aria-current="page"
                                         href="#">{{ $t('service') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about"
                                         class="nav-link "
                                         aria-current="page"
                                         href="#">{{ $t('hiring') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about"
                                         class="nav-link  "
                                         aria-current="page"
                                         href="#">{{ $t('news') }}</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/about"
                                         class="nav-link "
                                         aria-current="page"
                                         href="#">{{ $t('contact') }}</router-link>
                        </li>
                    </ul>
                </div>
                <LangButon class="ms-2"></LangButon>
            </div>
        </nav>
    </header>
</template>

<script>
import LangButon from '@/components/common/lang-buton.vue'
export default {
    name: 'LayoutHeader',
    components: {
        LangButon
    },
    data: () => ({
        isShown: false
    }),
    mounted() {
        this.showHeader()
        this.$nextTick(() => {
            window.addEventListener('scroll', ()=>this.showHeader());
        })
    },
    methods: {
        showHeader() {
            var currentPosition = window.pageYOffset;

            if (currentPosition > 10) {
                // Thực hiện cuộn lên đầu trang
                this.isShown = false
            } else {
                this.isShown = true
            }
        }
    }
}
</script>

<style scoped>
.header-top {
    visibility: hidden;
    height: 0;
    transition: 0.2s;
    overflow: hidden;

}

.header-top.show {
    visibility: visible;
    height: 30px;
    transition: 0.2s;
    padding-top: 3px;
}
</style>