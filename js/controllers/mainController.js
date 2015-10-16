/**
 * Created by James on 15/10/2015.
 */

/**
 * Created by James on 15/10/2015.
 */

var applicationModule = angular.module("applicationModule", ['ngRoute']);

applicationModule.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'connectionController',
            templateUrl: 'views/connection.html'
        })
        .when('/connection',
        {
            controller: 'connectionController',
            templateUrl: 'views/connection.html'
        })
        .when('/addBook',
        {
            controller: 'addBookController',
            templateUrl: 'views/add-book.html'
        })
        .when("/home" ,
        {
            templateUrl:'views/home.html'
        })
        .when("/books/list" ,
        {
            templateUrl:'views/consult-books.html',
            controller:'consultBookController'
        })
        .when('/modifyBook',
        {
            controller: 'modifyBookController',
            templateUrl: 'views/modify-book.html'
        })
        .when('/books/:id/show/' ,
        {
            controller:'detailBookController',
            templateUrl:'views/detail-book.html'
        })
        .otherwise({redirectTo: '/home'});
});

applicationModule.factory('userFactory' , function(){
    var factory = {};
    var userInfos = [];

    factory.addUserInfos = function (user) {
        userInfos.push(user);
    };

    factory.getUserInfos = function() {
        return userInfos;
    };
    return factory;

});


applicationModule.directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter);
                });

                event.preventDefault();
            }
        });
    };
});



