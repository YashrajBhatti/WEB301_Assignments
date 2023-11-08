$(document).ready(function () {
    // Swiper initialization
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    $("#paymentForm").validate({
        rules: {
            ccnumber: {
                required: true,
                pattern: /^[0-9]{10}/
            },
            expDate: {
                required: true
            },
            cvv: {
                required: true,
                pattern: /^[0-9]{3}/
            }
        },
        messages: {
            ccnumber: {
                required: "Please enter a credit card number",
                pattern: "Please enter a valid credit card number (10 digits)"
            },
            cvv: {
                required: "Please enter a CVV",
                pattern: "Please enter a valid CVV (3 digits)"
            },
            expDate: {
               required: "Please enter a date."
            }
        }
    });
});
