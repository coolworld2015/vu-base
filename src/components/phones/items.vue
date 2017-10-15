<template>
	<div v-if="status === 'loading'">
		<div style="position: relative; top: 100px; -webkit-box-align:center; -webkit-box-pack:center; display:-webkit-box; font-size:54px">
			 <img src="../../assets/img/loading.gif">
		</div>
	</div>

	<div v-else-if="status === 'show'" class="search-results-content">
		<div class="payment" v-for="item in items" v-bind:class="{ selected: clicked }" v-on:click="showDetails(item)">
			<div class="search-results-item search-results-choose"><span class="circle"></span></div>
			<div class="search-results-item search-results-sender">{{ item.name }}</div>
			<div class="search-results-item search-results-product">{{ item.name }}</div>
			<div class="search-results-item search-results-transfer">{{ item.id }}</div>
			<div class="search-results-item search-results-currency">UAH</div>
			<div class="search-results-item search-results-amount">1111</div>
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

	<div v-else-if="status === 'error'">
 		<div style="position: relative; top: 200px; -webkit-box-align:center; -webkit-box-pack:center; display:-webkit-box; color: red; font-weight: bold; font-size:24px">
             Something went wrong
		</div>
	</div>	
</template>

<script>
import Vue from 'vue';
import appConfig from '../../main';

export default {
	name: 'users-items',
	data() {
	  return {
		items: [],
		filteredItems: [],
		status: 'loading',
		clicked: false
	  }
	},
	created() {
		this.fetchData();
		appConfig.$on('searchQuery', searchQuery => {
			this.searchQuery = searchQuery;
			var arr = [].concat(this.filteredItems);
			var items = arr.filter((el) => el.name.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1);
			this.items = items.slice(0, 50);
			appConfig.$emit('itemsCount', items.length);
			
			if (searchQuery == '') {
				this.items = this.filteredItems.slice(0, 50);
			}
		})
	},
	methods: {
		fetchData() {
			this.$http.get('https://ui-base.herokuapp.com/api/items/get')
				.then(result => {
					this.items = result.data.sort(this.sort).slice(0, 50);
					this.filteredItems = result.data.sort(this.sort);
					this.status = 'show';
					appConfig.$emit('itemsCount', result.data.length);
				}).catch((error)=> {
					this.status = 'error';
				})
		},
		onItem(item) {
			if (this.clicked) {
				this.clicked = false;
			} else {
				this.clicked = true;
			}
			//console.log(item.id);
			//this.clicked = true;
		},			
		showDetails(item){
			appConfig.user = item;
			this.$router.push('user-edit');
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
