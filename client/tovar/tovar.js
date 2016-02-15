Template.tovar.events({
    'click .tovar':function(e, tmpl) {
        e.preventDefault();
    /*    console.log(e.target);
        tmpl.semerko = 'vou';
        console.log(tmpl.semerko);
        console.log(this);
*/
        
        
    }
});
Template.main.onRendered(function () {
  $( '.tovar img' ).hover(
        function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = 'H' + imgSrc;
            $( this ).attr('src', newImgSrc);
        },function() {
            var imgSrc = $(this).attr('src');
            var newImgSrc = imgSrc.slice(1);
            $( this ).attr('src', newImgSrc);
        }
    );
  $('.tovarBlock').click(function (e) {

        var tovarHeader = this.childNodes[3].childNodes[1].innerText;
        var firma = this.childNodes[3].childNodes[3].innerText;
        var price = this.childNodes[3].childNodes[5].innerText;
        console.log( firma, price, tovarHeader);
        var imgSrc = this.childNodes[1].childNodes[1].getAttribute('src');
        Session.set('imgSrc', imgSrc);
        $('#modal1').openModal();

    })

       
});
Template.modal1.helpers({
    leleka: function(){
        var word = Session.get('imgSrc');
        var wordFirst = Session.get('imgSrc')[0];
        if(wordFirst === 'H'){
            word = word.slice(1);
        }
        return {
            semen: '123',
            src: word
        }
    }
    
  });


