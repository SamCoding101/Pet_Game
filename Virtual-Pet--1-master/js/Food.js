class Food{
    constructor(){
        this.feedFood = createButton("Feed The Dog");
        this.addFood = createButton("Add The Food");
        this.foodStock = null;
        this.time = null;
        this.image = loadImage("Milk.png");
    }
    display(){
        this.feedFood.position(displayWidth/2+60,displayHeight/2-420,);
        this.addFood.position(displayWidth/2-60,displayHeight/2-420);
        
        var x = 20;
        var y = 20;

        for(var i=0;i<this.foodStock;i++){
           if(i%10==0){
               x = 20;
               y = y+50;
           } 
            image(this.image,x,y,40,50);
            x = x+30;
        }
        this.addFood.mousePressed(()=>{
            this.foodStock++;
            this.updateFood(this.foodStock);
        })
        this.feedFood.mousePressed(()=>{
        if(this.foodStock<=0){   

            this.foodStock = 0;
            textSize(20);
            fill("red");
            text("Food Has Finished,Please Add Food first",displayWidth/2,displayHeight/2);
        
        }
        else{

            this.foodStock--; 
       
        }

        this.updateFood(this.foodStock);
            dog.addImage(happyDogImg);
            this.time = hour();
            this.updateLastFed(this.time);
        })
    }
    getFood(){
        database.ref("Food").on("value",(snapshot)=>{
            this.foodStock = snapshot.val();
        })
    }
    updateFood(food){
        database.ref('/').update({
            Food : food
        })
    }
    getLastFed(){
        database.ref("LastFed").on("value",(snapshot)=>{
            this.time = snapshot.val();
        })
    }
    updateLastFed(fedTime){
        database.ref('/').update({
            LastFed : fedTime
        })
    }
}
    
