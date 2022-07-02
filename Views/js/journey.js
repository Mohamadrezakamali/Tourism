let fileInput = document.getElementById("input1");
    const form1 = document.getElementById("form1");
    const form2 = document.getElementById("form2");
    const form3 = document.getElementById("form3");

var global_files = [];
var global_file_index = 0;

    function browse(){
        

        fileInput.click();
    }


var functionHandler = (e)=>{
  if (window.File && window.FileReader && window.FileList && window.Blob) { //CHECK IF FILE API IS SUPPORTED
    const files = e.target.files; //FILE LIST OBJECT CONTAINING UPLOADED FILES
    const output = document.querySelector("#result");
    //output.innerHTML = "";
    console.log("state changed: " , files.length);
    for (let i = 0; i < files.length; i++) { // LOOP THROUGH THE FILE LIST OBJECT
        if (!files[i].type.match("image")) continue; // ONLY PHOTOS (SKIP CURRENT ITERATION IF NOT A PHOTO)
        const picReader = new FileReader(); // RETRIEVE DATA URI 
        picReader.addEventListener("load", function (event) { // LOAD EVENT FOR DISPLAYING PHOTOS
          const picFile = event.target;
          const div = document.createElement("div");
          div.innerHTML = `<img class="thumbnail" src="${picFile.result}" title="${picFile.name}"/>`;
          output.appendChild(div);
        });


        picReader.readAsDataURL(files[i]); //READ THE IMAGE
        global_files.push(files[i]);
    }
    fileInput = document.createElement('input');
    fileInput.type = "file";
    fileInput.name = "file"+global_file_index.toString();
    fileInput.style.display = "none";
    fileInput.addEventListener("change", functionHandler);
    form3.appendChild(fileInput);
    global_file_index += 1;
    
  } else {
    alert("Your browser does not support File API");
  }
}

document.querySelector("#input1").addEventListener("change", functionHandler);



  function create(){

    form3.children.costs2.value=form1.children.costs.value;
        form3.children.suggest2.value=form1.children.suggest.value;
        form3.children.trans2.value=form1.children.trans.value;
        form3.children.others2.value=form1.children.others.value;
        form3.children.fadd2.value=form2.children.fadd.value;
        form3.children.cul2.value=form2.children.cul.value;
        form3.children.sec2.value=form2.children.sec.value;
        form3.children.his2.value=form2.children.his.value;
        
        console.log(form3.children.costs2.value);
        console.log(form3.children.suggest2.value);
        console.log(form3.children.trans2.value);
        console.log(form3.children.others2.value);
        console.log(form3.children.fadd2.value);
        console.log(form3.children.cul2.value);
        console.log(form3.children.sec2.value);
        console.log(form3.children.his2.value);

        
        form3.submit();
  }