const {createApp} = Vue;


createApp({

  data(){
    return{
      
      images:[
        'img/foto1.jpg',
        'img/foto2.jpg',
        'img/foto3.jpg',
        'img/foto4.jpg'
      ],
      counter:0
    }
  },

  methods:{
  }


}).mount('#app')