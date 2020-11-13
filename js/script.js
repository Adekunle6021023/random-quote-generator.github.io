(function parentFunct () {
    var button = document.querySelector('#btn');
    var quoteBox = document.querySelector('.quote-wrapper');
    var quoter = document.querySelector('.quote');
    var quoteAuthor = document.querySelector('.quote-author');

 
        var quote1 = {
            quote: '“The only true wisdom is in knowing you know nothing.”',
            author: 'Socrates'
        }
        var quote2 = {
            quote: '“The only place where success comes before work is in the dictionary.”',
            author: 'Vidal Sassoon'
        }
        var quote3 = {
            quote: '“Out beyond ideas of wrongdoing and rightdoing there is a field. I\'ll meet you there. When the soul lies down in that grass the world is too full to talk about.”',
            author: 'Rumi'
        }
        var quote4 = {
            quote: '“The question isn\'t who is going to let me; it\'s who is going to stop me.”',
            author: 'Ayn Rand'
        }
        var quote5 = {
            quote: '“First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.”',
            author: 'Aristotle'
        }
        var quote6 = {
            quote: '“There is only one good, knowledge, and one evil, ignorance.”',
            author: 'Socrates'
        }
        var quote7 = {
            quote: '“Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do. So, throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover.”',
            author: 'Mark Twain'
        }
        var quote8 = {
            quote: '“He who fears he will suffer, already suffers because he fears.”',
            author: 'Michel De Montaigne.'
        }
        var quote9 = {
            quote: '“Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.”',
            author: 'Albert Einstein'
        }
        var quote10 = {
            quote: '“The only means to gain one\'s end with people are force are force and cunning. Love also,they say; but that is to wait for sunshine and life needs every moment.”',
            author: 'Johann Von Goethe'
        }
    
    var quoteArray = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9, quote10];
    function generate() {
        var randObj = quoteArray[Math.floor(Math.random() * quoteArray.length)];
        quoter.textContent = randObj.quote;
        quoteAuthor.textContent = randObj.author;
        function colorGen () {
            var seed = ['1', '2', '3', '4', '5', '6', '7','8','9','A', 'B', 'C', 'D','E','F'];
            var hashy = '#';
            for (var i = 0; i < 6 ; i++) {
                var index = Math.floor(Math.random() * seed.length)
                hashy += seed[index]
            }
            document.documentElement.style.borderColor = hashy;
            quoteBox.style.color = hashy;
            button.style.borderColor = hashy;
            button.style.color = hashy;
        }
        colorGen();
    }

    button.addEventListener('click', generate);
}() )