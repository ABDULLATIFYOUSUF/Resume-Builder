

const mainDiv = document.getElementById("mainDiv") as HTMLElement
const generateResume = document.getElementById("generateResume") as HTMLElement
const form = document.getElementById("form") as HTMLElement
const subBtn = document.getElementById("subBtn") as HTMLElement
const generatePDF = document.getElementById("generatePDF") as HTMLElement


    generateResume?.addEventListener("click", () => {
        mainDiv.style.display = "none";
        generateResume.style.display = "none"
        form.style.display = "flex"
        subBtn.style.display = "flex"
    })
    let formSkill = document.getElementById("formSkill") as HTMLInputElement
    let paraSkills = document.getElementById("paraSkills") as HTMLElement
    let formEdu = document.getElementById("formEdu") as HTMLInputElement
    let eduPara = document.getElementById("eduPara") as HTMLElement
    let lanInput = document.getElementById("lanInput") as HTMLInputElement
    let lanPara = document.getElementById("lanPara") as HTMLElement
    let nameHeading = document.getElementById("nameHeading") as HTMLElement
    let nameInput = document.getElementById("nameInput") as HTMLInputElement
    let desHeading = document.getElementById("desHeading") as HTMLElement
    let ndoDesInput = document.getElementById("ndoDesInput") as HTMLInputElement
    let formObj = document.getElementById("formObj") as HTMLInputElement
    let objPara = document.getElementById("objPara") as HTMLElement
    let email = document.getElementById("email") as HTMLElement
    let formEmail = document.getElementById("formEmail") as HTMLInputElement
    let cNumber = document.getElementById("cNumber") as HTMLElement
    let formNumber = document.getElementById("formNumber") as HTMLInputElement
    let address = document.getElementById("address") as HTMLElement
    let addInput = document.getElementById("addInput") as HTMLInputElement
    let facebook = document.getElementById("facebook") as HTMLAnchorElement
    let fbInput = document.getElementById("fbInput") as HTMLInputElement
    let linkedin = document.getElementById("linkedin") as HTMLAnchorElement
    let ldInput = document.getElementById("ldInput") as HTMLInputElement
    let gHub = document.getElementById("gHub") as HTMLAnchorElement
    let ghInput = document.getElementById("ghInput") as HTMLInputElement
    let iGram = document.getElementById("iGram") as HTMLAnchorElement
    let instaInput = document.getElementById("instaInput") as HTMLInputElement
    let desWe = document.getElementById("des-we") as HTMLElement
    let desInput = document.getElementById("desInput") as HTMLInputElement
    let desOrg = document.getElementById("des-org") as HTMLElement
    let orgInput = document.getElementById("orgInput") as HTMLInputElement
    let durHead = document.getElementById("durHead") as HTMLElement
    let durInput = document.getElementById("durInput") as HTMLInputElement
    let jobAdd = document.getElementById("jobAdd") as HTMLElement
    let orgAddInput = document.getElementById("orgAddInput") as HTMLInputElement
    let weJdp = document.getElementById("we-jdp") as HTMLElement
    let jdInput = document.getElementById("jdInput") as HTMLInputElement
    let coursePara = document.getElementById("coursePara") as HTMLElement
    let courseInput = document.getElementById("courseInput") as HTMLInputElement
    let submitBtn = document.getElementById("submitBtn") as HTMLElement
    let img = document.getElementById("img") as HTMLImageElement

// Get the file input element and cast it as an HTMLInputElement
let fileInput = document.getElementById("propic") as HTMLInputElement;
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


    submitBtn.addEventListener("click", () => {
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
})
    
    //  PDF FUNCTION

    window.onload = function () {
        if (generatePDF) {
            generatePDF.addEventListener("click", () => {
                if (mainDiv) {
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
    