const root = document.getElementById('root');
       const data =  fetch('http://swapi.dev/api/planets/')
            .then(response => response.json(response.body))
            .then(data => data.results.map(el => `<li>${el.name}<li>`))
            .then(names => root.innerHTML = names.join(''))
            .catch(error => console.log(error));