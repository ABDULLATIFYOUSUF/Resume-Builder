var mainDiv = document.getElementById("mainDiv");
var generateResume = document.getElementById("generateResume");
var form = document.getElementById("form");
var subBtn = document.getElementById("subBtn");
var generatePDF = document.getElementById("generatePDF");
generateResume === null || generateResume === void 0 ? void 0 : generateResume.addEventListener("click", function () {
    mainDiv.style.display = "none";
    generateResume.style.display = "none";
    form.style.display = "flex";
    subBtn.style.display = "flex";
});
var formSkill = document.getElementById("formSkill");
var paraSkills = document.getElementById("paraSkills");
var formEdu = document.getElementById("formEdu");
var eduPara = document.getElementById("eduPara");
var lanInput = document.getElementById("lanInput");
var lanPara = document.getElementById("lanPara");
var nameHeading = document.getElementById("nameHeading");
var nameInput = document.getElementById("nameInput");
var desHeading = document.getElementById("desHeading");
var ndoDesInput = document.getElementById("ndoDesInput");
var formObj = document.getElementById("formObj");
var objPara = document.getElementById("objPara");
var email = document.getElementById("email");
var formEmail = document.getElementById("formEmail");
var cNumber = document.getElementById("cNumber");
var formNumber = document.getElementById("formNumber");
var address = document.getElementById("address");
var addInput = document.getElementById("addInput");
var facebook = document.getElementById("facebook");
var fbInput = document.getElementById("fbInput");
var linkedin = document.getElementById("linkedin");
var ldInput = document.getElementById("ldInput");
var gHub = document.getElementById("gHub");
var ghInput = document.getElementById("ghInput");
var iGram = document.getElementById("iGram");
var instaInput = document.getElementById("instaInput");
var desWe = document.getElementById("des-we");
var desInput = document.getElementById("desInput");
var desOrg = document.getElementById("des-org");
var orgInput = document.getElementById("orgInput");
var durHead = document.getElementById("durHead");
var durInput = document.getElementById("durInput");
var jobAdd = document.getElementById("jobAdd");
var orgAddInput = document.getElementById("orgAddInput");
var weJdp = document.getElementById("we-jdp");
var jdInput = document.getElementById("jdInput");
var coursePara = document.getElementById("coursePara");
var courseInput = document.getElementById("courseInput");
var submitBtn = document.getElementById("submitBtn");
var img = document.getElementById("img");
// Get the file input element and cast it as an HTMLInputElement
var fileInput = document.getElementById("propic");
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
submitBtn.addEventListener("click", function () {
    paraSkills.innerHTML = formSkill.value;
    eduPara.innerHTML = formEdu.value;
    lanPara.innerHTML = lanInput.value;
    nameHeading.innerHTML = nameInput.value;
    desHeading.innerHTML = ndoDesInput.value;
    objPara.innerHTML = formObj.value;
    email.innerHTML = formEmail.value;
    cNumber.innerHTML = formNumber.value;
    address.innerHTML = addInput.value;
    facebook.href = fbInput.value;
    linkedin.href = ldInput.value;
    gHub.href = ghInput.value;
    iGram.href = instaInput.value;
    desWe.innerHTML = desInput.value;
    desOrg.innerHTML = orgInput.value;
    durHead.innerHTML = durInput.value;
    jobAdd.innerHTML = orgAddInput.value;
    weJdp.innerHTML = jdInput.value;
    coursePara.innerHTML = courseInput.value;
    mainDiv.style.display = "flex";
    generateResume.style.display = "none";
    generatePDF.style.display = "flex";
    form.style.display = "none";
    subBtn.style.display = "none";
});
//  PDF FUNCTION
window.onload = function () {
    if (generatePDF) {
        generatePDF.addEventListener("click", function () {
            if (mainDiv) {
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
