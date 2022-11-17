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
    },
    jumboButtons: (context) => {
        var ret = `<button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" aria-label="Slide 1" class="active" aria-current="true"></button>`;
        var viewLen = context.length;

        for (let i = 1; i < viewLen; i++) {
            ret += `<button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="${i}" aria-label="Slide ${i+1}"></button>`;
        }

        return ret;
    },
    jumboImages: (context, options) => {
        var ret = `
            <div class="carousel-item active c-item">
                <img src="${context[0].picture}" class="d-block w-100 c-img" alt="Slide 1">
                <div class="banner">${context[0].title}</div>
            </div>`;

        var viewLen = context.length;
        for (let i = 1; i < viewLen; i++) {
            ret += `
            <div class="carousel-item c-item">
                <img src="${context[i].picture}" class="d-block w-100 c-img" alt="Slide ${i+1}">
                <div class="banner">${context[i].title}</div>
            </div>`;
        }

        return ret;
    }
};
