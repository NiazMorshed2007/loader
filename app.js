const slider = document.querySelectorAll(".wrapper > div");

let counter = 0;
arr = ['active'];

function fu() {
    if (counter < slider.length - 1) {
        counter++;
        for (let i = 0; i < slider.length; i++) {
            if (counter == i) {
                slider[counter].classList.add(arr[0]);
                // document.querySelector('.index-wrapper').children[counter].classList.add('index-active');
                // txt();
            } else {
                slider[i].classList.remove(arr[0]);
                // document.querySelector('.index-wrapper').children[i].classList.remove('index-active');
            }
        }
    }
}

setInterval(fu, 3000);