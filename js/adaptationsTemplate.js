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
         labeled: true,
         label: 'Read these guidelines first',
         pdf: 'documents/AdaptationsInformation2015.pdf',
       },
       {
         name: 'Adaptations Not Translations!',
         key: 'adapt_not_translate',
         labeled: true,
         label: 'This important document will review important information about the adaptation process.',
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
           '### Contact:',
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
             'Katie Alcock',
             '*k.j.alcock@lancaster.ac.uk*'
           ]},
           { textGroup:[
             'New in 2017!',
             'Click here to view more information provided directly by the authors! [Info2017-English(British)](documents/Info2017-English(British).pdf)',
           ]},
           { textGroup: [
             'An earlier version, developed under the direction of Dr. Thomas Klee, is available on-line in the University of Canterbury’s Research Repository, along with some preliminary norms, and a conference presented. These can be accessed at:',
             'https://ir.canterbury.ac.nz/handle/10092/3525',
             'Data on validity and preliminary norms',
             'http://hdl.handle.net/10092/3523'
           ]},
           { textGroup: [
             '### Contact:',
             'Thomas Klee',
             'Professsor, Department of Communication Disorders and Deputy Director, New Zealand Institute of Language, Brain & Behaviour',
            'University of Canterbury|Te Whare Wânanga o Waitaha',
            'Private Bag 4800',
            'Christchurch 8140',
            'New Zealand',
            'Tel: +64 3 364 2987 Ext. 8501',
            'Fax: +64 3 364 2760',
            '*thomas.klee@canterbury.ac.nz*',
            'Another early version was developed by Professor Janette Atkinson.'
          ]},
          { textGroup: [
            '### Contact:',
            'Professor Janette Atkinson',
            'Department of Psychology',
            'Visual Development Unit',
            'University College London',
            'Gower Street',
            'London WC1E 6BT',
            'United Kingdom ',
            'Tel: +44-207-679-7574',
            'Direct Line: +44-207-679-7559',
            'Fax: +44-207-679-7576',
            'j.atkinson@ucl.ac.uk',
            '[http://www.psychol.ucl.ac.uk](http://www.psychol.ucl.ac.uk)'
          ]}
         ]
       }, {
         name: 'English (Australian)',
         key: 'australian_english',
         body: [
           '### Contact:',
           { textGroup:[
             'Marina Kalashnikova',
             'The MARCS Institute for Brain, Behavior and Development',
             'Western Syndey University',
             '*m.kalashnikova@westernsydney.edu.au*'
           ]},
           { textGroup: [
             'Iris-Corinna Schwarz',
             'Department of Linguistics' ,
             'Stockholm University',
             '*iris-corinna.schwarz@ling.su.se*'
           ]},
           { textGroup: [
             'Denis Burnham',
             'The MARCS Institute for Brain, Behavior and Development',
             'Western Syndney University',
             '*Denis.burnham@westernsydney.edu.au*'
           ]},
           { textGroup: [
             '### New in 2017!',
             'Click here to view more information provided directly by the authors! [Info2017-English(Australian)](documents/Info2017-English(Australian).pdf)'
           ]},
           { textGroup: [
             'Publication:',
             'Kalashnikova, M., Schwarz, I. C., & Burnham, D. (2016). OZI: Australian English communicative development inventory. First Language, 36(4), 407-427.'
           ]}
         ]
       }, {
         name: 'English (New Zealand)',
         key: 'new_zealand_english',
         body: [
           '### Contact:',
           { textGroup:[
             'Elaine Reese, Ph.D.',
             'University of Otago',
             'Department of Psychology',
             'P.O. Box 56',
             'Dunedin, New Zealand',
             'Tel: 64-3-479-9016',
             'Fax: 64-3-479-8335',
             '*ereese@psy.otago.ac.nz*'
           ]},
           { textGroup: [
             '![new zealand worksheet](images/forms/NewZealand_WS.jpg)',
             '![new zealand worksheet 2](images/forms/NewZealand_WS2.jpg)'
           ]}
         ]
       }, {
         name: 'English (Singapore)',
         key: 'singapore_english',
         body: [
           '### Contact:',
           { textGroup:[
             'Dr. Leher Singh',
              'Department of Psychology ',
              'National University of Singapore',
              '9 Arts Link ',
              'Singapore 117570',
              'Tel: +65 6516 7750',
              '*psyls@nus.edu.sg*',
              '[Lab Website](http://blog.nus.edu.sg/babytalk)',
              'Note: This project was initiated by Tan Seok Hui.'
           ]},
           { textGroup: [
             '### Publications',
              'Tan, S.H., Liu, D., Affandi, H., & Chen, L. (2006) Vocabulary development in bilingual infants in Singapore. Poster presented at International Conference for the Japanese Society for Language Sciences in Tokyo, Japan.',
              'Tan, S. H., & So, W.-C. C. (2008). Vocabulary development in multilingual 12- to 30-month-old Singaporean children. Paper presented at Conference on Bilingual Acquisition in Early Childhood, at the Chinese University of Hong Kong, Hong Kong.',
              'Tan, S. H. (2009). Vocabulary development in multilingual 1- and 2-year-old Singaporean infants. Poster presented at Biennial Meeting for the Society of Research in Child Development on 3 April 2009, in Denver, Colorado, USA.',
              'Book Chapter: Tan, S.H. (2010). Multilingual Infant Vocabulary in Singapore. In M. Cruz-Ferreira (Ed.) Multilingual Norming. Peter Lang.'
           ]}
         ]
       }, {
         name: 'English (South Africa)',
         key: 'south_africa_english',
         body: [
           '### Contact:',
           { textGroup:[
             'Frenette Southwood',
            'fs@sun.ac.za'
           ]},
           { textGroup: [
            'Helena Oosthuizen',
            'oosthe@sun.ac.za'
           ]}
         ]
       }, {
         name: 'Estonian',
         key: 'estonian',
         body: [
           '### Contact:',
           { textGroup:[
             'Tiia Tulviste, PhD',
              'Professor of Developmental Psychology',
              'University of Tartu',
              'Näituse 2-218, 50409 Tartu, Estonia',
              '*Tiia.Tulviste@ut.ee*'
           ]},
           { textGroup: [
             '##New in 2017!',
             'Click here to view more information provided directly by the authors! [Info2017-Estonian](documents/Info2017-Estonian.pdf)'
           ]}
         ]
       }, {
         name: 'Faroese',
         key: 'faroese',
         body: [
           '### Contact:',
           { textGroup:[
             'Sissal M. Rasmussen',
              'Føroyamálsdeildin/Department of Language and Literature',
              'Frøðskaparsetur Føroya/University of the Faroe Islands',
              'V.U. Hammershaimbs gøta 16, FO-100 Tórshavn, Faroe Islands',
              'sissalmr@setur.fo'
           ]},
           { textGroup: [
             'New in 2017!',
             'Click here to view more information provided directly by the authors! [Info2017-Faroese](documents/Info2017-Faroese)'
           ]}
         ]
       }, {
         name: 'Finnish',
         key: 'finnish',
         body: [
           'Original Long Form Version developed by Paula Lyytinen.',
           'Short Form developed by Suvi Stolt.',
           '### Contact:',
           { textGroup:[
             'Dr. Suvi Stolt',
              'University of Turku',
              'Dept. of Social Sciences and Philosophy, Logopedics',
              'Assistentinkatu 7, Publicum',
              '20014 University of Turku',
              'Finland',
              'Suvi.Stolt@utu.fi'
           ]},
           { textGroup: [
             '![Finnish worksheet 1](images/forms/Finland_WG.jpg)',
             '![Finnish worksheet 2](images/forms/Finland_WS.jpg)',
             '![Finnish Manual](images/forms/FinnishManual.jpg)'
           ]},
           { textGroup: [
             '### Publications',
              "Jansson-Verkasalo, E., Ruusuvirta, T., Huotilainen, M., Alku, P.,<br>Kushnerenko, E., Suominen, K., Rytky, S., Luotonen, M., Kaukola, T.,<br>Tolonen, U. & Hallman, M. (2010). Atypical perceptual narrowing in prematurely born infants is associated with compromised language acquisition at 2 years of age. BMC Neuroscience, 11:88.",
              "Jansson-Verkasalo, E., Valkama, M., Vainionpää, L., Pääkkö, E, Ilkko, E. & Lehtihalmes, M.(2004). Language development in very low birth weight preterm children: a follow-up study. Phoniatrica et Logopaedica, 56: 108-119.",
              "Paavola, L., Kunnari, S. & Moilanen, I. (2005). Maternal responsiveness and infant intentional communication: implications for the early communicative and linguistic development. Child: Care, Health and Development, 31 (6):727-735.",
              "Paavola, L., Kunnari, S., Moilanen, I., & Lehtihalmes, M. (2005). The functions of maternal verbal responses to prelinguistic infants as predictors of early communicative and linguistic development. First Language, 25(2): 173-195.",
              "Paavola, L., Kemppinen, K., Kumpulainen, K., Moilanen, I, & Ebeling, H. (2006). Maternal sensitivity, infant co-operation and early linguistic development: some predictive relations. European Journal of Developmental Psychology, 3(1):13-30.",
              "Stolt, Suvi (2009). Language in acquisition. Early lexical development and the associations between lexicon and grammar – findings from full-term and very-low-birth-weight Finnish children. Dissertation thesis. Publications of the Department of Speech Sciences, 55. Helsinki: University of Helsinki. Electronic version available [here](http://urn.fi/URN:ISBN:978-952-10-5512-6).",
              "Stolt, S., Haataja, L., Lapinleimu, H. and Lehtonen L. (2008). Early lexical development of Finnish children – a longitudinal study. First language. 28:3, 259-279.",
              "Stolt, S., Haataja, L., Lapinleimu, H.. and L. Lehtonen, L. (2009) Associations between lexicon and grammar at the end of the second year in Finnish children. Journal of Child Language, 36 (4), 779-806.",
              "Stolt, S., Haataja, L., Lapinleimu, H., and Lehtonen, L. (2009). The early lexical acquisition and its predictive value to language skills at two years in very-low-birth-weight children. Journal of Communication Disorders, 42, 107-123.",
              "Stolt, S., Klippi, A., Launonen, K., Munck, P., Lehtonen, L., Lapinleimu, H., Haataja, L. and the Pipari Study Group (2007). Size and composition of the lexicon in prematurely born- very-low-birth-weight and full-term Finnish children at two years of age. Journal of Child Language, 34, 283-310"
          ]},
          { textGroup: [
              'Long Form Publications',
              "Lyytinen, P., & Lyytinen, H. (2004). Growth and predictive relations of vocabulary and inflectional morphology in children with and without familial risk for dyslexia. Applied Psycholinguistics, 25, 397-411.",
              "Guttorm, T.K., Leppänen, P.H.T., Poikkeus, A.-M., Eklund, K.M., Lyytinen, P., & Lyytinen, H. (2005). Brain event-related potentials (ERPs) measured at birth predict later language development in children with and without familial risk for dyslexia. Cortex, 41, 291-303.",
              "Lyytinen, P., Eklund, K., & Lyytinen, H. (2005) Language development and literacy skills in late-talking toddlers with and without familial risk for dyslexia. Annals of Dyslexia, 55, 166-192.",
              "Torppa, M., Lyytinen, P., Erskine, J, Eklund, K., & Lyytinen, H. (2010). Language development, literacy skills, and predictive connections to reading in Finnish children with and without familial risk for dyslexia. Journal of Learning Disabilities, 43, 308-321.",
              "Lyytinen, P. (1999) Varhaisen kommunikaation ja kielen kehityksen arviointimenetelmä (Finnish Manual for Communicative Development Inventories, MCDI). Jyväskylän yliopiston Lapsitutkimuskeskus ja Niilo Mäki Instituutti: Jyväskylä: Yliopistopaino.",
              "Lyytinen, P., Poikkeus, A.-M., Leiwo, M., Ahonen, T., & Lyytinen, H. (1996). Parents as informants of their child's vocal and early language development. Early Child Development and Care, 126, 15-25.",
              "Lyytinen, P., Laakso, M.-L., & Poikkeus, A.-M. (1998). Parental contribution to child's early language and interest in books. European Journal of Psychology of Education, 13, 297-308.",
              'Lyytinen, P., Laakso, M.-L., Poikkeus, A.-M., & Rita, N. (1999). The development and predictive relations of play and language across the second year. Scandinavian Journal of Psychology, 40, 177-186.',
              "Laakso, M.-L., Poikkeus, A.-M., & Lyytinen, P. (1999). Shared reading interaction in families with and without genetic risk for dyslexia: Implications for toddlers' language development. Infant and Child Development, 8, 179-195.",
              'Laakso, M.-L., Poikkeus, A.-M., & Lyytinen, P. (1999). Early intentional communication as a predictor of language development in young toddlers. First Language, 19, 207-231.',
              'Laakso, M.-L., Poikkeus, A.-M., Eklund, K., & Lyytinen, P. (1999). Social interactional behaviors and symbolic play competence as predictors of language development and their associations with maternal attention-directing strategies. Infant Behavior & Development, 22, 541-556.',
              'Lyytinen, P., Poikkeus, A.-M., Laakso, M-L., Eklund, K., & Lyytinen, H. (2001). Language development and symbolic play in children with and without familial risk for dyslexia. Journal of Speech, Language, and Hearing Research, 44, 873-885.',
              'Lyytinen, H., Ahonen, T., Eklund, K., Guttorm, T.K., Laakso, M.-L., Leinonen, S., Leppänen, P.H.T., Lyytinen, P., Poikkeus, A.-M., Puolakanaho, A., Richardson, U., & Viholainen, H. (2001). Developmental pathways of children with and without familial risk for dyslexia during the first years of life. Developmental Neuropsychology, 20, 539-558.',
              "Lyytinen, P., Eklund, K., & Lyytinen, H. (2003). The play and language behavior of mothers with and without dyslexia and its association to their toddlers' language development. Journal of Learning Disabilities, 36, 74-86.",
              'Viholainen, H., Ahonen, T., Cantell, M., Lyytinen, P., & Lyytinen, H. (2002). Development of early motor skills and language in children at risk for familial dyslexia. Developmental Medicine & Child Neurology, 44, 761-769.',
              'Lyytinen, P., & Lyytinen, H. (submitted) Growth and predictive relations of vocabulary and inflectional morphology in children with and without familial risk for dyslexia.',
              'Guttorm T.K., Leppänen, P.H.T., Poikkeus, A.-M., Eklund, K., Lyytinen, P., & Lyytinen, H. (submitted) Brain event-related potentials (ERPs) measured at birth predict later language development in children with and without familial risk for dyslexia.'
           ]}
         ]
       }, {
         name: 'French (Canadian)',
         key: 'french_canadian',
         body: [
           '### Contact:',
           { textGroup:[
             'Natacha Trudeau, Ph.D.',
            "École d'orthophonie et audiologie ",
            "Université de Montréal ",
            "CP6128, Succ. Centre-Ville ",
            "Montréal, Qc, Canada H3C 3J7",

            "natacha.trudeau@umontreal.ca"
          ]},
          { textGroup:[
            "Diane Poulin-Dubois, Ph.D. ",
            "Psychology Department ",
            "Concordia University ",
            "7141 Sherbrooke Street West, PY-105 ",
            "Montréal, Qc, Canada ",
            "H4B 1R6",

            "Diane.PoulinDubois@concordia.ca"
          ]},
          { textGroup:[
            "New in 2017!",
            "Click here to view more information provided directly by the authors! [Info2017-French(Canadian)](documents/Info2017-French(Canadian).pdf)"
          ]},
          { textGroup: [
            "## Publications",
            "Trudeau, N. & et coll. (2008). Inventaires MacArthur-Bates du développement de la communication: Manuel de l’utilisateur.",
            "Bouchard, C., Trudeau, N., Sutton, A., Boudreault, M.-C., & Deneault, J. (2009). Gender differences in language development in French Canadian children between 8 and 30 months of age. Applied Psycholinguistics, 30 (4), 685-707.",
            "Duchesne, L., Sutton, A., Bergeron, F., & Trudeau, N. (2010). Le développement lexical précoce des enfants porteurs d’un implant cochléaire. Revue Canadienne d’orthophonie et d’audiologie, 43, 132-145.",
            "Poulin-Dubois, D., Blaye, A., Coutyal, J, & Bialystok, E. (2011). The effects of bilingualism on toddlers’ executive functioning. Journal of Experimental Psychology.",
            "Poulin-Dubois, D., Graham, S. & Sippola, L. (1995). Early lexical development: The contribution of parental labelling and infantsÕ categorization abilities. Journal of Child Language, 22, 325-343.",
            "Bouchard, C., Trudeau, N., Bigras, N., & Sutton, A. (2008). Vocabulaire des enfants âgés entre 8 et 30 mois qui fréquentent un service de garde structuré. In : N. Bigras et G. Cantin (Éds.), Les services de garde éducatifs à la petite enfance du Québec : Recherches, réflexions et pratiques. Québec, QC : Presses de l’Université du Québec, 167-178.",
            "Boudreault, M.-C., Cabirol, É.-A., Trudeau, N., Poulin-Dubois, D., & Sutton, A. (2007). Les Inventaires Macarthur du développement de la communication : validité et données normatives préliminaires. Journal of Speech-Language Pathology and Audiology, 31(1), 27-37.",
            "Elin T. Thordardottir (2005). Early lexical and syntactic development in Quebec French and English: implications for cross-linguistic and bilingual assessment. International Journal of Language and Communication Disorders, 40(3), 243-278.",
            "Kay-Raining Bird, E., Cleave, P., Trudeau, N., Thordardottir, E., Sutton, A. & Thorpe, A. (2005). The language abilities of bilingual children with Down Syndrome. American Journal of Speech Language Pathology, 14, 187-199.",
            "Petitto, L. A., Katerelos, M., Levy, B., Gauna, K., Tétrault, K., & Ferraro, V. (2001). Bilingual signed and spoken language acquisition from birth: Implications for mechanisms underlying bilingual language acquisition. Journal of Child Language, 28 (2), pages 1-44.",
            "Frank, I., & Poulin-Dubois, D. (2002). Young monolingual and bilingual children’s responses to violation of the mutual exclusivity principle. International Journal of Bilingualism., 6, 125-146."
          ]}
         ]
       }, {
         name: 'French (European)',
         key: 'french_european',
         body: [
           '### Contact:',
           { textGroup:[
             "Sophie Kern ",
              "Chargée de recherches ",
              "Laboratoire Dynamique du Langage (UMR5590) ",
              "Institut des Sciences de l'Homme ",
              "14, avenue Berthelot ",
              "69363 Lyon cedex 07 ",
              "France ",
              "Tel: +33 4 72 72 64 60 ",
              "Fax: +33 4 72 72 65 90",
              "Sophie.Kern@univ-lyon2.fr"
           ]},
           { textGroup: [
             'New in 2017!',
             'Click here to view more information provided directly by the authors! [Info2017-French(European)](documents/Info2017-French(European).pdf)'
           ]},
           { textGroup: [
             '![French European Worksheet](images/forms/EuroFrench_WG.jpg)'
           ]},
           { textGroup: [
             "Publications",
             "Kern, S. & F. Gayraud (2010). IFDC. Les éditions la cigale, Grenoble",
              "Kern, S., 2007, 'Lexicon development in French-speaking infants', First Language, 27:3, pp. 227-250",
              "Kern, S. & Gayraud, F., 2007, 'Influence of preterm birth on early lexical and grammatical acquisitions in French', First Language, 27:2, pp. 159-173",
              "Kern, S. & Langue, J. (2000). 'Des premiers gestes aux premiers mots : le développement communicatif chez l'enfant de 8 à 30 mois'. Actes des3èmes Journées Scientifiques de l'Ecole d'orthophonie de Lyon. 24 et 25 novembre, ENS, Lyon.",
              "KERN, S. (2001). 'Le developpement communicatif des enfants français de 8 à 30 mois.' Revue Le pédiatre. Tome XXXVI, N°182, 7-13. En collaboration avec G. Hilaire, A. Viguié, P. Dudognon, J. Langue, J. Romieu"
           ]}
         ]
       }, {
         name: 'Galician',
         key: 'galician',
         body: [
           '### Contact:',
           { textGroup:[
             "Miguel Pérez-Pereira ",
              "Department of Developmental Psychology ",
              "Faculty of Psychology ",
              "University of Santiago de Compostela",
              "miguel.perez.pereira@usc.es"
           ]},
           { textGroup: [
             "New in 2017!",
              "Click here to view more information provided directly by the authors! [Info2017-Galician](documents/Info2017-Galician.pdf)"
           ]},
           { textGroup: [
             "### Publications",
              "Pérez Pereira, M. & Resches, M. (2007) Elaboración de las formas breves del Inventario do Desenvolvemento de Habilidades Comunicativas. Datos normativos y propiedades psicométricas. Infancia y Aprendizaje, 30 (4), 565-588.",
              "Pérez-Pereira, M., Almgren, M., Resches, M., Ezeizabarrena, Mª J., Díaz, C., García, I. (2007) Cross-linguistic comparisons between Basque and Galician. In M. Eriksson (ed.), Proceedings from The First European Network Meeting on Communicative Development inventories. Pgs. 22-31. Gävle: Sweden, Gävle University Press. ISBN 978-91-974948-8-5.",
              "Pérez-Pereira, M., Resches, M. & Fernández, P. (2007). Differences in language development between monolingual (Galician) and bilingual (Galician-Spanish) children. In M. Eriksson (ed.), Proceedings from The First European Network Meeting on Communicative Development inventories. Pgs. 93-102. Gävle: Sweden, Gävle University Press. ISBN 978-91-974948-8-5",
              "Pérez-Pereira, M. (2008). Early Galician/Spanish bilingualism: contrasts with monolingualism. In C. Pérez-Vidal; M. J. Garau & A. Bel (Eds.) A portrait of the young in the new multilingual Spain.Clevedon: Multilingual Matters. Pgs. 39-62. ISBN-13: 978-1-84769-023-4 (hbk), ISBN-13: 978-1-84769-022-7 (pbk).",
              "Pérez Pereira, M., & Resches, M. (2008). Validez concurrente y predictiva del IDHC. Implicaciones para el posterior desarrollo del lenguaje y de la cognición social. In E. Díez-Itza (Ed.), Estudios de desarrollo del lenguaje y educación. (pp. 87-94). Oviedo: Universidad de Oviedo ICE. ISBN: 978-84-88828-29-3.",
              "Pérez Pereira, Miguel (2008). A adquisición da lingua. En Elisa Fernández Rei & Xose Luis Regueira (Eds.), Perspectivas sobre a oralidade. Pags. 169-186. Santiago de Compostela: Consello da Cultura Galega – Instituto da Lingua Galega.",
              "Pérez-Pereira, M. & Resches, M. (2009). Relationships between linguistic and behavioral measures during development. In Grinstead, J. Hispanic Child Languages: Typical and impaired development. Pgs 217-237. Amsterdam: John Benjamins.",
              "Pérez-Pereira, M., García-Soto, X. R., Forján, M., ., Resches, M. (2002, July). Adaptation of MacArthur CDIs to Galician: Normative results and reliability analysis. Poster presented at the 9th International Congress for the Study of Child Language. Wisconsin.",
              "Pérez-Pereira, M., Forján, M., García-Soto, X. R., Resches, M. (2001, septiembre). Desarrollo léxico de niños gallegos. Datos de la versión gallega del MacArthur. Papel presentado en el III Encontro Internacional sobre da Adquisición das linguas do estado. Malaga.",
              "Pérez-Pereira, M., Forján, M., García-Soto, X. R., Resches, M. (2001, August). Galician version of the MacArthur Communicative Development Inventories. Paper presented at the 11th European Conference on Developmental Psychology, Uppsala, Sweden.",
              "*Note: Short forms are currently being developed for this adaptation.*"
            ]},
            { textGroup: [
              "### Publications:",
              "Pérez Pereira, M. & Resches, M. (2011). Concurrent and predictive validity of the Galician CDI. Journal of Child Language (available online).",
              "Miguel Pérez Pereira & X.R. García Soto (2003). El diagnóstico del desarrollo comunicativo en la primera infancia: adaptación de las escalas MacArthur al gallego. Psicothema , 15 (3), 352-361.",
              "García Soto, X.R. & Pérez Pereira, M. (2003). El desarrollo del lenguaje en niños gallego-hablantes entre los 8 y los 30 meses. En Las lenguas en un mundo global, pgs. 113-123. Publicaciones de la Universidad de Jaén. Jaén. ISBN : 84-8439-162-0.",
              "Pérez Pereira, M. (2004) Efectos do bilingüismo na adquisición da linguaxe dos nenos pequenos: un estudio con nenos galegos. En A. Lorenzo; F. Ramallo & Rodriguez-Yañez, X.P. (Eds.). Bilingual socialization and bilingual language acquisition. Proceedings from the Second International Symposium on Bilingualism. Vigo: Publicacións da Universidade de Vigo, pgs. 305-318. ISBN 84-8158-280-8.",
              "Arratibel, N.; Barreña, A.; Pérez Pereira, M. & Fernández, P. (2005) Comparaciones interlingüísticas euskara-gallego del desarrollo léxico y gramatical. En Mayor, M.A., Zubiauz, B. y Díez, E. (Eds.). Estudios sobre la adquisición del lenguaje (pgs. 983-997). Salamanca: Ediciones Universidad de Salamanca.",
              "Pérez-Pereira, M. (2008). Early Galician/Spanish bilingualism: contrasts with monolingualism. In C. Pérez-Vidal; M. J. Garau & A. Bel (Eds.) A portrait of the young in the new multilingual Spain . Clevedon: Multilingual Matters."
            ]},
            { textGroup: [
              "### Conference Presentations:",
              "Miguel Pérez-Pereira, Maite Forján, Xose Ramón García-Soto, Mariela Resches: Galician version of the MacArthur Communicative Development Inventories. Xth European Conference on Developmental Psychology, Uppsala, 22-26 August, 2001.",
              "M. Pérez Pereira, M.T. Forján, X.R. García Soto & M. Resches. Desarrollo léxico de niños gallegos medido mediante la versión Gallega del CDI. III Encuentro Internacional sobre Adquisición de las Lenguas del Estado. Málaga, 24-26 Septiembre 2001.",
              "M. Pérez Pereira & X.R. Gar cía Soto. El desarrollo del lenguaje de niños gallego-hablantes entre los 8 y los 30 meses. XX Congreso de AESLA . Jaen, 18-20 de Abril de 2002.",
              "M. Pérez-Pereira, X.R. García-Soto; M. Forján & M. Resches Adaptation of MacArthur CDI to Galician: Normative results and reliability analysis. 9 th International Conference of the IASCL . Madison, EEUU, 16-20 July, 2002.",
              "M. Pérez Pereira. La evaluación del lenguaje en el niño en edades tempranas. I Congreso Nacional de Atención Temprana . Murcia, 3-5 de Octubre de 2002.",
              "M. Pérez Pereira. Efectos do bilingüismo na adquisición da linguaxe dos nenos pequenos. II Simposio Internacional sobre o Bilingüismo . Vigo, 24-26 Octubre de 2002.",
              "M. Pérez Pereira y X.R. García Soto. Comparación del desarrollo lingüístico en niños monolingües y bilingües gallegos. 6º Simposio de Psicolingüística . Barcelona, 27-29 Marzo, 2003.",
              "M. Pérez Pereira. Evaluación del desarrollo lingüístico y comunicativo inicial. Adaptación de las escalas MacArthur al gallego. VII Congreso Europeo de Evaluación Psicológica. Málaga, 1-4 de Abril de 2004.",
              "Arratibel, N.; Barreña, A.; Pérez Pereira, M. & Fernández, P. Comparaciones interlingüísticas euskera-gallego del desarrollo léxico y gramatical infantil. IV Congreso Internacional sobre la Adquisición de las Lenguas del Estado . Salamanca, 22-24 de septiembre de 2004.",
              "Pérez Pereira, M. Nuevos instrumentos para evaluar el desarrollo comunicativo y lingüístico en la primera infancia. II Congreso Internacional de Atención Temprana. Santiago de Compostela, 27-29 de Octubre de 2004.",
              "Pérez-Pereira, M.; Resches, M. & Fernández, P. (2005). Interrelationships between components of language and communicative development in Galician as reflected by the MacArthur-Bates inventories. X International Congress for the Study of Child Language, Berlin 25th-29th of July, 2005.",
              "Resches, Mariela; Fernández, Pilar & Pérez-Pereira, Miguel. The Galician version of the MacArthur-Bates scales. X International Congress for the Study of Child Language, Berlin 25th-29th of July, 2005.",
              "Perez-Pereira, M.; Jackson-Maldonado, D.; Ezeizabarrena, M.J. & Kern, S. The MacArthur-Bates CDI in some Romance Languages and Basque: language development and language differences. X International Congress for the Study of Child Language, Berlin 25th-29th of July, 2005.",
              "Pérez-Pereira, M. Early linguistic development and linguistic environment: a comparison of monolingual and bilingual Galician children. XIIth European Conference on Developmental Psychology. La Laguna , Tenerife ( Spain ), 25-28 August, 2005."
           ]}
         ]
       }, {
         name: 'German',
         key: 'german',
         body: [
           { textGroup:[
             '![German Worksheet](images/forms/German_WG.jpg)',
             '![German Manual](images/forms/GermanManual.jpg)'
           ]},
           { textGroup: [
             '### Contact:',
             "Professor Gisela Szagun, Ph.D., BSc",
              "Emeritus Professor of Psychology",
              "Carl-von-Ossietsky Universität Oldenburg",
              "Fakultät VI, Medizin und Gesundheitswissenschaften",
              "Institut für Psychologie",
              "26111 Oldenburg",
              "Germany",
              "gisela.szagun@googlemail.com",
              "www.giselaszagun.com"
           ]},
           { textGroup: [
             "Dipl.-Psych. Barbara Stumper",
             "Abteilung für Vergleichende und Entwicklungspsychologie",
             "Max-Planck-Institut für evolutionäre Anthropologie",
             "Deutscher Platz 6 ",
             "04103 Leipzig ",
             "Germany",
             "barbara@stumper.de",
             "Szagun, G., Stumper, B. & Schramm, A.S. (2009). Fragebogen zur frühkindlichen Sprachentwicklung (FRAKIS) und FRAKIS-K (Kurzform). Frankfurt: Pearson Assessment.",
             "http://www.pearsonassessment.de"
           ]},
           { textGroup: [
             "New in 2017!",
              "Click here to view more information provided directly by the authors! [Info2017-German](documents/Info2017-German.pdf)"
           ]},
           { textGroup: [
             "### Literature describing the spontaneous speech data the items in FRAKIS are based on",
              "Szagun, G. (2001). Learning different regularities: The acquisition of noun plurals by German-speaking children. First Language, 21, 109-141.",
              "Szagun, G. (2004a). German – Szagun. Talk Bank. http://childes.psy.cmu.edu",
              "Szagun, G. (2004b). Learning by ear: On the acquisition of case and gender marking by German-speaking children with cochlear implants and with normal hearing. Journal of Child Language, 31, 1-30.",
              "Szagun, G., Stumper, B. Sondag, N. & Franik, M. (2007). The acquisition of gender marking by young German-speaking children: Evidence for learning guided by phonological regularities. Journal of Child Language, 34, 445-471.",
              "Szagun, G., Steinbrink, C., Franik, M. & Stumper, B. (2006). Development of vocabulary and grammar in young German-speaking children assessed with a German language development inventory. First Language, 26, 259-280. ",
              "Szagun, G., Stumper, B. & Schramm, A.S. (2009). Fragebogen zur frühkindlichen Sprachentwicklung (FRAKIS) und FRAKIS-K (Kurzform). Frankfurt: Pearson Assessment."
           ]}
         ]
       }, {
         name: 'German (Austrian)',
         key: 'german_austrian',
         body: [
           '### Contact:',
           { textGroup:[
             "Peter B Marschik",
              "iDN-interdisciplinary Developmental Neuroscience",
              "Department of Phoniatrics",
              "Medical University of Graz, Austria and Center of Neurodevelopmental Disorders",
              "Department of Women’s and Children’s Health",
              "Karolinska Institutet, Stockholm, Sweden",
              "http://www.idn-research.org"
           ]},
           { textGroup: [
             "New in 2017!",
              "Click here to view more information provided directly by the authors! [Info2017-German(Austrian)](documents/Info2017-German(Austrian).pdf)"
           ]},
           { textGroup: [
              "Publications:",
              "Marschik, PB; Einspieler, C; Garzarolli, B; Prechtl, HF. (2007): Events at early development: are they associated with early word production and neurodevelopmental abilities at the preschool age? Early Hum Dev. 2007; 83(2): 107-114.",
              "Marschik, PB; Vollmann, R; Einspieler, C. (2007): The Austrian-CDI: Late talkers, their lexical knowledge, cognitive and neurological performance at preschool age. In: Eriksson, M editors(s). Proceedings from the First European Network Meeting on the Communicative Development Inventories.. Gävle: Gävle University Press; p. 116. (ISBN: 978-91-974948-8-5)",
              "Marschik, PB; Dibiasi Pansy, J; Vollmann, R; Einspieler, C. (2009): Entwicklungsauffälligkeiten bei transienten und konsistenten Late Talkers. Kinderärztliche Praxis. 2009; (80): 337-342. (Article in German)",
              "Vollmann R, Marschik P, Einspieler C. Elternfragebogen fuer die Erfassung der fruehen Sprachentwicklung für (oesterreichisches) Deutsch. Grazer Ling Schrift (2000), 54: 123-144.",
              "Marschik PB, Einspieler H, Vollmann R, Einspieler C. Lexikonerwerb im zweiten und dritten Lebensjahr: Wie viel erzaehlen uns die ersten Woerter? LOGOS Interdisziplinaer 2005, 13:8-14.",
              "Marschik PB, Einspieler C. Is the vocabulary size at 18 months predictive for language abilities at preschool age? Developmental Medicine and Child Neurology, (2005), 47:37.",
              "Marschik PB, Einspieler C, Garzarolli B, Prechtl HFR. Events at early development: are they associated with early word production and neurodevelopmental abilities at the preschool age? Early Human Development (2006)."
           ]}
         ]
       }, {
         name: 'German (Swiss)',
         key: 'german_swiss',
         body: [
           '### Contact:',
           { textGroup:[
              "Dr. Anja Gampe ",
			  "Department of Psychology",
              "University of Zurich",
              "Binzmühlestrasse 14/21",
              "8050 Zürich, Switzerland",
              "a.gampe@psychologie.uzh.ch"
           ]},
           { textGroup: [
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-German(Swiss)](documents/Info2017-German(Swiss).pdf)"
           ]}
         ]
       }, {
         name: 'German Sign Language',
         key: 'german_sl',
         body: [
           '### Contact:',
           { textGroup:[
              "Johannes Hennies",
              "johannes.hennies@googlemail.com"
           ]}
         ]
       }, {
         name: 'Greek',
         key: 'greek',
         body: [
           { textGroup:[
             "Introducing an adaptation of the MB-CDI into Greek. The Greek adaptation of the Words and Gestures went through several iterations, corrections and back-translations amongst the four collaborators. As one of us is a native speaker of Italian and familiar with the Italian adaptation, we have also sometimes compared the in-progress Greek solutions with the Italian ones. All collaborators have extensive experience in the study of early communication and development. For each iteration, the general procedure involved one first main translation by a Greek native speaker (MM), an adjustment/adaptation by a second native speaker (CP), a comparative check with the Italian version (FF) and a back-translation into English (NP). MM and CP have also been able to test in-progress versions with Greek parents and one linguist for direct feedback, which has been taken into account at every step. Data collection is ongoing to test the Greek adaptation on an extensive sample. ",
              "You may download the instrument here: MB-CDI Words & Gestures, Greek Adaptation. Citation: Markodimitraki, M., Papailiou, C., Politimou, N., & Franco, F. December 2015. ",
              "Also available: A document summarising the items of the original CDI that have been replaced in the Greek adaptation in function of: [1] cultural aspects, [2] more common use with infants and toddlers, [3] ID-phonological simple vs. complex in Greek. Click here to download: Adaptation Guidelines",
              "For specific queries about Greek words, contact MM and CP; for general inquiries about the adaptation process, contact FF."
           ]},
           '### Contact: ',
           { textGroup: [
            "Dr. Maria Markodimitraki",
            "Department of Preschool Education",
            "University of Crete (Greece)",
            "markodim@edc.uoc.gr"
          ]},
          { textGroup: [
            "Dr. Christina Papailiou",
            "Department of Preschool Education and Educational Planning",
            "University of The Aegean (Rhodes, Greece)",
            "papailiou@rhodes.aegean.gr"
          ]},
          { textGroup: [
            "Dr. Fabia Franco",
            "Department of Psychology, School of Science and Technology",
            "Middlesex University (London, UK)",
            "f.franco@mdx.ac.uk"
          ]},
          { textGroup: [
            "Nina Politimou",
            "Department of Psychology, School of Science and Technology",
            "Middlesex University (London, UK)",
            "a.politimou@mdx.ac.uk"
          ]}
         ]
       }, {
         name: 'Greek (Cypriot)',
         key: 'greek_cypriot',
         body: [
           '### Contact:',
           { textGroup:[
              "Dr. Kleanthes K. Grohmann",
              "Prof. of Biolinguistics",
              "University of Cyprus ",
              "Department of English Studies & Cyprus Acquisition Team",
              "75 Kallipoleos ",
              "P.O. Box 20537",
              "CY–1678 Nicosia",
              "Cyprus",
              "kleanthi@ucy.ac.cy"
           ]},
           { textGroup: [
              "Dr. Maria Kambanaros ",
              "Assoc. Prof. of Speech Pathology ",
              "Department of Rehabilitation Sciences & Cyprus Acquisition Team",
              "15 Vragadinou",
              "CY–3041 Limassol",
              "Cyprus",
              "maria.kambanaros@cut.ac.cy"
           ]},
           { textGroup: [
              "Adaptations Research Assistant",
              "Dr. Loukia Taxitari",
              "loukia.taxitari@gmail.com"
           ]},
           { textGroup: [
             "New in 2017!",
              "Click here to view more information provided directly by the authors! [Info2017-Greek(Cypriot)](documents/Info2017-Greek(Cypriot).pdf)"
           ]},
           { textGroup: [
             "Publications:",
              "Taxitari, L., Kambanaros, M., Floros, G. & Grohmann, K.K. (in press). Early language development in a bilectal context: The Cypriot adaptation of the MacArthur-Bates CDI. In E. Babatsouli, D. Ingram & N. Müller (eds.), Where Typical and Atypical Language Acquisition Meet Cross-Linguistically. Bristol: Multilingual Matters.",
              "Taxitari, L., Kambanaros, M. & Grohmann, K.K. (2016). Early Greek language development in Cyprus: A bilectal adaptation of the MacArthur-Bates CDI. Studies in Greek Linguistics 36, 409–424. Available here.",
              "Taxitari, L., Kambanaros, M. & Grohmann, K.K. (2016). Investigating early language in a bilectal context. In E. Babatsouli & D. Ingram (eds.), Proceedings of the International Symposium on Monolingual and Bilingual Speech 2015, 384–395. Available here.",
              "Taxitari, L., Kambanaros, M. & Grohmann, K.K. (2015). A Cypriot Greek adaptation of the CDI: Early production of translation equivalents in a bi(dia)lectal context. Journal of Greek Linguistics 15, 122–145."
           ]}
         ]
       }, {
         name: '(West) Greenlandic',
         key: 'west_greenlandic',
         body: [
           '### Contact:',
           { textGroup:[
              "Mette Larsen Lyberth",
              "IUddannelsesstyrelsen Postboks 1610",
              "3900 Nuuk",
              "Greenland",
              "mell@nanoq.gl"
           ]}
         ]
       }, {
         name: 'Hebrew',
         key: 'hebrew',
         body: [
           '### Contact:',
           { textGroup:[
             "Sharone L. Maital ",
              "Department of Education ",
              "University of Haifa ",
              "Mount Carmel, Haifa Israel ",
              "Fax: 972-4-824-0911",
              "maitals@construct.haifa.ac.il"
           ]},
           { textGroup: [
             "Esther Dromi ",
              "School of Education",
              "Tel-Aviv University",
              "Ramat Aviv, Tel-Aviv",
              "Israel, 69 979",
              "Fax: 972-3-648-8571",
              "dromi@post.tau.ac.il ",
              "or:",
              "edromi@netvision.net.il"
           ]},
           { textGroup: [
             "![Hebrew Worksheet 1](images/forms/Hebrew_WG.jpg)",
             "![Hebrew Worksheet 2](images/forms/Hebrew_WS.jpg)"
           ]},
           { textGroup: [
             "Maital, S., Dromi, E. & Sagi, A. (1995). Development of a Hebrew version of the MacArthur Inventory: A parent questionnaire for evaluating toddler language development. Paper presented at the annual meeting of Research in Education, Jerusalem, 1995.",
              "Maital, S & Dromi, E. ( 1997). Developing the Hebrew MCDI: A tool for studying intracultural variability and cross-linguistic comparisons. Poster presented at the Society for Research in Child Development, Washington, DC, USA.",
              "Maital, S., Dromi, E. Sagi, A. & Bornstein, M. H. (2000). The Hebrew Communicative Development Inventory: Language specific properties and cross-linguistic generalizations, Journal of Child Language, 27, 1-25.",
              "**NOTE:** related papers used a Hebrew adaptation of Camaioni et al.'s modified version of the CDI, which is an observational tool for parents for the evaluation of pre-linguistic behaviors of infants:",
              "Dromi, E. (1992). The development of prelinguistic communication: Implications for language evaluation. In Anastasio, J.N. and Harel, S. (Eds.), At risk infants: Interventions, families, and research. Baltimore, Maryland: Paul Brooks Publishing Co.",
              "Maital, S., Dromi, E. & Sagi, A. (1995). Development of a Hebrew version of the MacArthur Inventory: A parent questionnaire for evaluating toddler language development. Paper presented at the annual meeting of Research in Education, Jerusalem, 1995.",
              "Maital, S., Dromi, E. Sagi, A. & Bornstein, M. H. (2000). The Hebrew Communicative Development Inventory: Language specific properties and cross-linguistic generalizations, Journal of Child Language, 27, 1-25.",
              "**NOTE:** Two earlier papers used a Hebrew adaptation of Camaioni et al.'s modified version of the CDI, which is an observational tool for parents rather than a checklist."
           ]}
         ]
       }, {
         name: 'Hindi',
         key: 'hindi',
         body: [
           '### Contact:',
           { textGroup:[
             "Elaine Ballard",
              "e.ballard@auckland.ac.nz"
           ]},
           { textGroup: [
             "Clair Delle Luche",
             "claire.delleluche@gmail.com"
           ]}
         ]
       }, {
         name: 'Hungarian',
         key: 'hungarian',
         body: [
           '### Contact:',
           { textGroup:[
              "Bence Kas ",
              "Eotvos Lorand University ",
              "Bárczi Gusztáv Faculty of Special Education ",
              "1097 Budapest Ecseri út 3",
              "Hungary",
              "kas.bence@barczi.elte.hu"
           ]}
         ]
       }, {
         name: 'Icelandic',
         key: 'icelandic',
         body: [
           '### Contact:',
           { textGroup:[
              "Elin Thordardottir ",
              "Associate Professor ",
              "School of Communication Sciences and Disorders",
              "Faculty of Medicine ",
              "McGill University ",
              "1266 Pine Avenue West ",
              "Montreal H3G 1A8 ",
              "Quebec, Canada ",
              "Tel: (514) 398-5356 ",
              "Fax: (514) 398-8123",
              "elin.thordardottir@mcgill.ca"
           ]},
           { textGroup: [
             "Publications",
              "Elin T. Thordardottir,  Ellis Weismer, S., and Evans, J.  (2002).  Continuity in lexical and morphological development in Icelandic and English-speaking 2-year-olds.  First Language, 22, 3-28.",
              "Thordardottir, E.T. & Ellis Weismer,S. (1996). Language assessment via parent report: Development of a screening instrument for Icelandic children. First Language, 16, 265-285.",
              "Thordardottir, E.T. (1994). Assessment of early language development in Icelandic children via parent report: Development of a screening instrument. Unpublished Masters thesis. University of Wisconsin, Madison, WI."
           ]}
         ]
       }, {
         name: 'Inuktitut',
         key: 'inuktitut',
         body: [
           '### Contact:',
           { textGroup:[
              "Shanley Allen",
              "allen@sowi.uni-kl.de"
           ]}
         ]
       }, {
         name: 'Irish-English Bilingual',
         key: 'irish_english_bilingual',
         body: [
           '### Contact:',
           { textGroup:[
             "Dr. Ciara O'Toole",
              "Department of Speech & Hearing Sciences",
              "Brookfield Health Sciences Complex",
              "College Road",
              "University College Cork",
              "Tel: +353 21 4901539",
              "Fax: +353 21 4901542",
              "c.otoole@ucc.ie",
              "[Website](http://publish.ucc.ie/researchprofiles/C025/cotoole)"
           ]},
           { textGroup: [
             "New in 2017!",
              "Click here to view more information provided directly by the authors! [Info2017-Irish-English](documents/Info2017-Irish-English.pdf)"
           ]},
           { textGroup: [
             "![irish english worksheet](images/forms/Irish_WG.jpg)",
             "A study with Paul Fletcher on the Irish CDI is now finished. The Toddler form was adapted. This adaptation includes a bilingual measure of vocabulary development as Irish is a minority language. The writing of relevant papers are in the process."
           ]},
           { textGroup: [
             "Publications:",
              "O’Toole C& Fletcher, P (2010). Validity of a parent report for Irish-speaking toddlers. First Language, 30 (2), 199-217."
           ]}
         ]
       }, {
         name: 'Italian',
         key: 'italian',
         body: [
           "In addition to the original long forms, a short form of the Italian Words and Phrases instrument has been developed and is currently being normed with a large sample. It is available from Cristina Caselli upon request.",
           '### Contact:',
           { textGroup: [
             "M.C. Caselli ",
              "Institute of Cognitive Sciences and Technologies- CNR ",
              "Via Nomentana 56, 00161 Rome, Italy ",
              "Operator: +3906 44161511 ",
              "Tel:  +3906  44161516 ",
              "Fax: +3906  44161513",
              "cristina.caselli@istc.cnr.it"
           ]},
           { textGroup: [
              "New in 2017!",
              "Click here to view more information provided directly by the authors! [Info2017-Italian](documents/Info2017-Italian.pdf)"
           ]},
           { textGroup: [
             "![italian worksheet](images/forms/Italian_WG.jpg)"
           ]},
           { textGroup: [
             "Publications:",
              "Devescovi, A., & Caselli, M. C. (2001). Una prova di ripetizione di frasi per la valutazione del primo sviluppo grammaticale. Psicologia Clinica dello Sviluppo, 5(3), 341-364.",
              "Vicari, S., Caselli, M.C., & Tonucci, F. (2000). Asynchrony of lexical and morphosintactic development in children with Down Syndrome. Neuropsychologia, 38/5, 634-644",
              "Vicari, S., Caselli, M.C.,Gagliardi, C., Tonucci, F., & Volterra, V. (2002). Language acquisition in special populations: a comparison between Down and Williams Syndromes. Neuropsychologia, 40/13, 2461-2470",
              "Caselli, M. C., Rinaldi, P., Stefanini, S., & Volterra, V. (2009). Actions and Gestures repertoires in infants from 8 to 18 months: relationships with early words’ comprehension and production. Età Evolutiva, 93, 70-78.",
              "Casadio, P. & Caselli, M.C. (1989). Il primo vocabolario del bambino: gesti e parole a 14 mesi. Età Evolutiva, 33, 32-41.",
              "Caselli, M. C., Bates, E., Casadio, P., Fenson, L., Fenson, J., Sanderl, L. & Weir, J. (1995). A cross-linguistic study of early lexical development. Cognitive Development, 10, 159-99.",
              "Caselli, M. C. & Casadio, P. (1993). Sviluppo del vocabolario e prima grammatica nel secondo anno di vita. Età Evolutiva, 45, 5-19.",
              "Caselli, M. C., & Casadio, P. (1995). Il primo vocabolario del bambino: gesti e parole. Roma: Istituto di Psicologia, Consiglio Nazionale delle Ricerche, e Fondazione MacArthur.",
              "Caselli, M. C., & Casadio, P. (1995). Il primo vocabolario del bambino: parole e frasi. Roma: Istituto di Psicologia, Consiglio Nazionale delle Ricerche, e Fondazione MacArthur.",
              "Caselli, M. C. & Casadio, P. (1995). Il primo vocabolario del bambino: guida all'uso del questionario MacArthur. Milan, Italy: Franco Angeli.",
              "Caselli, M. C., Casadio, P. & Bates, E. (1999). A comparison of the transition from first words to grammar in English and Italian. Journal of Child Language, 26, 69-111.",
              "Caselli, M. C., Marchetti, C. & Vicari, S. (1994). Conoscenze lessicali e primo sviluppo morfosintattico. In A.Contardi & S. Vicari (a cura di), Le persone Down. Milano: Franco Angeli.",
              "Caselli, M. C., Vicari, S., Longobardi, E., Lami, L., Pizzoli, C. & Stella, G. (1998). Gestures and words in early development of children with Down Syndrome. Journal of Speech & Hearing Research, 41, 1 - 11."
           ]}
         ]
       }, {
         name: 'Italian Sign Language',
         key: 'italian_sl',
         body: [
           '### Contact:',
           { textGroup: [
             "Cristina Caselli",
              "cristina.caselli@istc.cnr.it"
           ]},
           { textGroup: [
             "Pasquale Rinaldi",
             "pasquale.rinaldi@istc.cnr.it"
           ]},
           { textGroup: [
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-ItalianSignLanguage] (documents/Info2017-ItalianSignLanguage.pdf)"
           ]}
         ]
       }, {
         name: 'Japanese',
         key: 'japanese',
         body: [
           '### Contact:',
           { textGroup:[
              "Professor Tamiko Ogura ",
              "Osaka University of Comprehensive Children Education ",
              "26-4-6 Yusato Higashisumiyoshi-ku",
              "Osaka city, Japan"
           ]},
           { textGroup: [
             "Dr. Toru Watamaki",
              "twatamaki@gmail.com"
           ]},
           { textGroup: [
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-Japanese](documents/Info2017-Japanese.pdf)"
           ]},
           { textGroup: [
             "![japanese manual words and gestures](images/forms/JapaneseManual_WG.jpg)",
             "![japanese manual words and grammar](images/forms/JapaneseManual_WS.jpg)",
             "![japanese worksheet](images/forms/Japanese_WS.jpg)",
             "![japanese worksheet 2](images/forms/Japanese.jpg)"
           ]},
           { textGroup: [
             "Manuals",
              "Ogura, T. & Watamaki, T. (2004). Technical Manual of the Japanese MacArthur Communicative Development Inventory: Words and Gesture, Kyoto International Social Welfare Exchange Center.",
              "Watamaki, T. &Ogura, T. (2004). Technical Manual of the Japanese MacArthur Communicative Development Inventory: Words and Grammar, Kyoto International Social Welfare Exchange Center.",
              "Ogura, T., & Watamaki, T. (1998). Research and development of early language inventories. Report of research project, Grant-in-aid for scientific research.",
              "Ogura, T., Yamashita, Y., Murase, T. & Dale, P. S. (1993). Some findings from the Japanese Early Communicative Development Inventories. Memoirs of the Faculty of Education, Shimane University, 27, 26-38. (In English)."
           ]}
         ]
       }, {
         name: 'Kannada',
         key: 'kannada',
         body: [
           '### Contact:',
           { textGroup: [
             "Dr. Veena KD",
             "r.veena@manipal.edu"
           ]},
           { textGroup: [
              "New in 2017!",
              "Click here to view more information provided directly by the authors! [Info2017-Kannada](documents/[Info2017-Kannada.pdf)"
           ]}
         ]
       }, {
         name: 'Kinyarwanda',
         key: 'kinyarwanda',
         body: [
           '### Contact:',
           { textGroup:[
             "Theresa Betancourt",
             "theresa_betancourt@harvard.edu"
           ]}
         ]
       }, {
         name: 'Kishwahili/Kigiriama',
         key: 'kishwahili_kigiriama',
         body: [
           '### Contact:',
           { textGroup:[
             "Katie Alcock ",
              "Department of Psychology ",
              "Lancaster University ",
              "Fylde College ",
              "Lancaster LA14YF ",
              "Tel: (+44) (0) 1524 593833 ",
              "Fax: (+44) (0) 1524 593744",
              "k.j.alcock@lancaster.ac.uk"
           ]},
           { textGroup: [
             "Publications",
              "Alcock, K. J., Rimba, K., Abubakar, A., & Holding, P. (2005). First words in two East African languages. Paper presented at the International Congress for the Study of Child Language, Berlin.",
              "Alcock, K. J., Rimba, K., Abubakar, A., & Holding, P. A. (2007). Development of Communicative Development Inventories for rural Africa. Paper presented at the European Society for Developmental Psychology.",
              "Alcock, K. J., Prado, E., Rimba, K., Kalu, R., Newton, C. R. J. C., & Holding, P. (2010). Parent report of language development in illiterate families ­ the CDI in two developing country settings. Paper presented at the International Society for the Study of Behavioral Development."
           ]}
         ]
       }, {
         name: 'Klingon',
         key: 'klingon',
         body: [
           '### Contact:',
           { textGroup:[
             "Philip Dale ",
              "Director of Intergalactic Languages ",
              "Starfleet Academy ",
              "San Francisco, CA"
           ]}
         ]
       }, {
         name: 'Krio',
         key: 'krio',
         body: [
           '### Contact:',
           { textGroup:[
             "Theresa Betancourt",
              "theresa_betancourt@harvard.edu"
           ]}
         ]
       }, {
         name: 'Korean',
         key: 'korean',
         body: [
           'There are two forms of Korean CDI (M-B CDI-K): Vocabulary & Gesture, and Vocabulary & Grammar.',
           '## Authors',
           { textGroup:[
             "Soyeong Pae ",
              "Professor ",
              "Dept. of Speech Pathology & Audiology ",
              "Hallym University ",
              "Hallym Daehak-gil 39, Chuncheon, Korea ",
              "Tel: 82-33-248-2214",
              "spae@hallym.ac.kr"
           ]},
           { textGroup: [
             "Keumjoo Kwak",
              "Associate Professor",
              "Department of Psychology",
              "Seoul National University",
              "Shillimdong Kwanakgu, Seoul 151-746, Korea",
              "Tel: 82-2-880-5792",
              "Fax: 82-2-880-6428",
              "kjkwak@snu.ac.kr",
              "[Website](http://dpsy.snu.ac.kr/)"
           ]},
           { textGroup: [
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-Korean](documents/Info2017-Korean.pdf)"
           ]},
           { textGroup: [
             "![korean manual image](images/forms/KoreanManual.jpg)",
             "![korean wg form](images/forms/Korean_WG.jpg)"
           ]},
           { textGroup: [
             "Publications",
              "Pae, S. (1993). Early vocabulary in Korean: Are nouns easier to learn than verbs? Unpublished doctoral dissertation. University of Kansas.",
              "Pae, S. (2003). Validity and reliability of the Korean adaptation of MCDI. Korean Journal of Communication Disorders, 8 (2), 1-14.",
              "Pae, S., Chang-Song, Y., Kwak, K., Sung, H., & Sim, H. (2004). MCDI-K referenced expressive word development of Korean children and gender differences. Korean Journal of Communication Disorders, 9 (1), 45-56.",
              "Pae, S., Kwak, K., Kim, M., Lee, H., & Jung, K. (2008). Short forms versions of MacArthur-Bates Communicative Development Inventories-Korean. Journal of the Korean Society of Speech Sciences, 15 (2), 119-129."
           ]}
         ]
       }, {
         name: 'Latvian',
         key: 'latvian',
         body: [
           '### Contact:',
           { textGroup:[
             "Olga Urek",
              "olga.urek@uit.no"
           ]}
         ]
       }, {
         name: 'Lebanese Arabic-French-English',
         key: 'lebanese_arabic_french_english',
         body: [
           '### Contact:',
           { textGroup:[
             "Camille Moitel Messarra ",
              "Directrice de l’Institut Supérieur d’Orthophonie ",
              "Université Saint Joseph ",
              "Beyrouth, Liban ",
              "Tél: + 961 1 421 639 ",
              "Cell: + 961 70 115 197 ",
              "Email: camille.messarra@usj.edu.lb"
           ]},
           { textGroup: [
             "Edith Kouba El Hreich ",
              "Institut supérieur d’Orthophonie ",
              "Faculté de médecine, Université Saint Joseph ",
              "Beirut, Lebanon ",
              "Email: edithkoubaelhreich@usj.edu.lb"
           ]}
         ]
       }, {
         name: 'Malawian',
         key: 'malawian',
         body: [
           '### Contact:',
           { textGroup: [
             "Elizabeth Barcikowski ",
              "Chief of Party, GABLE PPC ",
              "P/Bag 363, Lilongwe 3 ",
              "Malawi ",
              "Office Phone: (265)780141 ",
              "Office Fax: (265)780142 ",
              "Cell Phone: (265)828584"
           ]},
           { textGroup: [
             "Elizabeth Prado, Ph.D. ",
              "Assistant Professor ",
              "Department of Nutrition ",
              "University of California, Davis",
              "elprado@ucdavis.edu"
           ]},
           { textGroup: [
             "Phuka John, Chimwemwe ",
              "College of Medicine ",
              "Division of Community Health ",
              "P.O. Box 431, ",
              "Mangochi, Malawi ",
              "Tel: +265 (0) 888 852 668",
              "johnphuka@yahoo.co.uk ",
              "jphuka@medcol.mw"
           ]}
         ]
       }, {
         name: 'Malayalam',
         key: 'malayalam',
         body: [
           '### Contact:',
           { textGroup: [
             "Dr. Sunila John",
             "sunila.john@manipal.edu"
           ]},
           { textGroup: [
             "### New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-Malayalam](documents/Info2017-Malayalam.pdf)"
           ]}
         ]
       }, {
         name: 'Maltese-English',
         key: 'maltese_english',
         body: [
           '### Contact:',
           { textGroup:[
             "Dr. Daniela Gatt ",
              "Department of Communication Therapy ",
              "Faculty of Health Sciences ",
              "University of Malta ",
              "Tel.: +356 23401101",
              "daniela.gatt@um.edu.mt"
           ]}
         ]
       }, {
         name: 'Mandarin (Beijing)',
         key: 'mandarin_beijing',
         body: [
           '### Contact:',
           { textGroup: [
             "Twila Tardif ",
              "Department of Psychology ",
              "University of Michigan ",
              "2014 East Hall ",
              "525 East University ",
              "Ann Arbor, MI 48109-1109 ",
              "Tel: (734) 764-2443 ",
              "Fax: (734) 936-9288",
              "twila@umich.edu"
           ]},
           { textGroup: [
              "Paul Fletcher",
              "P.Fletcher@ucc.ie"
           ]},
           { textGroup: [
             "Manual:",
              "Tardif, T. and Fletcher, P. Chinese Communicative",
              "Development Inventories: User's Guide and Manual (2008), Peking University Medical Press, Beijing, China.",
              "[www.pumpress.com.cn](www.pumpress.com.cn)"
           ]},
           { textGroup: [
             "Norming studies:",
              "Gelman, S. A. & Tardif, T. (1998). Acquisition of nouns and verbs in Mandarin and English. In E. V. Clark (Ed.), Proceedings of the 29th Annual Stanford Child Language Research Forum (pp. 27-36). Stanford, CA: Stanford University Center for the Study of Language and Information.",
              "Tardif, T., Gelman, S. A., & Xu, F. (1999). Putting the 'noun bias' in context: A comparison of Mandarin and English, Child Development, 70, 620-635.",
              "Tardif, T. (2006). The importance of verbs in Chinese. In P. Li (Ed.), Handbook of Chinese Psycholinguistics. Cambridge."
           ]}
         ]
       }, {
         name: 'Mandarin (Taiwan)',
         key: 'mandarin_taiwan',
         body: [
           '### Contact:',
           { textGroup:[
             "Huei-Mei Liu ",
              "Department of Special Education, ",
              "National Taiwan Normal University ",
              "162 Ho-Ping East Road, Sec. 1, ",
              "Taipei, Taiwan ",
              "Office: 886-2-77345013 ",
              "Fax: 886-2-23413061",
              "liumei@ntnu.edu.tw"
           ]},
           { textGroup: [
             "New in 2017!",
            "Click here to view more information provided directly by the authors! [Info2017-Mandarin(Taiwan)](documents/Info2017-Mandarin(Taiwan).pdf)"
          ]},
          { textGroup: [
            "![mandarin taiwan](images/forms/TaiwanManual.jpg)"
          ]},
          { textGroup: [
            "Publications",
            "Liu, H.– M. & Tsao, F.– M. (2010). The Standardization and Application of Mandarin-Chinese Communicative Developmental Inventory for Infants and Toddlers. Formosa Journal of Mental Health, 23 (4), xx-xx. (in Chinese)",
            "Liu, H.– M. & Tsao, F.– M. (2010). The manual of Mandarin-Chinese Communicative Developmental Inventory for Infants and Toddlers. Taipei, Taiwan: The Profile of Psychological Publishing Co., Ltd.",
            "[Publisher Website](http://www.psy.com.tw/com.php)"
          ]}
         ]
       }, {
         name: 'Mandarin (Singapore)',
         key: 'mandarin_singapore',
         body: [
           '### Contact:',
           { textGroup: [
             "Dr. Leher Singh ",
              "Department of Psychology ",
              "National University of Singapore ",
              "9 Arts Link ",
              "Singapore 117570 ",
              "Tel: +65 6516 7750",
              "psyls@nus.edu.sg ",
              "Lab Website",
              "Note: This project was initiated by Tan Seok Hui."
           ]},
           { textGroup: [
             "Publications ",
             "Tan, S.H. (2010). Multilingual Infant Vocabulary in Singapore. In M. Cruz-Ferreira (Ed.) Multilingual Norming. Peter Lang.",
             "Tan, S.H., Liu, D., Affandi, H., & Chen, L. (2006) Vocabulary development in bilingual infants in Singapore. Poster presented at International Conference for the Japanese Society for Language Sciences in Tokyo, Japan.",
             "Tan, S. H. (2009). Vocabulary development in multilingual 1- and 2-year-old Singaporean infants. Poster presented at Biennial Meeting for the Society of Research in Child Development on 3 April 2009, in Denver, Colorado, USA.",
             "Tan, S. H., & So, W.-C. C. (2008). Vocabulary development in multilingual 12- to 30-month-old Singaporean children. Paper presented at Conference on Bilingual Acquisition in Early Childhood, at the Chinese University of Hong Kong, Hong Kong."
           ]}
         ]
       }, {
         name: 'Mandinka',
         key: 'mandinka',
         body: [
           '### Contact:',
           { textGroup:[
             "Dr. Sarah Lloyd-Fox",
              "Centre for Brain and Cognitive Development ",
              "Birkbeck, University of London ",
              "London WC1E 7HX, UK ",
              "s.fox@bbk.ac.uk "
           ]},
           { textGroup: [
              "Dr. Bosiljka Milosavljevic ",
              "Centre for Brain and Cognitive Development ",
              "Birkbeck, University of London ",
              "London WC1E 7HX, UK ",
              "b.milosavljevic@bbk.ac.uk ",
           ]}
         ]
       }, {
         name: 'Ngas',
         key: 'ngas',
         body: [
           '### Contact:',
           { textGroup:[
             "Jane Childers ",
             "Center for Sciences & Innovation ",
             "Trinity University ",
             "One Trinity Place ",
             "San Antonio, TX 78212 ",
             "jchilder@trinity.edu "
           ]},
           { textGroup: [
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-Ngas](documents/Info2017-Ngas.pdf)"
           ]}
         ]
       }, {
         name: 'North Sami',
         key: 'north_sami',
         body: [
           '### Contact:',
           { textGroup:[
             "Kristine Bentzen, PhD ",
             "Department of Language and Linguistics/Center for Advanced Study in Theoretical Linguistics (CASTL) ",
             "Faculty of Humanities, Social Sciences and Education ",
             "University of Tromsø ",
             "N-9037 Tromsø ",
             "Norway ",
             "Phone: +47 77646665"
           ]}
         ]
       }, {
         name: 'Norwegian',
         key: 'norwegian',
         body: [
           '### Contact:',
           { textGroup:[
             "Professor Kristian Emil Kristoffersen ",
             "Department of Linguistics and Scandinavian Studies ",
             "University of Oslo ",
             "Tel: 4722857634 ",
             "k.e.kristoffersen@iln.uio.no"
           ]},
           { textGroup: [
             "![norwegian worksheet](images/forms/Norway_WG.jpg)"
           ]},
           { textGroup: [
             "Publication",
             "Kristoffersen, K. E., Simonsen, H. G., Bleses, D., Wehberg, S., Jørgensen, R. N., Eiesland, E. A. & Henriksen, L. Y. (2011). Development and variation in early communicative skills in infants and toddlers acquiring Norwegian – a CDI-based study. ",
             "Kristoffersen, K. E., Simonsen, H. G., Bleses, D., Wehberg, S., Jørgensen, R. N., Eiesland, E. A., & Henriksen, L. Y. (2013). The use of the Internet in collecting CDI data: An example from Norway. Journal of Child Language, 40(03), 567-585.",
             "Simonsen, H. G., Kristoffersen, K. E., Bleses, D., Wehberg, S., & Jørgensen, R. N. (2014). The Norwegian Communicative Development Inventories: Reliability, main developmental trends and gender differences. First Language, 34(1), 3-23.",
             "Lind, M., Simonsen, H. G., Hansen, P., Holm, E., & Mevik, B. H. (2015). Norwegian Words: A lexical database for clinicians and researchers. Clinical Linguistics & Phonetics, 29(4), 276-290."
           ]}
         ]
       }, {
         name: 'Persian/Farsi',
         key: 'persian_farsi',
         body: [
           '### Contact:',
           { textGroup: [
             "Yalda Kazemi ",
             "y.kazemi@hotmail.com"
           ]},
           { textGroup: [
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-Persian-Farsi](documents/Info2017-Persian-Farsi.pdf)"
           ]}
         ]
       }, {
         name: 'Polish',
         key: 'polish',
         body: [
           '### Contact:',
           { textGroup: [
             "Magdalena Smoczyńska ",
             "Educational Research Institute (Instytut Badań Edukacyjnych IBE) ",
             "Poland ",
             "magsmocz@gmail.com"
           ]},
           { textGroup: [
             "Ewa Haman ",
             "Faculty of Psychology ",
             "University of Warsaw ",
             "Poland ",
             "ewa.haman@psych.uw.edu.pl"
           ]},
           { textGroup: [
             "Publications",
              "Polish CDI-I: Smoczyńska, M. (2015). Inwentarz rozwoju mowy i komunikacji (IRMIK): SŁOWA I GESTY. Warszawa: Instytut Badań Edukacyjnych.",
              "Polish CDI-II: Smoczyńska, M. (2015). Inwentarz rozwoju mowy i komunikacji (IRMIK): SŁOWA I ZDANIA. Warszawa: Instytut Badań Edukacyjnych.",
              "Polish CDI-II short version (100-items): Krajewski, G., Smoczyńska, M. (2015). Krótki Inwentarz rozwoju mowy i komunikacji (KIRMIK). Warszawa: Instytut Badań Edukacyjnych.",
              "Manual (in Polish; includes information on all the above versions): Smoczyńska, M., Krajewski, G., Łuniewska, M., Haman, E., Bulkowski, K., Kochańska, M. (2015). Inwentarze rozwoju mowy i komunikacji (IRMIK): SŁOWA I GESTY, SŁOWA I ZDANIA. Podręcznik. Warszawa: Instytut Badań Edukacyjnych."
           ]},
           { textGroup: [
             "All the above can be seen online [here](http://ibe.edu.pl/pracowniatestow/index.php?d=narzedzia)",
             "and downloaded from:",
             "[260067_SIG_nowy%20sklad_v2-1.pdf](http://produkty.ibe.edu.pl/docs/inne/260067_SIG_nowy%20sklad_v2-1.pdf)",
              "[260067_SIZ_nowy%20sklad_v2-1.pdf](http://produkty.ibe.edu.pl/docs/inne/260067_SIZ_nowy%20sklad_v2-1.pdf)",
              "[260054_KIRM-A_kwestionariusz_v5.pdf](http://produkty.ibe.edu.pl/docs/inne/260054_KIRM-A_kwestionariusz_v5.pdf)",
              "[260054_KIRM-B_kwestionariusz_v5.pdf](http://produkty.ibe.edu.pl/docs/inne/260054_KIRM-B_kwestionariusz_v5.pdf)",
              "[ibe-ee-podrecznik-irmik.pdf](http://produkty.ibe.edu.pl/docs/inne/ibe-ee-podrecznik-irmik.pdf)",
              "![polish worksheet](images/forms/Polish_WS.jpg)",
              "![polish worksheet 2](images/forms/Polish_WG.jpg)"
           ]}
         ]
       }, {
         name: 'Portuguese (Brazilian)',
         key: 'portuguese_brazilian',
         body: [
           '### Contact:',
           { textGroup:[
             "Elizabeth Teixeira ",
             "Rua Joao Mendes da Costa Filho 306/302-D ",
             "Jardim de Alah ",
             "41750-190 Salvador, BA ",
             "Brazil ",
             "Tel: (0115571) 343-5246 ",
             "ereist@ufba.br"
           ]},
           { textGroup: [
             "![portuguese brazilian worksheet](images/forms/Portugese_WS.jpg)"
           ]}
         ]
       }, {
         name: 'Portuguese (European; Long Forms)',
         key: 'portuguese_european_long',
         body: [
           '### Contact:',
           { textGroup:[
             "Fernanda Leopoldina Viana ",
             "*leopoldinaviana@gmail.com*",
			 ]},
           { textGroup: [ 
             "Irene Maria Dias Cadime ",
             "*irenecadime@gmail.com*",
			  ]},
           { textGroup: [
             "Rosa Lima ",
             "*rolima307@gmail.com*"
           ]}
         ]
       }, {
         name: 'Portuguese (European; Short Forms)',
         key: 'portuguese_european_short',
         body: [
           '### Contact:',
           { textGroup:[
             "Sonia Frota, Director",
             "Lisbon Baby Lab ",
             "CLUL/FLUL Universidade de Lisboa ",
             "Alameda de Universidade ",
             "1600-214 ",
             "Lisboa ",
             "Portugal",
             "sonia.frota@mail.telepac.pt ",
             "or",
             "labfon@fl.ul.pt"
           ]},
           { textGroup: [
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-Portuguese(European)Shortforms](documents/Info2017-Portuguese(European)Shortforms.pdf)"
           ]},
           { textGroup: [
             "Publication",
             "Frota, S., Butler, J., Correia, S., Severino, C., Vicente, S., & Vigário, M. (2016). Infant communicative development assessed with the European Portuguese MacArthur-Bates Communicative Development Inventories short forms. First Language, 1-21.",
             "[Link to Publication](http://fla.sagepub.com/content/early/2016/07/27/0142723716648867.full.pdf)",
             "[Link to Project Website](http://labfon.letras.ulisboa.pt/babylab/english/CDI_European_Portuguese.html)"
           ]}
         ]
       }, {
         name: 'Portuguese (Mozambique)',
         key: 'portuguese_mozambique',
         body: [
           '### Contact:',
           { textGroup:[
             "Paul Vogt ",
             "vogt.pa@gmail.com"
           ]},
           { textGroup: [
             "New in 2017!",
              "Click here to view more information provided directly by the authors! [Info2017-Portuguese(Mozambique)](documents/Info2017-Portuguese(Mozambique).pdf)"
           ]}
         ]
       },  {
         name: 'Ronga',
         key: 'ronga',
         body: [
           '### Contact:',
           { textGroup:[
             "Paul Vogt ",
             "vogt.pa@gmail.com"
           ]},
           { textGroup:[
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-Ronga](documents/Info2017-Ronga.pdf)"
           ]}
         ]
       }, {
         name: 'Romani',
         key: 'romani',
         body: [
           '### Contact:',
           { textGroup:[
             "Hristo Kyuchukov ",
             "1000 Sofia, Bulgaria ",
             "145 D Rakovski, apt. 7 ",
             "Balkan Foundation",
             "hkyuchukov@gmail.com"
           ]}
         ]
       }, {
         name: 'Russian',
         key: 'russian',
         body: [
           '### Contact:',
           { textGroup:[
             "Marina Eliseeva, Ph.D.",
			 "Department Head ",
             "Department of Children’s Language and Literary Education ",
             "Herzen State Pedagogical University of Russia (St. Petersburg)",
             "melyseeva@yandex.ru"
           ]},
           { textGroup: [
             "Stella Ceytlin, Ph.D., Honorary Professor ",
             "Department of Children’s Language and Literary Education ",
             "SPb Russian Pedagogical University",
             "stl2006@list.ru"
           ]},
           { textGroup: [
             "Elena Vershinina, Senior Researcher",
             "Pavlov Institute of Physiology ",
             "Russian Academy of Sciences (St. Petersburg)",
             "ver_elen@mail.ru"
           ]},
           { textGroup: [
             "Victoria Ryskina, Teacher ",
             "Moscow School of Social and Economic Sciences (Moscow) ",
             "vryskina1@mail.ru"
           ]},
           { textGroup: [
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-Russian](documents/Info2017-Russian.pdf)"
           ]},
           { textGroup: [
             "![russian worksheet](images/forms/Russian_WS.jpg)"
           ]}
         ]
       }, {
         name: 'Samoan',
         key: 'samoan',
         body: [
           '### Contact:',
           { textGroup:[
             "Elaine Reese ",
             "ereese@psy.otago.ac.nz",
           ]},
           { textGroup: [
             "Elaine Ballard ",
             "e.ballard@auckland.ac.nz"
           ]}
         ]
       }, {
         name: 'Sasak',
         key: 'sasak',
         body: [
           '### Contact:',
           { textGroup:[
             "Elizabeth Prado, Ph.D.",
             "Assistant Professor ",
             "Department of Nutrition ",
             "University of California, Davis",
             "elprado@ucdavis.edu ",
             "[iLiNS Project Website](http://ilins.org/)"
           ]}
         ]
       }, {
         name: 'Serbian',
         key: 'serbian',
         body: [
           '### Contact:',
           { textGroup:[
             "Slavica Tutnjević ",
             "Banja Luka University ",
             "Faculty of Philosophy ",
             "Psychology Department ",
             "Coordinator for International Cooperation of the Faculty of Philosophy ",
             "Website: University of Banja Luka, Republic of Srpska",
             "slavicatutnjevic@gmail.com"
           ]},
           { textGroup: [
             "Darinka Anđelković ",
             "Laboratory for Experimental Psychology and Institute of Psychology ",
             "Faculty of Philosophy ",
             "University of Belgrade ",
             "Serbia",
             "dandjelk@f.bg.ac.rs"
           ]},
           { textGroup: [
             "Maja Savić ",
             "Faculty of Philology ",
             "Laboratory for Experimental Psychology",
			 "Faculty of Philosophy ",
             "University of Belgrade ",
             "Serbia",
             "smaya@eunet.rs"
           ]},
           { textGroup: [
             "Nada Ševa ",
             "Research Associate ",
             "Institute for Educational Research ",
             "University of Belgrade ",
             "Serbia",
             "nadaseva@gmail.com"
           ]},
           { textGroup: [
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-Serbian](documents/Info2017b-Serbian.pdf)"
           ]}
         ]
       }, {
         name: 'Setswana/Tswana',
         key: 'setswana_tswana',
         body: [
           'There are two, collaborating projects developing adaptations of the CDIs for Setswana, one based in Botswana and one in South Africa. Contact information for each of them is below.',
           "### South Africa Project Contact:",
           { textGroup:[
             "Heather Brookes, Ph.D. ",
             "Chief Research Officer ",
             "SARChI Linguistics ",
             "University of Cape Town ",
             "A17 Arts Block ",
             "Tel: 021 650 2039 ",
             "Tel: 082 514 9604 ",
             "heather.brookes@uct.ac.za"
           ]},
           '### Botswana Project Contact:',
           { textGroup: [
             "Dr. Naledi N. Kgolo ",
             "Department of English ",
             "University of Botswana ",
             "Private Bag 00703, Gaborone ",
             "Botswana ",
             "Tel: +267 355 5432 ",
             "Website: http://naledikgolo.com/",
             "kgolon@ub.ac.bw"
           ]},
           { textGroup: [
             "Prof Rose Letsholo-Tafila ",
             "Department of English ",
             "University of Botswana ",
             "Private Bag 00703, Gaborone ",
             "Botswana ",
             "Tel: +267 355 5429 ",
             "letsholor@ub.c.bw"
           ]}
         ]
       }, {
         name: 'Shona',
         key: 'shona',
         body: [
           '### Contact:',
           { textGroup:[
             "Joe Piper ",
             "joe.piper@gmail.com "
           ]}
         ]
       }, {
         name: 'Sindhi',
         key: 'sindhi',
         body: [
           '### Contact:',
           { textGroup:[
             "Muneera A. Rasheed ",
             "Senior Instructor ",
			 "Department of Paediatrics and Child Health",
			 "Stadium Road",
			 "Aga Khan University Hospital",
			 "Karachi, Pakistan",
			 "Telephone: (+92 21) 3486 4334 | Ext. 4334",
			 "*muneera.rasheed@aku.edu*"
           ]}
         ]
       }, {
         name: 'Slovak',
         key: 'slovak',
         body: [
           '### Contact:',
           { textGroup:[
             "Svetlana Kapalkova ",
             "Department of Speech Therapy ",
             "Faculty of Education ",
             "Comenius University ",
             "Bratislava ",
             "Slovak Republic",
             "kapalkova@fedu.uniba.sk ",
             "svetlana.kapalkova@gmail.com "
           ]},
           { textGroup: [
             "Daniela Slancova ",
             "Institute of Slovak and Media Studies ",
             "Philosophical Faculty ",
             "University of Presov ",
             "Presov ",
             "Slovak Republic",
             "daniela.slancova@unipo.sk"
           ]},
           { textGroup: [
             "![slovak worksheet](images/forms/Slovak_WS.jpg)",
             "![slovak manual](images/forms/SlovakManual.jpg)"
           ]}
         ]
       }, {
         name: 'Slovenian',
         key: 'slovenian',
         body: [
           "### This project is developing adaptations for Slovenian (also known as Slovene) of the CDI:WG and CDI:WS.",
           '### Contact:',
           { textGroup:[
             "Dr. Ljubic Marjanovič-Umek, Full Professor ",
             "University of Ljubljana",
             "Faculty of Arts, Department of Psychology ",
             "Aškerčeva 2 ",
             "1000 Ljubljana ",
             "Slovenija",
             "ljubica.marjanovic@ff.uni-lj.si"
           ]},
           { textGroup: [
             "Dr. Urška Fekonja, Associate Professor ",
             "University of Ljubljana ",
             "Faculty of Arts, Department of Psychology ",
             "Aškerčeva 2 ",
             "1000 Ljubljana ",
             "Slovenija",
             "urska.fekonja@ff.uni-lj.si"
           ]},
           { textGroup: [
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-Slovenian](documents/Info2017-Slovenian.pdf)"
           ]}
         ]
       }, {
         name: 'South Sotho',
         key: 'south_sotho',
         body: [
           '### Contact:',
           { textGroup:[
             "Heather Brookes, Ph.D. ",
             "Chief Research Officer ",
             "SARChI Linguistics ",
             "University of Cape Town ",
             "A17 Arts Block ",
             "Tel: 021 650 2039 ",
             "Tel: 082 514 9604 ",
             "heather.brookes@uct.ac.za "
           ]}
         ]
       }, {
         name: 'Spanish (Argentinian)',
         key: 'spanish_argentinian',
         body: [
           '### Contact:',
           { textGroup:[
             "Dra. Mariela Resches ",
             "Adjunct Researcher ",
             "CIIPME-CONICET ",
             "mresches@gmail.com "
           ]},
           { textGroup: [
             "Dra. Norma Maglio ",
             "Faculty of Psychology ",
             "Universidad Nacional de La Plata ",
             "normamaglio@hotmail.com "
           ]},
           { textGroup: [
             "Lic. Adriana Luque ",
             "Faculty of Psychology ",
             "Universidad Nacional de La Plata ",
             "luquead@gmail.com "
           ]}
         ]
       }, {
         name: 'Spanish (Chilean)',
         key: 'spanish_chilean',
         body: [
           '### Contact:',
           { textGroup:[
             "Mónica Andrea Velásquez Zabala ",
			 "Telephone in Chile: +56 (45) 2325747",
             "monica.velasquez@ufrontera.cl"
           ]},
		   { textGroup:[
             "Luis Leonardo Cepeda Guíñez ",
			 "Telephone in Chile: +56 (9) 68791871",
             "l.cepeda01@gmail.com // l.cepeda01@ufromail.cl"
           ]}
         ]
       }, {
         name: 'Spanish (Columbian)',
         key: 'spanish_columbian',
         body: [
           '### Contact:',
           { textGroup:[
             "Maria Fernanda Lara ",
             "mflarad@unal.edu.co "
           ]}
         ]
       }, {
         name: 'Spanish (Cuban)',
         key: 'spanish_cuban',
         body: [
           '### (NOTE: This is an adaptation of the first Mexican Spanish version. The authors also created a short form.)',
           '### Contact:',
           { textGroup:[
             "Barbara Pearson ",
             "Research Associate, Project Manager ",
             "NIH Working Group on AAE ",
             "University of Massachusetts ",
             "Dept. of Communication Disorders ",
             "117 Arnold House ",
             "Amherst, MA 01003 ",
             "Tel: 413-545-5023 ",
             "Fax: 413-545-0803",
             "bpearson@comdis.umass.edu",
			  ]},
			  { textGroup: [
             "Publications",
             "Pearson, B. Z., (1998). Assessing lexical development in bilingual babies and toddlers. International Journal of Bilingualism, 2, 347-372 (Special issue on bilingual acquisition, A. DeHouwer, Ed.)",
             "Crowson, M., Lee, J., Neal, A.R., & Stella, J. (1997). Correlates of nonverbal communication with language development and parental report in young children with autism. Poster presented at the Society for Research in Child Development, Washington, D.C., April 2-6, 1997",
             "Fernández, M.C. & Umbel, V.M. (1991) Inventario del Desarrollo de las Habilidades Comunicativas: Adaptación Cubana. Miami, Florida: University of Miami, Mailman Center for Child Development.",
             "Pearson, B.Z. & Basinger, D. (March, 1995). Criteria for delay in three populations of two-year-olds. Poster presented at the Society for Research in Child Development Biennial Meeting, Indianapolis, IN.",
             "Pearson, B.Z. & Fernandez, S. (1994). Patterns of interaction in the lexical development in two languages of bilingual infants. Language Learning, 44, 617-653.",
             "Pearson, B.Z., Fernandez, S., Lewedag, V., & Oller, D.K. (1997). Input factors in lexical learning of bilingual infants (ages 10 to 30 months). Applied Psycholinguistics, 18, 41-58.",
             "Pearson, B.Z., Fernandez, S. & Oller, D.K. (1993). Lexical development in bilingual infants and toddlers: Comparison to monolingual norms. Language Learning, 43, 93-120. Reprinted in B. Harley (Ed.) (1995). Lexical issues in language learning (pp. 31-57). Toronto, CA: OISE.",
             "Pearson, B.Z., Fernandez, S., & Oller, D.K. (1995). Cross-language synonyms in the lexicons of bilingual infants: One language or two? Journal of Child Language, 22, 345-368."
           ]}
         ]
       }, {
         name: 'Spanish (European)',
         key: 'spanish_european',
         body: [
           '### Contact:',
           { textGroup:[
             "Alexandra Karousou",
             "Department of Education Sciences in Early Childhood",
             "Democritus University of Thrace",
             "Alexandroupolis, Greece",
             "akarouso@psed.duth.gr"
           ]},
           { textGroup: [
             "Silvia Nieva",
             "Facultad de Psicología",
             "Univ. Complutense de Madrid",
             "Madrid, Spain 28223",
             "silnieva@psi.ucm.es"
           ]},
           { textGroup: [
             "New!!",
             "Click [HERE](documents/Info2018-Spanish(European).pdf) to learn more about the European Spanish CDIs provided directly by the authors! "
           ]}
         ]
       }, {
         name: 'Spanish (Mexican)',
         key: 'spanish_mexican',
         body: [
           '### Contact:',
           { textGroup:[
             "Donna Jackson-Maldonado ",
             "2a de Cerros 676 ",
             "Jurica, Queretaro 76100 ",
             "Mexico",
             "djacksonmal@hotmail.com ",
             "[Website](http://www.donnajackson.weebly.com/)"
           ]},
           { textGroup: [
             "![mexican spanish worksheet](images/forms/MexicanSpanish_WS.jpg)"
           ]},
           { textGroup: [
             "### Spanish Manual (English):",
             "Call toll-free 1-800-638-3775 (8:00 a.m. to 5:00 p.m. ET, Monday through Friday) ",
             "Fax: 1-410-337-8539",
             "[Website](http://www.brookespublishing.com/cdi)",
             "custserv@brookespublishing.com"
           ]},
           { textGroup: [
             "### Spanish Manual (Spanish):",
             "Manual Moderno",
             "Av. Sonora 206 ",
             "México, D.F. 06100 ",
             "México ",
             "Tel: 52 55 52651100 ",
             "Fax: 52 55 52651163",
             "info@manualmoderno.com ",
             "[Website](http://www.manualmoderno.com/)"
           ]},
           { textGroup: [
             "![spanish manual](images/forms/SpanishManual.jpg)"
           ]},
           { textGroup: [
             "### Manual",
             "Jackson-Maldonado, D., Thal, D., Marchman, V., Newton, T., Fenson, L, & Conboy, B. (2003). MacArthur Inventarios del Desarrollo de Habilidades Comunicativas. User´s Guide and Technical Manual. Brookes, Baltimore."
           ]},
           { textGroup: [
             "### Publications",
             "Jackson-Maldonado, D. (2004). El retraso del lenguaje en niños mexicanos: vocabulario y gestos. Anuario de Psicología, 35, 2 p. 257-278.",
             "Verbal Morphology and Vocabulary in Monolinguals and Emergent Bilinguals. Goldstein, B. (Ed.), Bilingual Language Development and Disorders in Spanish-English Speakers. Brookes, Baltimore. (2004).",
             "Marchman, V.A. & Martínez-Sussman, C. (2002). Concurrent validity of caregiver-/parent report measures of language for children who are learning both English and Spanish. Journal of Speech, Language and Hearing Research, 45 (5), 993-997",
             "Jackson-Maldonado, D. y Maldonado, R. (2002). “Determinaciones semánticas de la flexión verbal en la adquisición del español” Rojas Nieto, C. y de León, L. (Eds.) La adquisición de la lengua materna UNAM-CIESAS, México.",
             "Thal, D., Jackson-Maldonado, D , Acosta, D. (2000). “Validity of a Parent-Report Measure of Vocabulary and Grammar for Spanish-Speaking Toddlers”. Journal of Speech, Language and Hearing Research. 43, 5, P. 1087-1100.",
             "Jackson-Maldonado, D. (1999). 'Early Language Assessment for Spanish-speaking Children: border realities'. En T. Fletcher y C. Bos, (Eds.) Social Integration of Children with Disabilities and Their Families: Blending U.S. and Mexican Perspectives. Bilingual Press, Arizona.",
             "Jackson-Maldonado, D., Maldonado, R. y Thal, D. (1998). 'Reflexive and Middle Markers in Early Child Language Acquisition' First Language, 18, 403-429.",
             "Soto Martínez, B. y Jackson-Maldonado, D. (1998). 'Artículo indefinido 'un' y definido 'el': una aproximación en niños de 28 meses' en Memorias del IV Encuentro de Lingüística en el Noroeste. Universidad de Sonora, Sonora, México.",
             "Jackson-Maldonado, D., Thal, D., Marchman, V., Bates. E., & Guitierrez-Clellen, V. (1993). Early lexical development of Spanish-speaking infants and toddlers. Journal of Child Language, 20, 523-549."
           ]},
           { textGroup: [
             "Presentations",
             "Jackson-Maldonado, D. & Conboy, B. (Nov. 2003). American Speech Language and Hearing Annual Convention. “Spanish Parental Report Measures for Monolingual and Bilingual Infants and Toddlers: from vocabulary to grammar”. Chicago, Illinois.",
             "De Cima, L. & Jackson-Maldonado, D. (Aug. 2002). American Speech Language and Hearing Annual Convention. “ Validity of Two Measures in Spanish: parent report and TVIP”, Word Differentiation in Mexican Late Talkers: an ERP study”. Atlanta, Georgia.",
             "Lara, L. & Jackson-Maldonado, D. (Aug. 2002). American Speech Language and Hearing Annual Convention “Word Differentiation in Mexican Late Talkers: an ERP study”. Atlanta, Georgia.",
             "Marchman, V.A. & Martínez-Sussman, C. (2000) Individual differences in learning contexts for Spanish and English-speaking children. Poster presented at Head Start´s Fifth National Research Conference. Washington, D.F.",
             "Thal, D., Jackson-Maldonado, D., & Fenson, L. Fundación MacArthur: Inventario del Desarrollo de Habilidades Comunicativas - Norms and validation studies. Poster presented at the VIIIth International Conference for the Study of Child Language, San Sebastian, Spain, July, 1999.",
             "Swaine, K., Renda, C., Jackson - Maldonado, D., Thal, D., & Fenson, L. Preliminary Norms for the Spanish Language Version of the MacArthur Communicative Development Inventories (Inventarios Del Desarrollo De Habilidades Comunicativas). Poster presented at the annual Symposium on Research in Child Language Disorders, Madison, WI, June, 1996).",
             "Jackson-Maldonado, D. (1990, April). Adaptation of parental report language inventories for Spanish speaking infants and toddlers. Paper presented at the International Conference on Infancy Studies, Montreal."
           ]}
         ]
       }, {
         name: 'Spanish Sign Language',
         key: 'spanish_sl',
         body: [
           '### Contact:',
           { textGroup:[
             "Isabel R. Rodríguez Ortiz ",
             "Dpto. Psicología Evolutiva y de la Educación ",
             "Facultad de CC. de la Educación ",
             "c/ Pirotecnia, s/n. Despacho 5.93 ",
             "41013-Sevilla (España) ",
             "Tel.: (+34) 955 420 541",
             "ireyes@us.es "
           ]},
           { textGroup: [
             "Laboratorio de Diversidad, Cognición y Lenguaje",
             "[http://institucional.us.es/labdicole/?platform=hootsuite](http://institucional.us.es/labdicole/?platform=hootsuite)",
             "[http://personal.us.es/ireyes](http://personal.us.es/ireyes )"
           ]},
           { textGroup: [
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-SpanishSignLanguage](documents/Info2017-SpanishSignLanguage.pdf)"
           ]}
         ]
       }, {
         name: 'Swedish',
         key: 'swedish',
         body: [
           '### Contact:',
           { textGroup:[
             "Mårten Eriksson ",
             "Department of Social Work and Psychology",
             "Faculty of Health and Occupational Studies ",
             "University of Gävle",
             "SE-801 76 Gävle, Sweden",
             "marten.eriksson@hig.se"
           ]},
           { textGroup:[
             "Eva Berglund ",
             "Department of Special Education ",
             "Stockholms University ",
             "106 91 Stockholm, Sweden",
             "eva.berglund@specped.su.se"
           ]},
           { textGroup:[
             "New in 2017!",
             "Click here to view more information provided directly by the authors! [Info2017-Swedish](documents/Info2017-Swedish.pdf)"
           ]},
           { textGroup:[
             "![swedish worksheet](images/forms/Swedish_WG.jpg)"
           ]},
           { textGroup:[
             "Publications",
             "Eriksson, M., & Berglund, E. (2002). Instruments, scoring manual and percentile levels of the Swedish Early Communicative Development Inventory, SECDI. (FoU-Rapport 17). Gävle, Sweden: Institutionen för pedagogik, didaktik och psykologi.",
             "Eriksson, M., Westerlund, M., & Berglund, E. (2002). A screening version of the Swedish Communicative Development Inventories designed for use with 18-months-old children. Journal of Speech, Language and Hearing Research, 46",
             "Eriksson, M. (2001) Narratives validate communicative development inventories. Applied Psycholinguistics, 22, p. 45-60.",
             "Berglund, E., Eriksson, M., & ohansson, I. (2001). Parental reports of spoken language skills in children with Down syndrome. Journal of Speech, Language and Hearing Research, 44, p. 179-91.",
             "Berglund, E., & Eriksson, M. (2000). Reliability and content validity of a new instrument for assessment of communicative skills and language abilities in young Swedish children. Logopedics, Phoniatrics Vocology, 25, p. 176-185.",
             "Berglund, E., & Eriksson, M. (2000). Communicative development in Swedish Children 16-28 months old: The Swedish Early Communicative Development Inventory - words and sentences. Scandinavian Journal of Psychology, 41,133-144.",
             "Eriksson, M., & Berglund, E. (1999). Swedish early communicative development. First Language, 19, 55-90.",
             "Berglund, E. & Eriksson, M. (1996). Different sampling methods of parental reports. The case for the Swedish Early Communicative Development Inventory, SECDI. Poster presented at the VIIth International Congress for the Study of Child Language, 14-19 July, Istanbul, Turkey.",
             "Berglund, E. & Eriksson, M. (Nov. 18-20, 1994). Parental reports of early language skills: Presentation of inventories and a cross-linguistic comparison. Proceedings of the Fifth Nordic Symposia on Child Language, Oslo."
           ]}
         ]
       }, {
         name: 'Tagalog',
         key: 'tagalog',
         body: [
           '### Contact:',
           { textGroup:[
             "Jen Manialong ",
             "j_manialong@yahoo.com.ph "
           ]}
         ]
       }, {
         name: 'Tamil',
         key: 'tamil',
         body: [
           '### Contact:',
           { textGroup:[
             "Nitya Sethuraman ",
             "Department of Psychology ",
             "University of Michigan, Dearborn ",
             "nitya@umd.umich.edu"
           ]}
         ]
       }, {
         name: 'Thai',
         key: 'thai',
         body: [
           '### Contact:',
           { textGroup:[
             "Sudaporn Luksaneeyanawin, Ph.D",
             "Director, Centre for Research in Speech and Language Processing-CRSLP",
             "First Floor, Arts Building 4",
             "Faculty of Arts, Chulalongkorn University",
             "Bangkok 10330, Thailand",
             "Tel:  662 218 4857",
             "Fax: 662 218 4856",
             "[Website](http://www.crslp.chula.ac.th/)"
           ]}
         ]
       }, {
         name: 'Tongan',
         key: 'tongan',
         body: [
           '### Contact:',
           { textGroup:[
             "Elaine Reese ",
             "ereese@psy.otago.ac.nz"
           ]}
         ]
       }, {
         name: 'Turkish',
         key: 'turkish',
         body: [
           '### Contact:',
           { textGroup:[
             "Dr. Aylin Küntay ",
             "Department of Psychology ",
             "Koç University ",
             "Rumeli Feneri Yolu ",
             "Sariyer 34450 ",
             "Istanbul, Turkey ",
             "Tel: +90.212.3381409 ",
             "Fax: +90.212.338.37.60 ",
             "akuntay@ku.edu.tr ",
             "[Website](http://home.ku.edu.tr/~akuntay)"
           ]},
           { textGroup: [
             "Publication",
             "Acarlar, F., Aksu-Koç, A., Küntay, A.C., Maviş, İ., Sofu, H., Topbaş, S., Turan, F. (2009). Adapting MB-CDI to Turkish: The first phase. In S. Ay, Ö. Aydın., İ. Ergenç, S. Gökmen, S. İşsever, and D. Peçenel (Eds.) Essays on Turkish linguistics: Proceedings of the 14th International Conference on Turkish Linguistics, August 6-8, 2008. Harrassowitz Verlag: Wiesbaden, Germany."
           ]}
         ]
       }, {
         name: 'Turkish Sign Language',
         key: 'turkish_sl',
         body: [
           '### Contact:',
           { textGroup:[
             "Beyza Sumer ",
             "Beyza.sumer@mpi.nl"
           ]},
           { textGroup: [
             "Dr. Aylin Küntay ",
             "Department of Psychology ",
             "Koç University ",
             "Rumeli Feneri Yolu ",
             "Sariyer 34450 ",
             "Istanbul, Turkey ",
             "Tel: +90.212.3381409 ",
             "Fax: +90.212.338.37.60 ",
             "akuntay@ku.edu.tr ",
             "[Website](http://home.ku.edu.tr/~akuntay)"
           ]}
         ]
       }, {
         name: 'Urdu',
         key: 'urdu',
         body: [
           '### Contact:',
           { textGroup:[
             "Mariam Dar ",
             "maryam.dar@gmail.com"
           ]},
           { textGroup: [
             "Huma Anwaar ",
             "Huma.anwaar@gmail.com"
           ]},
           { textGroup: [
             "Clair Delle Luche ",
             "claire.delleluche@gmail.com"
           ]}
         ]
       }, {
         name: 'Welsh-English',
         key: 'welsh-english',
         body: [
           '### Contact:',
           { textGroup:[
             "Debbie Mills, Ph.D. ",
             "School of Psychology ",
             "Adeilad Brigantia ",
             "Penrallt Road ",
             "Gwynedd LL57 2AS ",
             "United Kingdom ",
             "Tel: +44 (0)1248 388572 ",
             "Fax: +44 (0) 1248 38 2599 ",
             "d.l.mills@bangor.ac.uk"
           ]},
           { textGroup:[
             "Professor Virginia Mueller Gathercole",
             "Linguistics Program ",
             "English Department ",
             "Florida International University ",
             "11200 SW 8 St. ",
             "Miami, FL 33199 ",
             "vmeuller@fiu.edu"
           ]},
           { textGroup:[
             "![welsh-english form](images/forms/Welsh.jpg)"
           ]}
         ]
       }, {
         name: 'Wolof',
         key: 'wolof',
         body: [
           'This is an adaptation of the CDI:WS short form.',
           '### Contact:',
           { textGroup:[
             "Ann Weber ",
             "Department of Neonatal and Developmental Medicine ",
             "Stanford University School of Medicine",
             "Stanford, CA 94305 ",
             "annweber@stanford.edu"
           ]},
           { textGroup:[
             "Virginia A. Marchman ",
             "Department of Psychology ",
             "450 Serra Mall ",
             "Stanford University ",
             "Stanford, CA 94305 ",
             "marchman@stanford.edu"
           ]}
         ]
       }, {
         name: 'Xhosa',
         key: 'xhosa',
         body: [
           '### Contact:',
           { textGroup:[
             "Heather Brookes, Ph.D. ",
             "Chief Research Officer ",
             "SARChI Linguistics ",
             "University of Cape Town ",
             "A17 Arts Block ",
             "Tel: 021 650 2039 ",
             "Tel: 082 514 9604 ",
             "heather.brookes@uct.ac.za"
           ]}
         ]
       }, {
         name: 'Yiddish',
         key: 'yiddish',
         body: [
           '### Contact:',
           { textGroup:[
             "Isabelle Barriere, PhD ",
             "Director of Policy for Research & Education ",
             "Yeled v'Yalda Early Childhood Center ",
             "& Co-Director, YvY Research Institute ",
             "6012 Farragut Road, Brooklyn NY 11236 ",
             "Fax: 718 209 1171 ",
             "Tel: 718 209 1122 Ext. 237 ",
             "& Assistant Professor ",
             "Department of Speech Communication Arts & Sciences ",
             "Brooklyn College, City University of New York ",
             "Individual office: 2149A Ingersoll/ Departmental office: 3439 Boylan ",
             "2900 Bedford Avenue, Brooklyn, N.Y. 11210 ",
             "Fax: 718 957 4167 ",
             "Tel: (718) 951-3061",
             "isabelle.barriere@gmail.com "
           ]},
           { textGroup: [
             "### URLs:",
             "[http://www.yeled.org/res.asp](http://www.yeled.org/res.asp)",
             "[http://www.brooklyn.cuny.edu/pub/Faculty_Details5.jsp?faculty=795](http://www.brooklyn.cuny.edu/pub/Faculty_Details5.jsp?faculty=795)"
           ]},
           { textGroup: [
             "Publication",
             "Barrière, I. (2010) The vitality of Yiddish among Hasidic infants and toddlers in a low SES preschool in Brooklyn. W. Moskovich, (ed.) Yiddish - a Jewish National Language at 100. Proceedings of Czernowitz Yiddish Language 2008 International Centenary Conference, Jerusalem-Kyiv, series 'Jews and Slavs', Vol. 22: 170 - 196."
           ]}
         ]
       }
     ]
   };

   // To add a new language, copy text below and add to end:
   // , {
   //   name: 'Jeff',
   //   body: [
      // 'text',
      // { textGroup: [
      //   'text',
      //   'within',
      //   'a',
      //   'group'
      // ]}
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
