<template>
	<div class="wrapper">
		<navbar></navbar>
		<div class="content">
			<main>
				<section class="search-results">
					<phones-header></phones-header> 
					<phones-items></phones-items>
				</section>
				<phones-footer></phones-footer> 
			</main>
		</div>
	</div>
</template>

<script>
import appConfig from '../../main';
import navbar from '@/components/common/navbar';
import phonesHeader from '@/components/phones/header';
import phonesItems from '@/components/phones/items';
import phonesFooter from '@/components/phones/footer';

export default {
  name: 'phones',
  data () {
    return {
      route: 'Phones'
    }
  },
	created() {
		if (!appConfig.access_token) {
			this.$router.push('/login');
		} 
		appConfig.route = this.route;		
		appConfig.http = true;			
	},
	components: {
		navbar:	navbar,
		phonesHeader: phonesHeader,
		phonesItems: phonesItems,
		phonesFooter: phonesFooter
	}
}
</script>
