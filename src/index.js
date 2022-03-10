fetch("http://apilayer.net/api/live?access_key=e12a8ff2cb281a22f95288d44f4476f4&currencies=EUR,GBP,CAD,AUD,MXN&source=USD&format=1")
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log(data.quotes)
    const dropdown = document.querySelector("select#currency-types")
    const input = document.querySelector('input#usd-placeholder')
    const divreturn = document.querySelector('div#return-amount')
    const divcurrency = document.querySelector('div#currency-name')
    const imgContainer = document.querySelector('img#return-img')
    input.type = "number"
    input.step = "any"
    const form = document.querySelector('form')
    const rateX = Object.entries(data.quotes)
    rateX[0][2] = "https://flagicons.lipis.dev/flags/4x3/eu.svg"
    rateX[1][2] = "https://flagicons.lipis.dev/flags/4x3/gb.svg"
    rateX[2][2] = "https://flagicons.lipis.dev/flags/4x3/ca.svg"
    rateX[3][2] = "https://flagicons.lipis.dev/flags/4x3/au.svg"
    rateX[4][2] = "https://flagicons.lipis.dev/flags/4x3/mx.svg"
    console.log(rateX)

    rateX.forEach(data => {
        const options = document.createElement('option')
        options.textContent = data[0]
        options.value = `{"country": "${data[0].slice(3)}", "rValue": "${data[1]}", "img": "${data[2]}"}`
        dropdown.append(options)
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const countryName = JSON.parse(dropdown.value).country
        const returnValue = JSON.parse(dropdown.value).rValue
        const img = JSON.parse(dropdown.value).img
        const returnCurrency = input.value * returnValue
        console.log(img)
        console.log(returnCurrency)
        console.log(countryName)
        imgContainer.src = img
        divreturn.textContent = returnCurrency
        divcurrency.textContent = countryName

    })
    
    

})