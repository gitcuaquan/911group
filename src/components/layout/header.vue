<template>
    <div class="bg-dark py-1">
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
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <router-link class="navbar-brand mx-auto" to="/">
                <img src="/img/lg.png" alt="911 group" style="width: 100px;">
            </router-link> 
            <button class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse"
                 id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active"
                           aria-current="page"
                           href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link"
                           href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle"
                           href="#"
                           role="button"
                           data-bs-toggle="dropdown"
                           aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item"
                                   href="#">Action</a></li>
                            <li><a class="dropdown-item"
                                   href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item"
                                   href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled">Disabled</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'LayoutHeader',
}
</script>

<style scoped></style>