applicationModule.factory("booksFactory" , function(){

    var booksInfos = [];
    var booksCount = 0;
    var factory = {
        books : [        {
            "number_of_pages": 154,
            "covers": [
                6542611
            ],
            "latest_revision": 6,
            "ocaid": "mysteriousaffair00chri",
            "contributions": [
                "American Popular Literature Collection."
            ],
            "source_records": [
                "ia:mysteriousaffair00chri"
            ],
            "title": "The mysterious affair at Styles",
            "publish_country": "nyu",
            "by_statement": "Agatha Christie.",
            "oclc_numbers": [
                "12637750"
            ],
            "type": {
                "key": "/type/edition"
            },
            "revision": 6,
            "publishers": [
                "Bantam Books"
            ],
            "ia_box_id": [
                "IA105807"
            ],
            "last_modified": {
                "type": "/type/datetime",
                "value": "2015-10-14T00:46:44.300743"
            },
            "key": "/books/OL24214842M",
            "authors": [
                {
                    "key": "/authors/OL27695A"
                }
            ],
            "publish_places": [
                "New York"
            ],
            "pagination": "[6], 154 p. ;",
            "classifications": {},
            "created": {
                "type": "/type/datetime",
                "value": "2010-05-05T13:12:33.007114"
            },
            "identifiers": {},
            "publish_date": "1965",
            "works": [
                {
                    "key": "/works/OL472907W"
                }
            ]
        },
            {
                "number_of_pages": 218,
                "subtitle": "a Jane Jeffry mystery",
                "subject_place": [
                    "Chicago (Ill.)",
                    "Illinois",
                    "Chicago"
                ],
                "covers": [
                    237722
                ],
                "ia_loaded_id": [
                    "groomwithviewj00chur"
                ],
                "lc_classifications": [
                    "PS3553.H85 G7 1999"
                ],
                "latest_revision": 8,
                "ocaid": "groomwithviewj00chur",
                "edition_name": "1st ed.",
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part28.dat:3053112:850",
                    "ia:groomwithviewj00chur",
                    "ia:groomwithviewjan00chur"
                ],
                "title": "A groom with a view",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Jeffry, Jane (Fictitious character) -- Fiction",
                    "Women detectives -- Illinois -- Chicago -- Fiction",
                    "Single mothers -- Fiction",
                    "Suburban life -- Fiction",
                    "Chicago (Ill.) -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Jill Churchill.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 8,
                "publishers": [
                    "Avon Twilight"
                ],
                "ia_box_id": [
                    "IA140504"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-10-08T04:40:45.444027"
                },
                "key": "/books/OL33674M",
                "authors": [
                    {
                        "key": "/authors/OL21264A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "218 p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "identifiers": {
                    "goodreads": [
                        "1239812"
                    ],
                    "librarything": [
                        "116036"
                    ]
                },
                "lccn": [
                    "99016666"
                ],
                "isbn_10": [
                    "038097570X"
                ],
                "publish_date": "1999",
                "works": [
                    {
                        "key": "/works/OL48553W"
                    }
                ]
            },
            {
                "subtitle": "an FBI thriller",
                "covers": [
                    6476445
                ],
                "ia_loaded_id": [
                    "blindsidefbithr000coul"
                ],
                "lc_classifications": [
                    "PS3553 .O843 B58 2004"
                ],
                "latest_revision": 12,
                "ocaid": "blindsidefbithri00coul",
                "description": "Son of an ex-FBI agent, Miles Kettering, six-year-old Sam Kettering is kidnapped and taken to eastern Tennessee. The boy manages to escape. But the kidnappers do not give up. Miles Kettering joins Lacey Sherlock and Dillon Savich to investigate why the kidnappers want this little boy so badly - and they also soon find themselves ineluctiaably drawn into the investigation of the murders of three math teachers in the Washington, D.C. area.",
                "source_records": [
                    "ia:blindsidefbithri00coul",
                    "ia:blindsidefbithr000coul",
                    "ia:blindsidefbithr00coul"
                ],
                "title": "Blindside",
                "edition_name": "Jove ed.",
                "publish_country": "nyu",
                "by_statement": "Catherine Coulter.",
                "oclc_numbers": [
                    "55803104"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 12,
                "publishers": [
                    "Jove Books"
                ],
                "ia_box_id": [
                    "IA150801"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-10-07T04:36:25.239035"
                },
                "key": "/books/OL24201869M",
                "publish_places": [
                    "New York"
                ],
                "pagination": "339 p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2010-05-05T05:24:02.709029"
                },
                "dewey_decimal_class": [
                    "813"
                ],
                "number_of_pages": 339,
                "isbn_13": [
                    "9780515137200"
                ],
                "isbn_10": [
                    "0515137200"
                ],
                "publish_date": "2004",
                "works": [
                    {
                        "key": "/works/OL14721W"
                    }
                ]
            },
            {
                "identifiers": {
                    "librarything": [
                        "228616"
                    ],
                    "goodreads": [
                        "723118"
                    ]
                },
                "subject_place": [
                    "Virginia"
                ],
                "covers": [
                    374017
                ],
                "lc_classifications": [
                    "PS3552.R698 C38 2005"
                ],
                "latest_revision": 11,
                "url": [
                    "http://www.loc.gov/catdir/bios/random051/2004046207.html",
                    "http://www.loc.gov/catdir/description/random051/2004046207.html"
                ],
                "ocaid": "catseyewitness00browrich",
                "uri_descriptions": [
                    "Contributor biographical information",
                    "Publisher description"
                ],
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part15.dat:24936943:1238",
                    "ia:catseyewitness00browrich",
                    "ia:catseyewitness00brow",
                    "ia:catseyewitnes00brow"
                ],
                "title": "Cat's eyewitness",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Haristeen, Harry (Fictitious character) -- Fiction",
                    "Murphy, Mrs. (Fictitious character) -- Fiction",
                    "Women postal service employees -- Fiction",
                    "Women detectives -- Virginia -- Fiction",
                    "Women cat owners -- Fiction",
                    "Monasteries -- Fiction",
                    "Cats -- Fiction",
                    "Virginia -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Rita Mae Brown & Sneaky Pie Brown ; illustrations by Michael Gellatly.",
                "oclc_numbers": [
                    "56686608"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "uris": [
                    "http://www.loc.gov/catdir/bios/random051/2004046207.html",
                    "http://www.loc.gov/catdir/description/random051/2004046207.html"
                ],
                "revision": 11,
                "publishers": [
                    "Bantam Books"
                ],
                "ia_box_id": [
                    "IA101504"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-10-07T04:30:17.203415"
                },
                "key": "/books/OL3304113M",
                "authors": [
                    {
                        "key": "/authors/OL1122551A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "xi, 287 p. :",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "number_of_pages": 287,
                "lccn": [
                    "2004046207"
                ],
                "isbn_10": [
                    "0553801643"
                ],
                "publish_date": "2005",
                "works": [
                    {
                        "key": "/works/OL29514W"
                    }
                ]
            },
            {
                "covers": [
                    6510949
                ],
                "lc_classifications": [
                    "PS3555.V2126 H37 2002b"
                ],
                "latest_revision": 6,
                "ocaid": "hardeight00evan",
                "ia_box_id": [
                    "IA119322"
                ],
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "ia:hardeight00evan",
                    "ia:hardeigh00evan"
                ],
                "title": "Hard eight",
                "edition_name": "St. Martin's Paperbacks ed.",
                "subjects": [
                    "Plum, Stephanie (Fictitious character) -- Fiction.",
                    "Women private investigators -- New Jersey -- Fiction.",
                    "Missing children -- Fiction.",
                    "Bounty hunters -- Fiction.",
                    "New Jersey -- Fiction."
                ],
                "publish_country": "nyu",
                "by_statement": "Janet Evanovich.",
                "oclc_numbers": [
                    "232584884"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 6,
                "publishers": [
                    "St. Martin's Paperbacks"
                ],
                "description":"When Stephanie Plum is hired to find a missing child, she begins to wonder if she is working on the right side of the law when events turn suspicious.",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-10-06T04:32:16.725493"
                },
                "key": "/books/OL24238201M",
                "authors": [
                    {
                        "key": "/authors/OL21225A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "341 p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2010-06-04T22:28:50.571202"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "number_of_pages": 341,
                "isbn_13": [
                    "9780312983864"
                ],
                "lccn": [
                    "2002021290"
                ],
                "isbn_10": [
                    "0312983867"
                ],
                "publish_date": "2003",
                "works": [
                    {
                        "key": "/works/OL48053W"
                    }
                ]
            },
            {
                "identifiers": {
                    "librarything": [
                        "3390130"
                    ]
                },
                "subtitle": "the four novels and the fifty-six short stories complete. Volume I",
                "subject_place": [
                    "England"
                ],
                "covers": [
                    6628135
                ],
                "lc_classifications": [
                    "PR4620.A5 B3 1967"
                ],
                "latest_revision": 10,
                "ocaid": "annotatedsherloc01doyl",
                "contributions": [
                    "Baring-Gould, William Stuart, 1913- ed."
                ],
                "ia_box_id": [
                    "IA123512"
                ],
                "edition_name": "Second edition",
                "source_records": [
                    "marc:marc_records_scriblio_net/part06.dat:14507450:1031",
                    "ia:annotatedsherloc01doyl"
                ],
                "title": "The annotated Sherlock Holmes.",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Holmes, Sherlock (Fictitious character) -- Fiction",
                    "Detective and mystery stories, English",
                    "Private investigators -- England -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Edited, with an introd., notes, and bibliography by William S. Baring-Gould. Illustrated ... by Charles Doyle [and others.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 10,
                "publishers": [
                    "C. N. Potter",
                    "Distributed by Crown Publishers"
                ],
                "description": "NOTE: This is Volume I, only, of a two-volume set. Volume II apparently hasn't been scanned.",
                "physical_format": "Hardcover",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-10-01T21:05:48.485098"
                },
                "key": "/books/OL5544228M",
                "authors": [
                    {
                        "key": "/authors/OL2623297A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "688p.",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "lccn": [
                    "67022406"
                ],
                "notes": "Bibliography: v. 2, p. 807-824.",
                "number_of_pages": 688,
                "dewey_decimal_class": [
                    "823/.8"
                ],
                "publish_date": "1967",
                "copyright_date": "1967",
                "works": [
                    {
                        "key": "/works/OL1518438W"
                    }
                ]
            },
            {
                "identifiers": {
                    "librarything": [
                        "2895228"
                    ],
                    "goodreads": [
                        "552887"
                    ]
                },
                "series": [
                    "Alex Cross Series"
                ],
                "covers": [
                    6999800
                ],
                "ia_loaded_id": [
                    "doublecross000patt"
                ],
                "lc_classifications": [
                    "PS3566.A822 D68 2007"
                ],
                "latest_revision": 16,
                "ocaid": "doublecross000patt",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "genres": [
                    "Fiction"
                ],
                "source_records": [
                    "marc:marc_miami_univ_ohio/allbibs0212.out:12240827:1308",
                    "marc:marc_loc_updates/v35.i20.records.utf8:30764709:945",
                    "marc:marc_loc_updates/v36.i15.records.utf8:5639839:1383",
                    "marc:CollingswoodLibraryMarcDump10-27-2008/Collingswood.out:75727452:2324",
                    "ia:doublecross000patt",
                    "ia:doublecrossnovel00pat"
                ],
                "title": "Double cross",
                "edition_name": "First Edition",
                "subjects": [
                    "Cross, Alex (Fictitious character) -- Fiction",
                    "Police -- Washington (D.C.) -- Fiction",
                    "African American police -- Fiction",
                    "Police psychologists -- Fiction",
                    "Serial murderers -- Fiction",
                    "Washington (D.C.) -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "by James Patterson",
                "type": {
                    "key": "/type/edition"
                },
                "physical_dimensions": "9.5 x 6.25 x 1.375 inches",
                "revision": 16,
                "publishers": [
                    "Little, Brown and Company"
                ],
                "ia_box_id": [
                    "IA150801"
                ],
                "physical_format": "Hardcover",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-09-30T04:37:53.306641"
                },
                "key": "/books/OL17245958M",
                "authors": [
                    {
                        "key": "/authors/OL6812710A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "389 p. ;",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-09-28T03:06:07.546913"
                },
                "lccn": [
                    "2007019762"
                ],
                "number_of_pages": 389,
                "isbn_13": [
                    "9780316015059"
                ],
                "dewey_decimal_class": [
                    "813'.54-dc22"
                ],
                "isbn_10": [
                    "0316015059"
                ],
                "publish_date": "November 2007",
                "copyright_date": "2007",
                "works": [
                    {
                        "key": "/works/OL167150W"
                    }
                ]
            },
            {
                "number_of_pages": 489,
                "subtitle": "the life of Amelia Earhart",
                "subject_place": [
                    "United States"
                ],
                "covers": [
                    7365340,
                    164934
                ],
                "ia_loaded_id": [
                    "easttodawnli00butl"
                ],
                "lc_classifications": [
                    "TL540.E3 B88 1999"
                ],
                "latest_revision": 10,
                "ocaid": "easttodawnli00butl",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part27.dat:95345289:824",
                    "marc:marc_loc_updates/v36.i18.records.utf8:7065040:925",
                    "marc:marc_loc_updates/v37.i16.records.utf8:1852300:932",
                    "ia:easttodawnli00butl"
                ],
                "title": "East to the dawn",
                "edition_name": "1st Da Capo Press ed.",
                "subjects": [
                    "Earhart, Amelia, 1897-1937",
                    "Women air pilots -- United States -- Biography"
                ],
                "publish_country": "nyu",
                "by_statement": "Susan Butler.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 10,
                "publishers": [
                    "Da Capo Press"
                ],
                "ia_box_id": [
                    "IA151101"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-09-08T20:18:55.316184"
                },
                "key": "/books/OL385098M",
                "authors": [
                    {
                        "key": "/authors/OL227133A"
                    },
                    {
                        "key": "/authors/OL7021772A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "xiv, 489 p. :",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "629.13/092",
                    "B"
                ],
                "notes": {
                    "type": "/type/text",
                    "value": "Includes bibliographical references and index.\nOriginally published: Reading, Mass. : Addison-Wesley, c1997."
                },
                "identifiers": {
                    "goodreads": [
                        "1046723"
                    ],
                    "librarything": [
                        "198317"
                    ]
                },
                "lccn": [
                    "98047717"
                ],
                "isbn_10": [
                    "0306808870"
                ],
                "publish_date": "1999",
                "works": [
                    {
                        "key": "/works/OL1897387W"
                    }
                ]
            },
            {
                "identifiers": {
                    "goodreads": [
                        "337151"
                    ],
                    "librarything": [
                        "5262289"
                    ]
                },
                "subtitle": "a novel",
                "contributors": [
                    {
                        "role": "Designer",
                        "name": "Eve Metz"
                    },
                    {
                        "role": "Jacket Design",
                        "name": "Paul Bacon"
                    },
                    {
                        "role": "Author Photographer",
                        "name": "Bernard Vidal"
                    },
                    {
                        "role": "Editor",
                        "name": "Michael V. Korda"
                    },
                    {
                        "role": "Agent",
                        "name": "Eugene H. Winick"
                    }
                ],
                "covers": [
                    7359580,
                    3935413
                ],
                "ia_loaded_id": [
                    "illbeseeingyounocla00clar"
                ],
                "lc_classifications": [
                    "PS3553.L287 I4 1993"
                ],
                "latest_revision": 19,
                "ocaid": "illbeseeingyouno00clar",
                "table_of_contents": [
                    {
                        "title": "Part one.",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Meghan Collins stood somewhat aside from the cluster of other journalists in Emergency at Manhattan's Roosevelt Hospital",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Meghan took a cab to her apartment in Battery Park City, at the very tip of Manhattan",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Tom Weicker, 52-year-old news director of PCD Channel 3, had been borrowing Meghan Collins from the radio affiliate with increasing frequency",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Somehow Meghan was able to accept Weicker's offer calmly",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Catherine Collins' hair always looked as though she'd just run a hand through it",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Mac, as Dr. Jeremy MacIntyre was known, lived with his 7-year-old son, Kyle, around the bend from the Collins family",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "When Meghan arrived home she found her mother sitting in the darkened living room, her hands folded in her lap",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "The Collins and Carter Executive Search office was located in Danbury, Connecticut",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "When Meghan arrived at the Collins and Carter Executive Search offices at 2:00 on Saturday, she found three men working with calculators at the long table that usually held magazines and plants",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "At 3:00 on Sunday afternoon, Meg met Steve Boyle, the PCD cameraman, in the parking lot of the Manning Clinic",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On the way back to Newtown, Meghan used the car phone to call her mother",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Bernie Heffernan spent Sunday evening with his mother, watching television in the shabby sitting room of their bungalow-type home in Jackson Heights",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "When Meghan went downstairs Monday morning at 6:30 she found her mother already in the kitchen",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Monday morning, Phillip Carter reached the office at 8:00",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Helene Petrovic loved her job as embryologist in charge of the laboratoy of the Manning Clinic",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "By Monday afternoon, the Manning Clinic had settled down from the excitement of the weekend reunion",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "At 7:30 Tuesday morning, Mac watched his lively son leap onto the school bus",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Tuesday morning, from the front windows of her home in Scottsdale, Arizona, Frances Grolier could see the first glimmer of light begin to define the McDowell Mountains",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Mac found his work in the LifeCode Research Laboratory, where he was a specialist in genetic therapy, to be rewarding, satisfying and all-absorbing",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "In Helene Petrovic's charming colonial home in Lawrenceville, New Jersey, her niece, Stephanie, was cross and worried",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "By 8:00 on Tuesday evening, traffic in the garage had slowed down to a trickle",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "The body of Helene Petrovic lay all Tuesday in the bedroom where she had died",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Phillip Carter heard the news report detailing Dr. Helene Petrovic's death on his way to the office",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Despite the best efforts of the entire staff of the Manning Clinic there was no hiding the tension that permeated the atmosphere",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Victor Orsini and Phillip Carter never socialized for lunch",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Bernie stopped at a diner on Route 7 just outside Danbury",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Catherine Collins touched the button at her hand, and the hospital bed tilted noiselessly up",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Part two.",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Wednesday afternoon, investigators from Connecticut drove to Lawrenceville, New Jersey, to question Stephanie Petrovic about her murdered aunt",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "The shock that Meghan had felt at once again seeing the dead woman who resembled her had dulled by the time a vial of blood was drawn from her arm",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Just before 5:00, Victor Orsini received the call he was afraid might come",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Dr. Henry Williams, the 65-year-old head of the Franklin Assisted Reproduction Center in the renovated old town section of Philadelphia, was a man who looked vaguely like everyone's favorite uncle",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Bernie's first fare on Thursday morning was from Kennedy Airport",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Catherine Collins had an early breakfast with Meghan before Meg left to meet with the investigators at the Danbury courthouse and then to drive to Philadelphia",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "At 4:00, Mac phoned Catherine at home to see how she was feeling",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "It was 9:30 when Meghan arrived home on Thursday night, relieved to find that Mac was waiting with her mother",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Early Friday morning, Bernie watched again the replay of the interview he had taped at the Manning Clinic",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Meghan slipped into St. Dominic's church at 12:30, at the midpoint of the sparsely attended mass for Helene Petrovic",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Dr. George Manning left the clinic at 5:00 on Friday afternoon",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "\"It always rains on Saturday,\" Kyle grumbled as he flipped from channel to channel on the television set",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "There was an auction coming up on property near the Rhode Island border",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Late Saturday in Danbury Medical Center, a sedated Dina Anderson was dozing in bed, Jonathan asleep beside her",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Sunday morning, Catherine Collins attended the 10:00 mass at St. Paul's, but she found it difficult to keep her mind on the sermon",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Stephanie Petrovic had a fitful night, finally falling into a heavy sleep",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Meghan decided to skip going to the office and reached her apartment building at 4:00",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Part three.",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Monday evening when Mac got home from work, Kyle was his usual cheerful self",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Monday had been a bad day for Bernie",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Frances stood, looking out the window at the back of the house",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Tuesday morning, Victor Orsini moved into Edwin Collins' private office",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Wednesday morning, as soon as Kyle was on the school bus, Mac left for Valley Memorial Hospital in Trenton, New Jersey",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Catherine went to the inn on Wednesday morning and worked in her office until 11:30",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Phillip was the first one to call on Thursday morning",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Special investigators Bob Marron and Arlene Weiss requested and received permission from the Manhattan district attorney to question Frances Grolier late Thursday morning",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Donald Anderson had taken two weeks off from work to help with the new baby",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "\"Kyle, shouldn't you be starting your homework?\" Marie Dileo, the 60-year-old housekeeper gently prodded",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "After her mother went back to the inn, Meghan phoned Phillip at home",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "When Bernie's mother regained consciousness, she tried to shout for help, but she knew none of the neighbors could hear her",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "The squad car pulled into the driveway of the shabby one-story frame house in Jackson Heights, and two policemen jumped out",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Victor Orsini had agreed to be at John Dwyer's office in the Danbury courthouse at 3:00",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "It was nearly 4:00 when Mac completed his last errand and started home",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "\"Phillip, before Dad gets here, I think I know the reason for Helene Petrovic being at Manning\"",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "When Meghan regained consciousness she was lying on the ground, her head in someone's lap",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "The helicopter landed at the Danbury Medical Center",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    }
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part23.dat:107548980:722",
                    "marc:CollingswoodLibraryMarcDump10-27-2008/Collingswood.out:11814707:2290",
                    "marc:CollingswoodLibraryMarcDump10-27-2008/Collingswood.out:24756574:1568",
                    "marc:marc_loc_updates/v38.i12.records.utf8:4791884:833",
                    "ia:illbeseeingyouno00clar",
                    "ia:illbeseeingyounocla00clar"
                ],
                "title": "I'll be seeing you",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Women television personalities -- Fiction",
                    "Fertilization in vitro -- Fiction",
                    "Missing persons -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Mary Higgins Clark.",
                "type": {
                    "key": "/type/edition"
                },
                "physical_dimensions": "22 x  x  centimeters",
                "revision": 19,
                "publishers": [
                    "Simon & Schuster"
                ],
                "ia_box_id": [
                    "IA124312"
                ],
                "physical_format": "Hardcover",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-08-03T14:39:53.077685"
                },
                "key": "/books/OL1408058M",
                "authors": [
                    {
                        "key": "/authors/OL22586A"
                    }
                ],
                "publish_places": [
                    "New York, USA"
                ],
                "pagination": "317 p.",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "lccn": [
                    "93016584"
                ],
                "notes": "Printed in the U.S.A.",
                "number_of_pages": 317,
                "isbn_13": [
                    "9780671673661"
                ],
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "isbn_10": [
                    "0671673661"
                ],
                "publish_date": "1993",
                "copyright_date": "1993",
                "works": [
                    {
                        "key": "/works/OL13072W"
                    }
                ]
            },
            {
                "identifiers": {
                    "librarything": [
                        "38467"
                    ]
                },
                "series": [
                    "A Perry Mason mystery."
                ],
                "covers": [
                    7358311,
                    7002485
                ],
                "ia_loaded_id": [
                    "caseofdemuredefe00gard"
                ],
                "lc_classifications": [
                    "PZ3.G1714 Cahah",
                    "PS3513.A6322 Cahah"
                ],
                "latest_revision": 7,
                "ocaid": "caseofdemuredefe00gard",
                "source_records": [
                    "marc:marc_records_scriblio_net/part04.dat:119123698:1200",
                    "ia:caseofdemuredefe00gard"
                ],
                "title": "The case of the demure defendant",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Mason, Perry (Fictitious character) -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Erle Stanley Gardner.",
                "oclc_numbers": [
                    "5671983"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 7,
                "publishers": [
                    "William Morrow and Co."
                ],
                "ia_box_id": [
                    "IA108312"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-07-28T02:55:06.330309"
                },
                "key": "/books/OL6196960M",
                "authors": [
                    {
                        "key": "/authors/OL23222A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "viii, [2], 242, [2] p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "lccn": [
                    "56005052"
                ],
                "notes": {
                    "type": "/type/text",
                    "value": "Mundell, E.H.  Erle Stanley Gardner, p. 52\nHubin  Crime Fiction, 1749-1980, p. 158\n\"An abridged version of this novel has been serialized in the Saturday Evening Post under the title, the Case of the missing poison\"--Verso t.p.\nAuthor's name at head of title.\nFirst edition, cf. Mundell and Hubin cited below.\n\"A Morrow mystery.\"\nPublisher's ads [2] p. at end."
                },
                "number_of_pages": 242,
                "publish_date": "1956",
                "works": [
                    {
                        "key": "/works/OL16714W"
                    }
                ]
            },
            {
                "identifiers": {},
                "table_of_contents": [
                    {
                        "title": "5-B Poppy Lane  -- Debbie Macomber",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Liberty Hall  -- Lois Faye Dyer",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Apple orchard -- Katherine Stone.",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    }
                ],
                "covers": [
                    6824708
                ],
                "lc_classifications": [
                    "PS3563.A2364 H43 2006"
                ],
                "latest_revision": 6,
                "ocaid": "heartsdivided00maco",
                "description": "A trio of heartwarming romances features Debbie Macomber's \"5-B Poppy Lane,\" in which Ruth Shelton, while asking for advice on her own romance with a soldier, stumbles upon a secret from her grandmother's past. Presents three stories that center around grandmothers who were all married to soldiers and who pass on advice about love, separation, and wartime experience to their granddaughters.",
                "source_records": [
                    "ia:heartsdivided00maco"
                ],
                "title": "Hearts divided",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "American Love stories",
                    "Protected DAISY"
                ],
                "publish_country": "onc",
                "by_statement": "Debbie Macomber, Katherine Stone, Lois Faye Dyer",
                "oclc_numbers": [
                    "63179656"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 6,
                "publishers": [
                    "Mira"
                ],
                "ia_box_id": [
                    "IA138615"
                ],
                "full_title": "Hearts divided",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-07-14T05:25:28.677539"
                },
                "key": "/books/OL24770852M",
                "publish_places": [
                    "Don Mills, Ont"
                ],
                "pagination": "298 p. ;",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2011-07-14T22:59:06.012197"
                },
                "lccn": [
                    "2006567548"
                ],
                "number_of_pages": 298,
                "isbn_13": [
                    "9780778322122",
                    "9780739463963"
                ],
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "isbn_10": [
                    "0778322122",
                    "0739463969"
                ],
                "publish_date": "2006",
                "works": [
                    {
                        "key": "/works/OL15862181W"
                    }
                ]
            },
            {
                "number_of_pages": 416,
                "series": [
                    "The left behind series"
                ],
                "covers": [
                    638792,
                    638787
                ],
                "lc_classifications": [
                    "PS3562.A315 A94 1999"
                ],
                "latest_revision": 28,
                "ocaid": "assassins00laha",
                "contributions": [
                    "Jenkins, Jerry B."
                ],
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part28.dat:6042536:860",
                    "ia:assassins00laha",
                    "ia:assassinsassignm00laha",
                    "ia:assassinslaha00laha",
                    "ia:isbn_9780842329279_0"
                ],
                "title": "Assassins",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Steele, Rayford (Fictitious character) -- Fiction",
                    "Rapture (Christian eschatology) -- Fiction"
                ],
                "publish_country": "ilu",
                "by_statement": "Tim LaHaye, Jerry B. Jenkins.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 28,
                "publishers": [
                    "Tyndale House Publishers"
                ],
                "ia_box_id": [
                    "IA119212"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-06-24T04:38:31.085155"
                },
                "key": "/books/OL36985M",
                "authors": [
                    {
                        "key": "/authors/OL22047A"
                    }
                ],
                "publish_places": [
                    "Wheaton, Ill"
                ],
                "pagination": "xvi, 416 p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "identifiers": {
                    "librarything": [
                        "26916"
                    ],
                    "goodreads": [
                        "577409",
                        "85957"
                    ]
                },
                "lccn": [
                    "99023466"
                ],
                "isbn_10": [
                    "084232920X",
                    "0842329277"
                ],
                "publish_date": "1999",
                "works": [
                    {
                        "key": "/works/OL137692W"
                    }
                ]
            },
            {
                "number_of_pages": 229,
                "covers": [
                    281731
                ],
                "lc_classifications": [
                    "CPB Box no. 2255 vol. 11"
                ],
                "latest_revision": 9,
                "ocaid": "bleachers00gris",
                "contributions": [
                    "Copyright Paperback Collection (Library of Congress)"
                ],
                "ia_box_id": [
                    "IA102401"
                ],
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part15.dat:109523815:1115",
                    "ia:bleachers00gris"
                ],
                "title": "Bleachers",
                "edition_name": "Dell mass market ed.",
                "subjects": [
                    "Funeral rites and ceremonies -- Fiction",
                    "Teacher-student relationships -- Fiction",
                    "Football coaches -- Fiction",
                    "Football players -- Fiction",
                    "School sports -- Fiction",
                    "Death -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "John Grisham.",
                "oclc_numbers": [
                    "55749727"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "physical_dimensions": "18 x  x  centimeters",
                "revision": 9,
                "publishers": [
                    "Bantam Dell"
                ],
                "description": "Presents a novel about high school football in a small Texas town, a place in which football has become a religion.",
                "physical_format": "Paperback",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-05-19T18:56:21.432990"
                },
                "key": "/books/OL3391348M",
                "authors": [
                    {
                        "key": "/authors/OL6829207A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "229 p.",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "lccn": [
                    "2004719502"
                ],
                "notes": "\"A Dell book\"",
                "identifiers": {
                    "librarything": [
                        "3338"
                    ],
                    "goodreads": [
                        "700860"
                    ]
                },
                "isbn_13": [
                    "9780440242000"
                ],
                "isbn_10": [
                    "0440242002"
                ],
                "publish_date": "2004",
                "works": [
                    {
                        "key": "/works/OL77010W"
                    }
                ]
            },
            {
                "number_of_pages": 320,
                "covers": [
                    2378963
                ],
                "latest_revision": 11,
                "ocaid": "sundaysattiffan000patt",
                "source_records": [
                    "amazon:031601477X",
                    "ia:sundaysattiffan000patt",
                    "ia:sundaysattiffan00patt"
                ],
                "title": "Sundays at Tiffany's",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Romance - Contemporary",
                    "Fiction / General",
                    "General",
                    "Fiction",
                    "Fiction - Romance",
                    "Imaginary companions",
                    "Mystery fiction"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 11,
                "publishers": [
                    "Little, Brown and Company"
                ],
                "ia_box_id": [
                    "IA152801"
                ],
                "physical_format": "Hardcover",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-05-12T04:34:18.684174"
                },
                "key": "/books/OL10426126M",
                "authors": [
                    {
                        "key": "/authors/OL6812710A"
                    },
                    {
                        "key": "/authors/OL34596A"
                    }
                ],
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-30T09:38:13.731961"
                },
                "identifiers": {
                    "librarything": [
                        "4179280"
                    ],
                    "goodreads": [
                        "2029177"
                    ]
                },
                "isbn_13": [
                    "9780316014779"
                ],
                "isbn_10": [
                    "031601477X"
                ],
                "publish_date": "April 28, 2008",
                "works": [
                    {
                        "key": "/works/OL14920191W"
                    }
                ]
            },
            {
                "number_of_pages": 150,
                "links": [
                    {
                        "url": "http://my.athenet.net/%7Eblahnik/rnpeck/index.htm"
                    }
                ],
                "covers": [
                    7342681,
                    6485078
                ],
                "lc_classifications": [
                    "PZ7.P339 Day 1994"
                ],
                "latest_revision": 7,
                "ocaid": "daynopigswoulddi00peck",
                "ia_box_id": [
                    "IA100801"
                ],
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "ia:daynopigswoulddi00peck"
                ],
                "title": "A day no pigs would die",
                "edition_name": "1st Sprinter ed.",
                "subjects": [
                    "Farm life -- Vermont -- Fiction.",
                    "Fathers and sons -- Fiction.",
                    "Pigs -- Fiction.",
                    "Farm life -- Vermont -- Fiction.",
                    "Fathers and sons -- Fiction.",
                    "Swine -- Fiction.",
                    "Vermont -- Fiction."
                ],
                "publish_country": "nyu",
                "by_statement": "Robert Newton Peck",
                "oclc_numbers": [
                    "31208741"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 7,
                "publishers": [
                    "Random House Sprinter Books"
                ],
                "description": "To a thirteen-year-old Vermont farm boy whose father slaughters pigs for a living, maturity comes early as he learns \"doing what's got to be done,\" especially regarding his pet pig who cannot produce a litter.",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-04-21T16:47:13.973353"
                },
                "key": "/books/OL24204775M",
                "authors": [
                    {
                        "key": "/authors/OL233100A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "150 p. ; 18 cm.",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2010-05-05T07:08:39.851063"
                },
                "dewey_decimal_class": [
                    "Fic"
                ],
                "notes": {
                    "type": "/type/text",
                    "value": "Originally published: New York : Knopf, 1972.\r\n\r\n5.3."
                },
                "identifiers": {},
                "isbn_13": [
                    "9780679853060"
                ],
                "url": [
                    "http://my.athenet.net/%7Eblahnik/rnpeck/index.htm"
                ],
                "isbn_10": [
                    "0679853065"
                ],
                "publish_date": "1994",
                "works": [
                    {
                        "key": "/works/OL15137348W"
                    }
                ]
            },
            {
                "number_of_pages": 264,
                "covers": [
                    257861
                ],
                "lc_classifications": [
                    "PS3554.A934923 W35 1999"
                ],
                "latest_revision": 7,
                "ocaid": "walkingtour00davi",
                "uri_descriptions": [
                    "Sample text",
                    "Reading group guide",
                    "Publisher description"
                ],
                "source_records": [
                    "ia:walkingtour00davi"
                ],
                "title": "The walking tour",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "publish_country": "mau",
                "by_statement": "Kathryn Davis.",
                "type": {
                    "key": "/type/edition"
                },
                "uris": [
                    "http://www.loc.gov/catdir/samples/hm051/99035547.html",
                    "http://www.houghtonmifflinbooks.com/readers_guides/davis_guide.shtml",
                    "http://www.loc.gov/catdir/description/hm022/99035547.html"
                ],
                "revision": 7,
                "publishers": [
                    "Houghton Mifflin"
                ],
                "ia_box_id": [
                    "IA170301"
                ],
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-04-21T10:11:29.145508"
                },
                "key": "/books/OL42528M",
                "authors": [
                    {
                        "key": "/authors/OL27777A"
                    }
                ],
                "publish_places": [
                    "Boston"
                ],
                "pagination": "264 p. ;",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "url": [
                    "http://www.loc.gov/catdir/samples/hm051/99035547.html",
                    "http://www.houghtonmifflinbooks.com/readers_guides/davis_guide.shtml",
                    "http://www.loc.gov/catdir/description/hm022/99035547.html"
                ],
                "identifiers": {
                    "goodreads": [
                        "3005453"
                    ],
                    "librarything": [
                        "120289"
                    ]
                },
                "lccn": [
                    "99035547"
                ],
                "isbn_10": [
                    "0395945410"
                ],
                "publish_date": "1999",
                "works": [
                    {
                        "key": "/works/OL16501715W"
                    }
                ]
            },
            {
                "identifiers": {
                    "goodreads": [
                        "1246473"
                    ],
                    "librarything": [
                        "3905873"
                    ]
                },
                "subtitle": "a novel",
                "subject_place": [
                    "Richmond (Va.)"
                ],
                "covers": [
                    6658932,
                    424769
                ],
                "ia_loaded_id": [
                    "cruelunusualnove00corn"
                ],
                "lc_classifications": [
                    "PS3553.O692 C78 1993"
                ],
                "latest_revision": 16,
                "ocaid": "cruelunusualnov00corn",
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part22.dat:170638217:1064",
                    "marc:CollingswoodLibraryMarcDump10-27-2008/Collingswood.out:11878415:2869",
                    "marc:marc_loc_updates/v37.i50.records.utf8:2658198:1281",
                    "ia:cruelunusualnov00corn",
                    "ia:cruelunusualnovecorn",
                    "ia:cruelunusualnove00corn",
                    "ia:cruelunusualno00corn"
                ],
                "title": "Cruel & unusual",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Scarpetta, Kay (Fictitious character) -- Fiction",
                    "Medical examiners (Law) -- Fiction",
                    "Forensic pathologists -- Fiction",
                    "Women physicians -- Fiction",
                    "Serial murders -- Fiction",
                    "Richmond (Va.) -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Patricia D. Cornwell.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 16,
                "other_titles": [
                    "Cruel and unusual."
                ],
                "publishers": [
                    "Scribner's",
                    "Maxwell Macmillan Canada",
                    "Maxwell Macmillan International"
                ],
                "ia_box_id": [
                    "ia108501"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-04-08T07:04:08.178548"
                },
                "key": "/books/OL1728424M",
                "authors": [
                    {
                        "key": "/authors/OL25793A"
                    }
                ],
                "publish_places": [
                    "New York",
                    "Toronto"
                ],
                "pagination": "356 p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "notes": {
                    "type": "/type/text",
                    "value": "Spine title: Cruel and unusual."
                },
                "number_of_pages": 356,
                "lccn": [
                    "92032684"
                ],
                "isbn_10": [
                    "0684195305"
                ],
                "publish_date": "1993",
                "works": [
                    {
                        "key": "/works/OL134375W"
                    }
                ]
            },
            {
                "number_of_pages": 480,
                "subtitle": "A Novel",
                "weight": "9.6 ounces",
                "covers": [
                    4698487
                ],
                "latest_revision": 8,
                "ocaid": "breaknobones00kath",
                "edition_name": "Reprint edition",
                "source_records": [
                    "ia:breaknobone00reic"
                ],
                "title": "Break No Bones",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Suspense",
                    "Thrillers",
                    "Fiction / Suspense",
                    "Fiction",
                    "Fiction - Espionage / Thriller",
                    "Mystery/Suspense"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "physical_dimensions": "7.3 x 4.1 x 1.4 inches",
                "revision": 8,
                "publishers": [
                    "Pocket"
                ],
                "physical_format": "Paperback",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-04-08T05:15:14.526683"
                },
                "key": "/books/OL7950349M",
                "authors": [
                    {
                        "key": "/authors/OL24769A"
                    }
                ],
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-29T15:03:11.581851"
                },
                "identifiers": {
                    "librarything": [
                        "1074514"
                    ],
                    "goodreads": [
                        "1139811"
                    ]
                },
                "isbn_13": [
                    "9780743453035"
                ],
                "isbn_10": [
                    "0743453034"
                ],
                "publish_date": "August 21, 2007",
                "works": [
                    {
                        "key": "/works/OL14870349W"
                    }
                ],
                "first_sentence": "NEVER FAILS. YOU'RE WRAPPING UP THE OPERATION WHEN SOMEone blunders onto the season's big score."
            },
            {
                "number_of_pages": 377,
                "covers": [
                    6793280
                ],
                "lc_classifications": [
                    "PS3563.A2364 S59 2001"
                ],
                "latest_revision": 6,
                "ocaid": "16lighthouseroad00maco",
                "ia_box_id": [
                    "IA116320"
                ],
                "edition_name": "[Book club ed.].",
                "source_records": [
                    "ia:16lighthouseroad00maco",
                    "ia:16lighthouseroad00maco_0"
                ],
                "title": "16 Lighthouse Road",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Fiction",
                    "Protected DAISY"
                ],
                "publish_country": "onc",
                "by_statement": "Debbie Macomber",
                "oclc_numbers": [
                    "47851651"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 6,
                "other_titles": [
                    "Sixteen Lighthouse Road"
                ],
                "publishers": [
                    "MIRA Books"
                ],
                "description": "You don't know me yet, but in a few hours that's going to change. You see, I'm inviting you to my home and my town of Cedar Cove because I want you to meet my family, friends and neighbors.",
                "full_title": "16 Lighthouse Road",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-03-24T18:25:31.344713"
                },
                "key": "/books/OL24739578M",
                "publish_places": [
                    "Don Mills, Ont"
                ],
                "pagination": "377 p. ;",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2011-07-07T01:46:05.034946"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "identifiers": {},
                "isbn_13": [
                    "9780739420232",
                    "9781551668307"
                ],
                "subject_places": [
                    "Washington (State)"
                ],
                "isbn_10": [
                    "0739420232",
                    "1551668300"
                ],
                "publish_date": "2001",
                "works": [
                    {
                        "key": "/works/OL15829031W"
                    }
                ]
            },
            {
                "identifiers": {
                    "goodreads": [
                        "3846387"
                    ],
                    "librarything": [
                        "126123"
                    ]
                },
                "subject_place": [
                    "Massachusetts"
                ],
                "covers": [
                    6502471
                ],
                "lc_classifications": [
                    "PS3561.E398 F7 1983"
                ],
                "latest_revision": 10,
                "ocaid": "fridayrabbislept00keme",
                "ia_box_id": [
                    "IA107922"
                ],
                "edition_name": "Large print ed.",
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "ia:fridayrabbislept00keme"
                ],
                "title": "Friday the rabbi slept late",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Small, David (Fictitious character) -- Fiction.",
                    "Rabbis -- Fiction.",
                    "Large type books.",
                    "Massachusetts -- Fiction."
                ],
                "publish_country": "mau",
                "by_statement": "Harry Kemelman",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 10,
                "publishers": [
                    "G.K. Hall"
                ],
                "description": "Minor scanning error: pp. 190-191 are duplicated, pp. 206-207 are missing.",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-03-18T15:03:14.312667"
                },
                "key": "/books/OL3164331M",
                "authors": [
                    {
                        "key": "/authors/OL451063A"
                    }
                ],
                "publish_places": [
                    "Boston, Mass"
                ],
                "pagination": "339 p. ;",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "lccn": [
                    "83006236"
                ],
                "number_of_pages": 339,
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "isbn_10": [
                    "0816135371"
                ],
                "publish_date": "1983",
                "works": [
                    {
                        "key": "/works/OL2954857W"
                    }
                ]
            },
            {
                "number_of_pages": 722,
                "subtitle": "a life",
                "subject_place": [
                    "United States"
                ],
                "covers": [
                    473643
                ],
                "ia_loaded_id": [
                    "marktwainlife00powe"
                ],
                "lc_classifications": [
                    "PS1331 .P67 2005"
                ],
                "latest_revision": 10,
                "ocaid": "marktwainlife00powe",
                "subject_time": [
                    "19th century"
                ],
                "genres": [
                    "Biography."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part15.dat:146764484:823",
                    "marc:marc_ithaca_college/ic_marc.mrc:209102911:845",
                    "ia:marktwainlife00powe",
                    "ia:marktwainlife00powe_0"
                ],
                "title": "Mark Twain",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Twain, Mark, 1835-1910",
                    "Authors, American -- 19th century -- Biography",
                    "Humorists, American -- 19th century -- Biography",
                    "Journalists -- United States -- Biography"
                ],
                "publish_country": "nyu",
                "by_statement": "Ron Powers.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 10,
                "publishers": [
                    "Free Press"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-02-26T06:04:30.887112"
                },
                "key": "/books/OL3425430M",
                "authors": [
                    {
                        "key": "/authors/OL73501A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "xi, 722 p. :",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "818/.409",
                    "B"
                ],
                "notes": {
                    "type": "/type/text",
                    "value": "Includes bibliographical references (p. 683-689) and index."
                },
                "identifiers": {
                    "goodreads": [
                        "856959"
                    ],
                    "librarything": [
                        "134319"
                    ]
                },
                "isbn_13": [
                    "9780743248990"
                ],
                "lccn": [
                    "2005048816"
                ],
                "isbn_10": [
                    "0743248996"
                ],
                "publish_date": "2005",
                "works": [
                    {
                        "key": "/works/OL849825W"
                    }
                ]
            }
        ],

        getBooks: function (){
            return factory.books;
        },
        getBook: function(id){
            return factory.books[id];
        },

        addBook: function (book) {
            book.onOneLine =  booksCount + 1 + ' - ' + book.title + ' - ' + book.author + ' - ' + book.edition + ' - ' +book.date + ' - ' + book.type + ' - ' + book.kind + ' - ' + book.number;

            var bookToAdd = {
                "title": book.title,
                "authors":
                    [
                        book.author
                    ],
                "publishers":
                    [
                        book.edition
                    ],
                "publish_date":
                    [
                        {
                            "name": book.date
                        }
                    ]
            };
            this.books.push(bookToAdd);
            booksInfos.push(book);
            for(i = 0; i < booksInfos.length; i++) {
                alert(booksInfos[i].onOneLine);
            }
            book.addOrder = booksCount;
            booksCount++;
            //alert(book.onOneLine());
        },

        modifyBook: function (index, newValue) {
            booksInfos[index] = newValue;
            booksInfos[index].onOneLine =  booksInfos[index].addOrder + 1 + ' - ' + booksInfos[index].title + ' - ' + booksInfos[index].author + ' - ' + booksInfos[index].edition + ' - ' +booksInfos[index].date + ' - ' + booksInfos[index].type + ' - ' + booksInfos[index].kind + ' - ' + booksInfos[index].number;
            for(i = 0; i < booksInfos.length; i++) {
                alert(booksInfos[i].onOneLine);
            }
        },

        getBooksInfos: function () {
            return booksInfos;
        }

    };
    console.log(factory);
    return factory;
})/**
 * Created by James on 15/10/2015.
 */

