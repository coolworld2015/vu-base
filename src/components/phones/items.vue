<template>
	<div v-if="status === 'loading'">
		<div style="position: relative; top: 100px; -webkit-box-align:center; -webkit-box-pack:center; display:-webkit-box; font-size:54px">
			 <img src="../../assets/img/loading.gif">
		</div>
	</div>

	<div v-else-if="status === 'show'" class="search-results-content">
 
		<div class="payment" v-for="item in items" v-on:click="showDetails(item)">
			<div class="search-results-item search-results-choose"><span class="circle"></span></div>
			<div class="search-results-item search-results-sender">{{ item.name }}</div>
			<div class="search-results-item search-results-transfer">{{ item.phone }}</div>
			<div class="search-results-item search-results-sender">{{ item.street }}</div>
			<div class="search-results-item search-results-transfer">{{ item.house }}</div>
			<div class="search-results-item search-results-amount">{{ item.apt }}</div>

			<div class="search-results-item search-results-result long-term">
				<span class="search-results-icon"></span>
				{{ item.index }}
			</div> 

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
	name: 'phones-items',
	data() {
	  return {
		items: [],
		filteredItems: [],
		recordsCount: 20,
		positionY: 0,
		status: 'show',
		clicked: false,
	  }
	},
	created() { 
		this.items = appConfig.phones.items.sort(this.sort).slice(0, 20);
		this.filteredItems = appConfig.phones.items.sort(this.sort);

		if (appConfig.phones.refresh) {
            appConfig.phones.refresh = false;
			this.fetchData();
		}			
		
		this.notification = {
			title: 'Something went wrong',
			message: 'Server responded with status code error',
			important: true
		}
		appConfig.$on('clearHeader', () => {
			this.status = 'show';
			setTimeout(()=>{document.querySelector('.search-results-content').addEventListener('scroll', this.handleScroll)}, 100);
		})
		appConfig.$on('searchQueryPhones', (searchQuery, searchType) => {
			this.searchQuery = searchQuery;
			let arr = [].concat(appConfig.phones.items);
			let items = [].concat(appConfig.phones.items);
			
			if (searchType == 'name') {
				items = arr.filter((el) => el.name.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1);
			} 
			
			if (searchType == 'phone') {
				items = arr.filter((el) => el.phone.toLowerCase().indexOf(searchQuery.toLowerCase()) != -1);
			}
			
			this.filteredItems = items;
			this.items = items.slice(0, 20);
			this.positionY = 0;
			this.recordsCount = 20;
			appConfig.$emit('itemsCount', items.length);
			if (searchQuery == '') {
				this.items = appConfig.phones.items.slice(0, 20);
				this.filteredItems = appConfig.phones.items;
			}
		})
		appConfig.$on('searchName', searchQuery => {
				this.status = 'loading';
				if (!appConfig.http) {
					return;
				}
				
				if (searchQuery !== '') {
				appConfig.http = false;
				this.$http.get('https://jwt-base.herokuapp.com/api/items/findByName/' + searchQuery, {headers: {'Authorization': appConfig.access_token}})
					.then(result => {
						appConfig.phones.items = result.data.sort(this.sort);
						this.items = result.data.sort(this.sort).slice(0, 20);
						this.filteredItems = result.data.sort(this.sort);
						appConfig.$emit('itemsCount', result.data.length);
						setTimeout(()=>{document.querySelector('.search-results-content').addEventListener('scroll', this.handleScroll)}, 100);
						this.status = 'show';
						appConfig.http = true;
						appConfig.$emit('clearHeader');
					}).catch((error)=> {
						appConfig.notifications.items.push(this.notification);
						this.status = 'show';
						appConfig.http = true;
					})
				}
		}),
		appConfig.$on('searchPhone', searchQuery => {
				this.status = 'loading';
				if (!appConfig.http) {
					return;
				}
				
				if (searchQuery !== '') {
				appConfig.http = false;
				this.$http.get('https://jwt-base.herokuapp.com/api/items/findByPhone/' + searchQuery, {headers: {'Authorization': appConfig.access_token}})
					.then(result => {
						appConfig.phones.items = result.data.sort(this.sort);
						this.items = result.data.sort(this.sort).slice(0, 20);
						this.filteredItems = result.data.sort(this.sort);
						appConfig.$emit('itemsCount', result.data.length);
						setTimeout(()=>{document.querySelector('.search-results-content').addEventListener('scroll', this.handleScroll)}, 100);
						this.status = 'show';
						appConfig.http = true;
						appConfig.$emit('clearHeader');
					}).catch((error)=> {
						appConfig.notifications.items.push(this.notification);
						this.status = 'show';
						appConfig.http = true;
					})
				}
		})
	},
	methods: {
		fetchData() {
			this.status = 'loading';
			this.$http.get('https://jwt-base.herokuapp.com/api/items/get', {headers: {'Authorization': appConfig.access_token}})
				.then(result => {
					appConfig.phones.items = result.data.sort(this.sort);
					this.items = result.data.sort(this.sort).slice(0, 20);
					this.filteredItems = result.data.sort(this.sort);
					this.status = 'show';
					appConfig.$emit('itemsCount', result.data.length);
					setTimeout(()=>{document.querySelector('.search-results-content').addEventListener('scroll', this.handleScroll)}, 100);
				}).catch((error)=> {
					appConfig.notifications.items.push(this.notification);
					this.status = 'show';
					this.$router.push('/login');
				})
		},
		handleScroll() {
			var position = document.querySelector('.search-results-content').scrollTop;
			var items, positionY, recordsCount;
			recordsCount = this.recordsCount;
			positionY = this.positionY;
			items = this.filteredItems.slice(0, recordsCount);
			
			if (position > positionY) {
				this.items = items;
				this.recordsCount = recordsCount + 10;
				this.positionY = positionY + 400;
			}
		},
		onItem(item) {
			if (this.clicked) {
				this.clicked = false;
			} else {
				this.clicked = true;
			}
		},			
		showDetails(item){
			appConfig.phone = item;
			this.$router.push('phone-edit');
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
