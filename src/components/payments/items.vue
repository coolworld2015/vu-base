<template>
	<div v-if="status === 'loading'">
		<div style="position: relative; top: 100px; -webkit-box-align:center; -webkit-box-pack:center; display:-webkit-box; font-size:54px">
			 <img src="../../assets/img/loading.gif">
		</div>
	</div>
	
	<div v-else-if="status === 'show'" class="search-results-content">
		<div class="payment" v-for="item in items" v-bind:class="{ selected: clicked }" v-on:click="showDetails(item)">
			<div class="search-results-item search-results-choose"><span class="circle"></span></div>
			<div class="search-results-item search-results-sender">{{ item.id }}</div>
			<div class="search-results-item search-results-product">{{ item.id }}</div>
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
	name: 'payments-items',
	data() {
	  return {
		items: [],
		filteredItems: [],
		recordsCount: 20,
		positionY: 0,
		status: 'loading',
		clicked: false
	  }
	},
	created() {
		this.fetchData();
		appConfig.$on('searchQuery', searchQuery => {
			this.searchQuery = searchQuery;
			var arr = [].concat(appConfig.payments.items);
			var items = arr.filter((el) => el.id.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1);
			this.filteredItems = items;
			this.items = items.slice(0, 20);
			this.positionY = 0;
			this.recordsCount = 20;
			
			appConfig.$emit('itemsCount', items.length);
			if (searchQuery == '') {
				this.items = appConfig.payments.items.slice(0, 20);
				this.filteredItems = appConfig.payments.items;
			}
		})
	},
	methods: {
		fetchData() {
			//this.$http.post('http://10.18.10.8:3000/payment/listall', {id: 'id'})
			this.$http.get('https://ui-base.herokuapp.com/api/audit/get')
				.then(result => {
					appConfig.payments.items = result.data.sort(this.sort);
					this.items = result.data.sort(this.sort).slice(0, 20);
					this.filteredItems = result.data.sort(this.sort);
					this.status = 'show';
					appConfig.$emit('itemsCount', result.data.length);
					setTimeout(()=>{document.querySelector('.search-results-content').addEventListener('scroll', this.handleScroll)}, 100);
				}).catch((error)=> {
					this.status = 'error';
				})
		},
		handleScroll() {
			var position = document.querySelector('.search-results-content').scrollTop;
			var items, positionY, recordsCount;
			recordsCount = this.recordsCount;
			positionY = this.positionY;
			items = this.filteredItems.slice(0, recordsCount);
			
			if (position > positionY) {
				//console.log(items.length);
				//console.log(position);
				this.items = items;
				this.recordsCount = recordsCount + 10;
				this.positionY = positionY + 600;
			}
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
		showDetails(item){
			appConfig.payment = item;
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
/*
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
*/
/*
<div class="search-results-content" v-else>
	<div class="payment" v-for="item in items" v-bind:class="{ selected: clicked }" v-on:click="onItem(item)">
		<div class="search-results-item search-results-choose"><span class="circle"></span></div>
		<div class="search-results-item search-results-sender">{{ item.id }}</div>
		<div class="search-results-item search-results-product">{{ item.id }}</div>
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
*/