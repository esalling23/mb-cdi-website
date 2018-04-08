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
            'Department of Communicative Disorders',
            'San Diego State University'
          ],
          email: "dthal@mail.sdsu.edu"
      },
      {
        name: 'Donna Jackson-Maldonado',
        image: "images/board/DonnaJacksonMaldonado.png",
        titles: [
          'Department of Communicative Disorders',
          'San Diego State University'
        ],
        email: "dthal@mail.sdsu.edu"
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
