
var firebaseConfig = {
    apiKey: "AIzaSyDtDCmbzBpd12qG8XkHsycUzgf51Ja5kPs",
    authDomain: "portfolio-9fed3.firebaseapp.com",
    projectId: "portfolio-9fed3",
    storageBucket: "portfolio-9fed3.appspot.com",
    messagingSenderId: "183924610259",
    appId: "1:183924610259:web:cfa8f7922abaa701597026",
    measurementId: "G-DSGPJ7BMY9"
  };

  firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

var frame = 0;
var number = 0;
function slide(x){
    frame+=x;
    if(frame>number-1){
      frame=0;
    }
    if(frame<0){
      frame=number-1;
    }
    console.log("started");
      for(var i= 0; i<number ; i++){
        document.getElementsByTagName("iframe").item(i).style.display = "none";
      }
      document.getElementsByTagName("iframe").item(frame).style.display = "block";
  }


db.collection("Projects")
     .orderBy("Date", "desc")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            // creating Grid
            const element = document.createElement('div');
            element.setAttribute("class","project col-md-6 col-12");
            element.innerHTML=   `
            <div class="name">
              ${doc.data().Name}
            </div>
            <iframe src=${doc.data().Link} height="400px" width="100%" ></iframe>
            <p>
              <br>
              ${doc.data().Description}
              <br>
              <br>
              <b>Stack Used:</b>
              ${
                doc.data().Stack.map(data=> `${data}`)
              }
              <br>
              <br>
              <a href=${doc.data().Link} target="new"><b>Link:</b>  ${doc.data().Link}</a>
         
            
            </p>
          `


           document.getElementById("Dbproject").append(element);

           //Creating SLides

           const SLide = document.createElement('iframe');
           SLide.setAttribute("src",`${doc.data().Link}`);
           document.getElementById("ProjectSlides").append(SLide);
           
           number = number + 1;
        });

     
        slide(0);
       
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    
    
    
  