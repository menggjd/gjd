<template>
    <div class="arc">
        <li v-for="li in todos" :key="li.index">
      <p> 用户id:{{li.id}}</p>
<p> 用户姓名:{{li.name}}</p>
<p> 用户地址:{{li.add}}</p>
        </li>

    </div>
</template>

<script>
export default {
    name: 'arc',
    data() {
        return {
            todos: [
                {
                    id: '001',
                    name:'john',
                    add:'city',
               
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