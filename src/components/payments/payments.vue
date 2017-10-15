<template>
	<div class="wrapper">
		<navbar></navbar>
		<div class="content">
			<main>
				<section class="search-results">
					<payments-header></payments-header> 
					<payments-items></payments-items>
				</section>
				<payments-footer></payments-footer> 
			</main>
		</div>
	</div>
</template>

<script>
import appConfig from '../../main';
import navbar from '@/components/common/navbar';
import paymentsHeader from '@/components/payments/header';
import paymentsItems from '@/components/payments/items';
import paymentsFooter from '@/components/payments/footer';

export default {
  name: 'payments',
  data () {
    return {
      route: 'Payments'
    }
  },
	created() {
		if (!appConfig.access_token) {
			this.$router.push('/login');
		} 
		appConfig.route = this.route;			
	},
	components: {
		navbar:	navbar,
		paymentsHeader: paymentsHeader,
		paymentsItems: paymentsItems,
		paymentsFooter: paymentsFooter
	}
}
</script>
