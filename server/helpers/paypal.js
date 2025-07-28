const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id:
    "AcAR_dh0zYDF_t7aakk21vcucnqcFP3c2zyxbuzgaYjAEwPWid6DrWAwNHw8AaSyrAQGiDCWXYdg9pyk",
  client_secret:
    "EL23fUSHOjVOwRs50Sz3uR0G05qmXbbj4-8QSMiiVZlHdFLlA6l5SLEPfUdIbbMRX-rij_HgkSVfLzsq",
});

module.exports = paypal;
