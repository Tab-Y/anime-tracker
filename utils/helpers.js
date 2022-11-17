let storeInner = [];
let storePos = [];

const itemLen = 16; // context.length
const viewLen = 4;
let longShift = true;

function mod6(input) {
    return (input % itemLen);
}

for (let i = 1; i <= itemLen; i++) {
    let innerChunk = `
                    <div class="col-md-3">
                        <img src="https://via.placeholder.com/225x316?text=${i}" class="img-fluid">
                    </div>
    `;

    storeInner.push(innerChunk);
}

let cnt = 1;
do {
    let base = mod6(viewLen*(cnt-1));
    storePos.push(base);
} while (mod6(viewLen*(cnt++)) != 0);

module.exports = {
    format_date: (date) => {
        // Format date as MM/DD/YYYY
        return date.toLocaleDateString();
    },
    custom: (context, options) => {
        var ret = "";
        let active = "";
    
        for (let i = 0; i < storePos.length; i++) {
            if (i == 0) {
                active = "active";
            } else {
                active = "";
            }
    
            ret += `<div class="custom2 carousel-item ${active}">`;
            for (let j = 0; j < viewLen; j++) {
                ret += options.fn(context[mod6(storePos[i] + j)]);
            }
            ret += "</div>";
        }
      
        return ret;
    }
};
