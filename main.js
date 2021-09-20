
let a = 0

setInterval(btn, 2000);

function btn() {
    
    let image = document.getElementById('image');
    let images = ["https://source.unsplash.com/800x500/?software", "https://source.unsplash.com/800x500/?flower", "https://source.unsplash.com/800x500/?animal", "https://source.unsplash.com/800x500/?food", "https://source.unsplash.com/800x500/?buildings"];
    let n = Math.floor(Math.random() * images.length)
   
    if(a<images.length){
        
        image.src = images[a]
        a++
    }else{
        a=0
    }
   
    
}