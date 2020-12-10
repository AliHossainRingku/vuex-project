<template>
<div>
    <base-card>
        <base-button 
        @click="setSelectedTab('stored-questions')" 
        :mode="storedQuestionsButtonMode"
        >Stored Questions</base-button>

        <base-button 
        @click="setSelectedTab('add-question')" 
        :mode="addQuestionButtonMode"
        >Add Question</base-button>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</div>
</template>

<script>
import StoredQuestions from './StoredQuestions.vue'
import AddQuestion from './AddQuestion.vue'

export default {
    components:{
        StoredQuestions,
        AddQuestion,
    }, 
    data(){
        return{
            selectedTab: 'stored-resources',
            answerVisibles: false,
            storedQuestions: [
                {
                    id: 1,
                    question: 'HTML stands for what?',
                    optionA: 'Hypetex Machine Language',
                    optionB: 'Hypotex Markup Language',
                    optionC: 'Hyper Text Markup Language',
                    optionD: 'Hypertext Machine Language',
                    optionAnswer: 'C',
                    note: 'HTML stands for Hypertext Markup Language. It is used for website design.',
                },

                {
                    id: 2,
                    question: 'CSS stands for what?',
                    optionA: 'Cascading Style Sheet',
                    optionB: 'Computer Style Sheet',
                    optionC: 'Computer System Styles',
                    optionD: 'Complex Styles Source',
                    optionAnswer: 'A',
                    note: 'CSS stands for Cascading Style Sheet. It is used for website design.',
                },

                {
                    id: 3,
                    question: 'What is Javascript?',
                    optionA: 'A markup Language for frontend design.',
                    optionB: 'A programming Language for backend actions.',
                    optionC: 'A machine Language for frontend design.',
                    optionD: 'A scripting Language for frontend design and dynamic action.',
                    optionAnswer: 'D',
                    note: 'Javascript is a scripting Language. It is used for website design.',
                },

                {
                    id: 4,
                    question: 'HTML stands for what?',
                    optionA: 'Hypetex Machine Language',
                    optionB: 'Hypotex Markup Language',
                    optionC: 'Hyper Text Markup Language',
                    optionD: 'Hypertext Machine Language',
                    optionAnswer: 'C',
                    note: 'HTML stands for Hypertext Markup Language. It is used for website design.',
                },

                {
                    id: 5,
                    question: 'HTML stands for what?',
                    optionA: 'Hypetex Machine Language',
                    optionB: 'Hypotex Markup Language',
                    optionC: 'Hyper Text Markup Language',
                    optionD: 'Hypertext Machine Language',
                    optionAnswer: 'C',
                    note: 'HTML stands for Hypertext Markup Language. It is used for website design.',
                },
            
            
            ]
        }
    },
    provide() {
        return{
            questions: this.storedQuestions,
            addQuestion: this.addQuestion,
            deleteQuestion: this.removeQuestion,
            submitAnswer: this.youSelected
        }
    },
    computed: {
        storedQuestionsButtonMode(){
            return this.selectedTab === 'stored-questions' ? null : 'flat'
        },

        addQuestionButtonMode(){
            return this.selectedTab === 'add-question' ? null : 'flat'
        },
        //show: false
    }, 
    methods: {
        setSelectedTab(tab){
            this.selectedTab = tab
        },
        addQuestion(question, optionA, optionB, optionC, optionD, optionAnswer, note){
       
            const newQuestion = {
                id: new Date().toISOString,
                question: question,
                optionA: optionA,
                optionB: optionB,
                optionC: optionC,
                optionD: optionD,
                optionAnswer: optionAnswer,
                note: note,
            }
            this.storedQuestions.unshift(newQuestion)
           
            this.selectedTab = 'stored-questions'

        },
        removeQuestion(quesId){
            //this.storedResources = this.storedResources.filter((res) => res.id !== resId)
            //console.log(this.storedResources.length)
            const quesIndex = this.storedQuestions.findIndex(ques => ques.id === quesId)
            this.storedQuestions.splice(quesIndex,1)
        }
        
    }
}
</script>