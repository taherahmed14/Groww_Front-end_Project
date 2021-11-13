let arr = document.querySelectorAll("form");
arr.forEach(x => x.addEventListener('submit', paymentMethod));
let i = 0;

let selectedType = 'upi';

let upi = document.getElementById('upi');
let creditCard = document.getElementById('creditCard');
let netBanking = document.getElementById('netBanking');

const options = [upi, netBanking, creditCard]

options.forEach((item, i, array) => {
    const currentItem = i;

    item.addEventListener('click', (e) => {

        const currentType = e.path.filter(ele => {
            const type = ele.dataset?.type;

            if (Boolean(type)) {
                selectedType = type
            }
        })

        if (selectedType === array[currentItem].id) {
            arr[currentItem].classList.add('open');


            options.filter((item, i) => i !== currentItem).forEach(element => {
                const elemntForm = element.querySelector('form')
                elemntForm.classList.remove('open')

            })
        }
    })
})

arr[0].classList.add('open')



function paymentMethod(e) {
    e.preventDefault();
    // console.log('success!!!' + e.target.id);
    window.location.href = "groww_successPage.html";
}