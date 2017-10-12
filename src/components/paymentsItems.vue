<template>
	<div v-if="loading">
	  <div class="fa fa-circle-o-notch fa-spin" 
		style="position: relative; 
			top: 200px; 
			-webkit-box-align:center;
			-webkit-box-pack:center;
			display:-webkit-box;
			font-size:54px">
		</div>
	</div>
	
	<div class="search-results-content" v-else>
		<div class="payment" v-for="item in items" v-on:click="showDetails(item)">
			<div class="search-results-item search-results-choose"><span class="circle"></span></div>
			<div class="search-results-item search-results-sender">{{ item.cashdesk_system_id }}</div>
			<div class="search-results-item search-results-product">{{ item.sender.cashdesk.city_id }}</div>
			<div class="search-results-item search-results-transfer">{{ item.cashdesk_registration_id }}</div>
			<div class="search-results-item search-results-currency">UAH</div>
			<div class="search-results-item search-results-amount">{{((+item.amount).toFixed(2)).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")}}</div>
			<div class="search-results-item search-results-date">01 Жовтня 2017</div>
			<div class="search-results-item search-results-result long-term">
				<span class="search-results-icon"></span>
				30 днів
			</div>
			<div class="search-results-item search-results-status active">
				<svg class="search-results-svg"><use xlink:href="#flag"></use></svg>
				Активний
			</div>
			<div class="search-results-item search-results-other">...</div>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import appConfig from '../main';

export default {
	name: 'payments-items',
	data() {
	  return {
		items: [],
		filteredItems: [],
		loading: false,
		clicked: false
	  }
	},
	created() {
		this.fetchData();
 
	},
	methods: {
		fetchData() {
			this.$http.post('http://10.18.10.8:3000/payment/listall', {id: 'id'})
				.then(result => {
					this.items = result.data;
					this.filteredItems = result.data;
					this.loading = false;
					bus.$emit('itemsCount', result.data.length);
				})
		},
		onItem(item) {
			if (this.clicked) {
				this.clicked = false;
			} else {
				this.clicked = true;
			}
			console.log(item.id);
			//this.clicked = true;
		},
		onChangeText(e) {
			var text = appConfig.searchQuery;
			var arr = [].concat(this.state.filteredItems);
			//var items = arr.filter((el) => el.cashdesk_system_id.toLowerCase().indexOf(text.toLowerCase()) != -1);
			this.items = items;
		},
		showItem(item){
			this.$router.push({ path: '/user-item/' + item.id + '/' + item.name + '/' + item.pass + '/' + item.description });
		},				
		showDetails(item){
			appConfig.payment = item;
			console.log(appConfig.payment);
			this.$router.push('payment-edit');
		},
		sort(a, b) {
			let nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
			if (nameA < nameB) {
				return -1
			}
			if (nameA > nameB) {
				return 1
			}
			return 0;
		}				
	}
}
</script>
