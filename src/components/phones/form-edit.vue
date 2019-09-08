<template>
  <div v-if="loading">
    <div
      style="position: relative; top: 100px; -webkit-box-align:center; -webkit-box-pack:center; display:-webkit-box; font-size:54px">
      <img src="../../assets/img/loading.gif" alt="">
    </div>
  </div>

  <div v-else>
    <div style="width: 25%; font-size: 22px; font-weight: bold; margin: auto auto 10px;">
      <div style="text-align: center; padding-right: 40px;">{{ name }}</div>
    </div>
    <form class="payment-form payment-form--create d-flex justify-content-stretch" autocomplete="off">
      <fieldset class="sender-data form-section-wrapper">
        <div class="form-section" style="width: 100%;">
          <div class="form-group">
            <label for="senderSurname">Name</label>
            <input type="text" class="form-control" id="senderSurname" placeholder="Name" v-model="name">
            <div class="invalid-feedback">
              Будь ласка, коректно вкажіть прізвище відправника.
            </div>
          </div>

          <div class="form-group">
            <label for="senderName">Phone</label>
            <input type="text" class="form-control" id="senderName" placeholder="Phone" v-model="phone">
            <div class="invalid-feedback">
              Будь ласка, коректно вкажіть ім'я відправника.
            </div>
          </div>

          <div class="form-group">
            <label>Street</label>
            <input type="text" class="form-control" placeholder="Street" v-model="street">
            <div class="invalid-feedback">
              Будь ласка, коректно вкажіть по-батькові відправника.
            </div>
          </div>

          <div class="form-group">
            <label>House</label>
            <input type="text" class="form-control" placeholder="House" v-model="house">
            <div class="invalid-feedback">
              Будь ласка, коректно вкажіть по-батькові відправника.
            </div>
          </div>

          <div class="form-group">
            <label>Apt</label>
            <input type="text" class="form-control" placeholder="Apt" v-model="apt">
            <div class="invalid-feedback">
              Будь ласка, коректно вкажіть по-батькові відправника.
            </div>
          </div>

          <div class="form-group">
            <label>ZIP Code</label>
            <input type="text" class="form-control" placeholder="ZIP Code" v-model="index">
            <div class="invalid-feedback">
              Будь ласка, коректно вкажіть по-батькові відправника.
            </div>
          </div>

          <div class="d-flex justify-content-center" style="margin-top: 30px;">
            <button class="btn btn-danger" v-on:click="goBack" style="margin: 10px; width: 100px; font-size: 14px;">
              Back
            </button>

          </div>

        </div>
      </fieldset>
    </form>

  </div>
</template>

<script>
  import appConfig from '../../main'

  export default {
    name: 'users-edit',
    data () {
      return {
        name: '',
        phone: '',
        street: '',
        house: '',
        apt: '',
        index: '',
        loading: false
      }
    },
    created () {
      if (!appConfig.phone) {
        this.$router.push('/phones')
      } else {
        this.setData()
      }
    },
    methods: {
      setData () {
        if (appConfig) {
          if (appConfig.phone) {
            this.id = appConfig.phone.id
            this.name = appConfig.phone.name
            this.phone = appConfig.phone.phone
            this.street = appConfig.phone.street
            this.house = appConfig.phone.house
            this.apt = appConfig.phone.apt
            this.index = appConfig.phone.index
          }
        }
      },
      goBack () {
        this.$router.push('/phones')
      }
    }
  }
</script>
