$(function() {

  var theData = {
    home: {
      title: 'Adaptations Guidelines',
      pdf: 'documents/AdaptationsInformation2015.pdf',
      image: 'images/forms/SpanishWG.jpg'
    },
     forms: [
       {
         name: 'Afrikaans',
         key: 'afrikaans',
         body: [
           { text: [
             'Contact:',
             'Frenette Southwood',
             'Email: fs@sun.ac.za'
           ] },
           { text: [
             'Contact:',
             'Helena Oosthuizen',
             'Email: oosthe@sun.ac.za'
           ] }
         ]
       }, {
         name: 'Albanian',
         key: 'albanian',
         body: [
           { textGroup: ['Contact:'], style: { 'font-weight': 'bold' } },
           { textGroup: [ 'Dr. Enkeleida Kapia' ], isPdf: true, url: 'path/to/file.pdf' },
           { textGroup: [
              'Dr. Enkeleida Kapia',
             'Research Scientist &Egrave;',
             'Albanian Institute of Developmental Studies',
             'Tirana, Albania'
           ] },
           { textGroup: [
             'University of Hamburg',
             'Cluster of Excellence (Federal Level)',
             'Lingustic Diversity Management in Urban Areas - LiMA'
           ] },
           { textGroup: [
             'Center for Albanian Studies',
             'National Research Institutes of History, Archeology, Ethnology, Lingustics and Literature',
             'Sheshi "Nene Tereza", Tirana, Albania',
             'ekapia@bu.edu'
           ] },
           { textGroup: [
             'Dr. Enila Cenko',
             'Research Scientist',
             'Albanian Institute of Developmental Studies',
             'Tirana, Alabania',
             'enila.cenko@gmail.com'
           ] }
         ],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'American Sign Language (ASL)',
         key: 'asl',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Arabic (Saudi)',
         key: 'arabic_saudi',
         body: [
           { textGroup: [
             {
               text: 'Contact:',
               style: [{ 'font-weight': 'bold' }, { 'font-size': '32px' }]
             },
             'Jeddah Institute for Speech and Hearing (JISH)',
             'P.O. Box 3080, Jeddah, 21471',
             'Saudi Arabia',
             'To order: ',
             {
               text: 'Click Here',
               inlinePrev: true,
               link: 'http://www.jish.org/JISHOnlineStore/Productdetail/tabid/255/ProductID/104/language/en-US/Default.aspx'
             },
             'Tel: 966-2-667-5311'
           ] }
         ]
       }, {
         name: 'Arabic (Kuwaiti)',
         key: 'arabic_kuwaiti',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Arabic (Tunisian)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Arabic (Kuwaiti)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Arabic (Multiple)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Bengali',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Basque',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'British Sign Language (BSL)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Bulgarian',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Catalan',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Cantonese (Hong Kong)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Changana',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Chichewa/Nyanja',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Chiyao',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Croatian',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Czech',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Danish',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Dutch',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'English (British)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'English (Australian)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'English (New Zealand)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'English (Singapore)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'English (South Africa)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Estonian',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Faroese',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Finnish',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'French (Canadian)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'French (European)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Galician',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'German',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'German (Austrian)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'German (Swiss)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'German Sign Language',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Greek',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Greek (Cypriot)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: '(West) Greenlandic',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Hebrew',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Hindi',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Hungarian',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Icelandic',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Inuktitut',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Irish-English Bilingual',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Italian',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Italian Sign Language',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Japanese',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Kannada',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Kinyarwanda',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Kishwahili/Kigiriama',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Klingon',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Krio',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Korean',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Latvian',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Lebanese Arabic-French-English',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Malawian',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Malayalam',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Maltese-English',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Mandarin (Beijing)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Mandarin (Taiwan)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Mandarin (Singapore)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Mandinka',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Ngas',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'North Sami',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Norwegian',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Persian/Farsi',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Polish',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Portuguese (Brazilian)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Portuguese (European; Long Forms)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Portuguese (European; Short Forms)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Portuguese (Mozambique)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Panjabi',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Ronga',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Romani',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Russian',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Samoan',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Sasak',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Serbian',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Shona',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Slovak',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Slovenian',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'South Sotho',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Spanish (Cuban)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Spanish (Mexican)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Spanish (European)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Spanish (Colombian)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Spanish (Chilean)',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Spanish Sign Language',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Swedish',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Tagalog',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Tamil',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Thai',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Tongan',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Tswana',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Turkish',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Turkish Sign Language',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Urdu',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Welsh-English',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Wolof',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Yiddish',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Jeff',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
         name: 'Jeff',
         text: ['xyz'],
         image: 'images/forms/SpanishWG.jpg'
       }, {
          name: 'Jeff',
          text: ['xyz'],
          image: 'images/forms/SpanishWG.jpg'
        }

     ]
   };

   // To add a new language, copy text below and add to end:
   // , {
   //   name: 'Jeff',
   //   text: ['xyz'],
   //   image: 'images/forms/SpanishWG.jpg'
   // }



  var theTemplateScript = $("#adaptationsTemplate").html();
  var theTemplate = Handlebars.compile (theTemplateScript);
  $('#cdiAdaptations').append(theTemplate (theData));

  $("#adaptationSelect").select2();

  $('#adaptationSelect').on('select2:select', (e) => {
    var data = e.params.data;
      console.log(data);
    $('.adaptation.section').fadeOut(function() {
      setTimeout(function() {
        $('#' + data.id).fadeIn();
      }, 500)
    });
  });
});
