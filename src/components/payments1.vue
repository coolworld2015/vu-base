<template>
 <div class="wrapper">
    <navbar></navbar>
	<div class="content">
	  <main>
	    <section class="search-results">
          <div style="position: relative; top: 200px; -webkit-box-align:center; -webkit-box-pack:center; display:-webkit-box; font-size:54px">
            Payments
          </div>
        </section>
      </main>
	</div></div>
</template>

<script>
import navbar from '@/components/Navbar'

export default {
  name: 'payments',
  data () {
    return {
      msg: 'test'
    }
  },
	components: {
		navbar
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
