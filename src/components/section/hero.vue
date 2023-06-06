<template>
    <div id="section-hero">
        <div class="container">
            <div class="row ">
                <div class="col-12 col-md-6 order-md-first order-last">
                    <div class="card-2">
                        <h4> {{ $t("home_title_1") }}</h4>
                    </div>
                </div>
                <div class="col-12 col-md-6 order-first order-md-last">
                    <img src="https://i.ibb.co/HxfFJZF/Thi-t-k-ch-a-c-t-n-1.png"
                         class="w-100" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "SectionHero"
}
</script>

<style scoped>
#section-hero {
    padding-top: 150px;
}

.card-2 {
    border-radius: 20px;
    padding: 30px;
    background: #e0e0e0;
    box-shadow: 15px 15px 30px #bebebe,
        -15px -15px 30px #ffffff;
}
</style>