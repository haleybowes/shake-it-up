// smooth scroll
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); $target.focus();
                        };
                    });
            }
        }
    });

// smooth scroll end

// 
const cocktailLiquor = {
    gin: [
        {
            name: 'negroni',
            bitter: true,
            sweet: true,
            fruity: false,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false,
            
        },
        {
            name: 'pimms',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: true,
        },
        {
            name: 'elvis',
            bitter: true,
            sweet: false,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false,
        }, 
        {
            name: 'gimlet',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: true,
            citrus: true,
            herbs: true,
        }             
    ],
    tequila: [
        {
            name: 'marg',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false,
        },
        {
            name: 'pinneapleHibiscus',
            bitter: false,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: true,
        },
        {
            name: 'siesta',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: false,
            straightUp: true,
            citrus: true,
            herbs: false,
        },
        {
            name: 'elDiablo',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: false,
            herbs: true,
        },
        {
            name: 'laureate',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: false,
            straightUp: true,
            citrus: true,
            herbs: true,
        }                            
    ],

    vodka: [
        {
            name: 'harveys',
            bitter: false,
            sweet: true,
            fruity: true,
            rocks: false,
            straightUp: true,
            citrus: true,
            herbs: false,
        },
        {
            name: 'frenchMartini',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: false,
            straightUp: true,
            citrus: true,
            herbs: true,
        },
        {
            name: 'moscowMule',
            bitter: true,
            sweet: true,
            fruity: false,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false,
        },
        {
            name: 'greengoddess',
            bitter: true,
            sweet: true,
            fruity: false,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: true,
        },
        {
            name: 'saltydog',
            bitter: true,
            sweet: false,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false,
        },
        {
            name: 'vesper',
            bitter: true,
            sweet: false,
            fruity: true,
            rocks: false,
            straightUp: true,
            citrus: true,
            herbs: false,
        }                      
    ],
    whiskey: [
        {
            name: 'paperplane',
            bitter: true,
            sweet: true,
            fruity: false,
            rocks: false,
            straightUp: true,
            citrus: true,
            herbs: false
        },
        {
            name: 'bourbonPunch',
            bitter: false,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false
        },
        {
            name: 'orangeMintJulip',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: true
        },
        {
            name: 'sageDerby',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: false,
            straightUp: true,
            citrus: true,
            herbs: true
        }
    ]
}

const getRandomCocktail = function (array) {
    const randomCocktail = Math.floor(Math.random() * array.length);
    return array[randomCocktail];
}

$(function (){

    $('form').on('submit', function(e) {
        e.preventDefault();

        const liquor = $('input[name=liquorChoice]:checked').val();
        const flavour = $('input[name=flavour]:checked').val();
        const ice = $('input[name=ice]:checked').val();
        const garnish = $('input[name=garnish]:checked').val();

        // make it required to fill out all fields in order to get a cocktail - inform user upon submit that a field is missing
        if (!$('input[name=liquorChoice]:checked').val() ||
            !$('input[name=flavour]:checked').val() ||
            !$('input[name=ice]:checked').val() ||
            !$('input[name=garnish]:checked').val()
            ){
                $('.finishForm').append(
                    '<p>Please fill out all fields to get your cocktail!</p>'
                );
            };


        // filter the cocktail choices based on the users liquor choice
        const liquorChoice = cocktailLiquor[liquor];
        // console.log(liquorChoice)

        // if flavour is = true then 

        const liquorOption = [];
        
        for (let i = 0; i < liquorChoice.length; i++) {
            const storedFlavour = liquorChoice[i];
           
                if (storedFlavour[flavour] === true) {
                    liquorOption.push(storedFlavour);
                }
            }
        
        const iceOption = [];

        for (let i = 0; i < liquorOption.length; i++) {
            const storedIce = liquorOption[i];

            if(storedIce[ice] === true) {
                iceOption.push(storedIce);
            }
        }

        const garnishOption = [];

        for (let i = 0; i < iceOption.length; i++) {
            const storedGarnish = iceOption[i];
            if (storedGarnish[garnish] === true) {
                garnishOption.push(storedGarnish);
                console.log(garnishOption)
            }
        }

        const finalCocktail = getRandomCocktail(garnishOption);
        console.log(finalCocktail.name);
        
        if (finalCocktail.name === 'pimms') {
            $('.finalCocktailDescision').append(
               `<h1>${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h2>Ingredients</h2>
                        <ul class="shakeit">
                            <li>Ingredient 1</li>
                            <li>Ingredient 2</li>
                            <li>Ingredient 3</li>
                            <li>Ingredient 4</li>
                        </ul>
                    </div>
                </div>
            `);
        }         
    });

});

// clear the radio buttons on 'play again'

$(function () { 

    $('button').on('click', function(e){
        e.preventDefault();

        $('form').trigger("reset");
        $('.finalCocktailDescision').empty();
        $('.finishForm').empty();

    });
});


// button move up on click

// $(function () {
//     $('input[type=radio]').on('click', function(e) {
//         e.preventDefault();

//     });
// });




// twitter hookup

window.twttr = (function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function (f) {
        t._e.push(f);
    };
    return t;
}(document, "script", "twitter-wjs"));




