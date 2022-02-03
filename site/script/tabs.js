document.querySelectorAll(".stagesSctn__list-elements").forEach(function(item) {

    item.addEventListener('click', function(event) {

        const path = event.currentTarget.dataset.path;

        document.querySelectorAll('.stagesSctn__list-elements').forEach(function(content) {
            content.classList.remove('active');
        });

        item.classList.add('active')

        document.querySelectorAll(".stagesSctn__content-hidden").forEach(function(itemClassRemove) {
            itemClassRemove.classList.remove('stagesSctn__tabs-content')
            document.querySelectorAll(`[data-target="${path}"]`).forEach(function(content) {
                content.classList.add('stagesSctn__tabs-content');
            });

        });

    });
});
