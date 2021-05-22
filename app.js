

document.querySelector("button").addEventListener("click", function(){
    const select1 = document.querySelectorAll(".select1");
    const a = Array.from(select1);
    const select2 = document.querySelectorAll(".select2");
    const b = Array.from(select2);
    const input = document.querySelector("#input");
    const result = document.querySelector("#result");


    if (a[0].value === "Kilogram" && b[0].value === "Ton"){
        console.log("a")
        result.value = parseFloat(input.value/1000)
    } else if (a[0].value === "Ton" && b[0].value === "Kilogram"){
        console.log("b")
        result.value = parseFloat(input.value * 1000)
    } else if (a[0].value === "Kilogram" && b[0].value === "Kilogram"){
        console.log("c")
        result.value = parseFloat(input.value)
    } else if (a[0].value === "Ton" && b[0].value === "Ton"){
        console.log("d")
        result.value = parseFloat(input.value)
    }
})