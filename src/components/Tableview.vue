<template>
    <table>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Active</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in dataTable" v-bind:key="user.id" >
                <td>
                    <img src="../assets/images/pexels-photo-2379004 2.svg" alt="profile" width="50" height="50">
                </td>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.gender}}</td>
                <td>{{user.status}}</td>
                <td>
                    <button class="btn-action mx-2" @click="viewUser (user.id)">
                        <img src="../assets/images/view.svg" alt="view">
                    </button>
                    <button class="btn-action mx-2" @click="updateUser (user.id)">
                        <img src="../assets/images/edit.svg" alt="edit">
                    </button>
                    <button class="btn-action mx-2" @click="deleteUser(user.id)">
                        <img src="../assets/images/delete.svg" alt="delete">
                    </button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axiosInstances from '../apis/server'

export default (await import('vue')).defineComponent({
    data: function () {
        return {
            dataTable: []
        }
    },
    mounted() {
        this.getData()
    },
    methods: {
        getData () {
            axiosInstances({
            url: '/public/v2/users',
            method: 'get'    
            })
            .then(({data}) => {
                this.dataTable = data
            })
            .catch((error) => {
                alert(error)
            })
        },
        viewUser(id) {
            this.$router.push({name: 'detail-user', query: {id : id}})
        },
        updateUser(id) {
            this.$router.push({name: 'update-user', query: {id : id}})
        },
        deleteUser(id) {
            axiosInstances({
                url: '/public/v2/users/' + id,
                method: 'delete'
            })
            .then((res) => {
                alert('Delete Data Success')
                this.getData()
            })
            .catch((error) => {
                alert(error)
            })
        }
    }
})
</script>

<style>
table{
    width: 100%;
}
.btn-action{
    background: none;
    border: none;
}
</style>