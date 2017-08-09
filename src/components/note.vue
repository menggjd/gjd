<template>
    <div id="xyb">
        <div class="note">
            <el-input name="text" placeholder="请输入姓名" v-model="names">
                <el-button slot="prepend">姓名</el-button>
            </el-input>
            {{names}}
        </div>
        <div class="xh">
            <el-input name="text" placeholder="请输入学号" v-model="xhh">
                <el-button slot="prepend">学号</el-button>
            </el-input>
                       {{xhh}}
        </div>
        <el-button type="primary" @click="add()">添加</el-button>
        <div style="width:1200px;margin:0 auto;margin-top:30px;">
            <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 760px;">
                <tr>
                    <th>#</th>
                    <th>姓名</th>
                    <th>学号</th>
                    <th>操作</th>
                </tr>
                 <tr v-for="(list,id) in lists"  :key="list.id">
 <td>{{id+1}}</td>
                     <td>{{list.name}}</td>
                      <td>{{list.xh}}</td>
                       <td><el-button @click="del(id)">删除</el-button></td>
                 </tr>
                 <tr v-show="lists.length==0">
                     <p>暂无数据......</p>
                 </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'xyb',
    data() {
   
        return {
                 names:'',
        xhh:'',
            lists: [
           

            ]
        
        }
    
    },
methods:{
    add:function()
    {
        if(this.names=="")
        {
            alert("请输入姓名")
        }
        else{
                 this.lists.push({
             name:this.names,
             xh:this.xhh,
       })
        }
  
    },
    del:function(id)
    {
          this.lists.splice(id,1)
    }
}

    
}
</script>


<style>
.el-select .el-input {
    width: 110px;
}

.xh {
    margin-top: 20px;
}

.el-button {
    width: 200px;
    margin-top: 20px;
}
</style>