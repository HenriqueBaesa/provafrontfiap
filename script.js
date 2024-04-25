

const result = document.getElementById('result')


firstValue = 0
secondValue = 0
operation = ""


document.onkeydown = (event) => { 
    if (!isNaN(event.key) 
        || event.key == "+" 
        || event.key == "-" 
        || event.key == "x" 
        || event.key == "/"
        || event.key == ".") {
        digit(event.key)
    }

    if (event.key == "c") {
        clearAll()
    }

    if (event.key == "*") {
        digit("x")
    }
};

function digit(digit) {
    
    if (isNaN(digit)) {
        if (secondValue != 0) {
            return
        }
        if (operation != ""){
            result.value = result.value.substring(0, result.value.length - 1);
        }
        operation = digit
        updateDisplay()
        return
    }
    
    
    
    value = 0
    if (digit == "0") {
        value = value * 10
    } else {
        value = Number(digit)
    }

    if (operation != "") {
        if (secondValue != 0) {
            secondValue = (secondValue * 10) + value
        } else {
            secondValue = value
        }

    } else {
        if (firstValue != 0) {
            firstValue = (firstValue * 10) + value
        } else {
            firstValue = value
        }
    }

    updateDisplay()

    console.log(value)
}

function equals() {
    if (operation == "+") {
        final = firstValue + secondValue
        result.value = final
        operation = ""
        firstValue = 0
        secondValue = 0
        return
    } else if (operation == "-") {
        final = firstValue - secondValue
        result.value = final
        operation = ""
        firstValue = 0
        secondValue = 0
        return
    } else if (operation == "x") {
        final = firstValue * secondValue
        result.value = final
        operation = ""
        firstValue = 0
        secondValue = 0
        return
    } else if (operation == "/") {
        final = firstValue / secondValue
        result.value = final
        operation = ""
        firstValue = 0
        secondValue = 0
        return
    }
}

function updateDisplay() {
    result.value = firstValue + operation
    if (secondValue != 0) {
        result.value += "" + secondValue
    }
}

function clearAll() {
    value = 0
    result.value = ""
    operation = ""
}