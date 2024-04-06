// 初始化 EmailJS
(function() {
    emailjs.init("iLKHs4IWGwXCJSiU_"); // EmailJS的用户ID
  })();
  
// 为发送按钮添加点击事件监听器
document.getElementById('send').addEventListener('click', function(event) {
    event.preventDefault();
  
    var contactForm = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // 确保所有字段都被填写
    if (!contactForm.name || !contactForm.email || !contactForm.subject || !contactForm.message) {
        alert('Please fill in all fields.');
        return; // 阻止函数继续执行
    }

    // 使用 EmailJS 发送邮件
    emailjs.send('service_h5bz5s9', 'template_1fw2fcj', contactForm)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send your message, please try again.');
        });
});