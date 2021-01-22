import View from './View.js';
import icons from 'url:../../img/icons.svg';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes Found for your Query';
  _message = '';

  _generalMarkup() {
    const id = window.location.hash.slice(1);
    return this._data
      .map(item => {
        return this._generalMarkupPreview(item, id);
      })
      .join('');
  }
  _generalMarkupPreview(item, id) {
    return `
      <li class="preview">
      <a class="preview__link ${
        item.id === id ? 'preview__link--active' : ''
      } " href="#${item.id}">
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
