function loadHome() {
    const r_type = getAllData("IR Restaurant")
    const newContent = `<div class="single-product-slider" id="restData"></div>`
    $('#content').empty().append(newContent)
    r_type.onsuccess = (event) => {
        const results = event.target.result
        for (var i = 0; i < results.length; i++) {
            let html = `
			<div class="container">
				<div class="row">
					<!-- single product -->
					<div class="col-lg-3 col-md-6">
						<div class="single-product">
							<img class="img-fluid" src="${results[i].image}" alt="">
							<div class="product-details">
								<h6>${results[i].r_type}</h6>
								<h6>${results[i].r_name}</h6>
								<div class="price">
									<h6>${results[i].m_price}VND</h6>
								</div>
								<h6>Food rate:    ${results[i].food_rate}</h6>
								<h6>Service rate: ${results[i].service_rate}</h6>
								<h6>Clean rate:   ${results[i].clean_rate}</h6>
								<div class="prd-bottom">
									<a href="" class="social-info">
										<span class="ti-bag"></span>
										<p class="hover-text">add to bag</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
				</div>
			</div>`
            $('#restData').append(html);
        }
    }
}
$(window).on("load", function () {
    loadHome()
});
$(document).ready(function () {
    let content = $('#content')
    $(document).on('click', "#home", () => {
        loadHome()
    })
    $(document).on('click', '#add', () => {
        const newContent = ``
        content.empty().append(newContent)
    })
})
