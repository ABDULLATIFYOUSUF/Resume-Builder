var img = document.getElementById("img");
var fileInput = document.getElementById("fileInput");
fileInput.onchange = function () {
    if (fileInput.files && fileInput.files[0]) {
        var file = fileInput.files[0];
        console.log(file);
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            // The result is a data URL that can be assigned to img.src
            img.src = reader_1.result;
        };
        // Read the file as a Data URL (base64 string)
        reader_1.readAsDataURL(file);
    }
};
var generatePDF = document.getElementById("generatePDF");
var mainDiv = document.getElementById("mainDiv");
var skillBtn = document.getElementById("skillBtn");
var eduBtn = document.getElementById("eduBtn");
var langBtn = document.getElementById("langBtn");
var wExpBtn = document.getElementById("wExpBtn");
var courseBtn = document.getElementById("courseBtn");
skillBtn.addEventListener("click", function () {
    var skillInputDiv = document.getElementById("skillInputDiv");
    var inputElement = document.createElement("input");
    inputElement.type = "text";
    inputElement.size = 50;
    inputElement.id = "skill";
    inputElement.placeholder = "Enter skill....";
    skillInputDiv.insertBefore(inputElement, skillBtn);
});
eduBtn.addEventListener("click", function () {
    var eduInputDiv = document.getElementById("eduInputDiv");
    var inputElementEdu = document.createElement("input");
    inputElementEdu.type = "text";
    inputElementEdu.size = 50;
    inputElementEdu.id = "edu";
    inputElementEdu.placeholder = "Enter education....";
    eduInputDiv.insertBefore(inputElementEdu, eduBtn);
});
langBtn.addEventListener("click", function () {
    var langInputDiv = document.getElementById("langInputDiv");
    var inputElementEdu = document.createElement("input");
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
wExpBtn.addEventListener("click", function () {
    var wExp = document.getElementById("wExp");
    // Create a container div to hold the new elements
    var newEntryDiv = document.createElement("div");
    newEntryDiv.className = "wExpDiv";
    // Set the inner HTML of the new div to your desired structure
    newEntryDiv.innerHTML = "\n        <input type=\"text\" class=\"wEXPDes\" placeholder=\"Designation.....\">\n        <input type=\"text\" class=\"wEXPOrg\" placeholder=\"Organization Name....\">\n        <div class=\"wExpPeriod\">\n            <input type=\"text\" class=\"wEXPDur\" placeholder=\"Duration of Job.....\">\n            <input type=\"text\" class=\"wEXPAdd\" placeholder=\"Address of Organization...\">\n        </div>\n        <label for=\"jobDes\">Job Description</label>\n        <textarea type=\"text\" class=\"jobDes\" placeholder=\"Enter Job Desciption.....\"></textarea>\n    ";
    // Insert the new entry div before the Add button
    wExp.insertBefore(newEntryDiv, wExpBtn);
});
courseBtn.addEventListener("click", function () {
    var courses = document.getElementById("courses");
    var inputElementEdu = document.createElement("input");
    inputElementEdu.type = "text";
    inputElementEdu.size = 50;
    inputElementEdu.id = "course";
    inputElementEdu.className = "course";
    inputElementEdu.placeholder = "Enter Course Detail....";
    courses.insertBefore(inputElementEdu, courseBtn);
});
window.onload = function () {
    if (generatePDF) {
        generatePDF.addEventListener("click", function () {
            if (mainDiv) {
                skillBtn.style.display = "none";
                eduBtn.style.display = "none";
                langBtn.style.display = "none";
                wExpBtn.style.display = "none";
                courseBtn.style.display = "none";
                console.log(mainDiv.innerHTML);
                html2pdf().from(mainDiv).save();
            }
            else {
                console.log("mainDiv element not found.");
            }
        });
    }
    else {
        console.log("generatePDF element not found.");
    }
};
