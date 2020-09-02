class MasonryGallery extends HTMLElement{

    items = [
        { image: 'assets/images/1.png'},
        { image: 'assets/images/2.png'},
        { image: 'assets/images/3.jpg'},
        { image: 'assets/images/4.jpg'},
        { image: 'assets/images/5.jpg'},
        { image: 'assets/images/6.jpg'},
        { image: 'assets/images/7.jpg'},
        { image: 'assets/images/8.jpg'},
        { image: 'assets/images/9.jpg'},
        { image: 'assets/images/10.jpg'},
        { image: 'assets/images/11.jpg'},
        { image: 'assets/images/12.jpg'},
        { image: 'assets/images/13.jpg'},
        { image: 'assets/images/14.jpg'},
        { image: 'assets/images/15.jpg'},
        { image: 'assets/images/16.png'},
        { image: 'assets/images/17.jpg'},
        { image: 'assets/images/18.jpg'},
        { image: 'assets/images/19.png'},
        { image: 'assets/images/20.jpg'},
        { image: 'assets/images/21.png'},
        { image: 'assets/images/22.jpg'},
        { image: 'assets/images/23.jpg'},
        { image: 'assets/images/24.jpg'},
        { image: 'assets/images/25.jpg'},
        { image: 'assets/images/26.jpg'}
    ]

    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.create();
        this.append();
    }

    create(){
        this.style.display = 'grid'
        this.style.gridTemplateColumns = 'repeat(auto-fill, 30%)' //column width
        this.style.gridAutoRows = '10%' //row height
        this.style.gridGap = '1rem'
        this.style.gridAutoFlow = "row dense"

    }

    append(){
        let gap = parseInt(getComputedStyle(this).gridRowGap)

        this.items.map(item => {
            const div = document.createElement("DIV");
            const image = document.createElement('IMG');
            image.style.display = 'block';
            image.style.width = '100%';

            image.src = item.image
            div.appendChild(image)
            image.onload = function(){
                this.parentNode.style.gridRow = 'auto / span ' + ((this.height + gap)/(100 + gap))
            }
            this.shadowRoot.append(div)
        })
    }
}

customElements.define('masonry-gallery', MasonryGallery)