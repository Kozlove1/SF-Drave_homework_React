/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
import './FaqNew.css'
import '../img/social/faceBook.png'
import '../img/social/instagramm.png'
import '../img/social/vk.png'
import '../img/undraw_questions.png'
import '../img/VectorBurger.png'
import '../img/Logo.png'
import '../img/Up.png'
import '../img/Down.png'



const coll = document.querySelectorAll('.questions__box-collapsible');

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = `${content.scrollHeight}em`;
    }
  });
}
