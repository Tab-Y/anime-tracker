let storeInner = [];
let storePos = [];

const itemLen = 6;
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

/*
const insideEl = document.querySelector('.custom1');
let active = "";
for (let i = 0; i < storePos.length; i++) {
    if (i == 0) {
        active = "active";
    } else {
        active = "";
    }
    let guts = "";
    for (let j = 0; j < viewLen; j++) {
        guts += storeInner[mod6(storePos[i] + j)]
    }

    insideEl.innerHTML += `
                <div class="custom2 carousel-item ${active}">
                    ${guts} 
                </div>
    `;
    console.log(insideEl.innerHTML);
}
*/

hbs.registerHelper("custom", function(context, options) {
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
});
// Learned from https://bbbootstrap.com/snippets/bootstrap-5-bootstrap-5-carousel-vanilla-multiple-items-80120567#