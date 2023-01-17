<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <div class="card my-5">

          <form class="card-body cardbody-color p-lg-5">

            <div class="text-center">
              <i class="fa-solid fa-user user-icon"></i>
            </div>

            <div class="mb-3">
              <input type="text" class="form-control" id="Username" aria-describedby="emailHelp"
                placeholder="User Name">
            </div>
            <div class="mb-3">
              <input type="password" class="form-control" id="password" placeholder="password">
            </div>
            <div class="text-center">
              <router-link to="/CartPage">
                <button type="submit" class="btn btn-color px-5 mb-5 w-100">Login</button>
              </router-link>
            </div>
            <div id="emailHelp" class="form-text text-center mb-5 text-dark">Not
              Registered? <a href="#" class="text-dark fw-bold"> Create an
                Account</a>
            </div>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
    export default{
        name: 'AccountPage',
    }
</script>

<style scoped>
.btn-color{
  background-color: #b8ae86;
  color: #fff;
  
}

.profile-image-pic{
  height: 200px;
  width: 200px;
  object-fit: cover;
}

.user-icon{
  font-size: 50px;
  margin-bottom: 5px;
  color: #b8ae86;
}

.cardbody-color{
  background-color: #f0eae2;
}

a{
  text-decoration: none;
}
</style>