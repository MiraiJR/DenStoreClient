<template>
  <div id="app__category">
    <div class="container">
      <div class="app__catogory-title">
        <div class="app__catogory-title-item">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item fs-15">
                <a class="fs-15" href="/">TRANG CHỦ</a>
              </li>
              <li
                class="breadcrumb-item active fs-15 uppercase-text"
                aria-current="page"
              >
                Điện thoại
              </li>
            </ol>
          </nav>
        </div>
        <div class="app__catogory-title-item">
          <span>Hiển thị 1-12 của 20 kết quả</span>
          <span>Thứ tự mặc định</span>
        </div>
      </div>
      <div class="app__category-products">
        <div class="row">
          <div class="col-2">
            <div class="navigation__products-title">Danh mục sản phẩm</div>
            <div class="navigation__products-item">
              <div class="navigation__products-item-title">
                <a id="dien-thoai" href="/danh-muc-san-pham/dien-thoai"
                  >Điện thoại</a
                >
                <span>
                  <span>(20)</span>
                  <i
                    @click="showNavigateItem"
                    class="fa-solid fa-caret-down"
                  ></i>
                </span>
              </div>
              <div class="navigation__products-item-content">
                <a
                  href="/danh-muc-san-pham/dien-thoai/dien-thoai-apple"
                  id="dien-thoai-apple"
                  >Điện thoại Apple</a
                >
                <a
                  href="/danh-muc-san-pham/dien-thoai/dien-thoai-samsung"
                  id="dien-thoai-samsung"
                  >Điện thoại Samsung</a
                >
              </div>
            </div>
            <div class="navigation__products-item">
              <div class="navigation__products-item-title">
                <a id="dong-ho" href="/danh-muc-san-pham/dong-ho">Đồng Hồ</a>
                <span>
                  <span>(20)</span>
                  <i
                    @click="showNavigateItem"
                    class="fa-solid fa-caret-down"
                  ></i>
                </span>
              </div>
              <div class="navigation__products-item-content">
                <a
                  href="/danh-muc-san-pham/dong-ho/dong-ho-apple"
                  id="dong-ho-apple"
                  >Appple watch</a
                >
              </div>
            </div>
            <div class="navigation__products-item">
              <div class="navigation__products-item-title">
                <a id="tablet" href="/danh-muc-san-pham/tablet">Tablet</a>
                <span>
                  <span>(20)</span>
                  <i
                    @click="showNavigateItem"
                    class="fa-solid fa-caret-down"
                  ></i>
                </span>
              </div>
              <div class="navigation__products-item-content">
                <a href="/danh-muc-san-pham/tablet/tablet-ipad" id="tablet-ipad"
                  >Ipad</a
                >
              </div>
            </div>
            <div class="navigation__products-item">
              <div class="navigation__products-item-title">
                <a id="phu-kien" href="/danh-muc-san-pham/phu-kien">Phụ kiện</a>
                <span>
                  <span>(20)</span>
                  <i
                    @click="showNavigateItem"
                    class="fa-solid fa-caret-down"
                  ></i>
                </span>
              </div>
              <div class="navigation__products-item-content">
                <a
                  href="/danh-muc-san-pham/phu-kien/phu-kien-apple"
                  id="phu-kien-apple"
                  >Phụ kiện Apple</a
                >
                <a
                  href="/danh-muc-san-pham/phu-kien/phu-kien-khac"
                  id="phu-kien-khac"
                  >Phụ kiện khác</a
                >
              </div>
            </div>
          </div>
          <div class="col-10">
            <list-products :category="this.category" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ListProducts from "./ListProducts.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";
import { showNavigateItemSP } from "../../services/functionsupport.js";
// import mitter from "../../services/emiiter.js";
export default {
  components: {
    ListProducts,
  },
  data() {
    return {
      idProduct: "",
      category: "mobile",
      isShowSonOfNavigationItem: false,
    };
  },
  methods: {
    showNavigateItem() {
      if (!event.target.classList.contains("fa-caret-active")) {
        event.target.classList.remove("fa-caret-down");
        event.target.classList.add("fa-caret-up");
        event.target.classList.add("fa-caret-active");
        event.target.parentElement.parentElement.parentElement.querySelector(
          ".navigation__products-item-content"
        ).style.display = "flex";
      } else {
        event.target.classList.remove("fa-caret-active");
        event.target.classList.remove("fa-caret-up");
        event.target.classList.add("fa-caret-down");
        event.target.parentElement.parentElement.parentElement.querySelector(
          ".navigation__products-item-content"
        ).style.display = "none";
      }
    },
  },
  created() {
    const route = useRoute();
    const path = computed(() => route.path);
    const separatePath = path.value.split("/");
    this.idProduct = separatePath[separatePath.length - 1];

    if (separatePath.length == 4) {
      this.isShowSonOfNavigationItem = true;
    }

    if (this.idProduct == "dien-thoai") {
      this.category = "mobile";
    } else if (this.idProduct == "tablet") {
      this.category = "ipad";
    } else if (this.idProduct == "dong-ho") {
      this.category = "watch";
    } else if (this.idProduct == "phu-kien") {
      this.category = "";
    }
  },
  mounted() {
    if (this.isShowSonOfNavigationItem) {
      const temp = document
        .getElementById(`${this.idProduct}`)
        .parentElement.parentElement.querySelector(
          ".navigation__products-item-title > span > i"
        );
      showNavigateItemSP(temp);
    }
    document.getElementById(`${this.idProduct}`).style.fontWeight = "900";
  },
};
</script>

<style lang="css" scoped>
#app__category * {
  font-size: 1.5rem;
}
.app__catogory-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
}

.app__catogory-title-item > span:first-child {
  margin-right: 1rem;
}

.navigation__products-title {
  font-weight: 900;
  position: relative;
  padding: 1rem 0;
  margin-bottom: 1rem;
}

.navigation__products-title::after {
  content: "";
  width: 10%;
  height: 0.3rem;
  background-color: var(--color-black);
  position: absolute;
  top: 100%;
  left: 0;
}

.navigation__products-item {
  border-bottom: 1px solid var(--color-border-blur);
}

.navigation__products-item:last-child {
  border-bottom: none;
}

.navigation__products-item > .navigation__products-item-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0;
}

.navigation__products-item
  > .navigation__products-item-title
  > span:last-child
  > span {
  margin-right: 0.5rem;
  color: var(--color-text-blur);
}

.navigation__products-item-title > a:first-child:hover {
  font-weight: 800;
  color: var(--color-black);
}

.navigation__products-item > .navigation__products-item-content {
  padding-left: 1rem;
  margin: 1rem;
  border-left: 1px solid var(--color-border-blur);
  display: none;
  flex-direction: column;
}

.navigation__products-item > .navigation__products-item-content > a:hover {
  font-weight: 800;
  color: var(--color-black);
}
</style>
