var _a;
(_a = document.getElementById("generateResume")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var mainDiv = document.getElementById("mainDiv");
    var generateResume = document.getElementById("generateResume");
    var form = document.getElementById("form");
    var subBtn = document.getElementById("subBtn");
    mainDiv === null || mainDiv === void 0 ? void 0 : mainDiv.style.display = "none";
    generateResume === null || generateResume === void 0 ? void 0 : generateResume.style.display = "none";
    form.style.display = "flex";
    subBtn === null || subBtn === void 0 ? void 0 : subBtn.style.display = "flex";
});
// let file = document.getElementById("propic")
// file?.onchange = () =>{
//     console.log(file.files[0])
// }
// let reader = new FileReader()
// reader.readAsDataURL(file)
// console.log(reader.result)
// window.onload = function () {
//     document.getElementById("generatePDF")
//     ?.addEventListener("click", ()=>{
//         const mainDiv = document.getElementById("mainDiv");
//         console.log(mainDiv?.innerHTML)
//         console.log(window)
//         html2pdf().from(mainDiv).save()
//     })
// }
