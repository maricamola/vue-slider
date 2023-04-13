const {createApp} = Vue;


createApp({

  data(){
    return{
      image:{
        src: 'img/foto1.jpg',
        alt: 'Vista suite',
      }
    }
  }

}).mount('#app')