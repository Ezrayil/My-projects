document.getElementById('add-row-btn').onclick = function() {
    const newRow = `
        <tr>
            <td>محصول جدید</td>
            <td>200,000 تومان</td>
            <td>1</td>
            <td class="subtotal">200,000 تومان</td>
        </tr>
    `;
    document.getElementById('cart-items').insertAdjacentHTML('beforeend', newRow);
};











