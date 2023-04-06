import BiggerPicture from 'mods/bigger-picture/bigger-picture.umd.js'

(() => {
    document.addEventListener('DOMContentLoaded', () => {
        const bp = BiggerPicture({
            target: document.body,
        })

        const show = (el: HTMLImageElement) => {
            const parent = el.closest('.hb-gallery-album-items')
            if (!parent) {
                return
            }

            const imgs: Array<any> = []
            let pos = 0
            const els = Array.from(parent.querySelectorAll<HTMLImageElement>('img'))
            for (let i = 0; i < els.length; i++) {
                const img = els[i]
                if (el === img) {
                    pos = i
                }
                imgs.push({
                    img: img.getAttribute('data-src') ?? img.src,
                    height: img.getAttribute('data-height') ?? img.naturalHeight,
                    width: img.getAttribute('data-width') ?? img.naturalWidth,
                    alt: img.getAttribute('alt'),
                    caption: img.getAttribute('alt'),
                })
            }
            bp.open({
                items: imgs,
                intro: 'fadeup',
                position: pos,
            })
        }

        const images = document.querySelectorAll<HTMLImageElement>('.hb-gallery-album-items img')
        for (const img of images) {
            // ignore linkable images.
            if (img.parentElement?.closest('a')) {
                continue
            }

            img.addEventListener('click', (e) => {
                e.stopPropagation()
                show(img)
            })
        }
    })
})()
