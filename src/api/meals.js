import fetch from 'unfetch';

const BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

const pasta = {
    meals: [
        {
            idMeal: '52777',
            strMeal: 'Mediterranean Pasta Salad',
            strDrinkAlternate: null,
            strCategory: 'Seafood',
            strArea: 'Italian',
            strInstructions:
                'Bring a large saucepan of salted water to the boil\r\nAdd the pasta, stir once and cook for about 10 minutes or as directed on the packet.\r\nMeanwhile, wash the tomatoes and cut into quarters. Slice the olives. Wash the basil.\r\nPut the tomatoes into a salad bowl and tear the basil leaves over them. Add a tablespoon of olive oil and mix.\r\nWhen the pasta is ready, drain into a colander and run cold water over it to cool it quickly.\r\nToss the pasta into the salad bowl with the tomatoes and basil.\r\nAdd the sliced olives, drained mozzarella balls, and chunks of tuna. Mix well and let the salad rest for at least half an hour to allow the flavours to mingle.\r\nSprinkle the pasta with a generous grind of black pepper and drizzle with the remaining olive oil just before serving.',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg',
            strTags: 'Pasta,Baking',
            strYoutube: 'https://www.youtube.com/watch?v=e52IL8zYmaE',
            strIngredient1: 'mozzarella balls',
            strIngredient2: 'baby plum tomatoes',
            strIngredient3: 'fresh basil',
            strIngredient4: 'farfalle',
            strIngredient5: 'extra virgin olive oil',
            strIngredient6: 'Green Olives',
            strIngredient7: 'tuna',
            strIngredient8: 'salt',
            strIngredient9: 'pepper',
            strIngredient10: '',
            strIngredient11: '',
            strIngredient12: '',
            strIngredient13: '',
            strIngredient14: '',
            strIngredient15: '',
            strIngredient16: null,
            strIngredient17: null,
            strIngredient18: null,
            strIngredient19: null,
            strIngredient20: null,
            strMeasure1: '200 g',
            strMeasure2: '250 g',
            strMeasure3: '1  bunch',
            strMeasure4: '350 g',
            strMeasure5: '3  tablespoons',
            strMeasure6: '40 g',
            strMeasure7: '200 g',
            strMeasure8: 'to taste',
            strMeasure9: 'to taste',
            strMeasure10: '',
            strMeasure11: '',
            strMeasure12: '',
            strMeasure13: '',
            strMeasure14: '',
            strMeasure15: '',
            strMeasure16: null,
            strMeasure17: null,
            strMeasure18: null,
            strMeasure19: null,
            strMeasure20: null,
            strSource: 'https://thelemonsqueezy.com/recipe/mediterranean-pasta-salad/',
            dateModified: null,
        },
    ],
};

const chicken = {
    meals: [
        {
            strMeal: 'Brown Stew Chicken',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg',
            idMeal: '52940',
        },
        {
            strMeal: 'Chick-Fil-A Sandwich',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg',
            idMeal: '53016',
        },
        {
            strMeal: 'Chicken & mushroom Hotpot',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg',
            idMeal: '52846',
        },
        {
            strMeal: 'Chicken Alfredo Primavera',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg',
            idMeal: '52796',
        },
        {
            strMeal: 'Chicken Basquaise',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg',
            idMeal: '52934',
        },
        {
            strMeal: 'Chicken Congee',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/1529446352.jpg',
            idMeal: '52956',
        },
        {
            strMeal: 'Chicken Couscous',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/qxytrx1511304021.jpg',
            idMeal: '52850',
        },
        {
            strMeal: 'Chicken Enchilada Casserole',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/qtuwxu1468233098.jpg',
            idMeal: '52765',
        },
        {
            strMeal: 'Chicken Fajita Mac and Cheese',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg',
            idMeal: '52818',
        },
        {
            strMeal: 'Chicken Ham and Leek Pie',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/xrrtss1511555269.jpg',
            idMeal: '52875',
        },
        {
            strMeal: 'Chicken Handi',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg',
            idMeal: '52795',
        },
        {
            strMeal: 'Chicken Karaage',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/tyywsw1505930373.jpg',
            idMeal: '52831',
        },
        {
            strMeal: 'Chicken Marengo',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/qpxvuq1511798906.jpg',
            idMeal: '52920',
        },
        {
            strMeal: 'Chicken Parmentier',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/uwvxpv1511557015.jpg',
            idMeal: '52879',
        },
        {
            strMeal: 'Chicken Quinoa Greek Salad',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/k29viq1585565980.jpg',
            idMeal: '53011',
        },
        {
            strMeal: 'Coq au vin',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/qstyvs1505931190.jpg',
            idMeal: '52832',
        },
        {
            strMeal: 'Crock Pot Chicken Baked Tacos',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/ypxvwv1505333929.jpg',
            idMeal: '52830',
        },
        {
            strMeal: 'French Onion Chicken with Roasted Carrots & Mashed Potatoes',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/b5ft861583188991.jpg',
            idMeal: '52996',
        },
        {
            strMeal: "General Tso's Chicken",
            strMealThumb: 'https://www.themealdb.com/images/media/meals/1529444113.jpg',
            idMeal: '52951',
        },
        {
            strMeal: 'Honey Balsamic Chicken with Crispy Broccoli & Potatoes',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/kvbotn1581012881.jpg',
            idMeal: '52993',
        },
        {
            strMeal: 'Jerk chicken with rice & peas',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/tytyxu1515363282.jpg',
            idMeal: '52937',
        },
        {
            strMeal: 'Katsu Chicken curry',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/vwrpps1503068729.jpg',
            idMeal: '52820',
        },
        {
            strMeal: 'Kentucky Fried Chicken',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg',
            idMeal: '52813',
        },
        {
            strMeal: 'Kung Pao Chicken',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/1525872624.jpg',
            idMeal: '52945',
        },
        {
            strMeal: 'Nutty Chicken Curry',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/yxsurp1511304301.jpg',
            idMeal: '52851',
        },
        {
            strMeal: 'Pad See Ew',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg',
            idMeal: '52774',
        },
        {
            strMeal: 'Potato Gratin with Chicken',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/qwrtut1468418027.jpg',
            idMeal: '52780',
        },
        {
            strMeal: 'Rappie Pie',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/ruwpww1511817242.jpg',
            idMeal: '52933',
        },
        {
            strMeal: 'Rosół (Polish Chicken Soup)',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/lx1kkj1593349302.jpg',
            idMeal: '53020',
        },
        {
            strMeal: 'Shawarma',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/kcv6hj1598733479.jpg',
            idMeal: '53028',
        },
        {
            strMeal: 'Tandoori chicken',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg',
            idMeal: '52806',
        },
        {
            strMeal: 'Teriyaki Chicken Casserole',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg',
            idMeal: '52772',
        },
        {
            strMeal: 'Thai Green Curry',
            strMealThumb: 'https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg',
            idMeal: '52814',
        },
    ],
};

export const fetcherSearch = url => {
    // console.log(params);
    // console.log(`${BASE_URL}${url}`);
    return fetch(`${BASE_URL}${url}`)
        .then(res => res.json())
        .then(data => data);

    // const promise = new Promise(function (resolve, reject) {
    //     resolve(chicken);

    //     // reject(Error('oups'));
    // });

    // return promise.then(result => result);
};
