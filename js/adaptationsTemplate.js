$(function() {

  var theData = {
    home: {
      title: 'Adaptations Guidelines',
      pdf: 'documents/AdaptationsInformation2015.pdf',
      image: 'images/forms/SpanishWG.jpg'
    },
     forms: [
       {
         name: 'Adaptations Guidelines',
         key: 'guidelines',
         pdf: 'documents/AdaptationsInformation2015.pdf',
       },
       {
         name: 'Adaptations Not Translations!',
         key: 'adapt_not_translate',
         pdf: 'documents/AdaptationsNotTranslations2015.pdf',
       },
       {
         name: 'Afrikaans',
         key: 'afrikaans',
         body: [
           { textGroup: [
             '### Contact:',
             'Frenette Southwood',
             '*fs@sun.ac.za*'
           ] },
           { textGroup: [
             '### Contact:',
             'Helena Oosthuizen',
             '*oosthe@sun.ac.za*'
           ] }
         ]
       }, {
         name: 'Albanian',
         key: 'albanian',
         body: [
           '### Contact:',
           { textGroup: [
             '**Dr. Enkeleida Kapia**',
             'Research Scientist',
             'Albanian Institute of Developmental Studies',
             'Tirana, Albania'
           ] },
           { textGroup: [
             '**University of Hamburg**',
             'Cluster of Excellence (Federal Level)',
             'Lingustic Diversity Management in Urban Areas - LiMA'
           ] },
           { textGroup: [
             '**Center for Albanian Studies**',
             'National Research Institutes of History, Archeology, Ethnology, Lingustics and Literature',
             'Sheshi "Nene Tereza", Tirana, Albania',
             '*ekapia@bu.edu*'
           ] },
           { textGroup: [
             '**Dr. Enila Cenko**',
             'Research Scientist',
             'Albanian Institute of Developmental Studies',
             'Tirana, Alabania',
             '*enila.cenko@gmail.com*'
           ] }
         ]
       }, {
         name: 'American Sign Language (ASL)',
         key: 'asl',
         body: [
           '### Contact:',
           { textGroup: [
             'Diane Anderson, Ph.D.',
             'Institute of Human Developmental',
             'University of California, Berkeley',
             'Berkeley, CA 94720-1950',
             '*jollysox@eathlink.net.edu*'
           ]},
           { textGroup: [
             'Judy Reilly',
             'Department of Psychology',
             'San Diego State University',
             'San Diego, CA 92120',
             'Tel: (619)594-2840',
             '*reilly1@mail.sdsu.edu*'
           ]}
         ]
       }, {
         name: 'Arabic (Saudi)',
         key: 'arabic_saudi',
         body: [
             '### Contact:',
             '**Jeddah Institute for Speech and Hearing (JISH)**',
             'P.O. Box 3080, Jeddah, 21471',
             'Saudi Arabia',
             'To order: [click here](http://www.jish.org/JISHOnlineStore/Productdetail/tabid/255/ProductID/104/language/en-US/Default.aspx)',
             'Tel: 966-2-667-5311',
         ]
       }, {
         name: 'Arabic (Kuwaiti)',
         key: 'arabic_kuwaiti',
         body: [
           '### Contact:',
           { textGroup: [
             'Fausia Abdalla',
             '*f.abdalla@ku.edu.kw*'
           ]},
           { textGroup: [
             'Saleh Shaalan',
             '*saleh.shaalan@gmail.com*'
           ]}
         ]
       }, {
         name: 'Arabic (Tunisian)',
         key: 'arabic_tunisian',
         body: [
           '### Contact:',
           { textGroup: [
             'Dr. Soumaya Bourgou',
              'Child and Adolescent psychiatrist',
              'Child Psychiatry Department',
              'Mongi Slim Hospital',
              'Sidi Daoued, 2046, Marsa, Tunisia'
           ]},
           { textGroup: [
             'Faculty of Medicine of Tunis',
              '15 Rue Djebel Lakhdhar',
              'La Rabta. 1007 Tunis, Tunisia',
              'Telephone: 00216 97863881 '
           ]},
           '*soumayabourgou1@gmail.com*'
         ]
       }, {
         name: 'Arabic (Multiple)',
         key: 'arabic_multi',
         body: [
           '### Contact:',
           { textGroup: [
             'Caroline Floccia',
              'caroline.floccia@plymouth.ac.uk'
           ]},
           { textGroup: [
             'Alshaimaa Gaber Salah Abdel Wahab',
              'alshaimaa.gabersalahabdelwahab@plymouth.ac.uk'
           ]},
           { textGroup: [
             '### New in 2017!',
              'Click [here](documents/Info2017-Arabic(multiple).pdf) to view more information provided directly by the authors!'
           ]}
         ]
       },  {
         name: 'Bengali',
         key: 'bengali',
         body: [
           'xyz',
           { textGroup: [
             'Sally McGregor',
              '*sallymcgregor@yahoo.com*'
           ]},
           { textGroup: [
             'Dr. Jena D. Hamadani',
             'Head, Child Development Unit',
             'Scientist, Clinical Sciences Division',
             'ICDDR,B.',
             'Res Tel: 880-2-8113636',
             'Off Tel: 880-2-8860523-32 Ext 2353',
             '*jena@icddrb.org*'
           ]}
         ]
       }, {
         name: 'Basque',
         key: 'basque',
         body: [
           { textGroup: [
             '### User Manual',
             'Andoni Barreña, Iñaki García, MªJosé Ezeizabarrena, Margareta Almgren, Nekane Arratibel, Idoia Olano, Julia Barnes, Alazne Petuya and Amaia Colina. MacArthur-Bates komunikazio garapena neurtzeko zerrenda. Euskarara egokitua. Erabiltzaileentzako gida eta eskuliburu teknikoa. Udako Euskal Unibertsitatea, Bilbo 2008.'
           ]},
           '### Contact:',
           { textGroup: [
             'Margareta Almgren',
              'University of the Basque Country',
              '*xamaoik@terra.es*'
           ]},
           { textGroup: [
             'Nekane Arratibel and Inaki Garcia ',
              'University of Mondragon',
              '*inaki_garcia@huhezi.edu*'
           ]},
           { textGroup: [
             'Andoni Barrena',
              'University of Salamanca',
              '*oitz@euskalnet.net*'
           ]},
           { textGroup: [
             'Maria Jose Ezeizabarrena',
              'University of the Basque Country',
              '*fepezsem@vc.ehu.es*'
           ]},
           '![image alt text](images/forms/Basque_WG.jpg)![image alt text](images/forms/BasqueManual.jpg)',
           { textGroup: [
             '### Publications',
              'Barreña, A., Ezeizabarrena, M. J. & Garcia, I. (2007). Influence of the linguistic enviroment on the development of the lexicon and grammar of Basque bilingual children. In C. Perz-Vidal, M Juan-Garau y A. Bel (Eds.) A Portrait of the Young in the New Multilingual Spain. Clevedon: Multilingual Matters. ISBN: 13 978-1-84769-023-4',
              'Almgrem, M.; Ezeizabarrena; M.J. & Garcia, I. (2007). The Basque CDI: Applications in a bilingual society. In M. Eriksson (Ed.) Proceedings from the First European Network Meeting on the Communicative Development Inventories (pp. 83-92). Gävle: Gävle University Press. ISBN: 978-91-974948-8-5'
           ]},
         ]
       }, {
         name: 'British Sign Language (BSL)',
         key: 'bsl',
         body: [
           '### Contact:',
           { textGroup: [
             'Bencie Woll, Ph.D.',
             'Deafness Cognition and Language Research Centre',
             'University College London',
             'WC1H 0PD England',
             '*b.woll@ucl.ac.uk*'
           ]}
         ]
       }, {
         name: 'Bulgarian',
         key: 'bulgarian',
         body: [
           '### Contact:',
           { textGroup: [
             'Elena Andonova',
             '*eandonova@nbu.bg*'
           ]},
           { textGroup: [
             '### New in 2017!',
             'Click [here](documents/Info2017-Bulgarian.pdf) to view more information provided directly by the authors!'
           ]}
         ]
       }, {
         name: 'Catalan',
         key: 'catalan',
         body: [
           '### Contact',
           { textGroup: [
             'Dr. Elisabet Serrat Sellabona',
             'Department of Psychology',
             'University of Girona',
             'Pl. Sant Domènec, 9',
             '17071 GIRONA, Spain',
             '*elisabet.serrat@udg.edu*'
           ]},
           { textGroup: [
             'Dr. Miquel Serra i Raventós',
             'Dept. de Psicologia Bàsica',
             'Universitat de Barcelona',
             'P. de la Vall d\'Hebron, 171',
             '08035 BARCELONA, Spain',
             '*mserra@ub.edu*'
           ]},
           { textGroup: [
             '### Publications',
             'Serrat, E., Sanz-Torrent, M., Badia, I., Aguilar, E., Olmo, R., Lara, M. F., Andreu, L. y Serra, M. (2010). La relación entre el aprendizaje léxico y el desarrollo gramatical. Infancia y Aprendizaje, 33(4), 435-448.'
           ]}
         ]
       }, {
         name: 'Cantonese (Hong Kong)',
         key: 'cantonese',
         body: [
           '### Contact:',
           { textGroup: [
             'Twila Tardif',
             'Department of Psychology',
              'University of Michigan',
              '2014 East Hall',
              '525 East University',
              'Ann Arbor, MI 48109-1109',
              'Tel: (734) 76 4-2443',
              'Fax: (734) 936-9288',
              '*twila@umich.edu*'
           ]},
           { textGroup: [
             'Paul Fletcher',
             '*P.Fletcher@ucc.ie*'
           ]},
           { textGroup: [
             '![chinese communicative development inventories guide and manual](images/forms/ChineseMC_Manual.jpg)',
             '### Manual',
             'Tardiff, T. and Fletcher, P. Chinese Communicative Development Inventories: User\'s Guide and Manual (2008), Peking University Medical Press, Beijing, China.',
             '[www.pumpress.com.cn](www.pumpress.com.cn)'
           ]},
           { textGroup: [
             '### Norming Studies',
              'Gelman, S. A. & Tardif, T. (1998). Acquisition of nouns and verbs in Mandarin and English. In E. V. Clark (Ed.), Proceedings of the 29th Annual Stanford Child Language Research Forum (pp. 27-36). Stanford, CA: Stanford University Center for the Study of Language and Information.',
              'Tardif, T., Gelman, S.A., & Xu, F. (1999). Putting the "noun bias" in context: A comparison of Mandarin and English, Child Development, 70, 620-635.',
              'Tardif, T. (2006). The importance of verbs in Chinese. In P. Li (Ed.), Handbook of Chinese Psycholinguistics. Cambridge.'
           ]}
         ]
       }, {
         name: 'Changana',
         key: 'changana',
         body: [
           '### Contact:',
           { textGroup:[
             'Paul Vogt',
             '*vogt.pa@gmail.com*'
           ]},
           { textGroup:[
             'New in 2017!',
             'Click [here](documents/Info2017-Changana.pdf) to view more information provided directly by the authors!'
           ]}
         ]
       }, {
         name: 'Chichewa/Nyanja',
         key: 'chichewa_nyanja',
         body: [
           '### Contact:',
           { textGroup:[
             'Elizabeth Prado, Ph.D.',
              'Assistant Professor',
              'Department of Nutrition',
              'University of California, Davis',
              '*elprado@ucdavis.edu*'
           ]},
           { textGroup:[
              '### iLiNS',
              '[Project Website](http://ilins.org/)'
           ]}
         ]
       }, {
         name: 'Chiyao',
         key: 'chiyao',
         body: [
           '### Contact:',
           { textGroup:[
              'Elizabeth Prado, Ph.D.',
              'Assistant Professor',
              'Department of Nutrition',
              'University of California, Davis',
              '*elprado@ucdavis.edu*'
           ]}
         ]
       }, {
         name: 'Croatian',
         key: 'croatian',
         body: [
           '### Contact:',
           { textGroup:[
             'Melita Kovacevic',
              'University of Zagreb',
              'Dept. of Logopedics',
              'Kuslanova 59a',
              '10000 Zagreb, Croatia',
              'Tel: (385)-1-2338-022',
              '*melita.kovacevic@unizg.hr*'
           ]},
           { textGroup:[
             '### Papers and Presentations:',
             'Kovacevic, M., Babic, Z., & Brozovic, B. (1996). A Croatian language parent report study: Lexical and grammatical development. Paper presented at the VIIth International Congress for the Study of Child Language, July 1996, Istanbul, Turkey.'
           ]}
         ]
       }, {
         name: 'Czech',
         key: 'czech',
         body: [
           'This project is developing adaptations for Czech of the CDI:WG and the CDI:WS.',
           '### Contact:',
           { textGroup:[
             'Filip Smolík',
              'Psychologický ústav AV ÈR/Institute of Psychology AS CR Politických vìzòù 7',
              '110 00 Praha 1 ',
              'Czech Republic',
              'Tel: +420 224005218',
              'Fax: +420 222221652',
              'smolik@praha.psu.cas.cz'
           ]},
           { textGroup:[
             '### Papers and Presentations:',
             'Votavová, K., Smolík, F. (2010). Diagnostika rané slovní zásoby rodičovskými dotazníky: přehled a pilotní studie [Assessing early children’s vocabulary with parent-report inventories: a review and a pilot study]. Československá psychologie, 54, 301-313.',
             '*- the article provides a review of different methods for diagnosing early children’s vocabulary, and provides a desription of the first pilot version in Czech, including main results from the pilot data*',
             'Smolík, F., Marková, G. (2010, September). Talking about others\' mental states predicts person reference in children. Talk presented at the BPS Developmental Psychology Section Conference, Sept. 15, 2010, Goldsmiths, University of London.',
             'Markova, G., & Smolik, F. (2011, April). What do you think? Talking about others predicts mental state language in 2-year-olds. Poster presented at the Biennial Meeting of the Society for Research in Child Development, Montreal, Canada.'
           ]}
         ]
       }, {
         name: 'Danish',
         key: 'danish',
         body: [
           '### Contact:',
           { textGroup:[
             'Dorthe Bleses',
              'School of Communication and Culture (Centre for Child Language)',
              'Aarhus University',
              'Denmark',
              'Bleses@au.dk'
           ]},
           '![Ord of gestikultion](images/forms/Danish_WG.jpg)![Tidlig Kommunikativ Udvikling](images/forms/DanishManual.jpg)',
           { textGroup:[
             '### Publications',
             'Bleses, D., Vach, W., Slott, M., Wehberg, S., Thomsen, P., Madsen, T. & Basbøll, H. (2008). "Early vocabulary development in Danish and other languages: a CDI-based comparison". Journal of Child Language, 35, 651-669.',
             'Bleses, D., Vach, W., Slott, M., Wehberg, S., Thomsen, P., Madsen, T. & Basbøll, H. (2008). "The Danish Communicative Development Inventories: validity and main developmental trends". Journal of Child Language, 35, 619-650.',
             'Bleses, D., Vach, W., Wehberg, S., Faber, K. & Madsen. T. O. (2007). Tidlig kommunikativ udvikling. Et værktøj til beskrivelse af sprogtilegnelse baseret på CDI-forældrerapportundersøgelser af danske normalthørende og hørehæmmede børn. Syddansk Universitetsforlag [Danish CDI-manual]',
             'Wehberg, S., Vach, W., Bleses, D., Thomsen, P., Madsen, T. O. & Basbøll, H. (2008). "Girls talk about dolls and boys about cars? Analyses of group and individual variation in Danish children\'s first words". First Language, 28, No.1, 71-85. February, 2008.',
             'Wehberg, S., Vach, W., Bleses, D., Thomsen, P., Madsen, T. O. & Basbøll, H. (2007). "Danish children\'s first words – analysing longitudinal data based on monthly CDI parental reports". First Language, Vol. 27, No. 4, 361-383.'
           ]},
           { textGroup:[
             '### The Danish CDI cover the following forms and studies:',
             'CDI-forms for both infant (8-20 months, "ord & gestikulation") and toddler (16-36 months, "ord & sætninger") have been completed and norming and validity studies will be completed during 2006 on the basis of a large dataset including both longitudinal (8-30 months, 182 children) and cross-sectional data (approx. 6.500 children)',
             'An adaptation for Danish speakers with hearing impairment (0-6 years, "Gestik, tegn, ord & sætninger") which includes gestures, signs, words and sentences. Validity studies wil be completed during 2006 on the basis of both longitudinal and cross-sectional data from children with a variety of degrees of hearing impairment and metho of intervention (hearing aid as well as Cochlear implants). The dataset covers 72 children',
             'A form for screening the language proficiency of 3 year old Danish speakers (35-37 months) is being developed and will be used in a pilot-project for screening the proficiency of Danish in all 35-37 month old children resident in the municipality of Fredericia , Denmark'
           ]}
         ]
       }, {
         name: 'Dutch',
         key: 'dutch',
         body: [
           '### Contact:',
           { textGroup:[
             'Inge Zink',
              'Exp ORL, Dept. Neurosciences, K.U.Leuven',
              'O&N2, Herestraat 49 bus 721',
              'B-3000 Leuven, Belgium',
              'Tel: +32 16 330485 or +32 16 330481',
              '*inge.zink@med.kuleuven.be*'
           ]},
           { textGroup:[
             'Maryline Lejaegere',
              'Bovenbergstraat 23',
              'B - 3020 Veltem-Beisem',
              'Belgium',
              'Tel: + 16 49 02 89',
              '*inge.zink@med.kuleuven.be*'
           ]},
           { textGroup:[
             '![book cover](images/forms/DutchManual.jpg)',
              '### Publications',
              'JARID (Journal of Applied Research in Intellectual Disabilities): Vandereet, J., Maes, B., Lembrechts, D. & I. Zink (2010, 23, 154–166)',
              'Journal of Speech, Language and Hearing Research: Joke Vandereet, Bea Maes, Dirk Lembrechts, and Inge Zink. Predicting Expressive Vocabulary Acquisition in Children with Intellectual Disabilities: A 2-year Longitudinal Study (J Speech Lang Hear Res Vol 53, 1-14, December 2010)',
              'Zink, I. & Lejaegere, M. (2007). N-CDI 3. Aanpassing en hernormering van de MacArthur CDI: Level III van Dale et al. (2000), Acco, Leuven (Belgium)/Leusden (Netherlands).',
              'Zink, I, & Lejaegere, M. (2002). N-CDIs: Lijsten voor Communicatieve Ontwikkeling. Aanpassing en hernormering van de MacArthur CDIs van Fenson et al. Acco, Leuven (Belgium)/Leusden (Netherlands). (A CDI user\'s manual with normative and validity data).',
              'Zink , I, & Lejaegere, M. (2002). N-CDIs: Lijsten voor Communicatieve Ontwikkeling. Een nieuw instrument voor vroege taalscreening. Logopedie, 15, 2, p 23-32.',
              'Zink, I, & Lejaegere, M. (2002). N-CDIs: Lijsten voor Communicatieve Ontwikkeling. Logopedie en Foniatrie, 74, 6, p 170-175.',
              'Zink, I, & Lejaegere, M. (2003). N-CDIs: Korte vormen. Aanpassing en hernormering van de MacArthur Short Form Vocabulary Checklists van Fenson et al. Acco, Leuven (Belgium)/Leusden (Netherlands). (short version of the CDIs with normative and validity data).',
              'Zink, I. (2003). Taalevaluatie bij een communicatief niveau tussen nul en drie jaar: de Nederlandstalige Nonspeech Test (NNST) en Oudervragenlijsten voor Communicatieve Ontwikkeling (N-CDIs). Vijftig jaar NSDSK: met een knipoog naar de toekomst, G. Spaai, H. van der Stege & H. de Ridder-Sluiter (eds.), Lemma, Utrecht (Netherlands), p 59-69.'
           ]}
         ]
       }, {
         name: 'English (British)',
         key: 'british_english',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'English (Australian)',
         key: 'australian_english',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'English (New Zealand)',
         key: 'new_zealand_english',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'English (Singapore)',
         key: 'singapore_english',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'English (South Africa)',
         key: 'south_africa_english',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Estonian',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Faroese',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Finnish',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'French (Canadian)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'French (European)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Galician',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'German',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'German (Austrian)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'German (Swiss)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'German Sign Language',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Greek',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Greek (Cypriot)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: '(West) Greenlandic',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Hebrew',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Hindi',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Hungarian',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Icelandic',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Inuktitut',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Irish-English Bilingual',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Italian',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Italian Sign Language',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Japanese',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Kannada',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Kinyarwanda',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Kishwahili/Kigiriama',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Klingon',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Krio',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Korean',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Latvian',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Lebanese Arabic-French-English',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Malawian',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Malayalam',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Maltese-English',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Mandarin (Beijing)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Mandarin (Taiwan)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Mandarin (Singapore)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Mandinka',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Ngas',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'North Sami',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Norwegian',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Persian/Farsi',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Polish',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Portuguese (Brazilian)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Portuguese (European; Long Forms)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Portuguese (European; Short Forms)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Portuguese (Mozambique)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Panjabi',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Ronga',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Romani',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Russian',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Samoan',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Sasak',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Serbian',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Shona',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Slovak',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Slovenian',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'South Sotho',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Spanish (Cuban)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Spanish (Mexican)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Spanish (European)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Spanish (Colombian)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Spanish (Chilean)',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Spanish Sign Language',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Swedish',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Tagalog',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Tamil',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Thai',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Tongan',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Tswana',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Turkish',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Turkish Sign Language',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Urdu',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Welsh-English',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Wolof',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Yiddish',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Jeff',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
         name: 'Jeff',
         key: '',
         body: [
           '### Contact:',
           { textGroup:[
             'Text Here'
           ]}
         ]
       }, {
          name: 'Jeff',
          body: [

          ]
        }

     ]
   };

   // To add a new language, copy text below and add to end:
   // , {
   //   name: 'Jeff',
   //   body: [

   //   ],
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
