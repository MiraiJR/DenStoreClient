<template>
  <div class="container">
    <div class="product__header">
      <div class="row">
        <div id="product__img" class="col-4">
          <img :src="this.product.productimage" alt="" srcset="" />
          <div
            v-if="[this.product.saleoff === 0 ? false : true]"
            class="product__sale"
          >
            {{ this.product.saleoff }}%
          </div>
        </div>
        <div id="product__detail" class="col-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item fs-15">
                <a class="fs-15" href="/">TRANG CHỦ</a>
              </li>
              <li class="breadcrumb-item fs-15">
                <a class="fs-15" href="/danh-muc-san-pham/dien-thoai">{{
                  this.product.category
                }}</a>
              </li>
              <li
                class="breadcrumb-item active fs-15 uppercase-text"
                aria-current="page"
              >
                {{ this.product.productname }}
              </li>
            </ol>
          </nav>
          <h1 class="detail__header" :data-value="this.product.productname">
            {{ this.product.productname }}
          </h1>
          <div class="detail__price" :data-value="this.product.price">
            <span
              :style="{
                color: 'var(--color-text-blur)',
                textDecoration: 'line-through',
                marginRight: '1rem',
              }"
            >
              {{
                this.product.saleoff !== 0
                  ? Math.round(
                      this.product.price * (100 / (100 - this.product.saleoff))
                    ).toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })
                  : this.product.price.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })
              }}
            </span>
            <span class="fs-15">
              {{ this.product.price }}
            </span>
          </div>
          <div class="detail__options">
            <div class="options__memory">
              <div class="row g-0">
                <div class="col-4 options__memory-title fs-15">MEMORY:</div>
                <div class="col-8">
                  <span
                    class="options__memory-item fs-15"
                    v-for="memory in this.product.memory"
                    :key="memory"
                    :data-value="memory"
                    @click="chooseMemory"
                    >{{ memory }}</span
                  >
                </div>
              </div>
            </div>
            <div class="options__color">
              <div class="row g-0">
                <div class="col-4 fs-15 options__color-title">COLOR:</div>
                <div class="col-8">
                  <span
                    class="options__color-item fs-15"
                    v-for="color in this.product.color"
                    :key="color"
                    :data-value="color"
                    :style="{ backgroundColor: color }"
                    @click="chooseColor"
                  ></span>
                </div>
              </div>
            </div>

            <hr class="line-dotted" />

            <div class="options__amount">
              <span
                class="options__amount-item options__amount-subtract fs-15"
                @click="subtractAmount"
                >-</span
              >
              <span
                class="options__amount-item options__amount-main fs-15"
                :data-value="this.amountProduct"
                >{{ this.amountProduct }}</span
              >
              <span
                class="options__amount-item options__amount-add fs-15"
                @click="addAmount"
                >+</span
              >
            </div>

            <div id="add-to-cart" @click="addToCart">Add to cart</div>
          </div>
          <div class="hotline fs-15">Hotline: 0379755378</div>
        </div>
        <div id="product__policy" class="col-3">
          <div class="policy__item">
            <img
              src="https://denstore.vn/wp-content/uploads/2021/09/return-on-investment.svg"
              alt=""
              srcset=""
            />
            <span>Hỗ trợ trả góp tỉ lệ đậu 100%</span>
          </div>
          <div class="policy__item">
            <img
              src="https://denstore.vn/wp-content/uploads/2021/09/refund.svg"
              alt=""
              srcset=""
            />
            <span>Đổi trả hàng trong 30 ngày</span>
          </div>
          <div class="policy__item">
            <img
              src="https://denstore.vn/wp-content/uploads/2021/09/repairing.svg"
              alt=""
              srcset=""
            />
            <span>Bảo hành 12 tháng mọi thiết bị</span>
          </div>
        </div>
      </div>
    </div>
    <div class="product__description">
      <div class="row">
        <div class="col-7">
          <div class="product__description-navigation">
            <div
              @click="changeStateContentDescription"
              class="product__description-navigation-item product__description-navigation-item-active"
              id="mo-ta"
            >
              Mô tả
            </div>
            <div
              @click="changeStateContentDescription"
              class="product__description-navigation-item"
              id="thong-tin-bo-sung"
            >
              Thông tin bổ sung
            </div>
            <div
              @click="changeStateContentDescription"
              class="product__description-navigation-item"
              id="danh-gia"
            >
              Đánh giá (0)
            </div>
          </div>
          <div class="product__description-content">
            <div v-if="this.stateContentDescription === 'mo-ta'">
              Camera được cải tiến iPhone 6s được nâng cấp độ phân giải camera
              sau lên 12 MP (thay vì 8 MP như trên iPhone 6) camera có tốc độ
              lấy nét và chụp nhanh, thao tác chạm để chụp nhẹ nhàng. Chất lượng
              ảnh trong các điều kiện chụp khác nhau tốt. Camera trước với độ
              phân giải 5 MP cho hình ảnh với độ chi tiết rõ nét, đặc biệt máy
              còn có tính năng Retina Flash, sẽ giúp màn hình sáng lên như đèn
              Flash để bức ảnh khi bạn chụp trong điều kiện thiếu sáng tốt hơn.
              Sắc hồng vàng bắt mắt và khác lạ Khác biệt duy nhất trong thiết kế
              của iPhone 6s và iPhone 6 là ở màu sắc mới: màu hồng vàng lạ mắt
              lần đầu xuất hiện, phù hợp với phần lớn các bạn nữ và số ít các
              bạn nam thích sự khác biệt độc đáo. Cảm ứng 3D Touch độc đáo 3D
              Touch là tính năng hoàn toàn mới trên iPhone 6s, cho phép người
              dùng xem trước được các tùy chọn nhanh dựa vào lực nhấn mạnh hay
              nhẹ mà không cần phải nhấp vào ứng dụng. Để sử dụng, bạn chỉ cần
              nhấn vào màn hình hoặc ứng dụng 1 lực mạnh đến khi máy rung nhẹ là
              có thể xem được. Đáng tiếc là tính năng 3D Touch này chỉ mới được
              áp dụng trên các ứng dụng như: danh bạ, camera, mail, máy ảnh,
              facebook … Sức mạnh của bộ vi xử lý A9 mới nhất iPhone 6s sử dụng
              vi xử lý A9 tốc độ 1.8 GHz (iPhone 6 chỉ với 1.4 GHz), giúp máy
              phản hồi các tác vụ nhanh, chạy cùng lúc nhiều ứng dụng mượt mà.
              Tuy rằng camera vẫn lồi nhưng bạn có thể yên tâm sử dụng mà không
              lo trầy xước ống kính. Viên pin chỉ có dung lượng 1715 mAh khá
              thấp so với các sản phẩm cùng phân khúc khác, tuy nhiên bạn vẫn có
              thể an tâm sử dụng máy trong một ngày nhờ chế độ tiết kiệm pin khá
              tốt của Apple. Ngoài ra iPhone 6s còn được trang bị các công nghệ
              tiên tiến nhất hiện nay như: Wifi chuẩn ac, tính năng kết nối 4G
              thời thượng, cho tốc độ kết nối và tải dữ liệu rất nhanh. Cảm biến
              vân tay cải tiến giúp nhận diện và mở khóa nhanh hơn.
            </div>
            <div v-if="this.stateContentDescription === 'thong-tin-bo-sung'">
              abc
            </div>
            <div v-if="this.stateContentDescription === 'danh-gia'">
              đánh giá ở đây
            </div>
            <div
              class="see-more"
              @click="showMoreText"
              v-if="isShowExpandContent"
            >
              <span>Xem thêm</span>
              <i class="fa-solid fa-caret-down"></i>
            </div>
          </div>
        </div>
        <div class="col-5 product__description-endow">
          <div>
            <i class="fa-solid fa-check"></i>
            <span>Miễn phí giao hàng nội thành Quy Nhơn.</span>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <span>Đổi mới trong vong 30 ngày.</span>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <span>Tặng sạc nhanh 20w</span>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <span>Tặng voucher 300.000đ đến 500.000đ</span>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <span>Bảo hành 1 đổi 1 phụ kiện suốt thời gian bảo hành.</span>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <span>Bảo hành siêu tốc 24h tận nhà miễn phí</span>
          </div>
          <div>
            <i class="fa-solid fa-check"></i>
            <span
              >Mua iPhone tại DENstore bạn chỉ việc xài thôi tất cả đã có
              DENstore lo !</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import emitter from "../../services/emiiter.js";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  data() {
    return {
      amountProduct: 1,
      product: {},
      stateContentDescription: "mo-ta",
      isShowExpandContent: false,
    };
  },
  methods: {
    subtractAmount() {
      if (this.amountProduct != 1) {
        this.amountProduct--;
      }
    },
    addAmount() {
      this.amountProduct++;
    },
    addToCart() {
      if (
        !document.querySelector(".options__memory-item-chose") ||
        !document.querySelector(".options__color-item-chose")
      ) {
        alert("Chọn các tùy chọn trước khi nhấn thêm!");
      } else if (this.product.state === "OUTOFSTOCKING") {
        alert("Sản phẩm đã hết hàng rồi!");
      } else {
        let productToCart = {
          productname: this.product.productname,
          price: this.product.price,
          productimage: this.product.productimage,
          memory: document
            .querySelector(".options__memory-item-chose")
            .getAttribute("data-value"),
          color: document
            .querySelector(".options__color-item-chose")
            .getAttribute("data-value"),
          amount: document
            .querySelector(".options__amount-main")
            .getAttribute("data-value"),
          _id: this.product._id,
        };
        emitter.emit("addProductToCart", productToCart);
      }
    },
    chooseMemory() {
      if (!document.querySelector(".options__memory-item-chose")) {
        event.target.classList.add("options__memory-item-chose");
      } else {
        document
          .querySelector(".options__memory-item-chose")
          .classList.remove("options__memory-item-chose");
        event.target.classList.add("options__memory-item-chose");
      }
    },
    chooseColor() {
      if (!document.querySelector(".options__color-item-chose")) {
        event.target.classList.add("options__color-item-chose");
      } else {
        document
          .querySelector(".options__color-item-chose")
          .classList.remove("options__color-item-chose");
        event.target.classList.add("options__color-item-chose");
      }
    },
    showMoreText() {
      if (event.target.classList.contains("see-more")) {
        event.target.classList.remove("see-more");
        event.target.classList.add("see-less");
        event.target.querySelector("i").classList.remove("fa-caret-down");
        event.target.querySelector("i").classList.add("fa-caret-up");
        event.target.querySelector("span").innerHTML = "Thu gọn";
        document.querySelector(
          ".product__description-content > div"
        ).style.maxHeight = "100%";
      } else {
        event.target.classList.remove("see-less");
        event.target.classList.add("see-more");
        event.target.querySelector("i").classList.remove("fa-caret-up");
        event.target.querySelector("i").classList.add("fa-caret-down");
        event.target.querySelector("span").innerHTML = "Xem thêm";
        document.querySelector(
          ".product__description-content > div"
        ).style.maxHeight = "30rem";
      }
    },
    changeStateContentDescription() {
      document
        .querySelector(".product__description-navigation-item-active")
        .classList.remove("product__description-navigation-item-active");
      event.target.classList.add("product__description-navigation-item-active");

      this.stateContentDescription = event.target.id;
    },
  },
  created() {
    const route = useRoute();

    const path = computed(() => route.path);

    const idProduct = path.value.split("/")[2];

    axios
      .get(`https://server-denstore.herokuapp.com/api/products/${idProduct}`)
      .then((res) => {
        this.product = res.data.data;
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  },
  mounted() {
    if (
      document.querySelector(".product__description-content > div")
        .offsetHeight === 300
    ) {
      this.isShowExpandContent = true;
    } else {
      this.isShowExpandContent = false;
    }
  },
  updated() {
    if (
      document.querySelector(".product__description-content > div")
        .offsetHeight === 300
    ) {
      this.isShowExpandContent = true;
    } else {
      this.isShowExpandContent = false;
    }
  },
};
</script>
