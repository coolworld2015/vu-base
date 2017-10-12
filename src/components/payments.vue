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
import navbar from '@/components/navbar';
import appConfig from '../main';

export default {
  name: 'payments',
  data () {
    return {
      route: 'Payments'
    }
  },
	created() {
		appConfig.route = this.route;			
	},
	components: {
		navbar
	}
}
</script>
