function getGetHEXColorCode() {
    const rValue = Math.round(0xFF * Math.random()).toString(16).padStart(2, '0');
    const gValue = Math.round(0xFF * Math.random()).toString(16).padStart(2, '0');
    const bValue = Math.round(0xFF * Math.random()).toString(16).padStart(2, '0');
    return '#' +  rValue + gValue + bValue;
}
