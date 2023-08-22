<template>
    <main>
        <div class="main-section">
        <div class="d-flex justify-content-between align-items-center">
            <div class="title">
                User List
            </div>
            <div class="create-button">
                <button @click="goToCreateUser" class="btn-create">ADD NEW STUDENT</button>
            </div>
        </div>  
        <hr>  
        <table-view/>       
        </div>   
    </main>
</template>

<script>
import TableView from '../components/Tableview.vue'
export default (await import('vue')).defineComponent({
    components:{
        TableView
    },
    methods:{
        goToCreateUser () {
            this.$router.push({name:'create-user'})
        }
    }
})
</script>

<style>
.main-section{
    padding: 20px 30px;
}
.title-main{
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 27px;
    color: #000000;
}
.btn-create{
    height: 44px;
    width: 199px;
    background: #FEAF00;
    border-radius: 4px;
    border: none;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
}
</style>