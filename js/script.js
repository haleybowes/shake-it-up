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
            name: 'Negroni',
            bitter: true,
            sweet: true,
            fruity: false,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false,
            
        },
        {
            name: 'Pimms Cup',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: true,
        },
        {
            name: 'Elvis',
            bitter: true,
            sweet: false,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false,
        }, 
        {
            name: 'Gimlet',
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
            name: 'Margarita',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false,
        },
        {
            name: 'Pineapple Hibiscus',
            bitter: false,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: true,
        },
        {
            name: 'Siesta',
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
            name: 'Laureate',
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
            name: 'Harveys',
            bitter: false,
            sweet: true,
            fruity: true,
            rocks: false,
            straightUp: true,
            citrus: true,
            herbs: false,
        },
        {
            name: 'French Martini',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: false,
            straightUp: true,
            citrus: true,
            herbs: true,
        },
        {
            name: 'Moscow Mule',
            bitter: true,
            sweet: true,
            fruity: false,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false,
        },
        {
            name: 'Green Goddess',
            bitter: true,
            sweet: true,
            fruity: false,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: true,
        },
        {
            name: 'Salty Dog',
            bitter: true,
            sweet: false,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false,
        },
        {
            name: 'Vesper Martini',
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
            name: 'Paper Plane',
            bitter: true,
            sweet: true,
            fruity: false,
            rocks: false,
            straightUp: true,
            citrus: true,
            herbs: false
        },
        {
            name: 'Bourbon Punch',
            bitter: false,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: false
        },
        {
            name: 'Orange Mint Julip',
            bitter: true,
            sweet: true,
            fruity: true,
            rocks: true,
            straightUp: false,
            citrus: true,
            herbs: true
        },
        {
            name: 'Sage Derby',
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
                    '<p class="finishForm"><em>Please fill out all fields to get your cocktail!</em></p>'
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
        
        if (finalCocktail.name === 'Pimms Cup') {
            $('.finalCocktailDescision').append(
               `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>2 ounces Pimm’s No. 1 Cup</li>
                            <li>1 ounce dry gin</li>
                            <li>Lemonade</li>
                            <li>Fresh fruit to garnish (e.g. cucumber, lemon, lime, strawberries, mint, cucumber)</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                        Combine Pimms and Gin in a glass over ice. Top with lemonade and garnish as you wish.
                        </p>
                        <p>Recipe courtesy of <a href="https://mixthatdrink.com/pimms-no-1/">Mix That Drink</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    
        
        if (finalCocktail.name === 'Negroni') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>1 1/2 ounces gin</li>
                            <li>1 ounce sweet vermouth</li>
                            <li>3/4 ounce Campari</li>
                            <li>1 orange</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                        Stir gin, vermouth, and Campari in an ice-filled mixing glass until very cold, about 30 seconds. Strain cocktail through a Hawthorne strainer or a slotted spoon into an ice-filled rocks glass. Garnish with an orange slice, twisting to express oils
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/negroni-2">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'Elvis') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>3 ounces fresh pink grapefruit juice</li>
                            <li>1 1/2 ounces London dry gin</li>
                            <li>1/4 ounce St-Germain (elderflower liqueur)</li>
                            <li>India Pale Ale (for serving)</li>
                            <li>Grapefruit twist (for serving)</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                       Combine grapefruit juice, gin, and liqueur in a cocktail shaker. Fill shaker with ice and shake until outside of shaker is frosty, about 30 seconds. Strain into a rocks glass filled with ice and top off with ale. Garnish with grapefruit twist.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/the-elvis">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'Gimlet') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>2 ounces gin</li>
                            <li>3/4 ounce fresh lime juice</li>
                            <li>3/4 ounce simple syrup</li>
                            <li>Cucumber wheel or lime wedge, for garnish</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                      Fill a cocktail shaker with ice and pour in the gin, lime juice and simple syrup. Stir vigorously with a long cocktail spoon until very cold. Strain into a chilled coupe or martini glass, or strain over a rocks glass filled with ice, depending on preference. Garnish with the lime wedge and serve immediately.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.foodnetwork.com/recipes/geoffrey-zakarian/classic-gin-gimlet-2341489">The Foot Network</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        // end of gin cocktails / start of tequila cocktails

        if (finalCocktail.name === 'Margarita') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>Kosher salt</li>
                            <li>2 lime slices or wedges</li>
                            <li>1/4 cup tequila blanco</li>
                            <li>1 tablespoon agave syrup</li>
                            <li>1/4 cup fresh lime juice</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                     Pour some kosher salt into a small dish. Rub 1 lime slice over half the rim of a glass. Dip rim of glass into salt. Combine tequila, agave syrup, and juice in a cocktail shaker; fill with ice and shake well. Strain into prepared glass. Garnish with second lime slice.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/margarita">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'Pineapple Hibiscus') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>1 1/4 cups sugar</li>
                            <li>1 pineapple, peeled, cut into 1 1/2-inch pieces</li>
                            <li>6 tablespoons distilled white vinegar</li>
                            <li>1/4 cup dried hibiscus flowers</li>
                            <li>1 jalapeño, thinly sliced into rounds</li>
                            <li>5 sprigs mint</li>
                            <li>1 lime, thinly sliced into wheels</li>
                            <li>2 cups tequila</li>
                            <li>1 cup fresh lime juice</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                     Bring sugar and 1 cup water to a boil in a medium saucepan and cook, stirring, until sugar dissolves, about 3 minutes. Add pineapple, reduce heat, and simmer 10 minutes. Remove from heat and let sit 30 minutes to infuse syrup with pineapple flavor. Strain into a small bowl; stir in vinegar. Cover and chill shrub until cold, about 30 minutes. Cover and chill pineapple pieces until ready to use.<br>
                    Meanwhile, place hibiscus in a small bowl and pour 1¼ cups boiling water over. Cover and let steep 10 minutes. Strain tea into an airtight container; discard flowers. Cover tea and chill until cold, about 30 minutes.<br>
                    Set aside 8 slices jalapeño and 8 pieces pineapple for serving. Stir mint, lime wheels, tequila, lime juice, remaining jalapeño and pineapple, 1 cup shrub, and 1 cup tea in a large pitcher and chill at least 1 hour. Serve in ice-filled rocks glasses garnished with reserved jalapeño slices and pineapple pieces.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/pineapple-hibiscus-cocktail">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'Siesta') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>2 ounces tequila blanco</li>
                            <li>3/4 ounce fresh lime juice</li>
                            <li>3/4 ounce simple syrup</li>
                            <li>1/2 ounce Campari</li>
                            <li>1/2 ounce fresh grapefruit juice</li>
                            <li>Lime wheel (for serving)</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                        Combine tequila, lime juice, simple syrup, Campari, and grapefruit juice in a cocktail shaker. Fill shaker with ice, cover, and shake vigorously until outside of shaker is very cold, about 20 seconds. Strain cocktail through a Hawthorne strainer or a slotted spoon into a chilled coupe glass. Garnish with lime wheel.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/siesta">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'elDiablo') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>3 ounces tequila blanco</li>
                            <li>1 1/2 ounce fresh lime juice</li>
                            <li>1 1/2 ounce crème de cassis (black-currant liqueur)</li>
                            <li>Ginger beer</li>
                            <li>Thyme sprig</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                        Combine tequila, lime juice, and crème de cassis in a highball glass. Fill glass with ice, then top off with ginger beer. Garnish with thyme sprig.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/el-diablo">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }   
        

        if (finalCocktail.name === 'Laureate') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>4 orange slices</li>
                            <li>40 whole cloves</li>
                            <li>1 1/2 cups water</li>
                            <li>1/3 cup dried hibiscus flowers</li>
                            <li>4 small bay leaves</li>
                            <li>1 cup añejo tequila (such as Gran Centenario)</li>
                            <li>4 tablespoons agave nectar</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                        Stud each orange slice with 10 cloves. Bring 1 1/2 cups water to simmer in small saucepan. Remove from heat. Add hibiscus flowers; cover and let steep 2 minutes. Strain hibiscus tea into measuring cup; cover to keep hot. Run 4 brandy snifters under hot water until snifters are warm. Place 1 clove-studded orange slice and 1 bay leaf into each snifter; pour 1/4 cup tequila, then 1/4 cup hot hibiscus tea into each. Stir 1 tablespoon agave nectar into each. Serve.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/the-laureate">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        // end of tequila cocktails / start of vodka cocktails

        if (finalCocktail.name === 'Harveys') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>1 1/2 ounces vodka</li>
                            <li>4 ounces orange juice</li>
                            <li>1/2 ounce Galliano</li>
                            <li>1 orange slice for garnish</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                        In a highball glass almost filled with ice cubes, combine the vodka and orange juice. Stir well. Float the Galliano on top and garnish with orange slice
                        </p>
                        <p>Recipe courtesy of <a href="https://www.epicurious.com/recipes/food/views/harvey-wallbanger-200285">Epicurious</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'French Martini') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>2 ounces vodka</li>
                            <li>1 ounce Chambord liqueur</li>
                            <li>3 ounces pineapple juice</li>
                            <li>Pineapple wedge, to serve</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                        Shake the vodka, Chambord and pineapple juice with ice really hard until the pineapple juice froths up a bit, then strain into the glass. Garnish with the pineapple wedge.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bbcgoodfood.com/recipes/french-martini">BBC</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'Moscow Mule') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>1/4 cup club soda</li>
                            <li>1 1/2 ounces vodka</li>
                            <li>1/2 ounce ginger syrup</li>
                            <li>2 lime wedges (for garnish)</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                        Pour club soda, vodka, and ginger syrup into a Moscow Mule mug filled with ice; stir gently to combine. Garnish with lime wedges.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/moscow-mule-2">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'Green Goddess') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>8 ounces vodka</li>
                            <li>1 bag green tea</li>
                            <li>2 cups (packed) baby arugula</li>
                            <li>1/2 cup sugar</li>
                            <li>1 English hothouse cucumber</li>
                            <li>1 jalapeño, quartered, seeded</li>
                            <li>4 ounces fresh lemon juice</li>
                            <li>Mint sprigs (for serving)</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                        Combine vodka and tea in a jar. Cover and let infuse 8 hours. For each cocktail, finely grate one-fourth of remaining cucumber directly into a cocktail shaker. Add a piece of jalapeño and muddle until chile is broken into small pieces. Add 2 oz. green-tea vodka, 1 oz. arugula syrup, and 1 oz. lemon juice to shaker. Fill with ice and shake vigorously until outside of shaker is frosty, about 30 seconds. Strain cocktail into a Collins glass filled with ice and garnish with mint cucumber slices.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/green-goddess-cocktail">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'Salty Dog') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>Coarse kosher salt</li>
                            <li>Ice cubes</li>
                            <li>1/2 cup vodka or gin</li>
                            <li>3/4 cup fresh grapefruit juice</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                        Pour coarse salt onto small plate. Moisten rims of 2 highball glasses. Gently dip rims into salt to coat lightly. Fill glasses with ice cubes. Pour 1/4 cup vodka over ice in each glass. Divide grapefruit juice between glasses and serve.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/the-salty-dog">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'Vesper Martini') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>1 ounce premium vodka </li>
                            <li>3 ounces Plymouth Gin</li>
                            <li>1/2 ounce Lillet Blanc</li>
                            <li>1 lemon</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                       Holding a large (preferably 1") cube of ice in the palm of your hand, use the back of a stirring spoon to crack it into large pieces; place in a mixing glass. Repeat with enough ice to fill glass. Add gin, vodka, and Lillet Blanc and, using a bar spoon, rapidly stir 50 times in a circular motion (the outside of the shaker will become very cold and frosty). Strain martini through a Hawthorne strainer (or a large slotted spoon) into a chilled coupe glass. Strain any excess cocktail into a sidecar (or a small glass in a bowl of ice) set over ice. Using a small knife, remove a 1" piece of peel from lemon; it should be stiff enough to provide some resistance (a little white pith is okay). Twist peel over drink to express oils, then rub around rim of glass. Float peel, yellow side up, in martini.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/vesper-martini">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        // end of vodka cocktails / start of whiskey cocktails

        if (finalCocktail.name === 'Paper Plane') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>1 1/2 ounces amaro</li>
                            <li>1 1/2 ounces aperol</li>
                            <li>1 1/2 ounce bourbon</li>
                            <li>1 1/2 ounce lemon juice</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                       Combine amaro, Aperol, bourbon, and lemon juice in a cocktail shaker. Fill with ice and shake vigorously until outside of shaker is frosty, about 20 seconds. Strain into 2 coupe glasses.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/paper-plane-cocktail">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'Bourbon Punch') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>6 ounces bourbon</li>
                            <li>3 ounces fresh grapefruit juice</li>
                            <li>2 ounces sweet vermouth</li>
                            <li>1 1/3 ounces grenadine</li>
                            <li>Lemon twists (for serving)</li>
                            <li>Maraschino cherries (for serving)</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                       Combine bourbon, grapefruit juice, vermouth, and grenadine in a cocktail shaker filled with ice and shake vigorously until outside of shaker is frosty, about 20 seconds. Strain into ice-filled rocks glasses. Garnish each with a lemon twist and a cherry
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/backwoods-bourbon-punch">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'Orange Mint Julip') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>1/2 orange, cut into 4 pieces</li>
                            <li>1 bunch mint</li>
                            <li>Orange bitters</li>
                            <li>8 ounces bourbon</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                       For each cocktail, muddle 1 piece of orange, a small handful mint sprigs, 1 oz. orange syrup, and a few dashes orange bitters in a double Old Fashioned glass or a julep cup. Add 2 oz. bourbon and stir to combine. Fill glass with crushed ice and garnish with more mint.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/orange-mint-julep">Bon Appetit</a>.</p>
                    </div>
                </div>
            </div>
            `);
        }    

        if (finalCocktail.name === 'Sage Derby') {
            $('.finalCocktailDescision').append(
                `
            <div class="finalCocktail">
               <h2>Your cocktail is</h2>
               <h1 class="finalCocktailName">${finalCocktail.name}</h1>
               <div class="cocktailMain">
                    <div class="ingredients">
                        <h3>Ingredients</h3>
                        <ul class="shakeit">
                            <li>2 ounces rye whiskey</li>
                            <li>1 ounce fresh red or pink grapefruit juice</li>
                            <li>1/2 ounce fresh lime juice</li>
                            <li>1/4 ounce agave syrup</li>
                            <li>2 dashes bitters</li>
                            <li>1 fresh sage leaf</li>
                        </ul>
                    </div>
                    <div class="cocktailInstructions">
                        <h3>Recipe Preparation</h3>
                        <p>
                       Combine whiskey, grapefruit juice, lime juice, agave, and bitters in a cocktail shaker. Fill shaker with ice and shake until outside is frosty, about 30 seconds; strain into a coupe glass. Slap sage leaf between your palms until fragrant; float on top of cocktail.
                        </p>
                        <p>Recipe courtesy of <a href="https://www.bonappetit.com/recipe/orange-mint-julep">Bon Appetit</a>.</p>
                    </div>
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


// shake animation on form submit

$(function () {
    $('.submitButton').on('click', function() {
        $(this).addClass('shake-lr');
        $('.shakerStyle').addClass('shake-lr');


    });
});






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




