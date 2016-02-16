Template.modal1.events({
    'click .modalButton': function (e) {
        var destination = $('.' + 'contact').offset().top;
        var minus = destination - 60;
        $("body,html").animate({scrollTop: minus }, 800);
    }
});
Template.modal1.events({
    'click #cancelButton': function (e) {
        var destination = $('.' + 'servicesMain').offset().top;
        var minus = destination - 95;
        $("body,html").animate({scrollTop: minus }, 800);
    }
});
Template.modal1.helpers({
    modalHelper: function(){
        var word = Session.get('imgSrc');
        var wordFirst = Session.get('imgSrc')[0];
        if(wordFirst === 'H'){
            word = word.slice(1);
        }
        return {
            tovarHeader: Session.get('tovarHeader'),
            firma: Session.get('firma'),
            akcii: Session.get('akcii'),
            price: Session.get('price'),
            imgSrc: word

        }

    },
    preModal:function () {
            return NewCollections.find({_id: Session.get('tovarId')});
        }
    
  });
Template.tovar.helpers({
    preModals:function () {
            return NewCollections.find();
        }
    
  });




/*Template.main.onRendered(function () {
    
  $( '.modalPhoto img' ).click(
        function() {
            var imgSrc = $(this).attr('src');
            console.log('imgSrc')
            $('#mainImg').attr('src', imgSrc);

        
        });

    });*/

Template.modal1.events({
    'click .modalPhoto img': function (e) {
       var imgSrc = $(e.target).attr('src');
            console.log(imgSrc)
            $('#mainImg').attr('src', imgSrc);
    }
});