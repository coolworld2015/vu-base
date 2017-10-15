<template>
	<div class="wrapper" style="background: #dc3545;">
		<div class="content" style="background: #dc3545;">
			<div style="width: 400px; padding: 45px 90px 30px;
					margin: 160px auto; border-radius: 3px;
					color: #000; background: #fff;
					box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.5); text-align: center;">
				<div class="col-sm-12 d-flex flex-column justify-content-around">
					<form class="align-self-center login-form" autocomplete="off">
						<img src="../../assets/img/logo.jpg" style="margin-bottom: 10px;"> 
						<p class="h5 form-header">Вхід в систему</p>
						<input v-model="name" type="text" class="form-control login-input" id="user" placeholder="Ім'я користувача">
						<input v-model="pass" type="text" class="form-control login-input" id="password" placeholder="Пароль">
						<input type="submit" value="Увійти" class="btn btn-danger button-login" id="login" v-on:click="fetchData">
						<br><span v-show="error" style="font-weight: bold; font-size: 14px; color: #dc3545">Access denied</span>
						<img v-show="loading" src="../../assets/img/loading.gif" style="margin-bottom: -90px; margin-top: -60px;">
					</form>
				</div>
			</div>
		</div>
	</div> 
</template>

<script>
import appConfig from '../../main';

export default {
  name: 'login',
  data () {
    return {
      route: 'Login',
      name: '',
      pass: '',
	  loading: false,
	  error: false
    }
  },
	created() {
		appConfig.route = this.route;			
	},
	methods: {
		fetchData() {
			this.loading = true;
			this.error = false;
			//this.$http.get('https://ui-base.herokuapp.com/api/audit/get')
			this.$http.post('http://jwt-base.herokuapp.com/api/login', 
				{
					name: this.name,
					pass: this.pass,
					description: 'Web'
				})
				.then(result => {
					appConfig.access_token = result.body.token;
					this.loading = false;
					this.error = false;
					this.$router.push('/payments');
				})
				.catch((error)=> {
					this.loading = false;
					this.error = true;
				})
		}
	}
}
</script>
