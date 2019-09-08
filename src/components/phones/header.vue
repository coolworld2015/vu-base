<template>
  <header class="header d-flex justify-content-center align-items-center">
    <form v-show="name" class="search-form" id="search" style="display: block; position: absolute; top: -55px;">
      <input type="text" class="form-control" placeholder="Search by name"
             v-model="searchQuery" v-on:click="searchClear" v-on:keyup="changeView">

      <div v-on:click="searchName">
        <svg class="search-form-svg">
          <use xlink:href="#maginifierTool"></use>
        </svg>
      </div>
    </form>

    <form v-show="phone" class="search-form" id="search" style="display: block; position: absolute; top: -55px;">
      <input type="text" class="form-control" placeholder="Search by phone"
             v-model="searchQuery" v-on:click="searchClear" v-on:keyup="changeView">

      <div v-on:click="searchPhone">
        <svg class="search-form-svg">
          <use xlink:href="#maginifierTool"></use>
        </svg>
      </div>
    </form>

    <div class="search-results-header">
      <div class="search-results-item search-results-choose"></div>
      <div class="search-results-item search-results-sender" style="left: 25px;" v-on:click="changeSearch('name')">
        Name
      </div>
      <div class="search-results-item search-results-product" v-on:click="changeSearch('phone')">Phone</div>
      <div class="search-results-item search-results-sender" style="left: 60px;">Street</div>
      <div class="search-results-item search-results-transfer" style="left: 25px;">House</div>
      <div class="search-results-item search-results-amount" style="left: 35px;">Apt</div>
      <div class="search-results-item search-results-result" style="left: 55px;">ZIP Code</div>
    </div>
  </header>
</template>

<script>
  import appConfig from '../../main'

  export default {
    name: 'users-header',
    data () {
      return {
        searchQuery: '',
        searchType: 'name',
        name: true,
        phone: false
      }
    },
    created () {
      appConfig.$on('clearHeader', () => {
        this.searchClear()
      })
    },
    methods: {
      changeSearch (value) {
        if (value === 'name') {
          this.name = true
          this.phone = false
          this.searchType = 'name'
        }

        if (value === 'phone') {
          this.name = false
          this.phone = true
          this.searchType = 'phone'
        }
      },
      changeView () {
        appConfig.$emit('searchQueryPhones', this.searchQuery, this.searchType)
      },
      searchClear () {
        this.searchQuery = ''
        appConfig.$emit('searchQueryPhones', this.searchQuery)
      },
      searchName () {
        appConfig.$emit('searchName', this.searchQuery)
      },
      searchPhone () {
        appConfig.$emit('searchPhone', this.searchQuery)
      }
    }
  }
</script>
