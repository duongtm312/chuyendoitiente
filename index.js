function convert() {
    let amount = document.getElementById("amount").value
    let from = document.getElementById("from").value
    let to = document.getElementById("to").value
    let result
    if (from == "VN") {
        if (to == "USD") {
            result = amount / 23000
        } else {
            result = amount
        }

    } else if (to == "VN") {
        result = amount * 23000
    } else {
        result = amount
    }

document.getElementById("result").innerHTML= result

}