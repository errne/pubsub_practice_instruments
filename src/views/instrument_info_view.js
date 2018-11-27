const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container){
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function(){
  PubSub.subscribe('Instrument:selected-instrument-ready', (evt) => {
    const instrument = evt.detail;
    this.render(instrument);
  });
};

InstrumentInfoView.prototype.render = function(instrument){
  this.container.innerHTML = '';
  const infoHeading = document.createElement('h2');
  const infoParagraph = document.createElement('p');
  const infoListHeading = document.createElement('h2');

  const instrumentsList = instrument.instruments;

  infoHeading.textContent = `The ${instrument.name}`;
  infoParagraph.textContent = `Description: ${instrument.description}`;
  infoListHeading.textContent = `Instruments include:`;

  this.container.appendChild(infoHeading);
  this.container.appendChild(infoParagraph);
  this.container.appendChild(infoListHeading);

  instrumentsList.forEach(function(instrument) {
    const infoListItem = document.createElement('li');
    infoListItem.textContent = instrument;
      this.container.appendChild(infoListItem);
});

};

module.exports = InstrumentInfoView;
