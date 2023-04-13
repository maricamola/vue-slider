const {createApp} = Vue;


createApp({

  data(){
    return{
      
      images:[
        'img/foto1.jpg',
        'img/foto2.jpg',
        'img/foto3.jpg',
        'img/foto4.jpg',
      ],
      counter:0,
    }
  },

  methods:{
    arrow(next){
      if(next) this.counter++;
      else this.counter--
      if(this.counter === this.images.length) this.counter = 0;
      if(this.counter < 0) this.counter = this.images.length -1;
      console.log(this.counter)
    }
  },

  mounted(){
    setInterval(() => {
      this.arrow(true);
    }, 3000);
  },
}).mount('#app')