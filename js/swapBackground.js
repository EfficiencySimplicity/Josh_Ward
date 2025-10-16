document.getElementById('backgroundSwapBox').addEventListener('click', swapBackground);

const styles = [
    'background-light',
    'background-dark',
    'background-forest-1',
    'background-forest-2',
    'background-forest-3',
    'background-forest-4',
    'background-fog-1',
    'background-fog-2',
    'background-fractal-1',
    'background-fractal-2'
]

var current_style = document.getElementById('body').getAttribute('class');

function swapBackground(){
    var current = styles.indexOf(document.getElementById('body').getAttribute('class'));
    current ++;

    if (current >= styles.length){
        current = 0;
    }

    document.getElementById('body').setAttribute('class', styles[current]);
}