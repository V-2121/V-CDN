console.log('CDN link are working');
document.addEventListener('DOMContentLoaded', function() {
    var faqTitles = document.querySelectorAll('.faq-title');
    
    faqTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            var faqItem = this.parentElement;
            
            // Toggle active class on the clicked faq item
            faqItem.classList.toggle('active');
            
            // Collapse other items
            faqTitles.forEach(function(otherTitle) {
                if (otherTitle !== title) {
                    otherTitle.parentElement.classList.remove('active');
                }
            });
        });
    });
});