import { html } from '../../node_modules/lit-html/lit-html.js';
import { getLatestGames } from '../api/data.js';

const homeTamplate = (gamesList) => html `
<section id="welcome-world">

<div class="welcome-message">
    <h2>ALL new games are</h2>
    <h3>Only in GamesPlay</h3>
</div>
<img src="./images/four_slider_img01.png" alt="hero">

<div id="home-page">
    <h1>Latest Games</h1>
    ${gamesList.length == 0 ? html `<p class="no-articles">No games yet</p>`
    : html` <ul class="other-games-list">
    ${gamesList.map(gamePreview)}
    </ul>`}   
    </section>`;
`
</div>
</section>
`
export const gamePreview = (game) => html 
`<div class="game">
        <div class="image-wrap">
            <img src="${game.imageUrl}">
        </div>
        <h3>${game.title}</h3>
        <div class="rating">
         <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
        </div>
        <div class="data-buttons">
            <a href="/details/${game._id}" class="btn details-btn">Details</a>
        </div>
    </div>`;

export async function homePage(ctx) {
    
    const gamesList =  await getLatestGames();
    ctx.render(homeTamplate(gamesList))
}