const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true, //自动播放
    loop : 'one',
    audio: [
        {
            name: "唯一",
            artist: '告五人',
            url: 'https://m704.music.126.net/20241011154146/251eb0d1f85bc3fe71dd7a84948405d3/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/14096429107/58be/e037/4585/eef5ad0994f1b25c69eb5980e502677d.m4a?authSecret=000001927a6fe3bb0cc40a8ac4560006',
            cover: 'https://p1.music.126.net/Sc5CbOZUr7yrhXj4CV-QOQ==/2946691174843742.jpg',
        },
    ]
});
