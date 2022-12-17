<template>
  <header id="app__header">
    <div class="container">
      <div class="header__top">Cửa hàng điện thoại iphone, ipad Quy Nhơn</div>
      <div class="header__main">
        <div id="logo">
          <a href="/">
            <img
              class="header-logo"
              src="http://denstore.vn/wp-content/uploads/2021/08/Logo-DenStore.png"
              alt=""
            />
          </a>
        </div>

        <div class="header__center">
          <div class="header__center-item">
            <a href="/danh-muc-san-pham/dien-thoai" @click="sentCategory">
              <span>Điện thoại</span>
              <i class="fa-solid fa-caret-down"></i>
            </a>
            <div class="header__center-item-navigation">
              <a href="/danh-muc-san-pham/dien-thoai/dien-thoai-apple"
                >Điện thoại Apple</a
              >
              <a href="/danh-muc-san-pham/dien-thoai/dien-thoai-samsung"
                >Điện thoại Samsung</a
              >
            </div>
          </div>
          <div class="header__center-item">
            <a href="/danh-muc-san-pham/tablet">
              <span>Tablet</span>
              <i class="fa-solid fa-caret-down"></i>
            </a>
            <div class="header__center-item-navigation">
              <a href="/danh-muc-san-pham/tablet/tablet-apple">Apple</a>
            </div>
          </div>
          <div class="header__center-item">
            <a href="/danh-muc-san-pham/dong-ho">
              <span>Đồng hồ</span>
              <i class="fa-solid fa-caret-down"></i>
            </a>
            <div class="header__center-item-navigation">
              <a href="/danh-muc-san-pham/dong-ho/apple-watch">Apple watch</a>
            </div>
          </div>
          <div class="header__center-item">
            <a href="/danh-muc-san-pham/phu-kien">
              <span>Phụ kiện</span>
              <i class="fa-solid fa-caret-down"></i>
            </a>
            <div class="header__center-item-navigation">
              <a href="/danh-muc-san-pham/phu-kien/phu-kien-apple"
                >Phụ kiện apple</a
              >
              <a href="/danh-muc-san-pham/phu-kien/phu-kien-khac"
                >Phụ kiện khác</a
              >
            </div>
          </div>
          <div class="header__center-item">
            <a href="/sua-chua-dien-thoai">
              <span>Sửa chữa điện thoại</span>
              <i class="fa-solid fa-caret-down"></i>
            </a>
          </div>
        </div>

        <div class="header__right">
          <div class="header__right-item">
            <div id="search">
              <i class="fa-solid fa-magnifying-glass"></i>
              <div class="search-box">
                <input
                  type="text"
                  placeholder="Tìm kiếm..."
                  v-model="this.inputSearch"
                  @keydown="handleSearch"
                />
                <i class="fa-solid fa-magnifying-glass"></i>
                <div id="products-in-search">
                  <div
                    class="product-in-search"
                    v-for="product in this.productsAfterSearch"
                    :key="product._id"
                  >
                    <a
                      :href="`/san-pham/` + product._id"
                      class="product-in-search-image"
                    >
                      <img :src="product.productimage[0]" alt="" srcset="" />
                    </a>
                    <div class="product-in-search-detail">
                      <a :href="`/san-pham/` + product._id" class="fs-15">{{
                        product.productname
                      }}</a>
                      <div class="fs-15 blur-text">
                        {{
                          product.price.toLocaleString("it-IT", {
                            style: "currency",
                            currency: "VND",
                          })
                        }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="header__right-item">
            <a href="/gio-hang" id="cart">
              <span class="fs-15">Giỏ hàng</span>
              <span class="fs-15">/</span>
              <div>
                <span class="fs-15">
                  {{
                    this.totalMoney.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })
                  }}
                </span>
                <span>
                  <i class="fa-solid fa-cart-shopping"></i>
                </span>
              </div>
              <div class="cart-amount">
                {{
                  this.productsInCart !== null ? this.productsInCart.length : 0
                }}
              </div>
            </a>
            <div class="cart__notification">
              <div
                class="cart__notification-no-product fs-15"
                v-if="this.productsInCart.length === 0"
              >
                Chưa có sản phẩm nào trong giỏ hàng.
              </div>
              <div
                class="cart__notification-has-product"
                v-if="this.productsInCart.length !== 0"
              >
                <div
                  class="product-in-cart"
                  v-for="product in this.productsInCart"
                  :key="product._id"
                >
                  <a
                    :href="`/san-pham/` + product._id"
                    class="product-in-cart-image"
                  >
                    <img :src="product.productimage[0]" alt="" srcset="" />
                  </a>
                  <div class="product-in-cart-detail">
                    <a :href="`/san-pham/` + product._id" class="bold-text">{{
                      product.productname
                    }}</a>
                    <div class="bold-text">
                      DUNG LƯỢNG: {{ product.memory }}
                    </div>
                    <div class="bold-text">MÀU SẮC: {{ product.color }}</div>
                    <div class="bold-text">
                      {{ product.amount }} x
                      {{
                        product.price.toLocaleString("it-IT", {
                          style: "currency",
                          currency: "VND",
                        })
                      }}
                    </div>
                    <div
                      class="delete-product-in-cart"
                      @click="deleteProductInCart(product)"
                    >
                      <i class="fa-solid fa-square-minus"></i>
                    </div>
                  </div>
                </div>
                <div
                  :style="{
                    textAlign: 'center',
                    margin: '0.5rem',
                    fontSize: '1.5rem',
                  }"
                  class="bold-text"
                >
                  Tổng tiền:
                  {{
                    this.totalMoney.toLocaleString("it-IT", {
                      style: "currency",
                      currency: "VND",
                    })
                  }}
                </div>
                <hr class="line" />

                <a href="/gio-hang" id="view-cart">Xem giỏ hàng</a>
                <a href="/thanh-toan" id="payment">Thanh toán</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import mitter from "../../services/emiiter.js";
