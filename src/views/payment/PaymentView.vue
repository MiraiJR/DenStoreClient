<template>
  <div class="container">
    <div class="row">
      <div class="col-8">
        <div class="endow">
          <span>Bạn có mã ưu đãi?</span>
          <a href="#">Ấn vào đây để nhập mã</a>
        </div>
        <div class="billing__left">
          <div class="billing__left-title">THÔNG TIN THANH TOÁN</div>
          <div class="billing__left-main">
            <div class="row">
              <div class="billing__left-item col-12">
                <label for="fullname">Họ và tên *</label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Họ và tên của bạn"
                  v-model="this.userInfor.fullname"
                />
              </div>
              <div class="col-6">
                <div class="billing__left-item">
                  <label for="phonenumber">Số điện thoại *</label>
                  <input
                    type="text"
                    id="phonenumber"
                    placeholder="Số điện thoại của bạn"
                    v-model="this.userInfor.phonenumber"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="billing__left-item">
                  <label for="email">Địa chỉ email *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Địa chỉ email của bạn"
                    v-model="this.userInfor.email"
                  />
                </div>
              </div>
              <div class="col-6">
                <div class="billing__left-item">
                  <label for="province">Tỉnh/Thành phố *</label>
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    id="province-selected"
                    v-model="this.addressUser.province"
                    @change="getListDistrict"
                  >
                    <option selected disabled>Chọn Tỉnh/Thành phố</option>
                    <option
                      v-for="province in this.listProvince"
                      :key="province.code"
                      :value="{ code: province.code, name: province.name }"
                    >
                      {{ province.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="billing__left-item">
                  <label for="district">Quận/Huyện *</label>
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    id="district-selected"
                    v-model="this.addressUser.district"
                    @change="getListWard"
                  >
                    <option selected disabled>Chọn Quận/Huyện</option>
                    <option
                      v-for="district in this.listDistrict"
                      :key="district.code"
                      :value="{ code: district.code, name: district.name }"
                    >
                      {{ district.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="billing__left-item">
                  <label for="ward">Xã/Phường *</label>
                  <select
                    class="form-select form-select-lg mb-3"
                    aria-label=".form-select-lg example"
                    v-model="this.addressUser.ward"
                  >
                    <option selected disabled>Chọn Xã/Phường</option>
                    <option
                      v-for="ward in this.listWard"
                      :key="ward.code"
                      :value="{ code: ward.code, name: ward.name }"
                    >
                      {{ ward.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="col-6">
                <div class="billing__left-item">
                  <label for="address">Địa chỉ *</label>
                  <input
                    type="text"
                    id="address"
                    placeholder="Ví dụ: số 122, đường Lê Qúy Đôn, ..."
                    v-model="this.addressUser.addressHouse"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="billing__left-item">
                  <label for="notice">Ghi chú</label>
                  <textarea
                    v-model="this.userInfor.notice"
                    id="notice"
                    placeholder="Ghi chú về đơn hàng, ví dụ: thời gian, hay chỉ dẫn chi tiết tới vị trí giao của bạn..."
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div id="order">
          <div class="order-title">ĐƠN HÀNG CỦA BẠN</div>
          <div class="order-item">
            <span>SẢN PHẨM</span>
            <span>TẠM TÍNH</span>
          </div>
          <div
            class="order-item"
            v-for="product in this.productsInCart"
            :key="product._id"
          >
            <span class="product-in-cart">
              <a
                :href="`/san-pham/` + product._id"
                class="product-in-cart-image"
              >
                <img :src="product.productimage[0]" alt="" srcset="" />
              </a>
              <div class="product-in-cart-detail">
                <a :href="`/san-pham/` + product._id">{{
                  product.productname
                }}</a>
                <div>DUNG LƯỢNG: {{ product.memory }}</div>
                <div>MÀU SẮC: {{ product.color }}</div>
                <div>SỐ LƯỢNG: {{ product.amount }}</div>
              </div>
            </span>
            <span>
              {{
                (product.amount * product.price).toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })
              }}
            </span>
          </div>
          <div class="order-item">
            <span>Tạm tính</span>
            <span>{{
              this.totalMoney.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}</span>
          </div>
          <div class="order-item">
            <span>Giao hàng</span>
            <span>Giao hàng miễn phí</span>
          </div>
          <div class="order-item">
            <span>Tổng tiền</span>
            <span>{{
              this.totalMoney.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}</span>
          </div>
          <div class="order-item order-item-radio">
            <div>
              <input
                type="radio"
                id="byBank"
                name="payment-methoad"
                value="bank"
                v-model="this.paymentPicked"
              />
              <label for="byBank">Chuyển khoản ngân hàng</label>
            </div>
            <div v-if="this.paymentPicked === 'bank'">
              Thực hiện thanh toán vào ngay tài khoản ngân hàng của chúng tôi.
              Vui lòng sử dụng Mã đơn hàng của bạn trong phần Nội dung thanh
              toán. Đơn hàng sẽ đươc giao sau khi tiền đã chuyển.
            </div>
            <div>
              <input
                type="radio"
                id="byCOD"
                name="payment-methoad"
                value="cod"
                v-model="this.paymentPicked"
              />
              <label for="byCOD">Ship COD</label>
            </div>
            <div v-if="this.paymentPicked === 'cod'">
              Chúng tôi sẽ vận chuyển tới địa chỉ bạn yêu cầu và bạn thanh toán
              với nhân viên giao hàng.
            </div>
          </div>

          <div class="order-item">
            <button @click="processOrder">Đặt hàng</button>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      listProvince: [],
      listDistrict: [],
      listWard: [],
      addressUser: {},
      userInfor: {},
      paymentPicked: "bank",
    };
  },
  methods: {
    async getListWard() {
      await axios
        .get(
          `https://provinces.open-api.vn/api/d/${this.addressUser.district.code}?depth=2`
        )
        .then((res) => {
          this.listWard = res.data.wards;
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    },
    async getListDistrict() {
      await axios
        .get(
          `https://provinces.open-api.vn/api/p/${this.addressUser.province.code}?depth=2`
        )
        .then((res) => {
          this.listDistrict = res.data.districts;
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    },
    processOrder() {
      this.userInfor.province = this.addressUser.province.name;
      this.userInfor.district = this.addressUser.district.name;
      this.userInfor.ward = this.addressUser.ward.name;
      this.userInfor.addressHouse = this.addressUser.addressHouse;
      console.log(this.userInfor);
    },
  },
  async created() {
    await axios
      .get(`https://provinces.open-api.vn/api/`)
      .then((res) => {
        this.listProvince = res.data;
      })
      .catch((err) => {
        console.log(err);
        return;
      });

    this.productsInCart = JSON.parse(VueCookies.get("product"));

    if (this.productsInCart === null || this.productsInCart.length === 0) {
      this.$router.push("/gio-hang");
    } else {
      for (let product of this.productsInCart) {
        this.totalMoney += parseInt(product.price) * parseInt(product.amount);
      }
    }
  },
  mounted() {
    mitter.on("updateProductsInCart", () => {
      this.productsInCart = JSON.parse(VueCookies.get("product"));

      if (this.productsInCart === null || this.productsInCart.length === 0) {
        this.$router.push("/gio-hang");
        this.totalMoney = 0;
      }
    });
  },
  updated() {
    if (
      !this.userInfor.phonenumber ||
      !this.userInfor.phonenumber.toString().match(/^[0-9]{10}$/)
    ) {
      document.getElementById("phonenumber").style.border = "1px solid red";
    } else {
      document.getElementById("phonenumber").style.border = "1px solid #ccc";
    }
  },
};
</script>

<style lang="css" scoped>
* {
  font-size: 1.5rem;
}

.endow {
  display: block;
  width: 100%;
  border-bottom: 1px solid var(--color-border-blur);
  padding: 1rem 0;
}

.endow * {
  color: var(--color-text-blur);
}
.endow > span {
  margin-right: 1rem;
}

.endow > a:hover {
  color: var(--color-red);
}

.billing__left-title {
  font-size: 2rem;
  padding: 1rem 0;
}

.billing__left-item {
  margin: 1rem 0;
}

.billing__left-item > label {
  margin-bottom: 1rem;
  font-weight: 900;
}

.billing__left-item > input {
  border-radius: 0;
  box-shadow: none;
  border: 1px solid var(--color-border-blur);
}

.billing__left-item > input:focus {
  box-shadow: 0 0 0.2rem 0.2rem var(--color-border-blur);
}

#order {
  border: 1px solid var(--color-black);
  padding: 2.5rem;
}

.order-title {
  margin-bottom: 1rem;
  font-weight: 800;
}

.order-item {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid var(--color-border-blur);
  padding: 1rem 0;
}

.order-item > button {
  font-size: 1.5rem;
  background-color: var(--color-red);
  display: flex;
  justify-content: center;
  color: var(--color-white);
  outline: none;
  border: none;
  padding: 1.5rem;
}

.order-item > span:first-child {
  font-weight: 800;
}

.order-item > span:last-child {
  font-weight: 900;
  color: var(--color-red);
}

.product-in-cart {
  border-bottom: none;
}

.order-item-radio {
  flex-direction: column;
}

.order-item-radio > div {
  display: flex;
  align-items: center;
}

.order-item-radio > div > input {
  width: fit-content;
  box-shadow: none;
  margin-right: 1rem;
}

.billing__left-item > textarea {
  width: 100%;
  height: 10rem;
  padding: 1rem;
  border: 1px solid #ccc;
}

.billing__left-item > textarea:focus {
  outline: none;
  box-shadow: 0 0 0.2rem 0.2rem var(--color-border-blur);
}
</style>
