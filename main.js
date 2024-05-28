document.addEventListener('DOMContentLoaded', () => {

    let valeur_counter = 0;

    const counter_initial = document.getElementById('counter-initial');
    const boutton_augmenter = document.getElementById('augmenter');
    const boutton_diminuer = document.getElementById('diminuer');
    const boutton_reset = document.getElementById('reset');

    function New_value_counter() {
        counter_initial.textContent = valeur_counter;
    }

    boutton_augmenter.addEventListener('click', () => {
        valeur_counter++;
        New_value_counter();
    });

    boutton_diminuer.addEventListener('click', () => {
        valeur_counter--;
        New_value_counter();
    });

    boutton_reset.addEventListener('click', () => {
        valeur_counter = 0;
        New_value_counter();
    });

    New_value_counter();  
});
