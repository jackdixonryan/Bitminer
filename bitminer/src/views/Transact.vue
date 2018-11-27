<template>
  <div>
    <p style="background-color:tan; text-align: center; line-height: 2; font-size: 20px; padding-top: 40px; font-family: 'rye'">Your balance is {{ balance }} credits.</p>
    <div id="items-map">
      <SaleItem v-for="item in items" :key="item.name" :name="item.name" :price="item.price" :image="item.image" @purchased="balance -= $event"/>
    </div>
  </div>
</template>

<script>
import SaleItem from "../components/SaleItem.vue"
export default {
  components: { SaleItem },
  data() {
    return {
      items: [
        {
          name: "pickaxe",
          price: 5,
          image: "don't worry about it."
        },
        {
          name: "mine-meter",
          price: 1,
          image: "Serioiusly."
        }
      ],
      balance: 10,
    }
  },
}
</script>

<style>

  #items-map {
    background-color: tan;
    height: 25em;
    display: flex;
  }
</style>
