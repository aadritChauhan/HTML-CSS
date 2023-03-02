 
window.onload = function() {
    // handle for main image(1st card)
    var mainImg= document.getElementById("cardImg1");
    // handle for main image(2nd card)
    var mainImg2= document.getElementById("cardImg2");
    // handle for main image(2nd card)
    var mainImg3= document.getElementById("cardImg3");
    // handle for main image(2nd card)
    var mainImg4= document.getElementById("cardImg4");

    // handle for tile images (1st card)
    var image1= document.getElementById("img1");
    var image2= document.getElementById("img2");
    var image3= document.getElementById("img3");
    var image4= document.getElementById("img4");
    var image5= document.getElementById("img5");
     // handle for tile images (2nd card)
     var image12= document.getElementById("img12");
     var image22= document.getElementById("img22");
     var image32= document.getElementById("img32");
     var image42= document.getElementById("img42");
     var image52= document.getElementById("img52");
     // handle for tile images (3nd card)
     var image13= document.getElementById("img13");
     var image23= document.getElementById("img23");
     var image33= document.getElementById("img33");
     var image43= document.getElementById("img43");
     var image53= document.getElementById("img53");
     // handle for tile images (4th card)
     var image14= document.getElementById("img14");
     var image24= document.getElementById("img24");
     var image34= document.getElementById("img34");
     var image44= document.getElementById("img44");
     var image54= document.getElementById("img54");


    //listeners for tile images(1st card)
    image1.onmouseover= switchpic1;
    image2.onmouseover= switchpic2;
    image3.onmouseover= switchpic3;
    image4.onmouseover= switchpic4;
    image5.onmouseover= switchpic5;
    //listeners for tile images(2nd card)
    image12.onmouseover= switchpic12;
    image22.onmouseover= switchpic22;
    image32.onmouseover= switchpic32;
    image42.onmouseover= switchpic42;
    image52.onmouseover= switchpic52;
    //listeners for tile images(3rd card)
    image13.onmouseover= switchpic13;
    image23.onmouseover= switchpic23;
    image33.onmouseover= switchpic33;
    image43.onmouseover= switchpic43;
    image53.onmouseover= switchpic53;
    //listeners for tile images(4th cARD)
    image14.onmouseover= switchpic14;
    image24.onmouseover= switchpic24;
    image34.onmouseover= switchpic34;
    image44.onmouseover= switchpic44;
    image54.onmouseover= switchpic54;

    //functions to change pictures(card 1)
    function switchpic1(){
        mainImg.src= image1.src;
    }
    function switchpic2(){
        mainImg.src= image2.src;
    }
    function switchpic3(){
        mainImg.src= image3.src;
    }
    function switchpic4(){
        mainImg.src= image4.src;
    }
    function switchpic5(){
        mainImg.src= image5.src;
    }
     //functions to change pictures(card 2)
     function switchpic12(){
        mainImg2.src= image12.src;
    }
    function switchpic22(){
        mainImg2.src= image22.src;
    }
    function switchpic32(){
        mainImg2.src= image32.src;
    }
    function switchpic42(){
        mainImg2.src= image42.src;
    }
    function switchpic52(){
        mainImg2.src= image52.src;
    }
     //functions to change pictures(card 3)
     function switchpic13(){
        mainImg3.src= image13.src;
    }
    function switchpic23(){
        mainImg3.src= image23.src;
    }
    function switchpic33(){
        mainImg3.src= image33.src;
    }
    function switchpic43(){
        mainImg3.src= image43.src;
    }
    function switchpic53(){
        mainImg3.src= image53.src;
    }
     //functions to change pictures(card 4)
     function switchpic14(){
        mainImg4.src= image14.src;
    }
    function switchpic24(){
        mainImg4.src= image24.src;
    }
    function switchpic34(){
        mainImg4.src= image34.src;
    }
    function switchpic44(){
        mainImg4.src= image44.src;
    }
    function switchpic54(){
        mainImg4.src= image54.src;
    }

    // functioin to reset image(card 1)
    function resetImg(){
        mainImg.src= "./images/Group71.png"
    } // functioin to reset image(card 2)
    function resetImg2(){
        mainImg2.src= "./images/Group71.png"
    } // functioin to reset image(card 3)
    function resetImg3(){
        mainImg3.src= "./images/Group71.png"
    } // functioin to reset image(card 4)
    function resetImg4(){
        mainImg4.src= "./images/Group71.png"
    }

    // reset images when mouse leaves(card 1) 
    image1.onmouseout= resetImg;
    image2.onmouseout= resetImg;
    image3.onmouseout= resetImg;
    image4.onmouseout= resetImg;
    image5.onmouseout= resetImg;
    // reset images when mouse leaves(card 1) 
    image12.onmouseout= resetImg2;
    image22.onmouseout= resetImg2;
    image32.onmouseout= resetImg2;
    image42.onmouseout= resetImg2;
    image52.onmouseout= resetImg2;
    // reset images when mouse leaves(card 1) 
    image13.onmouseout= resetImg3;
    image23.onmouseout= resetImg3;
    image33.onmouseout= resetImg3;
    image43.onmouseout= resetImg3;
    image53.onmouseout= resetImg3;
    // reset images when mouse leaves(card 1) 
    image14.onmouseout= resetImg4;
    image24.onmouseout= resetImg4;
    image34.onmouseout= resetImg4;
    image44.onmouseout= resetImg4;
    image54.onmouseout= resetImg4;

   
}

// Dark mode
function Dark(){
    var element= document.body;
    element.classList.toggle("darkMode");
    
}