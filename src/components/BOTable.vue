<script>
import { MDBTable } from "mdb-vue-ui-kit";
import NioSlatTable from "@narrative.io/tackle-box/src/components/slat/Slat.vue";
import "@narrative.io/tackle-box/src/styles/mixins/slat/_slat.sass";
import { storeToRefs } from "pinia";
import { useBuyOrderStore } from "../store/useBuyOrder";

// const main = useBuyOrderStore();
// const { buyOrderList } = storeToRefs(main);
// const { addBuyOrder } = main;
// console.log(buyOrderList);

export default {
  components: { MDBTable, NioSlatTable },
  data() {
    return {
      buyOrderList: [{}],
    };
  },
  methods: {
    addBuyOrder() {
      alert();
    },
  },
};
</script>

<template>
  <NioSlatTable :items="buyOrderList" :columns="['id', 'name']" />
  <MDBTable>
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Max Bid Price</th>
        <th scope="col">Data Package Type</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(bo, idx) in buyOrderList" :key="idx" @click="addBuyOrder">
        <th scope="row">{{ idx + 1 }}</th>
        <td>{{ bo.name }}</td>
        <td>{{ bo.max_bid_price }}</td>
        <td>{{ bo.data_package_type }}</td>
      </tr>
    </tbody>
  </MDBTable>
</template>

<style>
</style>