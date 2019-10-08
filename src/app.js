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
        let result = this.desiredAmount * this.selectedCurrency;
        return result.toFixed(2);
      },
      toEuros() {
        let result = this.desiredAmount / this.selectedCurrency;
        return result.toFixed(2);
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
