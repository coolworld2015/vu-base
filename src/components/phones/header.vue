<template>
	<header class="header d-flex justify-content-center align-items-center">
		<form action="/" class="search-form" id="search" style="display: block; position: absolute; top: -55px;">
			<input type="text" class="form-control" placeholder="Пошук платежу" 
			v-model="searchQuery" v-on:click="searchClear" v-on:keyup="changeView">
			<svg class="search-form-svg"><use xlink:href="#maginifierTool"></use></svg>
			<span class="hot-key-hint hot-key-hint--left">/</span>
		</form>
		
		<div class="search-results-header">							
			<div class="search-results-item search-results-choose"></div>
			<div class="search-results-item search-results-sender">Відправник</div>
			<div class="search-results-item search-results-product">Продукт</div>
			<div class="search-results-item search-results-transfer">Номер переказу</div>
			<div class="search-results-item search-results-currency">Валюта</div>
			<div class="search-results-item search-results-amount">Сума</div>
			<div class="search-results-item search-results-date">Дата</div>
			<div class="search-results-item search-results-result">Дійсний</div>
			<div class="search-results-item search-results-status">Статус</div>
			<div class="search-results-item search-results-other"></div>
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
		}
	}	
}
</script>
