<template>
    <div id="section-hero">
        <div class="container">
            <div class="row ">
                <div class="col-12 col-md-6 order-md-first order-last d-flex">
                    <div class="card shadow border-0 my-auto" data-aos="fade-up">
                       <div class="card-body py-3">
                            <h5> {{ $t("home_title_1") }}</h5>
                            <h1 class="my-3 text-primary">911 Security Group</h1>
                            <p class="fst-italic">" 911 Security Group tự hào đem đến cho quý khách hàng các giải pháp theo tiêu chí One Stop Shop - cung cấp đa dịch vụ về lĩnh vực an ninh với các nhân sự chất lượng cao và trang thiết bị an ninh hiện đại, phù hợp với nhu cầu của khách hàng. 911 Security Group là đơn vị tiên phong cung cấp các giải pháp an ninh tổng thể cho quý khách hàng "</p>
                            <button class="btn btn-outline-primary rounded-0">
                                {{$t("contact_btn")}}
                            </button>
                       </div>
                    </div>
                </div>
                <div data-aos="fade-down" data-aos-anchor-placement="center-bottom" class="col-12 col-md-6 order-first order-md-last">
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

</style>