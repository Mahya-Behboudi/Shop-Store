 const shorten =(para) => {
    const splitePara = para.split(" ");
    const newPara = `${splitePara[0]} ${splitePara[1]}`
    return newPara
}
export {shorten};