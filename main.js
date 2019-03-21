const products = [
    {
        title: 'product 1',
        description: 'hungry squirrel',
        imageUrl: 'https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },

    {
        title: 'product 2',
        description: 'girly squirrel',
        imageUrl: 'https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product 3',
        description: 'early squirrel',
        imageUrl: 'https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product 4',
        description: 'surly squirrel',
        imageUrl: 'https://media.npr.org/assets/img/2017/04/25/istock-115796521-fcf434f36d3d0865301cdcb9c996cfd80578ca99-s800-c85.jpg',
        size: '4" x 4"',
        weight: '8 oz.',
        price1: '$1.99',
        price2: '$1.49',
        price3: '$0.99',
        validUntil: '04/01/2016'
    },
    {
        title: 'product 5',
        description: 'merely squirrel',
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
        domString += `<div class="col-4 product">`;
        domString += `<div class="card">`;
        domString += `<div class="card-header"><strong>${product.title}</strong></div>`;
        domString +=     `<img src=${product.imageUrl} class="card-img-top" alt="...">`;
        domString +=     `<div class="card-body">`;
        domString +=         `<p class="card-text">${product.description}</p>`;
        domString +=         `<h6>Size: ${product.size}</h6>`;
        domString +=         `<h6>Weight: ${product.weight}</h6>`;
        domString +=         `<h6>Three for: ${product.price1}</h6>`;
        domString +=         `<h6>Two for: ${product.price2}</h6>`;
        domString +=         `<h6>One for: ${product.price3}</h6>`;
        domString +=         `<h6>Available until: ${product.validUntil}</h6>`;
        domString +=     `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    })
    
    printToDom('some-cards', domString);
};

const init = () => {
    
    cardBuilder(products);

};

init();

console.log('products', products);
