var app = new Vue({
  el:'#app',
  data:{
    color : ['blue','red'],
    home : [
            {son:'tommy' ,father:'Tom'},
            {son:'bobby' ,father:'Bob'}
           ]
  },
  methods:{
    myfa: function(son,er){
      alert(son +' father is '+er)
    },
    myson: function(son,er){
      alert(er +' son is '+son)
    }
  }
})