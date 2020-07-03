console.log('$', $('.company-product'), $('.company-product').find('li'))
$('.company-product').find('li').on('click', function(event) {
    console.log('event', event)
    window.location.href = './picdetail.html'
})