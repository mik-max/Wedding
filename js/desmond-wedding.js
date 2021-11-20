document.addEventListener('DOMContentLoaded', function(){
     
     document.querySelectorAll('.gallery-image').forEach(element => {
          element.setAttribute('data-toggle', 'modal');
          element.setAttribute('data-target', '#myModal')  
          element.addEventListener('click', imageModal);
     });
     // Get the live-images  modal
        // Get the live-images  modal
        var modal = document.getElementById("imgModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
          function imageModal(){
               var modalImg = document.getElementById("img01");
               var captionText = document.getElementById("caption");
               document.querySelectorAll(".gallery-image").forEach(element => {
                    element.onclick = function(){
                         modal.style.display = "block"; 
                         modalImg.src = this.src;
                         captionText.innerHTML = '#MADE21#'; //this.alt;
                    }
               });
          
          
               // Get the <span> element that closes the modal
               var span = document.getElementsByClassName("img-close")[0];
          
               // When the user clicks on <span> (x), close the modal
               span.onclick = function() {
                    modal.style.display = "none";
               }
          }
          imageModal();

})