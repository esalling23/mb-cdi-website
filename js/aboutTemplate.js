$(function() {
  console.log("before the data")

  // Unique Page Data
  var aboutData = {
    //  contact: {
    //      group: 1,
    //      name: 'Contact',
    //      body: [
    //        'The CDI: Words and Gestures (Infant form) is designed for use with 8- to 18- month old children. Further information about these forms including normative data is provided in the MacArthur-Bates Communicative Development Inventories User\'s Guide and Technical Manual. These forms are scorable using the CDI Scoring program. The CDI: Words and Sentences (Toddler form) is designed for use with 16- to 30-month old children. Either form may be used with older, developmentally-delayed children.',
    //        'Further information about these forms including normative data is provided in the MacArthur-Bates Communicative Development Inventories User\'s Guide and Technical Manual.',
    //        'The manual as well as the forms can be ordered from Brookes: &#36;.35',
    //        'Call toll-free 1-800-638-3775 (9:00 a.m. to 5:00 p.m. ET, Monday through Friday)',
    //        'Fax 1-410-337-8539',
    //        'Visit them online at [www.brookespublishing.com/cdi](www.brookespublishing.com/cdi)'
    //      ]
    // },
    news: [
      {
          name: 'June 2017',
          key: 'june_2017',
          body: [
            { textGroup: [
                "Are you an author of a MB-CDI adaptation? The Advisory Board is updating the contact information on the website and would appreciate your help! Please make sure all of your contact information is up to date. You should have also received an email with instructions on how you can provide more information on our site. Please send this and any questions to Philip Dale at dalep@unm.edu"
            ] }
          ]
      }, {
          name: 'May 2017',
          key: 'may_2017',
          body: [
            { textGroup: [
                "Are you an author of a MB-CDI adaptation? The Advisory Board is updating the contact information on the website and would appreciate your help! Please make sure all of your contact information is up to date. You should have also received an email with instructions on how you can provide more information on our site. Please send this and any questions to Philip Dale at dalep@unm.edu"
            ] }
          ]
      }, {
          name: 'May 2017',
          key: 'may_2017',
          body: [
            { textGroup: [
                "The Advisory Board announces the availability of the CDI Scoring program in European and Canadian French! See more information [here!](http://mb-cdi.stanford.edu/scoringdb_p.htm)"
            ] }
          ]
      }, {
          name: 'April 2017',
          key: 'april_2017',
          body: [
            { textGroup: [
                "The Advisory Board is calling for researchers to join our English-language renorming effort. We plan to collect data using web-based administration during 2017 through early 2018. Please fill out the form to let us know your interest and we will be in touch soon!",
                "[Complete the form here!](https://goo.gl/forms/bNf1ICzrCZdDWMVT2)"
            ] }
         ]
      }, {
          name: 'September 2017',
          key: 'sept_2017',
          body: [
            {
              textGroup: [
                "The Advisory Board is pleased to announce the availability of English Words &amp; Gestures, Words &amp; Sentences, and CDI III in fillable PDF format! Like the short forms, parents can fill out the classic MacArthur-Bates instruments on their own laptops or computers using Adobe Reader.  Exporting the data requires Adobe Acrobat. Now available from Brookes Publishing. Click the links below to learn more!",
                "[Words &amp; Gestures](http://products.brookespublishing.com/MacArthur-Bates-Communicative-Development-Inventories-CDI-Words-Gestures-E-Form-English-P1002.aspx)",
                "[Words &amp; Sentences](http://products.brookespublishing.com/MacArthur-Bates-Communicative-Development-Inventories-CDI-Words-and-Sentences-E-Form-English-P1001.aspx)",
                "[CDI III](http://products.brookespublishing.com/The-MacArthur-Bates-Communicative-Development-Inventory-III-P1004.aspx)"
            ] }
         ]
      }, {
          name: 'July 2016',
          key: 'sept_2016',
          body: [
            {
              textGroup: [
                "The Advisory Board is pleased to announce the availability of English Words &amp; Gestures, Words &amp; Sentences, and CDI III in fillable PDF format! Like the short forms, parents can fill out the classic MacArthur-Bates instruments on their own laptops or computers using Adobe Reader.  Exporting the data requires Adobe Acrobat. Now available from Brookes Publishing. Click the links below to learn more!",
                "[Words &amp; Gestures](http://products.brookespublishing.com/MacArthur-Bates-Communicative-Development-Inventories-CDI-Words-Gestures-E-Form-English-P1002.aspx)",
                "[Words &amp; Sentences](http://products.brookespublishing.com/MacArthur-Bates-Communicative-Development-Inventories-CDI-Words-and-Sentences-E-Form-English-P1001.aspx)",
                "[CDI III](http://products.brookespublishing.com/The-MacArthur-Bates-Communicative-Development-Inventory-III-P1004.aspx)"
            ] }
         ]
      }
    ],
    resources: {
        name: 'Resources',
        key: 'resources',
        body: [
          { textGroup: [
            '## Administration Resources',
            '[Instructions for Parents](documents/ParentInstructions.docx)',
            '[Basic Information Form](documents/BACKGROUNDInfoForm_Fillable.pdf)'
          ]},
          { textGroup: [
            '## Scoring Program Examples',
            '[English Report](documents/ETexampleinEnglish.docx) [English Letter](documents/samplelet.docx)',
            '[Spanish Report](documents/STexampleinSpanish.docx) [Spanish Letter](documents/samSpaLett.docx)',
            '[Composite Report](documents/CIexampleinEnglish.docx) [Composite Letter](documents/combined-letter.docx)'
            ],
            buttonLinks: true
          },
          { textGroup: [
            '## External Links',
            'Below is a collection of links to sites that are relevant to the child language and the CDI.'
          ]},
          { textGroup: [
            '### Professional Organizations, Conferences, and General Information',
            '[International Association for the Study of Child Language (IASCL)](http://www.iascl.net)',
            '[The Child Language Data Exchange System](http://childes.psy.cmu.edu/)',
            '[Symposium on Research in Child Language Disorders (SRCLD)](http://www.srcld.org)'
          ]},
          { textGroup: [
            '### Professional Organizations, Conferences, and General Information',
            '[Wordbank, an open data repository of MB-CDI forms](http://wordbank.stanford.edu), Stanford University',
            '[Language Learning Laboratory](http://langlearninglab.stanford.edu), Stanford University',
            '[Language and Cognition Laboratory](http://langcog.stanford.edu), Stanford University',
            '[Project in Cognitive and Neural Development](http://crl.ucsd.edu/pcnd/), University of California San Diego',
            '[Infant and Child Development Laboratory](https://www.facebook.com/SDBabylab), San Diego State University',
            '[Universidad Auton&oacute;ma de Quer&eacute;taro](http://donnajackson.weebly.com/index.html), Mexico',
            '[Centre for Research in Speech and Language Processing (CRSLP)](http://www.crslp.chula.ac.th/), Chilalongkorn University'
          ]}
        ]
     }
  };

   console.log("loaded about template");

   // {{#if ../../buttonLinks}}
   //   {{{htmlBtn this}}}
   // {{else}}
   //  {{{html this}}}
   // {{/if}}

  var aboutTemplateScript = $("#aboutTemplate").html();
  var aboutTemplate = Handlebars.compile(aboutTemplateScript);
  $('#aboutPage').append(aboutTemplate (aboutData));


});