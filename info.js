const ques =document.getElementById("container")
const next =document.getElementById("next-button")
const nextdiv =document.getElementById("next-button-div")
const noofques =document.getElementById("number-of-question")

let n=1;
next.addEventListener("click", function next(){
    n=n+1;

    if(n==2){
        ques.innerHTML=`<h1>Your Age</h1>
        <input type="text" name="" id="" placeholder="Enter Your Age!">`
    }
    else if(n==3){
        ques.innerHTML=`<h1>Your Body Weight?</h1>
        <input type="text" name="" id="" placeholder="Enter Your Body Weight ex-55kg">`
    }
    else if(n==4){
        ques.innerHTML=`<h1>Do You Have Any Disability?</h1>
        <div id="yesnobox">
            <div class="yesnobtn">
                <a href="#" class="btn btn-outline-success">Yes</a>
            </div>

            <div class="yesnobtn">
                <a href="#" class="btn btn-outline-success">No</a>
            </div>
        </div>

        <h3>If Yes Then What?</h3>
        <input type="text" name="" id="" placeholder="Enter Your Name">`

    }
    else if(n==5){
        ques.innerHTML=`<h1>Your Level?</h1>
        <input type="text" name="" id="" placeholder="beginner-intermediate-pro">`
    }
    else if(n==6){
        ques.innerHTML=`<h1>Your Gender?</h1>
        <input type="text" name="" id="" placeholder="Enter Your Gender">`
    }

    else if(n==7){

        ques.innerHTML=""
        nextdiv.innerHTML=`
        <h3>Our Team Will Get Back To You!</h3>
        <a href="index.html"> <button id="next-button">Submit</button></a>`
    }
    
})