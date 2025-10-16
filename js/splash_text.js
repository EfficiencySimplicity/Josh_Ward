const texts = [
    'coding coding coding coding',
    'Behold: the eyes!',
    'Made without React!',
    '1^TREE(TREE(3)) = 1',
    'Never better :)',
    'Puffies!',
    '{draw_hsoJ}',
    'Night of the Nightmare 3: now not in theaters!',
    'It came from planet Sol-3!',
    'TC-ICP -1',
    'Error -404: Page not not found',
    'abacabadabacabaeabacabadabacaba',
    'Fractal Dimensions!',
    'GMTK 2025 participant!',
    'The reverse anti easter egg!',
    'Planet of the Apricots 2!',
    'VSCode and Github Pages!',
    'The Webpage of Theseus!',
    'I\'m not a robot...',
    'pneumonoultramicroscopicsilicavolcanoconiosis!',
    'Access re-undenied!',
    'Unicorns and canola oil!',
    'Je ne sais pas!',
    'Made in MMXXV!',
    '"This is not a website"',
    'Gluten-Free!',
    'Arsenic-Free!',
    'Non-GMO!',
    'The Tortoise and Achilles visit Coney Island...',
    'The all-electric kitchen-in-the-sky!',
    'And Raspberry Cake, too!',
    '{ur}y bra{kets!',
    'Snakes in the grass!',
    '>>+<[-->]+[[->]<+]',
    'correct horse battery staple!',
    'Joint Photographic Experts Group!',
    '.crvdb!',
    'buffalo buffalo buffalo buffalo buffalo buffalo buffalo buffalo',
    'Yields falsehood when preceded by its quotation!',
    'Wait just one onosecond!',
    'taco cat!',
    'JFMAMJJASOND! ~but who is J. Jason D.?',
    'pico de gallo-8!',
    'Better than better beef stew!',
];
// 44 splash texts

var text = texts[Math.floor(Math.random()*texts.length)];
var text_box = document.getElementById('splash_text');

// https://stackoverflow.com/questions/4784568/set-content-of-html-span-with-javascript

while( text_box.firstChild ) {
    text_box.removeChild( text_box.firstChild );
}
text_box.appendChild( document.createTextNode(text) );
