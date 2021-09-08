// https://stackoverflow.com/questions/37096367/how-to-convert-seconds-to-minutes-and-hours-in-javascript/49905383
const secondsToHms = (d) => {
    d = Number(d);
    const h = Math.floor(d / 3600);
    const m = Math.floor(d % 3600 / 60);
    const s = Math.floor(d % 3600 % 60);

    const hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    const mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    const sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay; 
}

const getResults = () => {
    const elemResults = document.getElementById("results")
    const elemCpsNumber = document.getElementById("cpsNumber")
    const elemCpsSize = document.getElementById("cpsSize")
    const elemCostNumber = document.getElementById("costNumber")
    const elemCostSize = document.getElementById("costSize")

    const cpsNumber = parseInt( elemCpsNumber.value )
    const cpsSize = parseInt( elemCpsSize.value )

    const costNumber = parseInt( elemCostNumber.value )
    const costSize = parseInt( elemCostSize.value )

    if(isNaN(cpsNumber)) {
        elemResults.innerText = "Missing number of cookies for Cookies per Second"
        return
    } 

    if(isNaN(costNumber)) {
        elemResults.innerText = "Missing number of cookies for Cost"
        return
    } 

    const cps = cpsNumber * cpsSize
    const cost = costNumber * costSize
    const seconds = Math.ceil(cost / cps)
    const result = secondsToHms(seconds)

    elemResults.innerText = `ETA ${result}`
}


