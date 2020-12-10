<template>
  <div class="modal">
        <div class="modalContainer">
            <div class="modalHeading">
                Modal Heading <button @click="$event()">Close</button>
            </div>
            <div class="modalContent">
                 <slot></slot>   
            </div>
        </div>
    </div>
</template>

<script>
export default {
   
    data(){
        return{
            
        }
        
    },

    props: ["showModal"],
    methods: {
        closeModal(){
                this.showModal = false;
            }
    }

}
</script>

<style scoped>

.modal{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.modalContainer{
    background: #FFFFFF;
    margin: 30px auto; 
    width: 555px;  
}
.modalHeading{
    background: rgba(0, 0, 0, 0.4);
    margin: auto;
    padding: 6px;
}
.modalHeading button{
    left: 10px;
    float: right;
}
.modalContent{
    min-height: 333px;
    margin: auto;
    padding: 44px;
    background: #06307C;
    color: #FFFFFF;
}
button{
    color: red;
}
</style>