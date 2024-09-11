let img = document.getElementById("img") as HTMLImageElement
let fileInput = document.getElementById("fileInput") as HTMLInputElement;
fileInput.onchange = () => {
    if (fileInput.files && fileInput.files[0]) {
        let file = fileInput.files[0];
        console.log(file)
        let reader = new FileReader();

        reader.onload = () => {
            // The result is a data URL that can be assigned to img.src
            img.src = reader.result as string;
        };

        // Read the file as a Data URL (base64 string)
        reader.readAsDataURL(file);
    }
};

let generatePDF = document.getElementById("generatePDF") as HTMLElement;
let mainDiv = document.getElementById("mainDiv") as HTMLElement;
let skillBtn = document.getElementById("skillBtn") as HTMLElement;
let eduBtn = document.getElementById("eduBtn") as HTMLElement;
let langBtn = document.getElementById("langBtn") as HTMLElement;
let wExpBtn = document.getElementById("wExpBtn") as HTMLElement;
let courseBtn = document.getElementById("courseBtn") as HTMLElement;

skillBtn.addEventListener("click", () => {
  let skillInputDiv = document.getElementById("skillInputDiv") as HTMLElement;
  let inputElement = document.createElement("input");
  inputElement.type = "text";
  inputElement.size = 50;
  inputElement.id = "skill";
  inputElement.placeholder = "Enter skill....";
  skillInputDiv.insertBefore(inputElement, skillBtn);
});
eduBtn.addEventListener("click", () => {
  let eduInputDiv = document.getElementById("eduInputDiv") as HTMLElement;
  let inputElementEdu = document.createElement("input");
  inputElementEdu.type = "text";
  inputElementEdu.size = 50;
  inputElementEdu.id = "edu";
  inputElementEdu.placeholder = "Enter education....";
  eduInputDiv.insertBefore(inputElementEdu, eduBtn);
});
langBtn.addEventListener("click", () => {
    let langInputDiv = document.getElementById("langInputDiv") as HTMLElement;
  let inputElementEdu = document.createElement("input");
  inputElementEdu.type = "text";
  inputElementEdu.size = 50;
  inputElementEdu.id = "lang";
  inputElementEdu.placeholder = "Enter Language....";
  langInputDiv.insertBefore(inputElementEdu, langBtn);
});
// wExpBtn.addEventListener("click", () => {
//     let wExp = document.getElementById("wExp") as HTMLElement;
//     let inputElementOne = document.createElement("input");
//     inputElementOne.type = "text"
//     inputElementOne.className = "wEXPDes"
//     inputElementOne.placeholder = "Designation....."
//     wExp.insertBefore(inputElementOne, wExpBtn);
//     let inputElementTwo = document.createElement("input");
//     inputElementTwo.type = "text"
//     inputElementTwo.className = "wEXPOrg"
//     inputElementTwo.placeholder = "Organization....."
//     wExp.insertBefore(inputElementTwo, wExpBtn);
//     let wExpPeriod = document.createElement("div");
//     let inputElementThree = document.createElement("input");
//     inputElementThree.type = "text"
//     inputElementThree.className = "wEXPDur"
//     inputElementThree.placeholder = "Druation....."
//     wExpPeriod.insertBefore(inputElementThree, wExpBtn);
//     let inputElementFour = document.createElement("input");
//     inputElementFour.type = "text"
//     inputElementFour.className = "wEXPAdd"
//     inputElementFour.placeholder = "Address....."
//     wExpPeriod.insertBefore(inputElementFour, wExpBtn);
//     wExp.insertBefore(wExpPeriod, wExpBtn);
//     let inputElementFive = document.createElement("textarea");
//     inputElementFive.className = "jobDes"
//     inputElementFive.placeholder = "Enter Job Descriptions....."
//     wExp.insertBefore(inputElementFive, wExpBtn);   
// });


wExpBtn.addEventListener("click", () => {
    let wExp = document.getElementById("wExp") as HTMLElement;

    // Create a container div to hold the new elements
    let newEntryDiv = document.createElement("div");
    newEntryDiv.className = "wExpDiv"

    // Set the inner HTML of the new div to your desired structure
    newEntryDiv.innerHTML = `
        <input type="text" class="wEXPDes" placeholder="Designation.....">
        <input type="text" class="wEXPOrg" placeholder="Organization Name....">
        <div class="wExpPeriod">
            <input type="text" class="wEXPDur" placeholder="Duration of Job.....">
            <input type="text" class="wEXPAdd" placeholder="Address of Organization...">
        </div>
        <label for="jobDes">Job Description</label>
        <textarea type="text" class="jobDes" placeholder="Enter Job Desciption....."></textarea>
    `;

    // Insert the new entry div before the Add button
    wExp.insertBefore(newEntryDiv, wExpBtn);
});



courseBtn.addEventListener("click", () => {
    let courses = document.getElementById("courses") as HTMLElement;
    let inputElementEdu = document.createElement("input");
    inputElementEdu.type = "text";
    inputElementEdu.size = 50;
    inputElementEdu.id = "course";
    inputElementEdu.className = "course"
    inputElementEdu.placeholder = "Enter Course Detail....";
    courses.insertBefore(inputElementEdu, courseBtn);
});

window.onload = function () {
  if (generatePDF) {
    generatePDF.addEventListener("click", () => {
      if (mainDiv) {
        skillBtn.style.display = "none";
        eduBtn.style.display = "none";
        langBtn.style.display = "none";
        wExpBtn.style.display = "none";
        courseBtn.style.display = "none";
        console.log(mainDiv.innerHTML);
        html2pdf().from(mainDiv).save();
      } else {
        console.log("mainDiv element not found.");
      }
    });
  } else {
    console.log("generatePDF element not found.");
  }
};
