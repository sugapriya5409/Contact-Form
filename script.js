const form=document.querySelector('form')
const fullname=document.getElementById('name')
const phone=document.getElementById('phone')
const email=document.getElementById('email')
const subject=document.getElementById('subject')
const message=document.getElementById('message')


function sendEmail(){
  const bodyMessage=`Full Name: ${fullname.value}<br> Email:${email.value}<br> Phone Number:${phone.value}<br>
   Message:${message.value}<br> Subject:${subject.value}`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "sugapriya5409@gmail.com",
        Password : "A1C55F9DE83EE62021F9287DAA86869621AF",
        To : 'sugapriya5409@gmail.com',
        From : "sugapriya5409@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message =>{
        if(message == 'OK'){
          Swal.fire({
            title: "Success!",
            text: "Message sent Successfully!",
            icon: "success"
          });
        }
      } 
    );

}

form.addEventListener('submit',(e)=>{
  e.preventDefault()
  sendEmail()
})