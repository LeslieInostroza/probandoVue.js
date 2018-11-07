const app = new Vue({
  el: '#app', // con # se llama al id  del div id=app, el detectac el id
  data:{
    //se pueden inventar seudovariables
    titulo: 'GYM con vue', // llamamos al titulo 
    tareas: [],
    nuevaTarea:''
  },
  methods:{
    agregarTarea: function(){ // no se puede con =>(), por que se neceita el .this
      /* console.log('diste click', this.nuevaTarea); */
      this.tareas.push({// push para agregar a tareas
        nombre: this.nuevaTarea,
        estado:false
      }); 
      console.log(this.tareas);
      this.nuevaTarea='';// limpia el input
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas)); // recordar que setItem guarda en 'gym.vue'

    },
    editarTarea: function(index){
      /* console.log('editar', index); */
      this.tareas[index].estado =true;
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
      
    },
    eliminar: function(index){
      this.tareas.splice(index, 1); // para eliminar, splice lo eliminara
      localStorage.setItem('gym-vue', JSON.stringify(this.tareas));
    }
  },
  created: function(){
    let datosDB = JSON.parse(localStorage.getItem('gym-vue'));
    console.log(datosDB);
    if(datosDB === null){
      this.tareas = [];
    } else {
      this.tareas = datosDB;
    }
  }
});