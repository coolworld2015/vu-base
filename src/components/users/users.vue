<template>
	<div class="wrapper">
		<navbar></navbar>
		<div class="content">
			<main>
				<section class="search-results">
					 
					<users-items></users-items>
				</section>
				 
			</main>
		</div>

	</div>
</template>

<script>
import appConfig from '../../main';
import navbar from '@/components/navbar';
import usersItems from '@/components/users/usersItems';

export default {
  name: 'users',
  data () {
    return {
      route: 'Users'
    }
  },
	created() {
		appConfig.route = this.route;			
	},
	components: {
		navbar:	navbar,
		usersItems: usersItems
	}
}
</script>
