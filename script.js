function removeTransition(e) {
   if (e.propertyName !== 'transform') return;
   e.target.classList.remove('playing');
}

function playSound(e) {
   const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
   if (!audio) return;

   key.classList.add('playing');
   audio.currentTime = 0;
   audio.play();
   }

   const keys = Array.from(document.querySelectorAll('.key'));
   keys.forEach(key => key.addEventListener('transitionend', removeTransition));
   window.addEventListener('keydown', playSound);

  //document.getElementById("form-main")

   /*function ValidaFormulario() {
      const nombre = 'Nombre*'
      const email = 'Email*'
      if (nombre.length == 0) {
      alert("Introduce un nombre valido")
      return;
      }else{
         if (email.length == 0 || email.includes ('@')) {
            alert("Introduce un correo valido")
            return;
         }

      }


   */

      

   



   