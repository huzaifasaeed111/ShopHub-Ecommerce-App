<template>
    <div class="container">
        <div class="card text-center">
            <div style=" height:200px; width:200px;  margin:0 auto;">
              <i class="checkmark">✓</i>
            </div>
              <h1>Success</h1> 
              <p>We received your purchase request;<br/> we'll be in touch shortly!</p>
        </div>
    </div>
</template>

<script>
    export default{
        name: 'okPage',
    }
</script>

<style scoped>
h1 {
    color: #a78252;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-weight: 900;
    font-size: 40px;
    margin-bottom: 10px;
  }
  p {
    color: #404F5E;
    font-family: "Nunito Sans", "Helvetica Neue", sans-serif;
    font-size:20px;
    margin: 0;
  }
i {
  color: #7e683a;
  font-size: 100px;
  line-height: 200px;
  margin-left:-15px;
}
.card {
  background: white;
  padding: 60px;
  border-radius: 4px;
  box-shadow: 0 2px 3px #C8D0D8;
  display: inline-block;
  margin: 0 auto;
}
</style>