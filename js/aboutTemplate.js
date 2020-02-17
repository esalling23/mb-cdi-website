$(function() {
  console.log("before the data");
  // Unique Page Data
  var aboutData = {
    news: [
       {
          name: 'February 2020',
          key: 'Feb_2020',
          mostRecent: true,
          body: [
            { textGroup: [
                "The MacArthur-Bates CDIs and Board member, Mike Frank, are in the news!!  Read [here!] (https://stanfordmag.org/contents/what-the-kids-are-saying-these-days)"
            ] },
          ]
      },{
          name: 'March 2019',
          key: 'march_2019',
          mostRecent: true,
          body: [
            { textGroup: [
                "The CDI Advisory Board is delighted to announce that Dr. Adriana Weisleder (Northwestern University) is now a member of the Board. Welcome, Adriana! You can read all about Adriana and her research [here!] (https://childlanguagelab.northwestern.edu/)"
            ] },
          ]
      },
	   {
          name: 'May 2018',
          key: 'may_2018',
          body: [
            { textGroup: [
                "Did you know that a CDI-based measure can be used to gather data about vocabulary input, specifically the relative frequency of use of individual lexical items, for young children?  [This recently published paper] (documents/Bleses,Vach,Dale2018JChildLang.pdf) provides information about the development of the measure and its validity for Danish."
            ] },
          ]
      },
	   {
          name: 'April 2018',
          key: 'april_2018',
          body: [
            { textGroup: [
                "We need you! The Advisory Board is calling for researchers to join our American English Long Form (W&G and W&S) renorming effort. You will have access to our newly-developed web-based system for use now through the end of 2018.  Please fill out the form to let us know your interest and we will be in touch soon!",
                "[Complete the form here!](https://goo.gl/forms/bNf1ICzrCZdDWMVT2)"
            ] },
			 { textGroup: [
               "The MacArthur-Bates CDI Advisory Board is also pleased to announce that Dr. Ann Weber (Stanford University School of Medicine) has joined the board!  Welcome, Ann!"
            ] }
          ]
      }, {
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
          name: 'September 2016',
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
      }, {
          name: 'July 2016',
          key: 'sept_2016',
          body: [
            {
              textGroup: [
                "The Advisory Board is saddened to announce the death of our longtime colleague and friend, J. Steven Reznick. Steve was a gifted and generous teacher, researcher, mentor, collaborator and friend. Learn more about Steve's life [here](https://uncnewsarchive.unc.edu/campus-updates/a-legacy-of-courage-and-inspiration/)."
            ] }
         ]
      }, {
          name: 'December 2015',
          key: 'dec_2015',
          body: [
            {
              textGroup: [
                "Now available!  Fillable pdfs of the English and Spanish short forms!  All forms can be downloaded and emailed to parents to complete on their own computers or tablets.  Users should advise parents that they will need the latest version of Adobe Reader (Version X or higher) to save the completed forms and email them back to you. Exporting the data is easy (csv) using Adobe Acrobat.  There is a $10 license fee per form, plus 30 cents per anticipated number of administrations. To order, contact Larry Fenson at lfenson@gmail.com"
            ] }
         ]
      }, {
          name: 'Novemember 2015',
          key: 'nov_2015',
          body: [
            {
              textGroup: [
                "The MacArthur-Bates CDI Advisory Board is pleased to announce the availability of downloadable fillable pdf versions of the English-language Short Forms! These can be downloaded and emailed to parents to complete on their own computers or tablets. Users should advise parents that they will need the latest version of Adobe Reader (Version X or higher) to save the completed forms and email them back to you. To export the data into csv format for scoring, users will need to purchase Adobe Acrobat, which is available for academic discount through most institutions. The fillable forms can be ordered through Larry Fenson at lfenson@gmail.com"
            ] }
         ]
      }, {
          name: 'July 2014',
          key: 'july_2014',
          body: [
            { textGroup: [
                "We are pleased to announce a new project, Wordbank, an open database for storing information about children's vocabulary growth using the MacArthur-Bates CDIs in many different languages. See our website for information about our progress and find out how you can contribute your data!"
            ] },
            { textGroup: [
                "[Wordbank](http://wordbank.stanford.edu)"
            ] }
         ]
      }, {
          name: 'March 2014',
          key: 'march_2014',
          body: [
            { textGroup: [
                "The MacArthur-Bates CDI Advisory Board is pleased to announce that two new members have joined the board, Dr. Margaret Friend (SDSU) and Dr. Michael Frank (Stanford University). Welcome Maggie and Mike!"
            ] },
            { textGroup: [
                "[Advisory Board](/board.html)"
            ] }
         ]
      }, {
          name: 'October 2013',
          key: 'oct_2013',
          body: [
            { textGroup: [
                "To mark the 25th anniversary of the work of the MacArthur-Bates CDI Advisory Board, we have placed the entire norming dataset in the public domain, now downloadable here and directly through the CHILDES website. This dataset is available in both SPSS and Excel formats. Please contact Philip Dale or Virginia Marchman with any questions."
            ] },
            { textGroup: [
                "[CDI Norming Data](http://childes.psy.cmu.edu/tools/CDI/)"
            ] },
            { textGroup: [
              'An updated version of the CDI Scoring Program is now available:'
            ]},
            { textGroup: [
                "[CDI Scoring Program Version 2013](/scores.html#download)"
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
			'[New! Instructions for Parents with Pictures - Words & Gestures!](documents/WG_instructions.pdf)',
			'[New! Instructions for Parents with Pictures - Words & Sentences!](documents/WS_instructions.pdf)',
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
            'Below is a collection of links to sites that are relevant to the study of child language and the CDI.'
          ]},
          { textGroup: [
            '### Professional Organizations, Conferences, and General Information',
			'[International Association for the Study of Child Language (IASCL)](http://www.iascl.net)',
            '[The Child Language Data Exchange System](http://childes.psy.cmu.edu/)',
            '[Symposium on Research in Child Language Disorders (SRCLD)](http://www.srcld.org)',
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

  var recent = _.filter(aboutData.news, function(e) {
    return e.mostRecent;
  });
  console.log(recent);

  aboutData.mostRecentNews = recent[0];

  var template = $('script[type="text/x-handlebars-template"]');

  var aboutTemplateScript = $(template).html();
  var aboutTemplate = Handlebars.compile(aboutTemplateScript);
  $('#insert').append(aboutTemplate (aboutData));

});

window.onload = function() {

  $('.news').css('height', $('.left-grid').height());
  $('.news').css('overflow', 'hidden');
  $('.read-more').show();

  $('body #show-more').on('click', function() {

    $('.read-more').css('position', 'relative');
    $('.news').css('overflow', 'auto');
    $('.news').css('height', 'auto');
    $('.gradient, #show-more').hide();
    $('#collapse').show();

  });

  $('body #collapse').on('click', function() {

    $('.read-more').css('position', 'absolute');
    $('.news').css('overflow', 'hidden');
    $('.news').css('height', $('.left-grid').height());
    $('.gradient, #collapse').show();
    $('#show-more').show();

  });

}
