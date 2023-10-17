const JSONtoHTML = (json) => {
    let element = document.createElement(json.type);
    element = appendChild(element, json);
    for(key in json.props) {
        element.setAttribute(key, json.props[key]);
    }
    return element;
}

const appendChild = (element, json) => {
    for(child of json.children) {
        let childElement = document.createElement(child.type);
        if(child.props) {
            for(key in child.props) {
                childElement.setAttribute(key, child.props[key]);
            }
        }
        if(!Array.isArray(child.children)) {
            childElement.innerHTML = child.children;
        } else {
            childElement = appendChild(childElement, child)
        }
        element.appendChild(childElement);
    }
    return element;
}

const json = { 
    type: 'div', 
    props: { id: 'hello', class: "foo" }, 
    children: [
      {type:'h1', children: 'HELLO' },
      {type:'p', children: [{type:'span', props: {class: "bar" }, children: 'World' }] }
    ]
  };

  JSONtoHTML(json);