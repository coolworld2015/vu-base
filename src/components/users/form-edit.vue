<template>
  <div v-if="loading">
    <div style="position: relative; top: 100px; -webkit-box-align:center; -webkit-box-pack:center; display:-webkit-box; font-size:54px">
      <img src="../../assets/img/loading.gif">
    </div>
  </div>

  <div v-else>
    <form class="payment-form payment-form--create d-flex justify-content-stretch" autocomplete="off">
      <fieldset class="sender-data form-section-wrapper">
        <legend>Користувач: {{ name }}</legend>

        <div class="form-section" style="width: 100%;">
          <div class="form-group">
            <label for="senderSurname">Користувач</label>
            <input type="text" class="form-control" id="senderSurname" placeholder="Користувач" v-model="name">
            <div class="invalid-feedback">
              Будь ласка, коректно вкажіть прізвище відправника.
            </div>
          </div>

          <div class="form-group">
            <label for="senderName">Пароль</label>
            <input type="text" class="form-control" id="senderName" placeholder="Пароль" v-model="pass">
            <div class="invalid-feedback">
              Будь ласка, коректно вкажіть ім'я відправника.
            </div>
          </div>

          <div class="form-group">
            <label for="senderPatronymic">ID</label>
            <input type="text" class="form-control" id="senderPatronymic" placeholder="ID" v-model="id">
            <div class="invalid-feedback">
              Будь ласка, коректно вкажіть по-батькові відправника.
            </div>
          </div>

          <div class="form-group">
            <label for="senderPatronymic">Description</label>
            <input type="text" class="form-control" id="senderPatronymic1" placeholder="Description" v-model="description">
            <div class="invalid-feedback">
              Будь ласка, коректно вкажіть по-батькові відправника.
            </div>
          </div>

        </div>
      </fieldset>
    </form>

    <div class="form-info">
      <div class="d-flex justify-content-center">
        <button class="btn btn-danger" v-on:click="updateItem">Відправити</button>
        <button class="btn btn-danger" v-on:click="deleteConfirm">Видалити</button>
      </div>
    </div>

  </div>
</template>

<script>
import appConfig from '../../main';
import navbar from '@/components/common/navbar';

export default {
	name: 'users-edit',
	data() {
		return {
			name: '',
			pass: '',
			description: '',
			amount: '',
			loading: false
		}
	},
	created() {
		if (!appConfig.user) {
			this.$router.push('/users');
		} else {
			this.setData();
		}
	},
	methods: {
		setData() {
			if (appConfig) {
				if (appConfig.user) {
					this.id = appConfig.user.id;
					this.name = appConfig.user.name;
					this.pass = appConfig.user.pass;
					this.description = appConfig.user.description;
				}
			}
		},
		goBack() {
			this.$router.push('/users');
		},
		deleteConfirm() {
			appConfig.$emit('showModal', {
			  elName: 'modal-confirmation',
			  confirm: this.deleteItem,
			  html: `Ви дійсно хочете видалити користувача <span class="confirm-amount">${ this.name }?</span>`
			})
		},
		deleteItem() {
		  this.loading = true;
		  this.$http.post('https://jwt-base.herokuapp.com/api/users/delete', {
			id: this.id,
			authorization: appConfig.access_token
		  })
			.then(result => {
			  this.$router.push('/users');
			})
		},
		updateItem() {
			this.loading = true;
			this.$http.post('https://jwt-base.herokuapp.com/api/users/update', {                
					id: this.id,
					name: this.name,
					pass: this.pass,
					description: this.description,
					authorization: appConfig.access_token
				})
				.then(result => { 
					this.$router.push('/users');
				})
		},
	}
}
</script>
