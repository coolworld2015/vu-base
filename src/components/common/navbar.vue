<template>
  <aside class="navigation-sidebar" v-bind:class="{ shown: isActive }">
    <nav class="h-100 fp-navbar" onclick="event.preventDefault();return false">
      <ul class="h-100 fp-nav-right" style="margin-left: 5px; padding-top: 2px;">
        <li v-on:click="changeView()">
          <img src="../../assets/img/logo.jpg"
               style="width: 65px; height: 50px; margin-right: 10px; margin-left: 4px; margin-top: -5px;"
               v-on:click="changeView()"
           alt=""/>
          <span style="font-weight: bold; color: white; font-size: 20px; text-shadow: #000 0.15em 0.15em 0.15em;">
						Base 09
					</span>
        </li>
        <li class="fp-nav-item fp-nav-item-right">
          <span class="fp-nav-link menu-block-header">Base 09</span>
        </li>

        <li class="fp-nav-item fp-nav-item-right" v-on:click="changeRoute('phones')"
            v-bind:class="{ active: phones }">
          <span class="fp-nav-link">Phones</span>
        </li>
        <li class="fp-nav-item fp-nav-item-right" v-on:click="changeRoute('audits')"
            v-bind:class="{ active: audits }">
          <span class="fp-nav-link">Audits</span>
        </li>
        <li class="fp-nav-item fp-nav-item-right" v-on:click="changeRoute('users')"
            v-bind:class="{ active: users }">
          <span class="fp-nav-link">Users</span>
        </li>
        <li class="fp-nav-item fp-nav-item-right" v-on:click="changeRoute('')"
            v-bind:class="{ active: logout }">
          <span class="fp-nav-link">Logout</span>
        </li>
      </ul>

      <ul class="h-100 fp-nav-left" style="box-shadow: 3px 0 10px 0 rgba(0,0,0,0.35);}">
        <li class="fp-nav-item fp-nav-item-left li-border-bottom" v-on:click="changeView()">
          <span class="fp-nav-link" id="showNav" title="Base 09">09</span>
          <span class="hot-key-hint">~</span>
        </li>
        <li class="fp-nav-item fp-nav-item-left">
          <span class="fp-nav-link"></span>
          <span class="hot-key-hint">1</span>
        </li>

        <li class="fp-nav-item fp-nav-item-left" v-on:click="changeRoute('phones')"
            v-bind:class="{ active: phones }">
          <span class="fp-nav-link" title="Phones">PH</span>
          <span class="hot-key-hint">2</span>
        </li>
        <li class="fp-nav-item fp-nav-item-left" v-on:click="changeRoute('audits')"
            v-bind:class="{ active: audits }">
          <span class="fp-nav-link" title="Audits">AU</span>
          <span class="hot-key-hint">4</span>
        </li>
        <li class="fp-nav-item fp-nav-item-left" v-on:click="changeRoute('users')"
            v-bind:class="{ active: users }">
          <span class="fp-nav-link" title="Users">US</span>
          <span class="hot-key-hint">5</span>
        </li>
        <li class="fp-nav-item fp-nav-item-left" v-on:click="changeRoute('')"
            v-bind:class="{ active: logout }">
          <span class="fp-nav-link" title="Logout">LO</span>
          <span class="hot-key-hint">5</span>
        </li>
      </ul>
    </nav>
  </aside>
</template>

<script>
  import appConfig from '../../main'

  export default {
    name: 'navbar',
    data: function () {
      return {
        searchQuery: '',
        route: appConfig.route,
        isActive: false,
        phones: null,
        find: null,
        audits: null,
        users: null,
        login: null,
        logout: null
      }
    },
    created () {
      this.init()
    },
    methods: {
      init () {
        this.phones = this.route === 'Phones'

        this.audits = this.route === 'Audits'

        if (this.route === 'Users') {
          this.users = true
        } else {
          this.users = false
        }
      },
      changeView () {
        if (this.isActive !== false) {
          this.isActive = false
        } else {
          this.isActive = true
        }
      },
      changeRoute (route) {
        event.preventDefault()
        this.$router.push('/' + route)
        return false
      }
    }
  }

</script>

