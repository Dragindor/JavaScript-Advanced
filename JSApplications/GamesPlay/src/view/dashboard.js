import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllGames } from '../api/data.js';

const dashboardTemplate = (gamesList) => html
`<section id="catalog-page">
            <h1>All Games</h1>
            <!-- Display div: with information about every game (if any) -->
            ${gamesList.length == 0 ? html `<h3 class="no-articles">No articles yet</h3>`
            : html` <ul class="other-games-list">
            ${gamesList.map(gamePreview)}
            </ul>`}  
        </section>`

export const gamePreview = (game) => html 
`<div class="allGames">
                <div class="allGames-info">
                    <img src="${game.imageUrl}">
                    <h6>${game.category}</h6>
                    <h2>${game.title}</h2>
                    <a href="/details/${game._id}" class="details-button">Details</a>
                </div>
            </div>`;

export async function dashboardPage(ctx) {
    
    const gamesList =  await getAllGames();
    ctx.render(dashboardTemplate(gamesList))
}