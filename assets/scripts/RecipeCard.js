// RecipeCard.js

class RecipeCard extends HTMLElement {
  // Called once when document.createElement('recipe-card') is called, or
  // the element is written into the DOM directly as <recipe-card>
  constructor() {
    super(); // Inheret everything from HTMLElement

    // EXPOSE - START (All expose numbers start with A)
    // A1. TODO - Attach the shadow DOM to this Web Component (leave the mode open)
    const shadow = this.attachShadow({ mode: "open" });
    // A2. TODO - Create an <article> element - This will hold our markup once our data is set
    const articleEl = document.createElement("article");
    // A3. TODO - Create a style element - This will hold all of the styles for the Web Component
    const styleEl = document.createElement("style");
    // A4. TODO - Insert all of the styles from cardTemplate.html into the <style> element you just made
    styleEl.setAttribute("style", "cardTemplate.html");
    // A5. TODO - Append the <style> and <article> elements to the Shadow DOM
    shadow.appendChild(styleEl);
    shadow.appendChild(articleEl);
  }

  /**
   * Called when the .data property is set on this element.
   *
   * For Example:
   * let recipeCard = document.createElement('recipe-card'); // Calls constructor()
   * recipeCard.data = { foo: 'bar' } // Calls set data({ foo: 'bar' })
   *
   * @param {Object} data - The data to pass into the <recipe-card>, must be of the
   *                        following format:
   *                        {
   *                          "imgSrc": "string",
   *                          "imgAlt": "string",
   *                          "titleLnk": "string",
   *                          "titleTxt": "string",
   *                          "organization": "string",
   *                          "rating": number,
   *                          "numRatings": number,
   *                          "lengthTime": "string",
   *                          "ingredients": "string"
   *                        }
   */
  set data(data) {
    // If nothing was passed in, return
    if (!data) return;

    // A6. TODO - Select the <article> we added to the Shadow DOM in the constructor
    //const art = this.shadowRoot.querySelector("article");
    let art = document.getElementsByTagName("article");
    // A7. TODO - Set the contents of the <article> with the <article> template given in
    //           cardTemplate.html and the data passed in (You should only have one <article>,
    //           do not nest an <article> inside another <article>). You should use Template
    //           literals (tempalte strings) and element.innerHTML for this.
    //var contents = art.innerHTML;
    //document.body.innerHTML = "";
    art.innerHTML =`<img src="https://link-to-article.com/recipe-thumbnail.jpg"
    alt="Recipe Title">
  <p class="title">
    <a href="https://link-to-article.com">Title</a>
  </p>
  <p class="organization">The Chef's Organization</p>
  <div class="rating">
    <span>5</span>
    <img src="/assets/images/icons/5-star.svg" alt="5 stars">
    <span>(500)</span>
  </div>
  <time>50 min</time>
  <p class="ingredients">
    Comma, Separated, List, of, Ingredients
  </p>`;
  }
}

// A8. TODO - Define the Class as a customElement so that you can create
//           'recipe-card' elements
customElements.define("recipe-card", RecipeCard);