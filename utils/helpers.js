let storePos = [];
const viewLen = 4;

function mod6(input, base) {
    return (input % base);
}

function preSetup(arrLength) {
    const itemLen = arrLength; // context.length
    let longShift = true;

    let cnt = 1;
    do {
        let base = mod6(viewLen*(cnt-1), itemLen);
        storePos.push(base);
    } while (mod6(viewLen*(cnt++), itemLen) != 0);
}

module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    custom: (context, options) => {
        var ret = "";
        let active = "";
        preSetup(context.length);
    
        for (let i = 0; i < storePos.length; i++) {
            if (i == 0) {
                active = "active";
            } else {
                active = "";
            }
    
            ret += `<div class="custom2 carousel-item ${active}">`;
            for (let j = 0; j < viewLen; j++) {
                ret += options.fn(context[mod6(storePos[i] + j, context.length)]);
            }
            ret += "</div>";
        }
      
        return ret;
    }
};
