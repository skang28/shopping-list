$(function addItems() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let newItem = $('#shopping-list-entry').val();
        $('.shopping-list').append(
            `<li>
                <span class="shopping-item">${newItem}</span>
                <div class="shopping-item-controls">
                    <button class="shopping-item-toggle">
                        <span class="button-label">check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
                </div>
            </li>`);
        checkAndUncheckItems();
        deleteItems();
    });


});

function checkAndUncheckItems() {
    $('.shopping-item-toggle').click(function(event) {
        $(event.target).closest('li').toggleClass('shopping-item__checked');
    })
};


function deleteItems() {
    $('.shopping-item-delete').click(function(event) {
        $(event.target).closest("li").remove();
    });
};

$(checkAndUncheckItems);
$(deleteItems);
