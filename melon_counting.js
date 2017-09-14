
// Our customers are going to buy lots of melons!

var melonsToAdd = ['Ogen', 'Horned Melon', 'Watermelon', 'Casaba',
                 'Sharlyn', 'Xigua', 'Ogen', 'Christmas', 'Christmas',
                 'Christmas', 'Christmas', 'Watermelon', 'Sharlyn', 'Xigua',
                 'Cantaloupe', 'Christmas', 'Watermelon', 'Christmas',
                 'Sharlyn', 'Christmas', 'Cantaloupe', 'Casaba', 'Cantaloupe',
                 'Santa Claus', 'Horned Melon', 'Watermelon', 'Ogen',
                 'Horned Melon', 'Cantaloupe', 'Xigua', 'Horned Melon', 'Sharlyn',
                 'Horned Melon', 'Sharlyn', 'Cantaloupe', 'Christmas',
                 'Horned Melon', 'Horned Melon', 'Horned Melon', 'Xigua', 'Xigua',
                 'Watermelon', 'Cantaloupe', 'Casaba', 'Cantaloupe', 'Casaba',
                 'Watermelon', 'Santa Claus', 'Casaba']


function countMelons(melonArray){
    //"""Takes in a list, and returns a dictionary with melon counts."""

    var melonCounts = {};
    var melon;

    for (i = 0; i < melonArray.lenght; i++) {
        if (melon in melonCounts) {
    
            melonCounts[melon]++;
        }

        else {
            melonCounts[melon] = 1;
        }
    }

    return melonCounts;
}

var melonFunction = countMelons(melonsToAdd);

console.log(melonFunction);