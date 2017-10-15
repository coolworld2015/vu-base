<template>
	<div class="wrapper">
		<navbar></navbar>
		<div class="content">
			<main>
				<section class="search-results">
					<audit-header></audit-header> 
					<audit-items></audit-items>
				</section>
				<audit-footer></audit-footer> 
			</main>
		</div>

	</div>
</template>

<script>
import appConfig from '../../main';
import navbar from '@/components/navbar';
import auditHeader from '@/components/audit/header';
import auditItems from '@/components/audit/items';
import auditFooter from '@/components/audit/footer';

export default {
  name: 'audit',
  data () {
    return {
      route: 'Audit'
    }
  },
	created() {
		appConfig.route = this.route;			
	},
	components: {
		navbar:	navbar,
		auditHeader: auditHeader,
		auditItems: auditItems,
		auditFooter: auditFooter
	}
}
</script>
