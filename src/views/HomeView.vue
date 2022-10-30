<template>
  <div class="container">
    <div class="row">
      <div class="col-9" id="slider__top">
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="50"
          navigation
          :pagination="{ clickable: true }"
          :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide>
            <img
              class="slide__top-item"
              src="../../public/images/slider-1.jpg"
              alt=""
              srcset=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="slide__top-item"
              src="../../public/images/slider-2.jpg"
              alt=""
              srcset=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="slide__top-item"
              src="../../public/images/slider-3.jpg"
              alt=""
              srcset=""
            />
          </swiper-slide>
          <swiper-slide>
            <img
              class="slide__top-item"
              src="../../public/images/slider-4.jpg"
              alt=""
              srcset=""
            />
          </swiper-slide>
        </swiper>
      </div>
      <div class="col-3">
        <img
          class="slide__top-item"
          src="../../public/images/sua-dien-thoai-lay-ngay-1.jpg"
          alt=""
          srcset=""
        />
      </div>
    </div>

    <div id="policy__box">
      <div class="row">
        <div class="col-4">
          <div class="policy__box-item">
            <img
              src="https://denstore.vn/wp-content/uploads/2021/09/edc.svg"
              alt=""
            />
            <div>
              <div class="fs-15">Trả góp nhanh chóng</div>
              <div class="fs-15">Hỗ trợ trả góp đậu 100%</div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="policy__box-item">
            <img
              src="https://denstore.vn/wp-content/uploads/2021/09/protection.svg"
              alt=""
            />
            <div>
              <div class="fs-15">Đổi trả trong 30 ngày</div>
              <div class="fs-15">Bạn Không Thích Là Đỗi</div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="policy__box-item">
            <img
              src="https://denstore.vn/wp-content/uploads/2021/09/savings.svg"
              alt=""
            />
            <div>
              <div class="fs-15">Bảo Hành 12 Tháng</div>
              <div class="fs-15">Yên Tâm Sử Dụng Sản Phẩm</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="slider__center">
      <swiper
        :modules="modules"
        :slides-per-view="6"
        :space-between="20"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        class="row"
      >
        <swiper-slide>
          <img
            class="slider__center-img"
            src="../../public/images/slider-center-1.jpg"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="slider__center-img"
            src="../../public/images/slider-center-1.jpg"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="slider__center-img"
            src="../../public/images/slider-center-1.jpg"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="slider__center-img"
            src="../../public/images/slider-center-1.jpg"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="slider__center-img"
            src="../../public/images/slider-center-1.jpg"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="slider__center-img"
            src="../../public/images/slider-center-1.jpg"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="slider__center-img"
            src="../../public/images/slider-center-1.jpg"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="slider__center-img"
            src="../../public/images/slider-center-1.jpg"
            alt=""
          />
        </swiper-slide>
        <swiper-slide>
          <img
            class="slider__center-img"
            src="../../public/images/slider-center-1.jpg"
            alt=""
          />
        </swiper-slide>
      </swiper>
    </div>

    <list-products-view
      :idsPicture="'https://denstore.vn/wp-content/uploads/2021/09/Den-1-321x1024.jpg'"
      :category="'dien-thoai'"
    />
    <list-products-view
      :idsPicture="'https://denstore.vn/wp-content/uploads/2021/09/Den-2-321x1024.jpg'"
      :category="'tablet'"
    />
    <list-products-view
      :idsPicture="'https://denstore.vn/wp-content/uploads/2021/09/Den-3-321x1024.jpg'"
      :category="'dong-ho'"
    />
    <!-- <list-products-view :idsPicture="'ads-3.jpg'" :category="'ipad'" />
    <list-products-view :idsPicture="'ads-3.jpg'" :category="'watch'" /> -->
  </div>
</template>

<script>
// import components
import ListProductsView from "../views/Product/ListProductsView.vue";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import Swiper styles
export default {
  components: {
    Swiper,
    SwiperSlide,
    ListProductsView,
  },
  setup() {
    const onSwiper = (swiper) => {
      swiper;
    };
    const onSlideChange = () => {};
    return {
      onSwiper,
      onSlideChange,
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>

<style lang="css" scoped>
.slide__top-item {
  width: 100%;
  height: 64rem;
  object-fit: cover;
}

#policy__box {
  margin: 2rem 0;
}

.policy__box-item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-black);
  border-radius: 0.5rem;
  padding: 1.5rem 0;
  transition: 0.2s linear;
}

.policy__box-item > img {
  height: 5rem;
  object-fit: contain;
  margin-right: 1rem;
}

.policy__box-item > div > div:first-child {
  font-size: 1.4rem;
  font-weight: 700;
}
.policy__box-item > div > div:last-child {
  color: rgb(107, 107, 107);
}

.policy__box-item:hover {
  border: none;
  box-shadow: 0 0 0.6rem 0.3rem #ccc;
  transform: translateY(-10%);
}

#slider__center {
  margin: 2rem 0;
}

.slider__center-img {
  width: inherit;
  margin-right: 0.3rem;
  object-fit: cover;
}
</style>
