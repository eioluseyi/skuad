<template>
  <main>
    <MDBContainer fluid>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle class="d-flex justify-content-between">
            <h4>List</h4>
            <div><MDBBtn color="primary">Add</MDBBtn></div>
          </MDBCardTitle>
          <BOTable />
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  </main>
</template>

<script setup>
import BOTable from "../components/BOTable.vue";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBBtn,
} from "mdb-vue-ui-kit";
</script>
