let app = Vue.createApp({
    data() { 
        return {
            tickets: [],
            showTable: true
        }
    },
    created() {      // section executes as page loads
        this.getData()  // load json data as page loads
    },
    methods: {    // an object of functions (methods)
        async getData() {
            const response = await fetch('tickets1.json')
            this.tickets = await response.json()
        }
    },
})

app.mount('#main')