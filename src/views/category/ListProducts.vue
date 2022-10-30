<template>
  <div class="row">
    <div class="col-4" v-for="product in this.products" :key="product._id">
      <div class="category__products-item">
        <a :href="`/san-pham/` + product._id">
          <img :src="product.productimage[0]" alt="" />
        </a>
        <div class="category__products-item-detail">
          <div class="category__products-item-detail-category">
            {{ product.category }}
          </div>
          <a
            :href="`/san-pham/` + product._id"
            class="category__products-item-detail-name"
          >
            {{ product.productname }}
          </a>
          <div class="category__products-item-detail-price">
            <span>{{
              product.saleoff !== 0
                ? Math.round(
                    product.price * (100 / (100 - product.saleoff))
                  ).toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })
                : product.price.toLocaleString("it-IT", {
                    style: "currency",
                    currency: "VND",
                  })
            }}</span>
            <span>{{
              product.price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })
            }}</span>
          </div>
          <span class="product__sale">{{ product.saleoff }}%</span>
          <div v-if="product.state == 'OUTOFSTOCKING'" class="out-of-stock">
            Hết hàng
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  props: {
    category: {
      type: String,
    },
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {},
  async created() {
    const route = useRoute();
    const path = computed(() => route.path);
    const separatePath = path.value.split("/");
    if (
      separatePath[separatePath.length - 1].includes(
        separatePath[separatePath.length - 2]
      )
    ) {
      await axios
        .get(
          `https://server-denstore.herokuapp.com/api/products/firm/${this.category}`
        )
        .then((res) => {
          this.products = res.data.data;
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    } else {
      await axios
        .get(
          `https://server-denstore.herokuapp.com/api/products/category/${this.category}`
        )
        .then((res) => {
          this.products = res.data.data;
        })
        .catch((err) => {
          console.log(err);
          return;
        });
    }
  },
};
</script>

<style lang="css" scoped>
.category__products-item {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.category__products-item > a > img {
  width: 20rem;
  height: 20rem;
  object-fit: cover;
}

.category__products-item-detail {
  margin: 1rem;
}

.category__products-item-detail * {
  font-size: 1.5rem;
}

.category__products-item-detail-category {
  font-size: 1rem;
  color: var(--color-text-blur);
}

.category__products-item-detail-name {
  font-weight: 900;
  cursor: pointer;
}

.category__products-item-detail-price > span:first-child {
  text-decoration: line-through;
  color: var(--color-text-blur);
  margin-right: 2rem;
}

.category__products-item-detail-price > span:last-child {
  font-weight: 800;
}

.product__sale {
  background-color: var(--color-red);
  box-shadow: 0 0 0.3rem 0.3rem var(--color-red);
}
</style>
