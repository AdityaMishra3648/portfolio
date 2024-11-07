let rotator = document.querySelectorAll('.rotator');
let backend_info = document.querySelector('.backend-info');
let programmer_info = document.querySelector('.programmer-info');
let frontend_info = document.querySelector('.frontend-info');

//  skill animation sectoion ?? do not touch

const skills = [
    'Backend Developer',
    'Programmer',
    'Django Developer',
    'Web Developer',
    'Python Developer',
  ];
  let i = 0;
  let n = skills.length;
  let skillsElement = document.querySelector('.skill-changer');
  function updateSkills() {
    let pre_string = String(skillsElement.textContent);
    for(let j = 0;j<pre_string.length;j++){
        pre_string = pre_string.slice(0,-1);
        setTimeout(()=>{
            pre_string = pre_string.slice(0,-1);
            skillsElement.textContent = pre_string;
        },j*50);
    }
    setTimeout(()=>{
        let temp = "";
        for(let j = 0;j<skills[i].length;j++){
            setTimeout(()=>{
                temp += skills[i][j];
                skillsElement.textContent = temp;
                
            },j*40);
        }
        setTimeout(()=>{
            i = (i + 1) % n;
        },2000)
    },pre_string.length*70)
  }
  setInterval(updateSkills,5000);
// end of skill animation section

rotator.forEach(element => {
    element.addEventListener('click', () => {
        if (element.classList.contains('slow-rotate')) {
            element.classList.add('transform');
            element.classList.add('rotated-180');
            setTimeout(()=>{
                element.classList.remove('slow-rotate');
            },500);
            if(element.classList.contains('backend-toggle')){
                backend_info.classList.add('hidden');
            }else if(element.classList.contains('programmer-toggle')){
                programmer_info.classList.add('hidden');
            }else{
                frontend_info.classList.add('hidden');
            }
        } else {
            element.classList.remove('transform');
            element.classList.remove('rotated-180');
            element.classList.add('slow-rotate');
            if(element.classList.contains('backend-toggle')){
                backend_info.classList.remove('hidden');
            }else if(element.classList.contains('programmer-toggle')){
                programmer_info.classList.remove('hidden');
            }else{
                frontend_info.classList.remove('hidden');
            }
        }
    });
});


// let submit_button = document.querySelector(".submit-button");  
// submit_button.addEventListener('submit',function(event){
//     event.preventDefault();
//     sendmail();
// })
// emailjs.init("service_6sxn973");
// function sendmail(){
//     emailjs.init("service_6sxn973");
//     var params = {
//         seller_name : document.querySelector(".seller-name").innerHTML,
//         my_name : "Aditya Mishra",
//         product_name : document.querySelector(".product-name").innerHTML,
//         my_mail : document.querySelector(".person-mail").innerHTML,
//         seller_mail: "mk6748134@gmail.com",
//         mess: document.querySelector(".my-mess").value
//     };
//     const service_id = "service_6sxn973";
//     const template_id = "template_5vclz9r";
//     emailjs.send(service_id,template_id,params)
//     .then(res=>{

//          document.querySelector(".seller-name").value = "";
//          document.querySelector(".product-name").value = "";
//          document.querySelector(".person-mail").value = "";
//         alert("request sent to the seller successfully");
//     }).catch(err=>{
//         alert("some error occured");
//     });
// }
