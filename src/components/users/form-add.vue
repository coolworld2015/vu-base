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
<!--
          <div class="form-group">
            <label for="senderPatronymic">ПНФП</label>
            <input type="text" class="form-control" id="senderPatronymic" placeholder="ПНФП" v-model="pnfp">
            <div class="invalid-feedback">
              Будь ласка, коректно вкажіть по-батькові відправника.
            </div>
          </div>
-->
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
        <button class="btn btn-danger" v-on:click="addItem">Відправити</button>
        <button class="btn btn-danger" v-on:click="goBack">Назад</button>
      </div>
    </div>

  </div>
</template>

<script>
import appConfig from '../../main';
import navbar from '@/components/common/navbar';

export default {
	name: 'users-add',
	data() {
		return {
			name: '',
			pass: '',
			description: '',
			amount: '',
			role: '',
			pnfp: '',
			receiverPhone: '',
			receiverPhoneErr: false,
			loading: false
		}
	},
	created() {
               const notification = {
                title: 'Недостатньо коштів у касі',
                message: 'Увага! В касі недостатньо грошових коштів для здійснення повернення переказу. Необхідно здійснити підкріплення',
                important: true
              }
			  const notification1 = {
              title: 'Переказ повернуто',
              message: `Переказ   повернуто успішно`
            }
 

            appConfig.notifications.items.push(notification, notification1)
 
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
		isValid (data) {
			if (/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(data)) {
				console.log('Valid')
				this.receiverPhoneErr = false;
			} else {
				console.log('BAD')
				this.receiverPhoneErr = true;
			}
		},
		goBack() {
			this.$router.push('/users');
		},
		addItem() {
			this.loading = true;
			this.$http.post('https://ui-base.herokuapp.com/api/users/add', {                
					id: +new Date,
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
