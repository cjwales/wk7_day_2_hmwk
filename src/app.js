import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencyData: [],
    },
    mounted() {
      this.fetchCurrencies();
    },
    computed: {

    },
    methods: {
      fetchCurrencies: function (){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.currencyData = data)
      },
      
    }
  })
})
