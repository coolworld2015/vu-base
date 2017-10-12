<template>
	<div class="wrapper">
		<navbar></navbar>
		<div class="content">
			<main>
				<section class="search-results">
					 
					<payments-items></payments-items>
				</section>
				 
			</main>
		</div>

	</div>
</template>

<script>
import appConfig from '../main';
import navbar from '@/components/navbar';
import paymentsItems from '@/components/paymentsItems';

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
		navbar:	navbar,
		paymentsItems: paymentsItems
	}
}
</script>
