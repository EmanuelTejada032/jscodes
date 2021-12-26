// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })


const fetchBitcoinPrice = async () => {
    try {
        const res = await fetch('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json');
        const data = await res.json();
        console.log(data)
        data.forEach( card => {
            const { name } = card._embedded["wp:term"][2][0] || card._embedded["wp:term"][1][0]
            console.log(name)
        })
    } catch (e) {
        console.log("SOMETHING WENT WRONG!!!", e)
    }
}

fetchBitcoinPrice()

