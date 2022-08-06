import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllOffers } from '../api/data.js';

const dashboardTamplate = (offers) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${offers.length == 0 ? html `<h2 class="no-offers">No offers yet.</h2>`
            : html` <ul class="other-offers-list">
            ${offers.map(OfferPreview)}
            </ul>`} 
</section>`;

export const OfferPreview = (offer) => html 
`<div class="offer">
    <img src="${offer.imageUrl}" alt="example1" />
    <p>
        <strong>Title: </strong><span class="title">${offer.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
    <a class="details-btn" href="/details/${offer._id}">Details</a>
</div>`;

export async function dashboardPage(ctx) {
    const offers = await getAllOffers();
    console.log(offers);
    ctx.render(dashboardTamplate(offers));
}