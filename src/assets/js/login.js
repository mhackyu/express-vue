const app = new Vue({
  el: '#login-form',
  data: {
    form: {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      fetch('/v1/auth/login', {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(this.form)
      })
        .then(result => {
          return {
            ...result.json(),
            status: result.status
          }
        })
        .then(result => {
          if (result.status === 200) {
            window.location.href = '/admin';
          } else {
            console.log(result.status);
          }
        })
        .catch(err => {
          alert('Something went wrong');
        });
    }
  }
});