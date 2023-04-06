(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const loaded = (img: HTMLImageElement) => {
            img.classList.remove('loading')
        }

        const images = document.querySelectorAll<HTMLImageElement>('.hb-gallery-album-items img')
        for (const img of images) {
            if (img.complete) {
                loaded(img)
            } else {
                img.addEventListener('load', () => {
                    loaded(img)
                })
            }
        }
    })
})()
