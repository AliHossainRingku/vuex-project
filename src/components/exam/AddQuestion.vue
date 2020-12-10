<template>
<div>
    <base-dialog v-if="inputIsInvalid" title="Invalid Input!" @close="confirmError">
        <template #default> <!-- v-slot:default means #default -->
            <p>Unfortunately, at least one input value is invalid!</p>
            <p>Please, check all the inputs and make sure that you entered al least a few characters in each field!</p>
        </template>
        <template #actions><!-- v-slot:action means #actions -->
            <base-button @click="confirmError">Okay</base-button>
        </template>
    </base-dialog>
    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label>Question</label>
                <textarea id="question" name="question" type="text" ref="inputQuestion" rows="3"></textarea>
            </div>
            <div class="form-control">
                <label>Option A</label>
                <input id="optionA" name="optionA" type="text" ref="inputOptionA"/>
            </div>
            <div class="form-control">
                <label>Option B</label>
                <input id="optionB" name="optionB" type="text" ref="inputOptionB"/>
            </div>
            <div class="form-control">
                <label>Option C</label>
                <input id="optionC" name="optionC" type="text" ref="inputOptionC"/>
            </div>
            <div class="form-control">
                <label>Option D</label>
                <input id="optionD" name="optionD" type="text" ref="inputOptionD"/>
            </div>
            <div class="form-control">
                <label>Correct Option</label>
                <div class="form-control-correct">
                    <input id="optionAnswer" name="optionAnswer" type="radio" value="A" v-model="inputOptionAnswer"/><label>A </label>
                    <input id="optionAnswer" name="optionAnswer" type="radio" value="B" v-model="inputOptionAnswer"/><label>B </label>
                    <input id="optionAnswer" name="optionAnswer" type="radio" value="C" v-model="inputOptionAnswer"/><label>C </label>
                    <input id="optionAnswer" name="optionAnswer" type="radio" value="D" v-model="inputOptionAnswer"/><label>D </label>
                </div>
            </div>
            <div class="form-control">
                <label>Note</label>
                <textarea id="note" name="note" rows="3" type="text" ref="inputNote"></textarea>
            </div>
            <div class="form-copy-for-next">
                <input type="checkbox" id="copy-for-next" name="copy-for-next" v-model="inputReset"/>
                <label for="copy-for-next">Save all inputs for future?</label>
            </div>
            <div class="form-control">
                <base-button type="submit">Add Question</base-button>
            </div>
        </form>
    </base-card>
</div>
</template>

<script>
export default {
    //inject: ['addQuestion'],
    data(){
        return{
            inputIsInvalid: false,
        }
    },
    methods: {
        submitData(){
            const enteredQuestion = this.$refs.inputQuestion.value
            const enteredOptionA = this.$refs.inputOptionA.value
            const enteredOptionB = this.$refs.inputOptionB.value
            const enteredOptionC = this.$refs.inputOptionC.value
            const enteredOptionD = this.$refs.inputOptionD.value
            const enteredOptionAnswer = this.inputOptionAnswer
            const enteredNote = this.$refs.inputNote.value
            const enteredReset = this.inputReset

            if(enteredQuestion.trim() === '' || enteredOptionA.trim() === '' || enteredOptionB.trim() === '' || enteredOptionC.trim() === '' || enteredOptionD.trim() === '' || enteredOptionAnswer.trim() === '' || enteredNote.trim() === ''){
                this.inputIsInvalid = true
                return
            }
            
            this.addQuestion(enteredQuestion, enteredOptionA, enteredOptionB, enteredOptionC, enteredOptionD, enteredOptionAnswer, enteredNote)
            
            if(!enteredReset){
                this.$refs.inputQuestion.value = null
                this.$refs.inputOptionA.value = null
                this.$refs.inputOptionB.value = null
                this.$refs.inputOptionC.value = null
                this.$refs.inputOptionD.value = null
                this.inputOptionAnswer = null
                this.$refs.inputNote.value = null
            }
            
        },
        confirmError(){
            this.inputIsInvalid = false 
        }
        
    }
    
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
.form-control-correct input{
    display: inline-block !important;
    width: 15px;
    text-align: left;
}
.form-control-correct label{
    display: inline-block !important;
    width: 55px;
    text-align: left;
}
.form-copy-for-next input{
    display: inline-block !important;
    width: 10px;
    margin: 0;
    padding: 0;
    text-align: left;
}
.form-copy-for-next label{
    display: inline-block !important;
    text-align: left;
    margin-left: 10px;
}
</style>
