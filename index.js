function generateOctet() {
    let octet = [];
    for (let i = 0; i < 8; i++) {
        octet.push(Math.round(Math.random()));
    }
    return octet.join("");
}