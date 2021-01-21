import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;
      const goToPage = +btn.dataset.goto;
      console.log(goToPage);
      handler(goToPage);
    });
  }

  _generalMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // return `
    //   <button class="btn--inline pagination__btn--next">
    //   <span>Page ${this._data.page}</span>
    //   <svg class="search__icon">
    //     <use href="${icons}#icon-arrow-right"></use>
    //   </svg>
    // </button>
    //   `;
    //   Page 1, and other pages
    if (this._data.page === 1 && numPages > 1) {
      return `
      <button data-goto="${
        this._data.page + 1
      }" class="btn--inline pagination__btn--next">
      <span>Page ${this._data.page + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
      `;
    }

    // last page
    if (this._data.page === numPages && numPages > 1) {
      return `
      <button data-goto="${
        this._data.page - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${this._data.page - 1}</span>
    </button>
      `;
    }
    // other page
    if (this._data.page < numPages) {
      return `
      <button data-goto="${
        this._data.page - 1
      }" class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page  ${this._data.page - 1}</span>
    </button>
    <button data-goto="${
      this._data.page + 1
    }" class="btn--inline pagination__btn--next">
      <span>Page ${this._data.page + 1}</span>
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-right"></use>
      </svg>
    </button>
      `;
    }

    //  Page 1, more pages
    return '';
  }
}

export default new PaginationView();
