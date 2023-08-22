<template>
    <div class="card">
    <h5 class="card-header">{{title}}</h5>
    <div class="card-body">
      <div class="data-pervalue d-flex justify-content-start align-items-center">
        <label class="label-input" for="name">Name</label>
        <div class="data-value">: {{ name }}</div>   
      </div>
      <div class="data-pervalue d-flex justify-content-start align-items-center">
        <label class="label-input mt-10" for="name">Email Address</label>
        <div class="data-value">: {{ email }}</div>
      </div>
      <div class="data-pervalue d-flex justify-content-start align-items-center">
        <label class="label-input" for="name">Gender</label>
        <div class="data-value">: {{ gender }}</div>
      </div>
      <div class="data-pervalue d-flex justify-content-start align-items-center">
        <label class="label-input" for="name">Status</label>
        <div class="data-value">: {{ status }}</div>
      </div>
    </div>
    <div class="card-footer d-flex">
      <button class="back" @click="back">BACK</button>
    </div>
    </div>
</template>

<script>
export default (await import('vue')).defineComponent({
  props: {
    title: String,
    name: String,
    email: String,
    gender: String,
    status: String
  },
  methods: {
    back () {
      this.$emit('backhome')
    },
  }
})
</script>

<style scoped>
.card{
  width: 475px;
  background: #F2EAE1;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  margin: 108px auto;
  border: none;
}
.card-header{
  border: none;
  background: #F2EAE1;
  border-radius: 20px !important;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  color: #000000;
  margin: 44px auto;
}
.card-footer{
  border: none;
  background: #F2EAE1;
  border-radius: 20px !important;
  padding: 67px 30px 20px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  color: #FFFFFF;
}

.back{
  height: 44px;
  width: 100%;
  background: #B8B8B8;
  border-radius: 4px;
  border: none;
  color: white;
  margin-right: 10px !important;
}

.submit{
  height: 44px;
  width: 100%;
  background: #FEAF00;
  border-radius: 4px;
  border: none;
  color: white;
}

.card-body{
  padding: 0px 30px;
}
.label-input{
  width: 100%;
}

.data-value{
  width: 100%;
}

.input-component{
  height: 44px;
  width: 100%;
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 4px;
  padding: 10px 15px;
}
.data-pervalue{
  margin: 40px 0px;
}
</style>