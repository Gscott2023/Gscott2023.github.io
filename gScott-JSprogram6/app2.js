let app = Vue.createApp({
    data() { 
        return { 
            tickets: [],
            over25: [],           // array to hold filtered data
            time_loaded: '',
            showTable: false
        }
    },
    created() {      // section executes as page loads
        this.getData()  // load json data as page loads
    },
    methods: {    // an object of functions (methods)
        async getData() {
            const response = await fetch('tickets1.json')
            this.tickets = await response.json()
        },
    getBySpeed() {
        this.showTable = true

        this.over25 = this.tickets.filter( (ticket) => ticket.actual_speed >= ticket.posted_speed + 25);
    }
    },
})

app.mount('#main')