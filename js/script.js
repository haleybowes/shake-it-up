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
            herbs: false
        }, 
        {
            name: 'gimlet',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: true,
            citrus: true,
            herbs: true
        },             
    ]    
    ,
    tequila: [
        {
            name: 'tequila1',
            bitter: true,
            sweet: false,
            fruity: false,
        },
        {
            name: 'tequila2',
            bitter: false,
            sweet: true,
            fruity: false,
        },
        {
            name: 'tequila3',
            bitter: false,
            sweet: false,
            fruity: true,
        },       
    ],

    vodka: [
        {
            name: 'vodka1',
            bitter: true,
            sweet: false,
            fruity: false,
        },
        {
            name: 'vodka2',
            bitter: false,
            sweet: true,
            fruity: false,
        },
        {
            name: 'vodka3',
            bitter: false,
            sweet: false,
            fruity: true,
        },       
    ],
    whiskey: [
        {
            name: 'paperplane',
            bitter: true,
            sweet: true,
            fruity: false,
            rocks: false,
            straightUp: true,
            fruit: true,
            herb: false
        },
        {
            name: 'whiskey2',
            bitter: false,
            sweet: true,
            fruity: false,
        },
        {
            name: 'whiskey3',
            bitter: false,
            sweet: false,
            fruity: true,
        },
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
        
        
        // console.log(flavour);
        
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
                // console.log(garnishOption)
            }
        }

        const finalCocktail = getRandomCocktail(garnishOption);
        console.log(finalCocktail.name);
        
        if (finalCocktail.name === 'pimms') {
            $('.finalCocktailDescision').append(
               `<h1>${finalCocktail.name}</h1>
                <h2 class="shakeit">Shake it up!</h2>
            `);
        }         
    });




});



// clear the radio buttons

$(function () { 

    $('button').on('click', function(e){
        e.preventDefault();

        $('form').trigger("reset");
        $('.finalCocktailDescision').empty();

    });
});




