
const format = (value, first, last, options) => {
    const firstValue = value.substring(first.a, first.b)
    const lastValue  = `${options?.score ? '.' : ','}${value.substring(last?.a, last?.b)}`
    return `${firstValue}${last ? lastValue : ''}`
}

const formatValue = ( number ) => {
    const valueNumber = Number(number)
    const valueString = number.toString()

    if(valueNumber < 10000) return valueString
    else if(valueNumber < 100000) return `${format(valueString, {a: 0, b: 2}, {a: 2, b: 3})}mil`
    else if(valueNumber < 1000000) return `${format(valueString, {a: 0, b: 3})}mil`
    else if(valueNumber < 10000000) return `${format(valueString, {a: 0, b: 1}, {a: 1, b: 2})}milhoes`
    else if(valueNumber < 100000000) return `${format(valueString, {a: 0, b: 2}, {a: 2, b: 3})}milhoes`
    else if(valueNumber < 1000000000) return `${format(valueString, {a: 0, b: 3})}milhoes`
    else if(valueNumber < 10000000000) return `${format(valueString, {a: 0, b: 1}, {a: 1, b: 2})}bilhoes`
    else if(valueNumber < 100000000000) return `${format(valueString, {a: 0, b: 2}, {a: 2, b: 3})}bilhoes`
    else if(valueNumber < 1000000000000) return `${format(valueString, {a: 0, b: 3})}bilhoes`
}

export default formatValue