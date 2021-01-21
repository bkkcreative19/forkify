import View from './View.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes Found for your Query';
  _message = '';

  _generalMarkup() {
    return this._data
      .map(item => {
        return this._generalMarkupPreview(item);
      })
      .join('');
  }
  _generalMarkupPreview(item) {
    return `
      <li class="preview">
      <a class="preview__link " href="#${item.id}">
        <figure class="preview__fig">
          <img src=${item.image} alt=${item.title} />
        </figure>
        <div class="preview__data">
          <h4 class="preview__title">${item.title}</h4>
          <p class="preview__publisher">${item.publisher}</p>
          
        </div>
      </a>
    </li>
      `;
  }
}

export default new ResultsView();
