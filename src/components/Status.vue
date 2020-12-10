<template>
  <div class="container">
    <h1>Status / Posts</h1>
    <add-status></add-status>
    <div class="statuses">
      <div 
      @dblclick="onDblClick(status)" 
      class="status"
      v-for="status in allStatus" 
      v-bind:class="{'is-complete':status.completed}"
      :key="status.id"
      >
        {{ status.userid }}
        <h3>{{ status.title }}</h3>
        <p>{{ status.body }}</p>
        <i @click="deleteStatus(status.id)">X</i>
      </div>
    </div>
  </div>
</template>

<script>
 import { mapGetters, mapActions } from "vuex";
import AddStatus from './AddStatus.vue';
 export default {
    components:{
        AddStatus
        
    },
    name: "Status",
    methods: {
      ...mapActions(["fetchStatus","deleteStatus", "updateStatus"]),
      onDblClick(status){
        const updTodo = {
          id: status.id,
          title: status.title,
          body: status.body,
          completed: !status.completed
        };
        this.updateTodo(updStatus);
      }
    },
    computed: mapGetters(["allStatus"]),
    created() {
      this.fetchStatus();
    },
 };
</script>

<style scoped>
.container{
    width: 100%;
    min-height: 300px;
}
.statuses{
  margin: 100px;
  position: absolute;
}
.status{
  width: 100%;
  padding: 30px;
  margin: 10px;
  background: white;
  font-size: 18px;
  color: black;
  float: left;
  position: relative;
  border: 1px solid #aeaeae;
  box-shadow: #aeaeae 5px 5px;
}
i{
  color: red;
  bottom: 10px;
  right: 10px;
  cursor: pointer;
  position: absolute;
}

.is-complete{
  color:red;
  background: gray;
}
h3{
    color: rgba(0, 0, 0, 0.377);
}
p{
    color: black;
}

</style>