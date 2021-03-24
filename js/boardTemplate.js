$(function() {
  console.log("before the data");
  // Unique Page Data
  var boardData = {
    board: [
      {
          name: 'Larry Fenson',
          image: "images/board/LarryFenson.png",
          titles: [
            'Chair of the Advisory Board',
            'Department of Psychology',
            'San Diego State University'
          ],
          email: "lfenson@gmail.com"
      },
      {
          name: 'Philip S. Dale',
          image: "images/board/PhilipDale.png",
          titles: [
            'Department of Speech and Hearing Sciences',
            'University of New Mexico'
          ],
          email: "dalep@unm.edu"
      },
      {
          name: 'Elizabeth Bates',
          image: "images/board/bates_picture.png",
          titles: [
            'In Memoriam:',
            '1947-2003'
          ],
          memoriam: 'memoriam.html#bates'
      },
      {
          name: 'J. Steven Reznick',
          image: "images/board/StevenReznick.png",
          titles: [
            'In Memoriam:',
            '1951-2016'
          ],
          memoriam: 'memoriam.html#reznick'
      },
      {
          name: 'Donna Thal',
          image: "images/board/DonnaThal.png",
          titles: [
            "Distinguished Professor Emerita",
			"School of Speech, Language, and Hearing Sciences",
            "San Diego State University"
          ],
          email: "donnathal01@gmail.com"
      },
      {
        name: 'Donna Jackson-Maldonado',
        image: "images/board/DonnaJacksonMaldonado.png",
        titles: [
          "Facultad de Lenguas y Letras",
          "University of Queretaro Mexico"
        ],
        email: "djackson@uaq.mx"
      },
      {
        name: 'Virginia A. Marchman',
        image: "images/board/VirginiaMarchman.png",
        titles: [
          'Department of Psychology',
          'Stanford University'
        ],
        email: "marchman@stanford.edu"
      },
      {
        name: 'Judy S. Reilly',
        image: "images/board/JudyReilly.png",
        titles: [
          'Department of Psychology',
          'San Diego State University'
        ],
        email: "reilly1@mail.sdsu.edu"
      },
      {
        name: 'Dorthe Bleses',
        image: "images/board/DortheBleses.png",
        titles: [
          'School of Communication and Culture Centre for Child Language',
          'Aarhus University, Denmark'
        ],
        email: "bleses@au.dk"
      },
      {
        name: 'Michael C. Frank',
        image: "images/board/MikeFrank.png",
        titles: [
          'Department of Psychology',
          'Stanford University'
        ],
        email: "mcfrank@stanford.edu"
      },
      {
        name: 'Margaret Friend',
        image: "images/board/MaggieFriend.png",
        titles: [
          'Department of Psychology',
          'San Diego State University'
        ],
        email: "mfriend@mail.sdsu.edu"
      },
	  {
        name: 'Ann Weber',
        image: "images/board/AnnWeber.jpg",
        titles: [
          'School of Community Health Sciences',
          'University of Nevada, Reno'
        ],
        email: "annweber@unr.edu"
      },
	  {
        name: 'Adriana Weisleder',
        image: "images/board/Weisleder.jpg",
        titles: [
          'Department of Communication Sciences and Disorders',
          'Northwestern University'
        ],
        email: "adriana.weisleder@northwestern.edu"
      },
	  {
        name: 'Caroline Rowland',
        image: "images/board/Rowland.jpg",
        titles: [
          'Language Development Department',
          'Max Planck Institute for Psycholinguistics'
        ],
        email: "Caroline.Rowland@mpi.nl"
      },
	  {
        name: 'Heather Brookes',
        image: "images/board/HeatherBrookes.png",
        titles: [
          'Consultant to the Board: African Languages',
		  'School of African and Gender Studies, Anthropology and Linguistics',
          'University of Cape Town'
        ],
        email: "heather.brookes@uct.ac.za"
      }
    ]
  };

  var template = $('script[type="text/x-handlebars-template"]');

  var boardTemplateScript = $(template).html();
  var boardTemplate = Handlebars.compile(boardTemplateScript);
  $('#board').append(boardTemplate (boardData));

  var height = 0;

  $(".boardBubble").each(function () {
      if (height < $(this).height()) {
        height = $(this).height();
      }
  });

  $('.boardBubble').css('height', height);


});

window.onload = function() {


}