var applicationModule = angular.module("applicationModule", ['ngRoute']);;

applicationModule.config(function ($routeProvider) {
    $routeProvider
        .when('/',
        {
            controller: 'connectionController',
            templateUrl: 'views/connection.html'
        })
        .when('/connection',
        {
            controller: 'connectionController',
            templateUrl: 'views/connection.html'
        })
        .when('/addBook',
        {
            controller: 'addBookController',
            templateUrl: 'views/add-book.html'
        })
        .when("/home" ,
        {
            templateUrl:'views/home.html'
        })
        .when("/books/list" ,
        {
            templateUrl:'views/consult-books.html',
            controller:'consultBookController'
        })
        .when('/modifyBook',
        {
            controller: 'modifyBookController',
            templateUrl: 'views/modify-book.html'
        })
        .when('/books/:id/show/' ,
        {
            controller:'detailBookController',
            templateUrl:'views/detail-book.html'
        })
        .otherwise({redirectTo: '/home'});
});

applicationModule.factory('user' , function(){
    var factory = {};
    var userInfos = [];

    factory.addUserInfos = function (user) {
        userInfos.push(user);
        alert('Login: ' + user.login + '\nPassword: ' + user.password);
    };

    factory.getUserInfos = function() {
        return userInfos;
    };
    return factory;

});





