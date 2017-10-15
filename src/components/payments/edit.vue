<template>
	<div class="wrapper">
		<navbar></navbar>
		<div class="content">
			<main>
				<section class="search-results">
					<payment-form-edit></payment-form-edit>
				</section>
			</main>
		</div>
	</div>	
</template>

<script>
import navbar from '@/components/common/navbar';
import paymentFormEdit from '@/components/payments/form-edit';

export default {
	name: 'payment-edit',
	components: {
		navbar:	navbar,
		paymentFormEdit: paymentFormEdit
	}
}
</script>
