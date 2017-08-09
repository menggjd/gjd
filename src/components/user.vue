<template>
    <div class="user">
        <li v-for="li in todos" :key="li.index">

      <router-link :to="{name:'arc',params:{id:li.id}}" tag="a" >{{li.id}}</router-link>
      <router-view></router-view>
        </li>
    </div>
</template>

<script>
export default {
    name: 'user',
    data() {
        return {
            todos: [
                {
                    id: '001',
               
                },
                {

                    id: '002',
              
                }

            ]
        }
    }
    
}
</script>
<style>
*
{
    list-style: none;
}
</style>
