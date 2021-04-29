const app = new Vue({
    el: '#app',
    data() {
        return {
            playerOne: 'Player 1',
            playerTwo: 'Player 2',
            playerThree: 'Player 3',
            playerFour: 'Player 4',
            isFormNameOneVisible: false
        }
    },
    methods: {
        editNameOne(){
            this.playerOne = ''
            this.isFormNameOneVisible = true
        },

        confirmNameOne() {
            this.isFormNameOneVisible = false
        }
    }
})