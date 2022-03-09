fetch("http://apilayer.net/api/live?access_key=e12a8ff2cb281a22f95288d44f4476f4&currencies=EUR,GBP,CAD,AUD,MXN&source=USD&format=1")
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log(data.quotes)
    const dropdown = document.querySelector("select#currency-types")
    const input = document.querySelector('input#usd-placeholder')
    input.type = "number"
    input.step = "any"
    const form = document.querySelector('form')
    const rateX = Object.entries(data.quotes)
    rateX[0][2] = "https://media.istockphoto.com/photos/european-union-flag-picture-id530234499?s=612x612"
    rateX[1][2] = "https://m.media-amazon.com/images/I/41Q-7p2hzDL._AC_.jpg"
    rateX[2][2] = "https://www.flagsonline.it/uploads/2016-6-6/1200-0/canada.jpg"
    rateX[3][2] = "https://www.enchantedlearning.com/school/australia/Australiaflagbig.GIF"
    rateX[4][2] = "https://flagpedia.net/data/flags/w580/mx.png"
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
        

    })
    
    

})