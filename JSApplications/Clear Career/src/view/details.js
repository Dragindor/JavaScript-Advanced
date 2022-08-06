import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteOfferById, getOfferById, applyOffer, getTotalApplications, didUserApply } from '../api/data.js';

const detailsTamplate = (offer, isOwner, onDelete, isLoggedIn, totalApplicationsCount, onClickApply, didUserApplied) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="${offer.imageUrl}" alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${totalApplicationsCount}</strong></p>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">
            ${isOwner ? html`
            <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" @click=${onDelete} id="delete-btn" >Delete</a>` 
            : ''}

            ${(() => {
                if (didUserApplied == 0) {
                    if (isLoggedIn && !isOwner) {
                        return html`
                        <!--Bonus - Only for logged-in users ( not authors )-->
                        <a href="javascript:void(0)" id="apply-btn" @click=${onClickApply}>Apply</a>`
                    }
                }
            })()}
            
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const offerId = ctx.params.id;
    const offer = await getOfferById(offerId);
    const user = ctx.user;

    let userId;
    let totalApplicationsCount;
    let didUserApplied;

    if (user != null) {
        userId = user._id
        didUserApplied = await didUserApply(offerId, userId);
    }

    const isOwner = user && offer._ownerId == user._id;
    const isLoggedIn = user !== undefined;

    totalApplicationsCount = await getTotalApplications(offerId);
    ctx.render(detailsTamplate(offer, isOwner, onDelete, isLoggedIn, totalApplicationsCount, onClickApply, didUserApplied));

    async function onClickApply() {
        const apply = {
            offerId,
        }
        await applyOffer(apply);

        totalApplicationsCount = await getTotalApplications(offerId);
        didUserApplied = await didUserApply(offerId, userId);
        ctx.render(detailsTamplate(offer, isOwner, onDelete, isLoggedIn, totalApplicationsCount, onClickApply, didUserApply));
    }

    async function onDelete() {
        const confirmed = confirm('Are you sure?');
        if (confirmed) {
            await deleteOfferById(offerId);
            ctx.page.redirect('/');
        }
    }
}