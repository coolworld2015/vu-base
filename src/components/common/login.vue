<template>
 
<div class="wrapper" style="background: #dc3545;">
<div class="content" style="background: #dc3545;">
 
	<div style="width: 400px;
			padding: 45px 90px 30px;
			margin: 160px auto;
			border-radius: 3px;
			color: #000;
			background: #fff;
			box-shadow: 0px 2px 15px 0px rgba(0,0,0,0.5);
			text-align: center;">
		<div class="col-sm-12 d-flex flex-column justify-content-around">
			<form class="align-self-center login-form">
				<img src="../../assets/img/logo.jpg" style="margin-bottom: 10px;"> 
				<p class="h5 form-header">Вхід в систему</p>
				<input type="text" class="form-control login-input" id="user" placeholder="Ім'я користувача">
				<input type="text" class="form-control login-input" id="password" placeholder="Пароль">
				<input type="submit" value="Увійти" class="btn btn-danger button-login" id="login" v-on:click="fetchData">
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
	  loading: false
    }
  },
	created() {
		appConfig.route = this.route;			
	},
	methods: {
		fetchData() {
			this.loading = true;
			this.$http.get('https://ui-base.herokuapp.com/api/audit/get')
				.then(result => {
					this.loading = false;
					this.$router.push('/');
				}).catch((error)=> {
					this.status = 'error';
				})
		}
	}
}
</script>
