document.getElementById('backgroundSwapBox').addEventListener('click', swapBackground);

const styles = [
    'background-light',
    'background-dark',
    'background-forest-1',
    'background-forest-2'
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