applicationModule.factory("booksFactory" , function(){

    var booksInfos = [];
    var booksCount = 0;
    var factory = {
        books : [        {
            "number_of_pages": 154,
            "covers": [
                6542611
            ],
            "latest_revision": 6,
            "ocaid": "mysteriousaffair00chri",
            "contributions": [
                "American Popular Literature Collection."
            ],
            "source_records": [
                "ia:mysteriousaffair00chri"
            ],
            "title": "The mysterious affair at Styles",
            "publish_country": "nyu",
            "by_statement": "Agatha Christie.",
            "oclc_numbers": [
                "12637750"
            ],
            "type": {
                "key": "/type/edition"
            },
            "revision": 6,
            "publishers": [
                "Bantam Books"
            ],
            "ia_box_id": [
                "IA105807"
            ],
            "last_modified": {
                "type": "/type/datetime",
                "value": "2015-10-14T00:46:44.300743"
            },
            "key": "/books/OL24214842M",
            "authors": [
                {
                    "key": "/authors/OL27695A"
                }
            ],
            "publish_places": [
                "New York"
            ],
            "pagination": "[6], 154 p. ;",
            "classifications": {},
            "created": {
                "type": "/type/datetime",
                "value": "2010-05-05T13:12:33.007114"
            },
            "identifiers": {},
            "publish_date": "1965",
            "works": [
                {
                    "key": "/works/OL472907W"
                }
            ]
        },
            {
                "number_of_pages": 218,
                "subtitle": "a Jane Jeffry mystery",
                "subject_place": [
                    "Chicago (Ill.)",
                    "Illinois",
                    "Chicago"
                ],
                "covers": [
                    237722
                ],
                "ia_loaded_id": [
                    "groomwithviewj00chur"
                ],
                "lc_classifications": [
                    "PS3553.H85 G7 1999"
                ],
                "latest_revision": 8,
                "ocaid": "groomwithviewj00chur",
                "edition_name": "1st ed.",
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part28.dat:3053112:850",
                    "ia:groomwithviewj00chur",
                    "ia:groomwithviewjan00chur"
                ],
                "title": "A groom with a view",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Jeffry, Jane (Fictitious character) -- Fiction",
                    "Women detectives -- Illinois -- Chicago -- Fiction",
                    "Single mothers -- Fiction",
                    "Suburban life -- Fiction",
                    "Chicago (Ill.) -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Jill Churchill.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 8,
                "publishers": [
                    "Avon Twilight"
                ],
                "ia_box_id": [
                    "IA140504"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-10-08T04:40:45.444027"
                },
                "key": "/books/OL33674M",
                "authors": [
                    {
                        "key": "/authors/OL21264A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "218 p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "identifiers": {
                    "goodreads": [
                        "1239812"
                    ],
                    "librarything": [
                        "116036"
                    ]
                },
                "lccn": [
                    "99016666"
                ],
                "isbn_10": [
                    "038097570X"
                ],
                "publish_date": "1999",
                "works": [
                    {
                        "key": "/works/OL48553W"
                    }
                ]
            },
            {
                "subtitle": "an FBI thriller",
                "covers": [
                    6476445
                ],
                "ia_loaded_id": [
                    "blindsidefbithr000coul"
                ],
                "lc_classifications": [
                    "PS3553 .O843 B58 2004"
                ],
                "latest_revision": 12,
                "ocaid": "blindsidefbithri00coul",
                "description": "Son of an ex-FBI agent, Miles Kettering, six-year-old Sam Kettering is kidnapped and taken to eastern Tennessee. The boy manages to escape. But the kidnappers do not give up. Miles Kettering joins Lacey Sherlock and Dillon Savich to investigate why the kidnappers want this little boy so badly - and they also soon find themselves ineluctiaably drawn into the investigation of the murders of three math teachers in the Washington, D.C. area.",
                "source_records": [
                    "ia:blindsidefbithri00coul",
                    "ia:blindsidefbithr000coul",
                    "ia:blindsidefbithr00coul"
                ],
                "title": "Blindside",
                "edition_name": "Jove ed.",
                "publish_country": "nyu",
                "by_statement": "Catherine Coulter.",
                "oclc_numbers": [
                    "55803104"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 12,
                "publishers": [
                    "Jove Books"
                ],
                "ia_box_id": [
                    "IA150801"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-10-07T04:36:25.239035"
                },
                "key": "/books/OL24201869M",
                "publish_places": [
                    "New York"
                ],
                "pagination": "339 p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2010-05-05T05:24:02.709029"
                },
                "dewey_decimal_class": [
                    "813"
                ],
                "number_of_pages": 339,
                "isbn_13": [
                    "9780515137200"
                ],
                "isbn_10": [
                    "0515137200"
                ],
                "publish_date": "2004",
                "works": [
                    {
                        "key": "/works/OL14721W"
                    }
                ]
            },
            {
                "identifiers": {
                    "librarything": [
                        "228616"
                    ],
                    "goodreads": [
                        "723118"
                    ]
                },
                "subject_place": [
                    "Virginia"
                ],
                "covers": [
                    374017
                ],
                "lc_classifications": [
                    "PS3552.R698 C38 2005"
                ],
                "latest_revision": 11,
                "url": [
                    "http://www.loc.gov/catdir/bios/random051/2004046207.html",
                    "http://www.loc.gov/catdir/description/random051/2004046207.html"
                ],
                "ocaid": "catseyewitness00browrich",
                "uri_descriptions": [
                    "Contributor biographical information",
                    "Publisher description"
                ],
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part15.dat:24936943:1238",
                    "ia:catseyewitness00browrich",
                    "ia:catseyewitness00brow",
                    "ia:catseyewitnes00brow"
                ],
                "title": "Cat's eyewitness",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Haristeen, Harry (Fictitious character) -- Fiction",
                    "Murphy, Mrs. (Fictitious character) -- Fiction",
                    "Women postal service employees -- Fiction",
                    "Women detectives -- Virginia -- Fiction",
                    "Women cat owners -- Fiction",
                    "Monasteries -- Fiction",
                    "Cats -- Fiction",
                    "Virginia -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Rita Mae Brown & Sneaky Pie Brown ; illustrations by Michael Gellatly.",
                "oclc_numbers": [
                    "56686608"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "uris": [
                    "http://www.loc.gov/catdir/bios/random051/2004046207.html",
                    "http://www.loc.gov/catdir/description/random051/2004046207.html"
                ],
                "revision": 11,
                "publishers": [
                    "Bantam Books"
                ],
                "ia_box_id": [
                    "IA101504"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-10-07T04:30:17.203415"
                },
                "key": "/books/OL3304113M",
                "authors": [
                    {
                        "key": "/authors/OL1122551A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "xi, 287 p. :",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "number_of_pages": 287,
                "lccn": [
                    "2004046207"
                ],
                "isbn_10": [
                    "0553801643"
                ],
                "publish_date": "2005",
                "works": [
                    {
                        "key": "/works/OL29514W"
                    }
                ]
            },
            {
                "covers": [
                    6510949
                ],
                "lc_classifications": [
                    "PS3555.V2126 H37 2002b"
                ],
                "latest_revision": 6,
                "ocaid": "hardeight00evan",
                "ia_box_id": [
                    "IA119322"
                ],
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "ia:hardeight00evan",
                    "ia:hardeigh00evan"
                ],
                "title": "Hard eight",
                "edition_name": "St. Martin's Paperbacks ed.",
                "subjects": [
                    "Plum, Stephanie (Fictitious character) -- Fiction.",
                    "Women private investigators -- New Jersey -- Fiction.",
                    "Missing children -- Fiction.",
                    "Bounty hunters -- Fiction.",
                    "New Jersey -- Fiction."
                ],
                "publish_country": "nyu",
                "by_statement": "Janet Evanovich.",
                "oclc_numbers": [
                    "232584884"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 6,
                "publishers": [
                    "St. Martin's Paperbacks"
                ],
                "description":"When Stephanie Plum is hired to find a missing child, she begins to wonder if she is working on the right side of the law when events turn suspicious.",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-10-06T04:32:16.725493"
                },
                "key": "/books/OL24238201M",
                "authors": [
                    {
                        "key": "/authors/OL21225A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "341 p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2010-06-04T22:28:50.571202"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "number_of_pages": 341,
                "isbn_13": [
                    "9780312983864"
                ],
                "lccn": [
                    "2002021290"
                ],
                "isbn_10": [
                    "0312983867"
                ],
                "publish_date": "2003",
                "works": [
                    {
                        "key": "/works/OL48053W"
                    }
                ]
            },
            {
                "identifiers": {
                    "librarything": [
                        "3390130"
                    ]
                },
                "subtitle": "the four novels and the fifty-six short stories complete. Volume I",
                "subject_place": [
                    "England"
                ],
                "covers": [
                    6628135
                ],
                "lc_classifications": [
                    "PR4620.A5 B3 1967"
                ],
                "latest_revision": 10,
                "ocaid": "annotatedsherloc01doyl",
                "contributions": [
                    "Baring-Gould, William Stuart, 1913- ed."
                ],
                "ia_box_id": [
                    "IA123512"
                ],
                "edition_name": "Second edition",
                "source_records": [
                    "marc:marc_records_scriblio_net/part06.dat:14507450:1031",
                    "ia:annotatedsherloc01doyl"
                ],
                "title": "The annotated Sherlock Holmes.",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Holmes, Sherlock (Fictitious character) -- Fiction",
                    "Detective and mystery stories, English",
                    "Private investigators -- England -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Edited, with an introd., notes, and bibliography by William S. Baring-Gould. Illustrated ... by Charles Doyle [and others.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 10,
                "publishers": [
                    "C. N. Potter",
                    "Distributed by Crown Publishers"
                ],
                "description": "NOTE: This is Volume I, only, of a two-volume set. Volume II apparently hasn't been scanned.",
                "physical_format": "Hardcover",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-10-01T21:05:48.485098"
                },
                "key": "/books/OL5544228M",
                "authors": [
                    {
                        "key": "/authors/OL2623297A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "688p.",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "lccn": [
                    "67022406"
                ],
                "notes": "Bibliography: v. 2, p. 807-824.",
                "number_of_pages": 688,
                "dewey_decimal_class": [
                    "823/.8"
                ],
                "publish_date": "1967",
                "copyright_date": "1967",
                "works": [
                    {
                        "key": "/works/OL1518438W"
                    }
                ]
            },
            {
                "identifiers": {
                    "librarything": [
                        "2895228"
                    ],
                    "goodreads": [
                        "552887"
                    ]
                },
                "series": [
                    "Alex Cross Series"
                ],
                "covers": [
                    6999800
                ],
                "ia_loaded_id": [
                    "doublecross000patt"
                ],
                "lc_classifications": [
                    "PS3566.A822 D68 2007"
                ],
                "latest_revision": 16,
                "ocaid": "doublecross000patt",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "genres": [
                    "Fiction"
                ],
                "source_records": [
                    "marc:marc_miami_univ_ohio/allbibs0212.out:12240827:1308",
                    "marc:marc_loc_updates/v35.i20.records.utf8:30764709:945",
                    "marc:marc_loc_updates/v36.i15.records.utf8:5639839:1383",
                    "marc:CollingswoodLibraryMarcDump10-27-2008/Collingswood.out:75727452:2324",
                    "ia:doublecross000patt",
                    "ia:doublecrossnovel00pat"
                ],
                "title": "Double cross",
                "edition_name": "First Edition",
                "subjects": [
                    "Cross, Alex (Fictitious character) -- Fiction",
                    "Police -- Washington (D.C.) -- Fiction",
                    "African American police -- Fiction",
                    "Police psychologists -- Fiction",
                    "Serial murderers -- Fiction",
                    "Washington (D.C.) -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "by James Patterson",
                "type": {
                    "key": "/type/edition"
                },
                "physical_dimensions": "9.5 x 6.25 x 1.375 inches",
                "revision": 16,
                "publishers": [
                    "Little, Brown and Company"
                ],
                "ia_box_id": [
                    "IA150801"
                ],
                "physical_format": "Hardcover",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-09-30T04:37:53.306641"
                },
                "key": "/books/OL17245958M",
                "authors": [
                    {
                        "key": "/authors/OL6812710A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "389 p. ;",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-09-28T03:06:07.546913"
                },
                "lccn": [
                    "2007019762"
                ],
                "number_of_pages": 389,
                "isbn_13": [
                    "9780316015059"
                ],
                "dewey_decimal_class": [
                    "813'.54-dc22"
                ],
                "isbn_10": [
                    "0316015059"
                ],
                "publish_date": "November 2007",
                "copyright_date": "2007",
                "works": [
                    {
                        "key": "/works/OL167150W"
                    }
                ]
            },
            {
                "number_of_pages": 489,
                "subtitle": "the life of Amelia Earhart",
                "subject_place": [
                    "United States"
                ],
                "covers": [
                    7365340,
                    164934
                ],
                "ia_loaded_id": [
                    "easttodawnli00butl"
                ],
                "lc_classifications": [
                    "TL540.E3 B88 1999"
                ],
                "latest_revision": 10,
                "ocaid": "easttodawnli00butl",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part27.dat:95345289:824",
                    "marc:marc_loc_updates/v36.i18.records.utf8:7065040:925",
                    "marc:marc_loc_updates/v37.i16.records.utf8:1852300:932",
                    "ia:easttodawnli00butl"
                ],
                "title": "East to the dawn",
                "edition_name": "1st Da Capo Press ed.",
                "subjects": [
                    "Earhart, Amelia, 1897-1937",
                    "Women air pilots -- United States -- Biography"
                ],
                "publish_country": "nyu",
                "by_statement": "Susan Butler.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 10,
                "publishers": [
                    "Da Capo Press"
                ],
                "ia_box_id": [
                    "IA151101"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-09-08T20:18:55.316184"
                },
                "key": "/books/OL385098M",
                "authors": [
                    {
                        "key": "/authors/OL227133A"
                    },
                    {
                        "key": "/authors/OL7021772A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "xiv, 489 p. :",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "629.13/092",
                    "B"
                ],
                "notes": {
                    "type": "/type/text",
                    "value": "Includes bibliographical references and index.\nOriginally published: Reading, Mass. : Addison-Wesley, c1997."
                },
                "identifiers": {
                    "goodreads": [
                        "1046723"
                    ],
                    "librarything": [
                        "198317"
                    ]
                },
                "lccn": [
                    "98047717"
                ],
                "isbn_10": [
                    "0306808870"
                ],
                "publish_date": "1999",
                "works": [
                    {
                        "key": "/works/OL1897387W"
                    }
                ]
            },
            {
                "identifiers": {
                    "goodreads": [
                        "337151"
                    ],
                    "librarything": [
                        "5262289"
                    ]
                },
                "subtitle": "a novel",
                "contributors": [
                    {
                        "role": "Designer",
                        "name": "Eve Metz"
                    },
                    {
                        "role": "Jacket Design",
                        "name": "Paul Bacon"
                    },
                    {
                        "role": "Author Photographer",
                        "name": "Bernard Vidal"
                    },
                    {
                        "role": "Editor",
                        "name": "Michael V. Korda"
                    },
                    {
                        "role": "Agent",
                        "name": "Eugene H. Winick"
                    }
                ],
                "covers": [
                    7359580,
                    3935413
                ],
                "ia_loaded_id": [
                    "illbeseeingyounocla00clar"
                ],
                "lc_classifications": [
                    "PS3553.L287 I4 1993"
                ],
                "latest_revision": 19,
                "ocaid": "illbeseeingyouno00clar",
                "table_of_contents": [
                    {
                        "title": "Part one.",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Meghan Collins stood somewhat aside from the cluster of other journalists in Emergency at Manhattan's Roosevelt Hospital",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Meghan took a cab to her apartment in Battery Park City, at the very tip of Manhattan",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Tom Weicker, 52-year-old news director of PCD Channel 3, had been borrowing Meghan Collins from the radio affiliate with increasing frequency",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Somehow Meghan was able to accept Weicker's offer calmly",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Catherine Collins' hair always looked as though she'd just run a hand through it",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Mac, as Dr. Jeremy MacIntyre was known, lived with his 7-year-old son, Kyle, around the bend from the Collins family",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "When Meghan arrived home she found her mother sitting in the darkened living room, her hands folded in her lap",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "The Collins and Carter Executive Search office was located in Danbury, Connecticut",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "When Meghan arrived at the Collins and Carter Executive Search offices at 2:00 on Saturday, she found three men working with calculators at the long table that usually held magazines and plants",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "At 3:00 on Sunday afternoon, Meg met Steve Boyle, the PCD cameraman, in the parking lot of the Manning Clinic",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On the way back to Newtown, Meghan used the car phone to call her mother",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Bernie Heffernan spent Sunday evening with his mother, watching television in the shabby sitting room of their bungalow-type home in Jackson Heights",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "When Meghan went downstairs Monday morning at 6:30 she found her mother already in the kitchen",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Monday morning, Phillip Carter reached the office at 8:00",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Helene Petrovic loved her job as embryologist in charge of the laboratoy of the Manning Clinic",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "By Monday afternoon, the Manning Clinic had settled down from the excitement of the weekend reunion",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "At 7:30 Tuesday morning, Mac watched his lively son leap onto the school bus",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Tuesday morning, from the front windows of her home in Scottsdale, Arizona, Frances Grolier could see the first glimmer of light begin to define the McDowell Mountains",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Mac found his work in the LifeCode Research Laboratory, where he was a specialist in genetic therapy, to be rewarding, satisfying and all-absorbing",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "In Helene Petrovic's charming colonial home in Lawrenceville, New Jersey, her niece, Stephanie, was cross and worried",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "By 8:00 on Tuesday evening, traffic in the garage had slowed down to a trickle",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "The body of Helene Petrovic lay all Tuesday in the bedroom where she had died",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Phillip Carter heard the news report detailing Dr. Helene Petrovic's death on his way to the office",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Despite the best efforts of the entire staff of the Manning Clinic there was no hiding the tension that permeated the atmosphere",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Victor Orsini and Phillip Carter never socialized for lunch",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Bernie stopped at a diner on Route 7 just outside Danbury",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Catherine Collins touched the button at her hand, and the hospital bed tilted noiselessly up",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Part two.",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Wednesday afternoon, investigators from Connecticut drove to Lawrenceville, New Jersey, to question Stephanie Petrovic about her murdered aunt",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "The shock that Meghan had felt at once again seeing the dead woman who resembled her had dulled by the time a vial of blood was drawn from her arm",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Just before 5:00, Victor Orsini received the call he was afraid might come",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Dr. Henry Williams, the 65-year-old head of the Franklin Assisted Reproduction Center in the renovated old town section of Philadelphia, was a man who looked vaguely like everyone's favorite uncle",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Bernie's first fare on Thursday morning was from Kennedy Airport",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Catherine Collins had an early breakfast with Meghan before Meg left to meet with the investigators at the Danbury courthouse and then to drive to Philadelphia",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "At 4:00, Mac phoned Catherine at home to see how she was feeling",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "It was 9:30 when Meghan arrived home on Thursday night, relieved to find that Mac was waiting with her mother",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Early Friday morning, Bernie watched again the replay of the interview he had taped at the Manning Clinic",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Meghan slipped into St. Dominic's church at 12:30, at the midpoint of the sparsely attended mass for Helene Petrovic",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Dr. George Manning left the clinic at 5:00 on Friday afternoon",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "\"It always rains on Saturday,\" Kyle grumbled as he flipped from channel to channel on the television set",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "There was an auction coming up on property near the Rhode Island border",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Late Saturday in Danbury Medical Center, a sedated Dina Anderson was dozing in bed, Jonathan asleep beside her",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Sunday morning, Catherine Collins attended the 10:00 mass at St. Paul's, but she found it difficult to keep her mind on the sermon",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Stephanie Petrovic had a fitful night, finally falling into a heavy sleep",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Meghan decided to skip going to the office and reached her apartment building at 4:00",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Part three.",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Monday evening when Mac got home from work, Kyle was his usual cheerful self",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Monday had been a bad day for Bernie",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Frances stood, looking out the window at the back of the house",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Tuesday morning, Victor Orsini moved into Edwin Collins' private office",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "On Wednesday morning, as soon as Kyle was on the school bus, Mac left for Valley Memorial Hospital in Trenton, New Jersey",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Catherine went to the inn on Wednesday morning and worked in her office until 11:30",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Phillip was the first one to call on Thursday morning",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Special investigators Bob Marron and Arlene Weiss requested and received permission from the Manhattan district attorney to question Frances Grolier late Thursday morning",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Donald Anderson had taken two weeks off from work to help with the new baby",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "\"Kyle, shouldn't you be starting your homework?\" Marie Dileo, the 60-year-old housekeeper gently prodded",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "After her mother went back to the inn, Meghan phoned Phillip at home",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "When Bernie's mother regained consciousness, she tried to shout for help, but she knew none of the neighbors could hear her",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "The squad car pulled into the driveway of the shabby one-story frame house in Jackson Heights, and two policemen jumped out",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Victor Orsini had agreed to be at John Dwyer's office in the Danbury courthouse at 3:00",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "It was nearly 4:00 when Mac completed his last errand and started home",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "\"Phillip, before Dad gets here, I think I know the reason for Helene Petrovic being at Manning\"",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "When Meghan regained consciousness she was lying on the ground, her head in someone's lap",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "The helicopter landed at the Danbury Medical Center",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    }
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part23.dat:107548980:722",
                    "marc:CollingswoodLibraryMarcDump10-27-2008/Collingswood.out:11814707:2290",
                    "marc:CollingswoodLibraryMarcDump10-27-2008/Collingswood.out:24756574:1568",
                    "marc:marc_loc_updates/v38.i12.records.utf8:4791884:833",
                    "ia:illbeseeingyouno00clar",
                    "ia:illbeseeingyounocla00clar"
                ],
                "title": "I'll be seeing you",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Women television personalities -- Fiction",
                    "Fertilization in vitro -- Fiction",
                    "Missing persons -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Mary Higgins Clark.",
                "type": {
                    "key": "/type/edition"
                },
                "physical_dimensions": "22 x  x  centimeters",
                "revision": 19,
                "publishers": [
                    "Simon & Schuster"
                ],
                "ia_box_id": [
                    "IA124312"
                ],
                "physical_format": "Hardcover",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-08-03T14:39:53.077685"
                },
                "key": "/books/OL1408058M",
                "authors": [
                    {
                        "key": "/authors/OL22586A"
                    }
                ],
                "publish_places": [
                    "New York, USA"
                ],
                "pagination": "317 p.",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "lccn": [
                    "93016584"
                ],
                "notes": "Printed in the U.S.A.",
                "number_of_pages": 317,
                "isbn_13": [
                    "9780671673661"
                ],
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "isbn_10": [
                    "0671673661"
                ],
                "publish_date": "1993",
                "copyright_date": "1993",
                "works": [
                    {
                        "key": "/works/OL13072W"
                    }
                ]
            },
            {
                "identifiers": {
                    "librarything": [
                        "38467"
                    ]
                },
                "series": [
                    "A Perry Mason mystery."
                ],
                "covers": [
                    7358311,
                    7002485
                ],
                "ia_loaded_id": [
                    "caseofdemuredefe00gard"
                ],
                "lc_classifications": [
                    "PZ3.G1714 Cahah",
                    "PS3513.A6322 Cahah"
                ],
                "latest_revision": 7,
                "ocaid": "caseofdemuredefe00gard",
                "source_records": [
                    "marc:marc_records_scriblio_net/part04.dat:119123698:1200",
                    "ia:caseofdemuredefe00gard"
                ],
                "title": "The case of the demure defendant",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Mason, Perry (Fictitious character) -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Erle Stanley Gardner.",
                "oclc_numbers": [
                    "5671983"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 7,
                "publishers": [
                    "William Morrow and Co."
                ],
                "ia_box_id": [
                    "IA108312"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-07-28T02:55:06.330309"
                },
                "key": "/books/OL6196960M",
                "authors": [
                    {
                        "key": "/authors/OL23222A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "viii, [2], 242, [2] p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "lccn": [
                    "56005052"
                ],
                "notes": {
                    "type": "/type/text",
                    "value": "Mundell, E.H.  Erle Stanley Gardner, p. 52\nHubin  Crime Fiction, 1749-1980, p. 158\n\"An abridged version of this novel has been serialized in the Saturday Evening Post under the title, the Case of the missing poison\"--Verso t.p.\nAuthor's name at head of title.\nFirst edition, cf. Mundell and Hubin cited below.\n\"A Morrow mystery.\"\nPublisher's ads [2] p. at end."
                },
                "number_of_pages": 242,
                "publish_date": "1956",
                "works": [
                    {
                        "key": "/works/OL16714W"
                    }
                ]
            },
            {
                "identifiers": {},
                "table_of_contents": [
                    {
                        "title": "5-B Poppy Lane  -- Debbie Macomber",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Liberty Hall  -- Lois Faye Dyer",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    },
                    {
                        "title": "Apple orchard -- Katherine Stone.",
                        "type": {
                            "key": "/type/toc_item"
                        },
                        "level": 0
                    }
                ],
                "covers": [
                    6824708
                ],
                "lc_classifications": [
                    "PS3563.A2364 H43 2006"
                ],
                "latest_revision": 6,
                "ocaid": "heartsdivided00maco",
                "description": "A trio of heartwarming romances features Debbie Macomber's \"5-B Poppy Lane,\" in which Ruth Shelton, while asking for advice on her own romance with a soldier, stumbles upon a secret from her grandmother's past. Presents three stories that center around grandmothers who were all married to soldiers and who pass on advice about love, separation, and wartime experience to their granddaughters.",
                "source_records": [
                    "ia:heartsdivided00maco"
                ],
                "title": "Hearts divided",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "American Love stories",
                    "Protected DAISY"
                ],
                "publish_country": "onc",
                "by_statement": "Debbie Macomber, Katherine Stone, Lois Faye Dyer",
                "oclc_numbers": [
                    "63179656"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 6,
                "publishers": [
                    "Mira"
                ],
                "ia_box_id": [
                    "IA138615"
                ],
                "full_title": "Hearts divided",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-07-14T05:25:28.677539"
                },
                "key": "/books/OL24770852M",
                "publish_places": [
                    "Don Mills, Ont"
                ],
                "pagination": "298 p. ;",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2011-07-14T22:59:06.012197"
                },
                "lccn": [
                    "2006567548"
                ],
                "number_of_pages": 298,
                "isbn_13": [
                    "9780778322122",
                    "9780739463963"
                ],
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "isbn_10": [
                    "0778322122",
                    "0739463969"
                ],
                "publish_date": "2006",
                "works": [
                    {
                        "key": "/works/OL15862181W"
                    }
                ]
            },
            {
                "number_of_pages": 416,
                "series": [
                    "The left behind series"
                ],
                "covers": [
                    638792,
                    638787
                ],
                "lc_classifications": [
                    "PS3562.A315 A94 1999"
                ],
                "latest_revision": 28,
                "ocaid": "assassins00laha",
                "contributions": [
                    "Jenkins, Jerry B."
                ],
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part28.dat:6042536:860",
                    "ia:assassins00laha",
                    "ia:assassinsassignm00laha",
                    "ia:assassinslaha00laha",
                    "ia:isbn_9780842329279_0"
                ],
                "title": "Assassins",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Steele, Rayford (Fictitious character) -- Fiction",
                    "Rapture (Christian eschatology) -- Fiction"
                ],
                "publish_country": "ilu",
                "by_statement": "Tim LaHaye, Jerry B. Jenkins.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 28,
                "publishers": [
                    "Tyndale House Publishers"
                ],
                "ia_box_id": [
                    "IA119212"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-06-24T04:38:31.085155"
                },
                "key": "/books/OL36985M",
                "authors": [
                    {
                        "key": "/authors/OL22047A"
                    }
                ],
                "publish_places": [
                    "Wheaton, Ill"
                ],
                "pagination": "xvi, 416 p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "identifiers": {
                    "librarything": [
                        "26916"
                    ],
                    "goodreads": [
                        "577409",
                        "85957"
                    ]
                },
                "lccn": [
                    "99023466"
                ],
                "isbn_10": [
                    "084232920X",
                    "0842329277"
                ],
                "publish_date": "1999",
                "works": [
                    {
                        "key": "/works/OL137692W"
                    }
                ]
            },
            {
                "number_of_pages": 229,
                "covers": [
                    281731
                ],
                "lc_classifications": [
                    "CPB Box no. 2255 vol. 11"
                ],
                "latest_revision": 9,
                "ocaid": "bleachers00gris",
                "contributions": [
                    "Copyright Paperback Collection (Library of Congress)"
                ],
                "ia_box_id": [
                    "IA102401"
                ],
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part15.dat:109523815:1115",
                    "ia:bleachers00gris"
                ],
                "title": "Bleachers",
                "edition_name": "Dell mass market ed.",
                "subjects": [
                    "Funeral rites and ceremonies -- Fiction",
                    "Teacher-student relationships -- Fiction",
                    "Football coaches -- Fiction",
                    "Football players -- Fiction",
                    "School sports -- Fiction",
                    "Death -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "John Grisham.",
                "oclc_numbers": [
                    "55749727"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "physical_dimensions": "18 x  x  centimeters",
                "revision": 9,
                "publishers": [
                    "Bantam Dell"
                ],
                "description": "Presents a novel about high school football in a small Texas town, a place in which football has become a religion.",
                "physical_format": "Paperback",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-05-19T18:56:21.432990"
                },
                "key": "/books/OL3391348M",
                "authors": [
                    {
                        "key": "/authors/OL6829207A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "229 p.",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "lccn": [
                    "2004719502"
                ],
                "notes": "\"A Dell book\"",
                "identifiers": {
                    "librarything": [
                        "3338"
                    ],
                    "goodreads": [
                        "700860"
                    ]
                },
                "isbn_13": [
                    "9780440242000"
                ],
                "isbn_10": [
                    "0440242002"
                ],
                "publish_date": "2004",
                "works": [
                    {
                        "key": "/works/OL77010W"
                    }
                ]
            },
            {
                "number_of_pages": 320,
                "covers": [
                    2378963
                ],
                "latest_revision": 11,
                "ocaid": "sundaysattiffan000patt",
                "source_records": [
                    "amazon:031601477X",
                    "ia:sundaysattiffan000patt",
                    "ia:sundaysattiffan00patt"
                ],
                "title": "Sundays at Tiffany's",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Romance - Contemporary",
                    "Fiction / General",
                    "General",
                    "Fiction",
                    "Fiction - Romance",
                    "Imaginary companions",
                    "Mystery fiction"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 11,
                "publishers": [
                    "Little, Brown and Company"
                ],
                "ia_box_id": [
                    "IA152801"
                ],
                "physical_format": "Hardcover",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-05-12T04:34:18.684174"
                },
                "key": "/books/OL10426126M",
                "authors": [
                    {
                        "key": "/authors/OL6812710A"
                    },
                    {
                        "key": "/authors/OL34596A"
                    }
                ],
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-30T09:38:13.731961"
                },
                "identifiers": {
                    "librarything": [
                        "4179280"
                    ],
                    "goodreads": [
                        "2029177"
                    ]
                },
                "isbn_13": [
                    "9780316014779"
                ],
                "isbn_10": [
                    "031601477X"
                ],
                "publish_date": "April 28, 2008",
                "works": [
                    {
                        "key": "/works/OL14920191W"
                    }
                ]
            },
            {
                "number_of_pages": 150,
                "links": [
                    {
                        "url": "http://my.athenet.net/%7Eblahnik/rnpeck/index.htm"
                    }
                ],
                "covers": [
                    7342681,
                    6485078
                ],
                "lc_classifications": [
                    "PZ7.P339 Day 1994"
                ],
                "latest_revision": 7,
                "ocaid": "daynopigswoulddi00peck",
                "ia_box_id": [
                    "IA100801"
                ],
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "ia:daynopigswoulddi00peck"
                ],
                "title": "A day no pigs would die",
                "edition_name": "1st Sprinter ed.",
                "subjects": [
                    "Farm life -- Vermont -- Fiction.",
                    "Fathers and sons -- Fiction.",
                    "Pigs -- Fiction.",
                    "Farm life -- Vermont -- Fiction.",
                    "Fathers and sons -- Fiction.",
                    "Swine -- Fiction.",
                    "Vermont -- Fiction."
                ],
                "publish_country": "nyu",
                "by_statement": "Robert Newton Peck",
                "oclc_numbers": [
                    "31208741"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 7,
                "publishers": [
                    "Random House Sprinter Books"
                ],
                "description": "To a thirteen-year-old Vermont farm boy whose father slaughters pigs for a living, maturity comes early as he learns \"doing what's got to be done,\" especially regarding his pet pig who cannot produce a litter.",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-04-21T16:47:13.973353"
                },
                "key": "/books/OL24204775M",
                "authors": [
                    {
                        "key": "/authors/OL233100A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "150 p. ; 18 cm.",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2010-05-05T07:08:39.851063"
                },
                "dewey_decimal_class": [
                    "Fic"
                ],
                "notes": {
                    "type": "/type/text",
                    "value": "Originally published: New York : Knopf, 1972.\r\n\r\n5.3."
                },
                "identifiers": {},
                "isbn_13": [
                    "9780679853060"
                ],
                "url": [
                    "http://my.athenet.net/%7Eblahnik/rnpeck/index.htm"
                ],
                "isbn_10": [
                    "0679853065"
                ],
                "publish_date": "1994",
                "works": [
                    {
                        "key": "/works/OL15137348W"
                    }
                ]
            },
            {
                "number_of_pages": 264,
                "covers": [
                    257861
                ],
                "lc_classifications": [
                    "PS3554.A934923 W35 1999"
                ],
                "latest_revision": 7,
                "ocaid": "walkingtour00davi",
                "uri_descriptions": [
                    "Sample text",
                    "Reading group guide",
                    "Publisher description"
                ],
                "source_records": [
                    "ia:walkingtour00davi"
                ],
                "title": "The walking tour",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "publish_country": "mau",
                "by_statement": "Kathryn Davis.",
                "type": {
                    "key": "/type/edition"
                },
                "uris": [
                    "http://www.loc.gov/catdir/samples/hm051/99035547.html",
                    "http://www.houghtonmifflinbooks.com/readers_guides/davis_guide.shtml",
                    "http://www.loc.gov/catdir/description/hm022/99035547.html"
                ],
                "revision": 7,
                "publishers": [
                    "Houghton Mifflin"
                ],
                "ia_box_id": [
                    "IA170301"
                ],
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-04-21T10:11:29.145508"
                },
                "key": "/books/OL42528M",
                "authors": [
                    {
                        "key": "/authors/OL27777A"
                    }
                ],
                "publish_places": [
                    "Boston"
                ],
                "pagination": "264 p. ;",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "url": [
                    "http://www.loc.gov/catdir/samples/hm051/99035547.html",
                    "http://www.houghtonmifflinbooks.com/readers_guides/davis_guide.shtml",
                    "http://www.loc.gov/catdir/description/hm022/99035547.html"
                ],
                "identifiers": {
                    "goodreads": [
                        "3005453"
                    ],
                    "librarything": [
                        "120289"
                    ]
                },
                "lccn": [
                    "99035547"
                ],
                "isbn_10": [
                    "0395945410"
                ],
                "publish_date": "1999",
                "works": [
                    {
                        "key": "/works/OL16501715W"
                    }
                ]
            },
            {
                "identifiers": {
                    "goodreads": [
                        "1246473"
                    ],
                    "librarything": [
                        "3905873"
                    ]
                },
                "subtitle": "a novel",
                "subject_place": [
                    "Richmond (Va.)"
                ],
                "covers": [
                    6658932,
                    424769
                ],
                "ia_loaded_id": [
                    "cruelunusualnove00corn"
                ],
                "lc_classifications": [
                    "PS3553.O692 C78 1993"
                ],
                "latest_revision": 16,
                "ocaid": "cruelunusualnov00corn",
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part22.dat:170638217:1064",
                    "marc:CollingswoodLibraryMarcDump10-27-2008/Collingswood.out:11878415:2869",
                    "marc:marc_loc_updates/v37.i50.records.utf8:2658198:1281",
                    "ia:cruelunusualnov00corn",
                    "ia:cruelunusualnovecorn",
                    "ia:cruelunusualnove00corn",
                    "ia:cruelunusualno00corn"
                ],
                "title": "Cruel & unusual",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Scarpetta, Kay (Fictitious character) -- Fiction",
                    "Medical examiners (Law) -- Fiction",
                    "Forensic pathologists -- Fiction",
                    "Women physicians -- Fiction",
                    "Serial murders -- Fiction",
                    "Richmond (Va.) -- Fiction"
                ],
                "publish_country": "nyu",
                "by_statement": "Patricia D. Cornwell.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 16,
                "other_titles": [
                    "Cruel and unusual."
                ],
                "publishers": [
                    "Scribner's",
                    "Maxwell Macmillan Canada",
                    "Maxwell Macmillan International"
                ],
                "ia_box_id": [
                    "ia108501"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-04-08T07:04:08.178548"
                },
                "key": "/books/OL1728424M",
                "authors": [
                    {
                        "key": "/authors/OL25793A"
                    }
                ],
                "publish_places": [
                    "New York",
                    "Toronto"
                ],
                "pagination": "356 p. ;",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "notes": {
                    "type": "/type/text",
                    "value": "Spine title: Cruel and unusual."
                },
                "number_of_pages": 356,
                "lccn": [
                    "92032684"
                ],
                "isbn_10": [
                    "0684195305"
                ],
                "publish_date": "1993",
                "works": [
                    {
                        "key": "/works/OL134375W"
                    }
                ]
            },
            {
                "number_of_pages": 480,
                "subtitle": "A Novel",
                "weight": "9.6 ounces",
                "covers": [
                    4698487
                ],
                "latest_revision": 8,
                "ocaid": "breaknobones00kath",
                "edition_name": "Reprint edition",
                "source_records": [
                    "ia:breaknobone00reic"
                ],
                "title": "Break No Bones",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Suspense",
                    "Thrillers",
                    "Fiction / Suspense",
                    "Fiction",
                    "Fiction - Espionage / Thriller",
                    "Mystery/Suspense"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "physical_dimensions": "7.3 x 4.1 x 1.4 inches",
                "revision": 8,
                "publishers": [
                    "Pocket"
                ],
                "physical_format": "Paperback",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-04-08T05:15:14.526683"
                },
                "key": "/books/OL7950349M",
                "authors": [
                    {
                        "key": "/authors/OL24769A"
                    }
                ],
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-29T15:03:11.581851"
                },
                "identifiers": {
                    "librarything": [
                        "1074514"
                    ],
                    "goodreads": [
                        "1139811"
                    ]
                },
                "isbn_13": [
                    "9780743453035"
                ],
                "isbn_10": [
                    "0743453034"
                ],
                "publish_date": "August 21, 2007",
                "works": [
                    {
                        "key": "/works/OL14870349W"
                    }
                ],
                "first_sentence": "NEVER FAILS. YOU'RE WRAPPING UP THE OPERATION WHEN SOMEone blunders onto the season's big score."
            },
            {
                "number_of_pages": 377,
                "covers": [
                    6793280
                ],
                "lc_classifications": [
                    "PS3563.A2364 S59 2001"
                ],
                "latest_revision": 6,
                "ocaid": "16lighthouseroad00maco",
                "ia_box_id": [
                    "IA116320"
                ],
                "edition_name": "[Book club ed.].",
                "source_records": [
                    "ia:16lighthouseroad00maco",
                    "ia:16lighthouseroad00maco_0"
                ],
                "title": "16 Lighthouse Road",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Fiction",
                    "Protected DAISY"
                ],
                "publish_country": "onc",
                "by_statement": "Debbie Macomber",
                "oclc_numbers": [
                    "47851651"
                ],
                "type": {
                    "key": "/type/edition"
                },
                "revision": 6,
                "other_titles": [
                    "Sixteen Lighthouse Road"
                ],
                "publishers": [
                    "MIRA Books"
                ],
                "description": "You don't know me yet, but in a few hours that's going to change. You see, I'm inviting you to my home and my town of Cedar Cove because I want you to meet my family, friends and neighbors.",
                "full_title": "16 Lighthouse Road",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-03-24T18:25:31.344713"
                },
                "key": "/books/OL24739578M",
                "publish_places": [
                    "Don Mills, Ont"
                ],
                "pagination": "377 p. ;",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2011-07-07T01:46:05.034946"
                },
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "identifiers": {},
                "isbn_13": [
                    "9780739420232",
                    "9781551668307"
                ],
                "subject_places": [
                    "Washington (State)"
                ],
                "isbn_10": [
                    "0739420232",
                    "1551668300"
                ],
                "publish_date": "2001",
                "works": [
                    {
                        "key": "/works/OL15829031W"
                    }
                ]
            },
            {
                "identifiers": {
                    "goodreads": [
                        "3846387"
                    ],
                    "librarything": [
                        "126123"
                    ]
                },
                "subject_place": [
                    "Massachusetts"
                ],
                "covers": [
                    6502471
                ],
                "lc_classifications": [
                    "PS3561.E398 F7 1983"
                ],
                "latest_revision": 10,
                "ocaid": "fridayrabbislept00keme",
                "ia_box_id": [
                    "IA107922"
                ],
                "edition_name": "Large print ed.",
                "genres": [
                    "Fiction."
                ],
                "source_records": [
                    "ia:fridayrabbislept00keme"
                ],
                "title": "Friday the rabbi slept late",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Small, David (Fictitious character) -- Fiction.",
                    "Rabbis -- Fiction.",
                    "Large type books.",
                    "Massachusetts -- Fiction."
                ],
                "publish_country": "mau",
                "by_statement": "Harry Kemelman",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 10,
                "publishers": [
                    "G.K. Hall"
                ],
                "description": "Minor scanning error: pp. 190-191 are duplicated, pp. 206-207 are missing.",
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-03-18T15:03:14.312667"
                },
                "key": "/books/OL3164331M",
                "authors": [
                    {
                        "key": "/authors/OL451063A"
                    }
                ],
                "publish_places": [
                    "Boston, Mass"
                ],
                "pagination": "339 p. ;",
                "classifications": {},
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "lccn": [
                    "83006236"
                ],
                "number_of_pages": 339,
                "dewey_decimal_class": [
                    "813/.54"
                ],
                "isbn_10": [
                    "0816135371"
                ],
                "publish_date": "1983",
                "works": [
                    {
                        "key": "/works/OL2954857W"
                    }
                ]
            },
            {
                "number_of_pages": 722,
                "subtitle": "a life",
                "subject_place": [
                    "United States"
                ],
                "covers": [
                    473643
                ],
                "ia_loaded_id": [
                    "marktwainlife00powe"
                ],
                "lc_classifications": [
                    "PS1331 .P67 2005"
                ],
                "latest_revision": 10,
                "ocaid": "marktwainlife00powe",
                "subject_time": [
                    "19th century"
                ],
                "genres": [
                    "Biography."
                ],
                "source_records": [
                    "marc:marc_records_scriblio_net/part15.dat:146764484:823",
                    "marc:marc_ithaca_college/ic_marc.mrc:209102911:845",
                    "ia:marktwainlife00powe",
                    "ia:marktwainlife00powe_0"
                ],
                "title": "Mark Twain",
                "languages": [
                    {
                        "key": "/languages/eng"
                    }
                ],
                "subjects": [
                    "Twain, Mark, 1835-1910",
                    "Authors, American -- 19th century -- Biography",
                    "Humorists, American -- 19th century -- Biography",
                    "Journalists -- United States -- Biography"
                ],
                "publish_country": "nyu",
                "by_statement": "Ron Powers.",
                "type": {
                    "key": "/type/edition"
                },
                "revision": 10,
                "publishers": [
                    "Free Press"
                ],
                "last_modified": {
                    "type": "/type/datetime",
                    "value": "2015-02-26T06:04:30.887112"
                },
                "key": "/books/OL3425430M",
                "authors": [
                    {
                        "key": "/authors/OL73501A"
                    }
                ],
                "publish_places": [
                    "New York"
                ],
                "pagination": "xi, 722 p. :",
                "created": {
                    "type": "/type/datetime",
                    "value": "2008-04-01T03:28:50.625462"
                },
                "dewey_decimal_class": [
                    "818/.409",
                    "B"
                ],
                "notes": {
                    "type": "/type/text",
                    "value": "Includes bibliographical references (p. 683-689) and index."
                },
                "identifiers": {
                    "goodreads": [
                        "856959"
                    ],
                    "librarything": [
                        "134319"
                    ]
                },
                "isbn_13": [
                    "9780743248990"
                ],
                "lccn": [
                    "2005048816"
                ],
                "isbn_10": [
                    "0743248996"
                ],
                "publish_date": "2005",
                "works": [
                    {
                        "key": "/works/OL849825W"
                    }
                ]
            },
        ],

        getBooks: function (){
            return factory.books;
        },
        getBook: function(id){
            return factory.books[id];
        },

        addBook: function (book) {
            book.onOneLine =  booksCount + 1 + ' - ' + book.title + ' - ' + book.author + ' - ' + book.edition + ' - ' +book.date + ' - ' + book.type + ' - ' + book.kind + ' - ' + book.number;

            var bookToAdd = {
                "title": book.title,
                "subtitle": book.subtitle,
                "by_statement": book.author,
                "publishers":
                    [
                        book.edition
                    ],
                "publish_date": book.date,
                "description": book.description,
                "number_of_pages": book.numberOfPages
                
            };
            this.books.push(bookToAdd);
            booksInfos.push(book);
            book.addOrder = booksCount;
            booksCount++;
            //alert(book.onOneLine());
        },

        modifyBook: function (index, newValue) {
            booksInfos[index] = newValue;
            booksInfos[index].onOneLine =  booksInfos[index].addOrder + 1 + ' - ' + booksInfos[index].title + ' - ' + booksInfos[index].author + ' - ' + booksInfos[index].edition + ' - ' +booksInfos[index].date + ' - ' + booksInfos[index].type + ' - ' + booksInfos[index].kind + ' - ' + booksInfos[index].number;
        },

        getBooksInfos: function () {
            return booksInfos;
        }

    };
    for(var current in factory.books)  {
        current.onOneLine = current.title + ' - ' + current.authors + ' - ' + current.publishers + ' - ' + current.published_date;
    }
    console.log(factory);
    return factory;
});