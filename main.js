const products = [
    {
        title: 'product1',
        description: 'bla bla bla',
        imageUrl: 'https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },

    {
        title: 'product2',
        description: 'bla bla bla',
        imageUrl: 'https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product3',
        description: 'bla bla bla',
        imageUrl: 'https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product3',
        description: 'bla bla bla',
        imageUrl: 'https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product3',
        description: 'bla bla bla',
        imageUrl: 'https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    }
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
const cardBuilder = (merp) => {
    let domString = '';
    merp.forEach((product) => {
        domString += '<div class="card">';
        domString += `<h2>${product.title}</h2>`;
        domString += `<h3>${product.description}</h3>`;
        domString += `<img src="${product.imageUrl}" class="card-image">`;
        domString += `<h3>${product.size}</h3>`;
        domString += `<h3>${product.weight}</h3>`;
        domString += `<h3>${product.price1}</h3>`;
        domString += `<h3>${product.price2}</h3>`;
        domString += `<h3>${product.price3}</h3>`;
        domString += `<h3>${product.validUntil}</h3>`;
        domString += '</div>';
    })
    printToDom('some-cards', domString);
};

const init = () => {
    
    cardBuilder(products);

};

init();

console.log('products', products);
