// TODO: remove this javascript to have a better control on paginator
window.addEventListener("load", function () {
    const paginator_el = $(".page-navigation a");
    if (paginator_el.length <= 1) {
        paginator_el.toggleClass("col-md-12");
    }
})