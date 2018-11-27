<template>
  <div class="item">
    <h3>{{name}}</h3>
    <img :src="image" :alt="name">
    <p>{{price}} credit(s)</p>
    <button class="purchase-item" @click="purchaseItem">Purchase</button>
  </div>
</template>

<script>
export default {
  props: [
    "name",
    "price",
    "image"
  ],
  methods: {
    purchaseItem() {
      this.$emit('purchased', this.price);
    }
  }
}
</script>

<style lang="scss">

.item {
  background-color: whitesmoke;
  flex: 1;
  border: 1px brown solid;
  margin: 4em;
  text-align: center;
  h3 {
    font-family: "rye", sans-serif;
    text-transform: uppercase;
    line-height: 2;
    font-size: 1.5em;
  }
  p {
    margin-top: 2em;
  }
  button {
    margin-top: 2em;
  }
}

.purchase-item {
  height: 2.5em;
  font-size: 1.5em;
  background: none;
  background-color: white;

}

</style>
