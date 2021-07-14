  //Vue.component('標籤名稱', {
    Vue.component('load_city_1', {
        data: function() {
            return {
              count: 0
            }
          },
        template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
      })

      var vm = new Vue({
        el: '#app2'
      });