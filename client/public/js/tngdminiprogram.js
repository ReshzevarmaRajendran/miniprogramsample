var settings = {
  "url": "https://api-sd.tngdigital.com.my/acl/api/v1/payments/inquiryPayment",
  "method": "POST",
  "timeout": 0,
  "headers": {
    "Content-Type": "application/json; charset=UTF-8",
    "Client-Id": "2171020067475894",
    "Request-Time": "2020-12-31T10:34:53+08:00",
    "Signature": "algorithm=RSA256, keyVersion=2, signature=ZI1snBB1n7GVbT51Md0PGZ%2FrxK%2F88sbJsP1QgzuwmF83Nt6wtv1hl1Re%2FZFpPnJxBGw%2FM1VxKpoZUux2Pm8p%2F5oUy1tXwB%2F9vJLOhc0Dc4GrdFPnzizwgBDzTWG0v506v8MgsZ9ljOlAFxsuqcAWgFtAO8U7ICZ3pPnbrUe8jDxZ7KiLczrA33HKeuwkvxquKXgqFFNfG3J7vX9zzL7Q4SctXouRrwjKQPCrl9z0PJghNk%2FS%2F8y0zMjNVPPEDUtPRHKo0MHD5OZxebwu71mBVTUID%2F3UQGQB03fYk9MOVPezqFzudO6pdo30aZV9Nr9nBr2jbG9oA5d2rAZHxcotuA%3D%3D",
    "Cookie": "JSESSIONID=6AB29A325F999CBC620F754357490DE6; acw_tc=ac11000116093169519741754e06dd807d297a91b31d9a7cbc75e2ef8e6eab; JSESSIONID=768A190C4E9A0E5953E6D78B666A5CA6"
  },
  "data": "{\r\n\t \"paymentRequestId\":\"REF_MERCHANT_8809\",\r\n\t \"partnerId\":\"217120000000451271872\"\r\n}",
};

$.ajax(settings).done(function (response) {
  alert(response);
});