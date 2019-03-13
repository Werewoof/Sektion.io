new Vue({
    el: "#vue-app",
    data: {
        blokTitle: "Merryman's Pub",
        blokDescription: "This song should feel joyous.",
        egg: "egg",
        name: "huh",
        website: "http://thecartoonistsguild.com/",
        HELLO: "<h1 style='margin-left: 20px;'>HELLO, MORTALS</h1>",
        myArray: [
            {
                id: 0,
                name: "x",
            },
            {
                id: 1,
                name: "s",
            }
        ],
        colors: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
       // colors: true,
        currentColor: 0,

    },
    methods:{
        greet: function(e){
            return `good ${this.egg}`;
        },
        changeTitle(e){
            //if (e) e.preventDefault();
            console.log(e);
            console.log(this.blokTitle);
           // this.blokTitle = e.target.value;
            //this.HELLO = e.target.value;
        },
        changeDescription(e){
            if (e) e.preventDefault();
            this.blokDescription = e.target.innerHTML;
            this.HELLO = e.target.innerHTML;
        },
    },
    watch: {
        blokTitle: function() {
            console.log(this.blokTitle);
        },  
        colors: function() {
            console.log(this.colors);
        },
        currentColor: function(){
            this.currentColor %= 7;
        }
    },
    computed: {
        
    },
})

