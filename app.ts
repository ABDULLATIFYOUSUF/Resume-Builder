let changeHeading = () => {
    let input = document.getElementById("input") as HTMLInputElement;
    let heading = document.getElementById("heading") as HTMLHeadingElement;
    heading.innerHTML = input.value
}