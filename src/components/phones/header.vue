<template>
	<header class="header d-flex justify-content-center align-items-center">
		<form class="search-form" id="search" style="display: block; position: absolute; top: -55px;">
			<input type="text" class="form-control" placeholder="Search by name" 
				v-model="searchQuery" v-on:click="searchClear" v-on:keyup="changeView">
				
			<div v-on:click="searchName">
				<svg class="search-form-svg">
					<use xlink:href="#maginifierTool" ></use>
				</svg>
			</div>
			<span class="hot-key-hint hot-key-hint--left">/</span>
		</form>

		<div class="search-results-header">
			<div class="search-results-item search-results-choose"></div>
			<div class="search-results-item search-results-sender" style="left: 25px;">Name</div>
			<div class="search-results-item search-results-product">Phone</div>
			<div class="search-results-item search-results-sender" style="left: 60px;">Street</div>
			<div class="search-results-item search-results-transfer" style="left: 25px;">House</div>
			<div class="search-results-item search-results-amount" style="left: 35px;">Apt</div>
			<div class="search-results-item search-results-result" style="left: 55px;">ZIP Code</div>
		</div>
	</header>	
</template>

<script>
import appConfig from '../../main';

export default {
	name: 'users-header',
	data() {
	  return {
		searchQuery: ''
	  }
	},
	methods: {
		changeView() {
			appConfig.$emit('searchQuery', this.searchQuery);
		},
		searchClear() {
			this.searchQuery = '';
			appConfig.$emit('searchQuery', this.searchQuery);
		},
		searchName() {
			appConfig.$emit('searchName', this.searchQuery);
		}
	}	
}
</script>
