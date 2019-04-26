//je limite la zone de jeux
var minX=$('#playRoom').offset().left;
var maxX=$('#playRoom').width()-minX;
var topX=$('#playRoom').offset().top;
var botX=$('#playRoom').height()-topX;
//je size la zone de jeux
$(window).resize(function(){
    minX=$('#playRoom').offset().left;
    maxX=$('#playRoom').width()-minX;
    topX=$('#playRoom').offset().top;
    botX=$('#playRoom').height()-topX;
});
//j initialise les zone limite du jeux avec le max et le min qui signifie droite et gauche
var squareX = minX+maxX/2-45;
var heightX = topX+botX/2-45
// on attend que la page soit chargée
$(document).ready(function(){
    //début le carré au centre (-10 car le carré fait 20px)
    $('#square').css('margin-left', squareX );
    $('#square').css('margin-top', heightX);
    //lorsque je suis sur le champ de texte
    $('#controlArea').focus(function(){
        //j'appuie sur une touche fléche droite ou gauche
        $('#controlArea').keydown(function(){

          if (event.keyCode==38){

          heightX-=10;
          if (heightX < topX-80){
            heightX=botX;
          }
        }

          if (event.keyCode==40){

          heightX+=10;
          if (heightX > botX-80){
            heightX=topX;
          }
        }
            //je mes event keycode pour selectionné la touche ('39' qui et la fleche vers la Droite)
            if (event.keyCode==39 ){
              $('#square').css('-webkit-transform', 'scaleX(1)',
                              'transform', 'scaleX(1)');
                //on incrémente la valeur de squareX
                //et on verifie si on depasse la largeur de la page
                squareX+=10;
                if (squareX > maxX-80){
                    squareX=minX;
                }
            }
            //pareil que l'autre event keycode pour selectionné la touche féche vers la gauche ('37')
            if (event.keyCode==37 ){
              $('#square').css('-webkit-transform', 'scaleX(-1)',
                              'transform', 'scaleX(-1)');
                //on décrémente la valeur de squareX
                //et on vérifie si on depasse la limite gauche de la page
                squareX-=10;
                if (squareX < minX){
                    squareX=maxX-80;
                }
            }
            // on met à jour la position du carré
            $('#square').css('margin-left', squareX );
            $('#square').css('margin-right', squareX );
            $('#square').css('margin-top', heightX);
            $('#square').css('margin-bottom', heightX);
        });
    });
});