import VueCookies from "vue-cookies";
import axios from "axios";
export default {
  data() {
    return {
      totalMoney: 0,
      productsInCart: [],
      inputSearch: "",
      productsAfterSearch: [],
    };
  },
  methods: {
    // xóa sản phẩm khỏi cart
    deleteProductInCart(product) {
      this.productsInCart = this.productsInCart.filter(
        (ele) => JSON.stringify(ele) !== JSON.stringify(product)
      );

      VueCookies.set("product", JSON.stringify(this.productsInCart));

      mitter.emit("updateProductsInCart", true);
    },
    handleSearch() {
      if (this.inputSearch === "") {
        axios
          .get(`http://localhost:5000/api/products/search/get/all`)
          .then((res) => {
            this.productsAfterSearch = res.data.data;
          })
          .catch((err) => {
            console.log(err);
            return;
          });
      } else {
        axios
          .get(`http://localhost:5000/api/products/search/${this.inputSearch}`)
          .then((res) => {
            this.productsAfterSearch = res.data.data;
          })
          .catch((err) => {
            console.log(err);
            return;
          });
      }
    },
    sentCategory() {
      if (event.target.innerHTML == "Điện thoại") {
        mitter.emit("sentCategory", "mobile");
      } else if (event.target.innerHTML == "Tablet") {
        mitter.emit("sentCategory", "tablet");
      } else if (event.target.innerHTML == "Đồng hồ") {
        mitter.emit("sentCategory", "watch");
      }
    },
  },
  created() {
    if (!VueCookies.get("product")) {
      this.productsInCart = [];
    } else {
      this.productsInCart = JSON.parse(VueCookies.get("product"));

      for (let product of this.productsInCart) {
        this.totalMoney += parseInt(product.price) * parseInt(product.amount);
      }
    }

    mitter.on("addProductToCart", (e) => {
      let isDuplicate = false;

      // Kiểm tra sản phầm thêm vào trung với sản phầm có trước đó thì cộng dồn số lượng
      for (let product of this.productsInCart) {
        if (
          product._id == e._id &&
          product.memory == e.memory &&
          product.color == e.color
        ) {
          product.amount = (
            parseInt(e.amount) + parseInt(product.amount)
          ).toString();
          isDuplicate = true;
          break;
        }
      }

      // nếu trùng => không push vào cookie
      if (!isDuplicate) {
        this.productsInCart.push(e);
      }

      // tính tổng tiền lại
      this.totalMoney += parseInt(e.price) * parseInt(e.amount);

      //set cookies
      VueCookies.set("product", JSON.stringify(this.productsInCart));
    });
  },
  mounted() {
    window.addEventListener("scroll", async () => {
      if (window.top.scrollY >= 190) {
        if (document.getElementById("app__header")) {
          document.getElementById("app__header").id = "app__header-fixed";
        }
      } else {
        if (document.getElementById("app__header-fixed")) {
          document.getElementById("app__header-fixed").id = "app__header";
        }
      }
    });
  },
  updated() {
    // update tổng tiền khi xóa khỏi cart
    let tempTotalMoney = 0;
    for (let product of this.productsInCart) {
      tempTotalMoney += parseInt(product.price) * parseInt(product.amount);
    }

    this.totalMoney = tempTotalMoney;
  },
};
</script>
