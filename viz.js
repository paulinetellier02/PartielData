fetch('data.json')
    .then((response) => response.json())
    .then((data) => run_visualization(data));

function run_visualization(data) {
    sortByCountryPopulation(data)

    const liste30pays= data.slice(-30);

    const pays = liste30pays.map(value => value.country)
    const population = liste30pays.map(value => value.population)

    const trace = {
        x: pays,
        y: population,
        type: 'bar',
        marker: {
            color: '#62bcf4c3',
            line: {
                color: '#62bcf4c3;',
                width: 1
            }
        }
    };
    const layout = {
        title: 'Data distribution of countries population',
        xaxis: {
            title: 'Pays'
        },
        yaxis: {
            title: 'Population'
        }
    };

    Plotly.newPlot('data-viz', [trace], layout);
    };

function sortByCountryPopulation(data) {
    data.sort((acc, value) => acc.population < value.population ? -1 : 1);
}

