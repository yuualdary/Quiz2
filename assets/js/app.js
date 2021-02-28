var app = new Vue({
    el : '#app',
    data :{
        content:'',
        newValue:'',
        names:['Yudistiro','Wahyu','Aldary']

    },
    methods:{
        
        AddName: function(){
            this.names.push(this.content);
            this.content='';
        },
        
        RemoveName: function(index){
            this.names.splice(index,1)
        },
        EditClick :function(){
            document.getElementById("edit").innerHTML
        },
        EditName: function(index){
            this.names.splice(index,1,this.newValue)
        },

   
    
    },
  
})