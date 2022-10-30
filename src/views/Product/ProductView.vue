<template>
  <div class="container">
    <div class="product__header">
      <div class="row">
        <div id="product__img" class="col-4">
          <img :src="this.curImage" alt="" />
          <div class="product__img-list">
            <img
              v-for="image in this.product.productimage"
              :key="image"
              :src="image"
              alt=""
              srcset=""
              @click="viewImage(image)"
            />
          </div>
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
              {{ this.priceConvert }}
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
            <div
              id="content-mo-ta"
              v-if="this.stateContentDescription === 'mo-ta'"
            >
              {{ this.product.description }}
            </div>
            <div v-if="this.stateContentDescription === 'thong-tin-bo-sung'">
              abc
            </div>
            <div v-if="this.stateContentDescription === 'danh-gia'">
              <div class="comment__box">
                <div class="comment__box-label">
                  Đánh giá sản phẩm {{ this.product.productname }}
                </div>
                <div class="comment__box-content">
                  <label for="commentContent">Nhận xét của bạn</label>
                  <textarea
                    id="commentContent"
                    v-model="this.comment.content"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div class="comment__box-user">
                  <div class="row">
                    <div class="col-6">
                      <div class="comment__box-user-item">
                        <label for="commentName">Tên *</label>
                        <input
                          v-model="this.comment.username"
                          id="commentName"
                          type="text"
                        />
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="comment__box-user-item">
                        <label for="commentEmail">Email *</label>
                        <input
                          v-model="this.comment.email"
                          id="commentEmail"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" @click="sendComment">Gửi đi</button>
              </div>
              <section style="background-color: #e7effd">
                <div class="container my-5 py-5 text-dark">
                  <div class="row d-flex justify-content-center">
                    <div class="col-md-11 col-lg-9 col-xl-7">
                      <div
                        class="d-flex flex-start mt-4"
                        v-for="itemComment in this.listComment"
                        :key="itemComment._id"
                      >
                        <img
                          class="rounded-circle shadow-1-strong me-3"
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                          alt="avatar"
                          width="65"
                          height="65"
                        />
                        <div class="card w-100">
                          <div class="card-body p-4">
                            <div class="">
                              <h5 class="card-body-username">
                                {{ itemComment.username }}
                              </h5>
                              <p class="small">
                                {{
                                  new Date(itemComment.createdAt).getDate() +
                                  "/" +
                                  (new Date(itemComment.createdAt).getMonth() +
                                    1) +
                                  "/" +
                                  new Date(itemComment.createdAt).getFullYear()
                                }}
                              </p>
                              <p class="fs-15">
                                {{ itemComment.content }}
                              </p>

                              <!-- <div
                                class="d-flex justify-content-between align-items-center"
                              >
                                <div class="d-flex align-items-center">
                                  <a href="#!" class="link-muted me-2"
                                    ><i class="fas fa-thumbs-up me-1"></i>158</a
                                  >
                                  <a href="#!" class="link-muted"
                                    ><i class="fas fa-thumbs-down me-1"></i
                                    >13</a
                                  >
                                </div>
                                <a href="#!" class="link-muted"
                                  ><i class="fas fa-reply me-1"></i> Reply</a
                                >
                              </div> -->
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
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
      curImage: "",
      priceConvert: "",
      comment: {},
      listComment: [],
    };
  },
  methods: {
    async sendComment() {
      this.comment.idproduct = this.product._id;
      await axios
        .post(
          `https://server-denstore.herokuapp.com/api/comments`,
          this.comment
        )
        .then((res) => {
          this.listComment.push(res.data.comment);
        })
        .catch((err) => {
          console.log(err);
          return;
        });

      this.comment = {};
    },
    viewImage(image) {
      this.curImage = image;
    },
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
    async changeStateContentDescription() {
      document
        .querySelector(".product__description-navigation-item-active")
        .classList.remove("product__description-navigation-item-active");
      event.target.classList.add("product__description-navigation-item-active");

      this.stateContentDescription = event.target.id;
      if (this.stateContentDescription == "danh-gia") {
        await axios
          .get(
            `https://server-denstore.herokuapp.com/api/comments/${this.product._id}`
          )
          .then((res) => {
            this.listComment = res.data.data;
          })
          .catch((err) => {
            console.log(err);
            return;
          });
      }
    },
  },
  async created() {
    const route = useRoute();
    const path = computed(() => route.path);
    const idProduct = path.value.split("/")[2];

    await axios
      .get(`https://server-denstore.herokuapp.com/api/products/${idProduct}`)
      .then((res) => {
        this.product = res.data.data;
        this.curImage = this.product.productimage[0];
        this.priceConvert = this.product.price.toLocaleString("it-IT", {
          style: "currency",
          currency: "VND",
        });
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  },
  mounted() {
    if (document.querySelector("#content-mo-ta")) {
      if (document.querySelector("#content-mo-ta").offsetHeight === 300) {
        this.isShowExpandContent = true;
      } else {
        this.isShowExpandContent = false;
      }
    }
  },
  updated() {
    if (document.querySelector("#content-mo-ta")) {
      if (document.querySelector("#content-mo-ta").offsetHeight === 300) {
        this.isShowExpandContent = true;
      } else {
        this.isShowExpandContent = false;
      }
    }
  },
};
</script>
