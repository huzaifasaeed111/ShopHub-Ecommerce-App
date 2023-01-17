<template>
    <div class="container mt-5 mb-3">
        <div class="row">
            <div class="col-12 text-center">
                <div class="dropdown">
                    <button class="cat-btn dropdown-toggle " type="button" id="dropdownMenuButton1" 
                    data-bs-toggle="dropdown" aria-expanded="false" >
                      See Product Categories
                    </button>
                    <div>
                      <ul class="dropdown-menu cat-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                          <a class="dropdown-item" href="#">
                             category
                          </a>   
                         </li>
                      </ul>
                    </div>
                  </div>
            </div>
        </div>
      </div>
</template>

<script>
   export default{
    name:'categoryButton',
   }
</script>

<style scoped>
.cat-btn{
    padding: 20px;
    color: #585239;
    background-color: white;
    font-size: 1.5rem;
}
.cat-menu{
    width: 315px;
}
</style>