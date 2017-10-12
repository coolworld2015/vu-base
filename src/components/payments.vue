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
import navbar from '@/components/navbar'

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
