//https://learnersbucket.com/examples/interview/implement-an-in-memory-search-engine/



/*
[
  {
    "name": "Black Panther",
    "rating": 9,
    "year": 2022
  },
  {
    "name": "Black Adam",
    "rating": 8.7,
    "year": 2022
  }
]
*/

class InMemorySearch {
    constructor() {
        this.namespaces = new Map()
    }

    addDocuments(nameSpace, ...docs) {
        let values = [];
        if(this.namespaces.has(nameSpace)) {
            values = this.namespaces.get(nameSpace) || [];
        } else {
            this.namespaces.set(nameSpace);
        }
        values = values.concat([...docs]);
        this.namespaces.set(nameSpace, values);
    }

    search(namespace, cb) {
        if(this.namespaces.has(namespace)) {
            let values = this.namespaces.get(namespace);
            // console.log(values, 'av')
            try {
                values = values.filter(cb);
                return values;
            } catch(e) {
                return `not a valid callback -- ${e}`;
            }
        } else {
            return 'namespace not found';
        }
    }
}

const searchEngine = new InMemorySearch();
searchEngine.addDocuments('Movies', 
                    {name: 'Avenger', rating: 8.5, year: 2017}, 
                    {name: 'Black Adam', rating: 8.7, year: 2022}, 
                    {name: 'Jhon Wick 4', rating: 8.2, year: 2023}, 
                    {name: 'Black Panther', rating: 9.0, year: 2022}
                   );
console.log(searchEngine.search('Movies', (e) => e.rating > 8.5, {key: 'rating', asc: false}));