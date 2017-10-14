<template>
	<div class="wrapper">
		<navbar></navbar>
		<div class="content">
			<main>
				<section class="search-results">
					<users-form></users-form>
					 
				</section>
			</main>
		</div>
	</div>	
</template>

<script>
import navbar from '@/components/navbar';
import usersForm from '@/components/users/form';

export default {
	name: 'users-edit',
	components: {
		navbar:	navbar,
		usersForm: usersForm
	}
}
</script>
