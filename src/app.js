import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      currencyData: [],
      selectedCurrency: null,
      desiredAmount: null
    },
    mounted() {
      this.fetchCurrencies();
    },
    computed: {
      fromEuros() {
        return parseFloat(this.desiredAmount) * parseFloat(this.selectedCurrency);
      }
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
