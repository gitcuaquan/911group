<template>
    <div class="container my-5">
        <div class="row">
            <div class="col-md-6 col-12" data-aos="fade-down">
                <img src="/img/welcome.jpg" class="w-100">
            </div>
            <div class="col-md-6 col-12 d-flex">
                <div class="card shadow border-0 my-auto" data-aos="fade-up">
                       <div class="card-body py-3 ">
                            <h3 class="my-3 text-primary"> {{$t('home_abuout_1')}}</h3>
                            <p >Chúng tôi là một công ty bảo vệ có kinh nghiệm 10 năm, chuyên cung cấp dịch vụ bảo vệ chuyên nghiệp cho các khách hàng ở nhiều ngành nghề khác nhau. Với đội ngũ nhân viên giàu kinh nghiệm và được đào tạo chuyên nghiệp, chúng tôi cam kết cung cấp giải pháp bảo vệ toàn diện và hiệu quả nhất cho khách hàng của mình. </p>
                            <p class="fst-italic">" Sự an toàn của khách hàng là ưu tiên hàng đầu của chúng tôi. "</p>
                            <button class="btn btn-outline-primary rounded-0">
                                {{$t("contact_btn")}}
                            </button>
                       </div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    components: {
     
    }
}
</script>

<style scoped></style>