$(function() {
  var group = function(arr) {
      return _.groupBy(arr, function(item) {
          return item.group;
      });
  };

  // Unique Page Data
  var formsData = {
     forms: [
       {
         group: 1,
         name: 'English Long Forms',
         key: 'eng_long',
         body: [
           'The CDI: Words and Gestures (Infant form) is designed for use with 8- to 18- month old children. Further information about these forms including normative data is provided in the MacArthur-Bates Communicative Development Inventories User\'s Guide and Technical Manual. These forms are scorable using the CDI Scoring program. The CDI: Words and Sentences (Toddler form) is designed for use with 16- to 30-month old children. Either form may be used with older, developmentally-delayed children.',
           'Further information about these forms including normative data is provided in the MacArthur-Bates Communicative Development Inventories User\'s Guide and Technical Manual.',
           'The manual as well as the forms can be ordered from Brookes: &#36;.35',
           'Call toll-free 1-800-638-3775 (9:00 a.m. to 5:00 p.m. ET, Monday through Friday)',
           'Fax 1-410-337-8539',
           'Visit them online at [www.brookespublishing.com/cdi](www.brookespublishing.com/cdi)',
           'See references for the English Long Forms [here](referencesEL.html)'
         ],
         image: 'images/forms/EnglishWG.jpg'
       }, {
         group: 3,
         name: 'CDI III',
         key: 'cdi',
         body: [
           "One page short form versions of each of these instruments have also been developed. The infant form (Version Breve del Inventario del Desarrollo de Habilidades Comunicativas - Inventario I) is comprised of a 105-word vocabulary checklist with separate columns for comprehension and production, appropriate for children 8-18 months. The toddler version (Version Breve del Inventario del Desarrollo de Habilidades Comunicativas - Palabras y Enunciados) contains a 100-word productive vocabulary checklist and a question about combining words. This form is appropriate for children 16-30 months.  The short forms can serve as an alternative to the full version when rapid assessment of a child's language level is needed or when parental literacy is low",
           "They may be ordered at a cost of &#36;.35 each from:",
           "Larry Fenson, Department of Psychology, 5500 Campanile Drive, San Diego State University, San Diego, Ca 92182-4910",
           "Phone: (619) 594-6614"
         ],
         image: 'images/forms/Eng_CDI_III.jpg'
       }, {
         group: 1,
         name: 'English Short Forms',
         key: 'eng_short',
         body: [
           "One page short form versions of each of these instruments have also been developed. The infant form (Version Breve del Inventario del Desarrollo de Habilidades Comunicativas - Inventario I) is comprised of a 105-word vocabulary checklist with separate columns for comprehension and production, appropriate for children 8-18 months. The toddler version (Version Breve del Inventario del Desarrollo de Habilidades Comunicativas - Palabras y Enunciados) contains a 100-word productive vocabulary checklist and a question about combining words. This form is appropriate for children 16-30 months.  The short forms can serve as an alternative to the full version when rapid assessment of a child's language level is needed or when parental literacy is low",
          "They may be ordered at a cost of &#36;.35 each from:",
          "Larry Fenson, Department of Psychology, 5500 Campanile Drive, San Diego State University, San Diego, Ca 92182-4910",
          "**Phone: (619) 594-6614**",
          "**Phone: (619) 594-6614**"
        ],
         image: 'images/forms/shortformvocablvl1.jpg'
       }, {
         group: 2,
         name: 'Long Versions in Spanish',
         key: 'span_long',
         body: [
           '### Palabras &amp; Gestos and Palabras &amp; Enunciados',
           'Both long forms of the MacArthur-Bates CDIs are available in Spanish (Mexican). The Palabras y Gestos (Words &amp; Gestures) form is appropriate for use with children 8-18 months. The Palabras y Enunciados (Words &amp; Sentences) form is used with children 16-30 months. As in the English, both forms can be used with older children with developmental delays. Users are strongly encouraged to refer to the manual for more information about administration, scoring and available norms. Both Spanish CDIs are scorable using the CDI Scoring Program. The forms and the technical manual are available from Paul H. Brookes Publishing.',
           '**To order the manual or forms:**',
           'Call toll-free 1-800-638-3775 (9:00 a.m. to 5:00 p.m. ET, Monday through Friday)',
           'Fax 1-410-337-8539',
           'Visit them [online](http://www.brookespublishing.com/cdi)',
           'See references for the Spanish Long Forms [here](referencesSL.html)'
         ],
         image: 'images/forms/SpanishWS.jpg'
       }, {
         group: 2,
         name: 'Spanish Short Forms',
         key: 'span_short',
         body: [
           'One page short form versions of each of these instruments have also been developed. The infant form (Version Breve del Inventario del Desarrollo de Habilidades Comunicativas - Inventario I) is comprised of a 105-word vocabulary checklist with separate columns for comprehension and production, appropriate for children 8-18 months. The toddler version (Version Breve del Inventario del Desarrollo de Habilidades Comunicativas - Palabras y Enunciados) contains a 100-word productive vocabulary checklist and a question about combining words. This form is appropriate for children 16-30 months.  The short forms can serve as an alternative to the full version when rapid assessment of a child\'s language level is needed or when parental literacy is low.',
           'They may be ordered at a cost of &#36;.35 each from:',
           'Larry Fenson, Department of Psychology, 5500 Campanile Drive, San Diego State University, San Diego, Ca 92182-4910',
           'Phone: (619) 594-6614',
           'Email: lfenson@gmail.com',
           '### Now Available!',
           '*Announcing new downloadable fillable pdf versions of the Spanish-language Short Forms! These can be downloaded and emailed to parents to complete on their own computers or tablets. Please advise parents that they will need the latest version of Adobe Reader (Version X or higher) to save the completed forms and email them back to you. To export the data into csv format for scoring, you will need to purchase Adobe Acrobat, which is available for academic discount through most institutions. There is a $10 license fee per form, plus 30 cents per anticipated number of administrations. To order, contact Larry Fenson*',
           'An article describing the norming of the Spanish short forms is available [here](documents/JacksonMaldonadoMarchmanFernald_AppPsyling_2013.pdf).'
         ],
         image: 'images/forms/spanshort2.jpg'
       },
     ]
   };


  var grouping = group(formsData.forms);
  console.log(grouping);

  var formsTemplateScript = $("#formsTemplate").html();
  var formsTemplate = Handlebars.compile(formsTemplateScript);
  $('#cdiForms').append(formsTemplate (grouping));


});
