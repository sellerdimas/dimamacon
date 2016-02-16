Visitors = new orion.collection('visitor', {
  singularName: 'Visitors', // The name of one of these items
  pluralName: 'Visitors', // The name of more than one of these items
  link: {
    title: 'Visitors' 
  },

  tabular: {

    columns: [
       { 
        data: "ipAddress", 
        title: "Ip Address" 
      },
       { 
        data: "browser", 
        title: "Browser" 
      },
       { 
        data: "os", 
        title: "os" 
      },
       { 
        data: "city", 
        title: "city" 
      },
      { 
        data: "country", 
        title: "Country" 
      },
      { 
        data: "referer", 
        title: "Referer" 
      },
      { 
        data: "date", 
        title: "date" 
      }
    ]
  }
});


Visitors.attachSchema(new SimpleSchema({
   ipAddress: {
    type: String,
    optional: false,
    label: 'ipAddress ID',
  },
   browser: {
    type: String,
    optional: true,
    label: 'browser ID',
  },
   os: {
    type: String,
    optional: true,
    label: 'os ID',
  },
  city: {
    type: String,
    optional: true,
    label: 'city',
  },
  country: {
    type: String,
    optional: true,
    label: 'country',
  },
   referer: {
    type: String,
    optional: true,
    label: 'referer',
  },
   date: {
    type: String,
    optional: false,
    label: 'date',
  }
}));

FullDay = new orion.collection('FullDay', {
  singularName: 'FullDay', // The name of one of these items
  pluralName: 'FullDay', // The name of more than one of these items
  link: {
    title: 'FullDay' 
  },

  tabular: {

    columns: [
       { 
        data: "ipAddress", 
        title: "Ip Address" 
      },
       { 
        data: "browser", 
        title: "Browser" 
      },
       { 
        data: "os", 
        title: "os" 
      },
       { 
        data: "city", 
        title: "city" 
      },
      { 
        data: "country", 
        title: "Country" 
      },
      { 
        data: "referer", 
        title: "Referer" 
      },
      { 
        data: "date", 
        title: "date" 
      }
    ]
  }
});


FullDay.attachSchema(new SimpleSchema({
   ipAddress: {
    type: String,
    optional: false,
    label: 'ipAddress ID',
  },
   browser: {
    type: String,
    optional: true,
    label: 'browser ID',
  },
   os: {
    type: String,
    optional: true,
    label: 'os ID',
  },
  city: {
    type: String,
    optional: true,
    label: 'city',
  },
  country: {
    type: String,
    optional: true,
    label: 'country',
  },
   referer: {
    type: String,
    optional: true,
    label: 'referer',
  },
   date: {
    type: String,
    optional: false,
    label: 'date',
  }
}));



CountVisits = new orion.collection('CountVisits', {
  singularName: 'CountVisits', // The name of one of these items
  pluralName: 'CountVisits', // The name of more than one of these items
  link: {
    title: 'CountVisits' 
  },

  tabular: {

    columns: [
       { 
        data: "count", 
        title: "Count" 
      },
       { 
        data: "date", 
        title: "Date" 
      }
    ]
  }
});


CountVisits.attachSchema(new SimpleSchema({
    count: {
    type: Number,
    optional: false,
    label: 'count',
  },
   date: {
    type: String,
    optional: false,
    label: 'date',
  }
}));






NewCollections = new orion.collection('newCollections', {
  singularName: 'New collections', // The name of one of these items
  pluralName: 'New collections', // The name of more than one of these items
  link: {
    title: 'New collections' 
  },

  tabular: {

    columns: [
       { 
        data: "tovarHeader", 
        title: "Header" 
      },
       { 
        data: "firma", 
        title: "Company" 
      },
       { 
        data: "akcii", 
        title: "akcii" 
      },
       { 
        data: "price", 
        title: "Price" 
      },
      { 
        data: "imgSrc", 
        title: "Main src" 
      },
      { 
        data: "smallImg1", 
        title: "Img1" 
      },
      { 
        data: "smallImg2", 
        title: "Img2" 
      },
      { 
        data: "white", 
        title: "White" 
      },
      { 
        data: "black", 
        title: "Black" 
      },
      { 
        data: "red", 
        title: "Red" 
      },
      { 
        data: "blue", 
        title: "Blue" 
      },
      { 
        data: "s", 
        title: "S" 
      },
      { 
        data: "m", 
        title: "M" 
      },
      { 
        data: "l", 
        title: "L" 
      },
      { 
        data: "xl", 
        title: "XL" 
      }
    
    ]
  }
});



NewCollections.attachSchema(new SimpleSchema({
   tovarHeader: {
    type: String,
    optional: false,
    label: 'tovarHeader',
  },
   firma: {
    type: String,
    optional: true,
    label: 'firma',
  },
   akcii: {
    type: String,
    optional: true,
    label: 'akcii',
  },
  price: {
    type: String,
    optional: false,
    label: 'price',
  },
  imgSrc: {
    type: String,
    optional: false,
    label: 'imgSrc',
  },
  smallImg1: {
    type: String,
    optional: true,
    label: 'Img1',
  },
  smallImg2: {
    type: String,
    optional: true,
    label: 'Img2',
  },
   white: {
    type: String,
    optional: true,
    label: 'white',
  },
   black: {
    type: String,
    optional: true,
    label: 'black',
  },
  red: {
    type: String,
    optional: true,
    label: 'red',
  },
  blue: {
    type: String,
    optional: true,
    label: 'blue',
  },
  s: {
    type: String,
    optional: true,
    label: 'S',
  },
  m: {
    type: String,
    optional: true,
    label: 'M',
  },
  l: {
    type: String,
    optional: true,
    label: 'L',
  },
  xl: {
    type: String,
    optional: true,
    label: 'XL',
  }


}));


/*Preload.insert({'src':'tovar1.jpeg','cvet':'red','size':'xl'});*/
/*NewCollections.insert({
  'tovarHeader': 'header',
  'firma': 'firma',
  'akcii': 'akcii',
  'price': 'price',
  'imgSrc': 'word',
  'src':'tovar1.jpeg',
  'color':{
    'red':'Красный',
    'blue':'Синий',
    'black': 'Черный'
  }


});*/