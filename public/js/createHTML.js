const insideEl = document.querySelectorAll('.custom1');
console.log(insideEl);
let active = "";
let storeHTML = [];
let storeInner = [];
let storePos = [];

const itemLen = 6;
const viewLen = 4;
let longShift = true;

function mod6(input) {
    return (input % itemLen);
}

insideEl.innerHTML = "";
for (let i = 1; i <= itemLen; i++) {
    if (i == 1) {
        active = "active";
    } else {
        active = "";
    }

    let innerChunk = `
                    <div class="col-md-3">
                        <img src="https://via.placeholder.com/225x316?text=${i}" class="img-fluid">
                    </div>
    `;
    let chunk = `
                <div class="custom2 carousel-item ${active}">
                    ${innerChunk} 
                </div>
    `;
    //          > Carousel item properties
    //              > item size (3/12)
    //                  > img
    //                  > sub-banner

    if (longShift) {
        storeHTML.push(chunk);
        storeInner.push(innerChunk);
    } else {
        insideEl.innerHTML += chunk;
    }
}

if (longShift) {
    let cnt = 1;
    do {
        let base = mod6(viewLen*(cnt-1));
        insideEl.innerHTML += storeHTML[base];
        // console.log(insideEl.innerHTML);
        storePos.push(base);
    } while (mod6(viewLen*(cnt++)) != 0);
}
// Learned from https://bbbootstrap.com/snippets/bootstrap-5-bootstrap-5-carousel-vanilla-multiple-items-80120567#

let items = document.querySelectorAll('.carousel .custom2');
console.log(items);

if (longShift) {
    // Full Shift variant
    let iter = 0;
    items.forEach((el) => {
        for (let i = 1; i < viewLen; i++) {
            let next = storeInner[mod6(storePos[iter%3] + i)]
            // add to base object
            el.innerHTML += next;
        }
        iter++;
    })
} else {
    // Shift 1 variant
    items.forEach((el) => {
        const minPerSlide = 4;
        let next = el.nextElementSibling;
        for (var i=1; i<minPerSlide; i++) {
            if (!next) {
                // wrap carousel by using first child
                next = items[0];
              }
            let cloneChild = next.cloneNode(true);
            el.appendChild(cloneChild.children[0]);
            next = next.nextElementSibling;
        }
    })
}