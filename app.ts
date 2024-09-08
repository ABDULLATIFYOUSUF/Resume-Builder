
    document.getElementById("generateResume")
    ?.addEventListener("click", () => {
        const mainDiv = document.getElementById("mainDiv") as HTMLElement
        const generateResume = document.getElementById("generateResume")
        const form = document.getElementById("form") as HTMLElement
        const subBtn = document.getElementById("subBtn")
        mainDiv?.style.display = "none";
        generateResume?.style.display = "none"
        form.style.display = "flex"
        subBtn?.style.display = "flex"
    })

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
