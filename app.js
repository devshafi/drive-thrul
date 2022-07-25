const { createApp } = Vue

createApp({
    data() {
        return {
            price: 0,
            data: [
                { code: 100, price: 1800, location: 'London' },
                { code: 200, price: 2200, location: 'Bristol' },
                { code: 300, price: 1700, location: 'Birmingham' },
                { code: 400, price: 1600, location: 'Manchester' },
                { code: 100, price: 1300, location: 'Leeds' },
                { code: 100, price: 1800, location: 'Kingston' },
            ],
            searchedData: [],
            input: '',
            loading: false,
        }


    },
    methods: {
        search() {
            const matched = this.data.filter(d => d.code === parseInt(this.input))
            this.searchedData = matched;
        }
    }

}).mount('#app')